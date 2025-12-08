import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Marker, Popup, NavigationControl } from 'react-map-gl/mapbox';
import Supercluster from 'supercluster';
import { Button } from '@carbon/react';
import { Building, CarFront } from '@carbon/icons-react';
import { useTheme } from '../../contexts/ThemeContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapView.scss';

// Carbon Design System's official Mapbox style URLs
const CARBON_MAP_STYLES = {
  white: 'mapbox://styles/carbondesignsystem/ck7c8cfpp08h61irrudv7f1xg',
  g10: 'mapbox://styles/carbondesignsystem/ck7c8ce1y05h61ipb2fixfe76',
  g90: 'mapbox://styles/carbondesignsystem/ck7c8ccac08jj1imhvd2g4qfb',
  g100: 'mapbox://styles/carbondesignsystem/ck7c89g8708gy1imlz9g5o6h9'
};

/**
 * MapView - Interactive map component with clustering
 * Displays properties and vehicles as markers with Carbon Design System theming
 */
export default function MapView({ markers = [] }) {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const mapRef = useRef();

  // Viewport state
  const [viewport, setViewport] = useState({
    latitude: 37.7749, // San Francisco center
    longitude: -122.4194,
    zoom: 9
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [clusters, setClusters] = useState([]);

  // Get appropriate map style based on theme
  const mapStyle = CARBON_MAP_STYLES[theme] || CARBON_MAP_STYLES.white;

  // Initialize supercluster
  const supercluster = useMemo(() => {
    const cluster = new Supercluster({
      radius: 60,
      maxZoom: 16
    });

    // Convert markers to GeoJSON features
    const points = markers.map((marker, index) => ({
      type: 'Feature',
      properties: {
        cluster: false,
        markerId: marker.id,
        markerType: marker.type,
        name: marker.name,
        ...marker
      },
      geometry: {
        type: 'Point',
        coordinates: [marker.lng, marker.lat]
      }
    }));

    cluster.load(points);
    return cluster;
  }, [markers]);

  // Update clusters when viewport changes
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current.getMap();
    const bounds = map.getBounds();
    const zoom = Math.floor(viewport.zoom);

    const clustersData = supercluster.getClusters(
      [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],
      zoom
    );

    setClusters(clustersData);
  }, [viewport, supercluster]);

  // Handle cluster click - zoom into cluster
  const handleClusterClick = (cluster) => {
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(cluster.id),
      20
    );

    setViewport({
      ...viewport,
      latitude: cluster.geometry.coordinates[1],
      longitude: cluster.geometry.coordinates[0],
      zoom: expansionZoom,
      transitionDuration: 500
    });
  };

  // Handle marker click - show popup
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker.properties);
  };

  // Navigate to detail page
  const handleViewDetails = () => {
    if (!selectedMarker) return;

    const basePath = selectedMarker.markerType === 'property' ? 'properties' : 'fleet';
    navigate(`/business/${basePath}/${selectedMarker.markerId}`);
  };

  return (
    <div className="map-view">
      <Map
        ref={mapRef}
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
        attributionControl={true}
      >
        {/* Navigation controls */}
        <NavigationControl position="top-right" />

        {/* Render clusters and markers */}
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } = cluster.properties;

          if (isCluster) {
            // Render cluster marker
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  onClick={() => handleClusterClick(cluster)}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          // Render individual marker
          const markerType = cluster.properties.markerType;
          const isProperty = markerType === 'property';

          return (
            <Marker
              key={`marker-${cluster.properties.markerId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div
                className={`custom-marker ${isProperty ? 'property-marker' : 'vehicle-marker'}`}
                onClick={() => handleMarkerClick(cluster)}
              >
                {isProperty ? <Building size={20} /> : <CarFront size={20} />}
              </div>
            </Marker>
          );
        })}

        {/* Popup for selected marker */}
        {selectedMarker && (
          <Popup
            latitude={selectedMarker.lat}
            longitude={selectedMarker.lng}
            onClose={() => setSelectedMarker(null)}
            closeButton={true}
            closeOnClick={false}
            anchor="bottom"
            offset={25}
          >
            <div className="map-popup">
              <div className="popup-header">
                <div className="popup-icon">
                  {selectedMarker.markerType === 'property' ? (
                    <Building size={20} />
                  ) : (
                    <CarFront size={20} />
                  )}
                </div>
                <h4 className="popup-title">{selectedMarker.name}</h4>
              </div>

              <div className="popup-content">
                {selectedMarker.markerType === 'property' ? (
                  <>
                    <p className="popup-detail">{selectedMarker.address}</p>
                    <p className="popup-detail">
                      <strong>Status:</strong> {selectedMarker.status}
                    </p>
                    {selectedMarker.premium && (
                      <p className="popup-detail">
                        <strong>Monthly Premium:</strong> ${selectedMarker.premium.toFixed(2)}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {selectedMarker.licensePlate && (
                      <p className="popup-detail">
                        <strong>License:</strong> {selectedMarker.licensePlate}
                      </p>
                    )}
                    {selectedMarker.driver && (
                      <p className="popup-detail">
                        <strong>Driver:</strong> {selectedMarker.driver}
                      </p>
                    )}
                    <p className="popup-detail">
                      <strong>Status:</strong> {selectedMarker.status}
                    </p>
                  </>
                )}
              </div>

              <Button
                size="sm"
                kind="primary"
                onClick={handleViewDetails}
                className="popup-button"
              >
                View Details
              </Button>
            </div>
          </Popup>
        )}
      </Map>

      {markers.length === 0 && (
        <div className="map-empty-state">
          <p>No assets to display on map</p>
        </div>
      )}
    </div>
  );
}
