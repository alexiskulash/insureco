import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, RadioButtonGroup, RadioButton } from '@carbon/react';
import { Close } from '@carbon/icons-react';
import MapView from '../../components/business/MapView';
import FacetedFilterButton from '../../components/business/FacetedFilterButton';
import { mockProperties, mockVehicles } from '../../data/businessMockData';
import { formatCurrency } from '../../utils/businessHelpers';
import './MapPage.scss';

export default function MapPage() {
  const [selectedAssetType, setSelectedAssetType] = useState('all');
  const [selectedFilters, setSelectedFilters]     = useState({ status: [], type: [], location: [], propertyType: [], vehicleType: [], city: [] });

  const facets = useMemo(() => {
    if (selectedAssetType === 'properties') {
      const statuses = {}, types = {}, cities = {};
      mockProperties.forEach(p => {
        statuses[p.status]      = (statuses[p.status] || 0) + 1;
        types[p.propertyType]   = (types[p.propertyType] || 0) + 1;
        cities[p.city]          = (cities[p.city] || 0) + 1;
      });
      return [
        { key: 'status',   label: 'Status',        options: Object.entries(statuses).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
        { key: 'type',     label: 'Property Type', options: Object.entries(types).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
        { key: 'location', label: 'City',          options: Object.entries(cities).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
      ];
    }
    if (selectedAssetType === 'vehicles') {
      const statuses = {}, types = {}, departments = {};
      mockVehicles.forEach(v => {
        statuses[v.status]       = (statuses[v.status] || 0) + 1;
        types[v.vehicleType]     = (types[v.vehicleType] || 0) + 1;
        departments[v.department]= (departments[v.department] || 0) + 1;
      });
      return [
        { key: 'status',   label: 'Status',       options: Object.entries(statuses).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
        { key: 'type',     label: 'Vehicle Type', options: Object.entries(types).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
        { key: 'location', label: 'Department',   options: Object.entries(departments).map(([v, c]) => ({ value: v, label: v, count: c })).sort((a,b)=>a.label.localeCompare(b.label)) },
      ];
    }
    // all
    const statuses = {}, propTypes = {}, vehicleTypes = {}, cities = {}, departments = {};
    mockProperties.forEach(p => { statuses[p.status]=(statuses[p.status]||0)+1; propTypes[p.propertyType]=(propTypes[p.propertyType]||0)+1; cities[p.city]=(cities[p.city]||0)+1; });
    mockVehicles.forEach(v => { statuses[v.status]=(statuses[v.status]||0)+1; vehicleTypes[v.vehicleType]=(vehicleTypes[v.vehicleType]||0)+1; departments[v.department]=(departments[v.department]||0)+1; });
    return [
      { key: 'status',      label: 'Status',        options: Object.entries(statuses).map(([v,c])=>({value:v,label:v,count:c})).sort((a,b)=>a.label.localeCompare(b.label)) },
      { key: 'propertyType',label: 'Property Type', options: Object.entries(propTypes).map(([v,c])=>({value:v,label:v,count:c})).sort((a,b)=>a.label.localeCompare(b.label)) },
      { key: 'vehicleType', label: 'Vehicle Type',  options: Object.entries(vehicleTypes).map(([v,c])=>({value:v,label:v,count:c})).sort((a,b)=>a.label.localeCompare(b.label)) },
      { key: 'city',        label: 'City',          options: Object.entries(cities).map(([v,c])=>({value:v,label:v,count:c})).sort((a,b)=>a.label.localeCompare(b.label)) },
      { key: 'location',    label: 'Department',    options: Object.entries(departments).map(([v,c])=>({value:v,label:v,count:c})).sort((a,b)=>a.label.localeCompare(b.label)) },
    ];
  }, [selectedAssetType]);

  const filteredProperties = useMemo(() => mockProperties.filter(p =>
    (selectedFilters.status.length   === 0 || selectedFilters.status.includes(p.status)) &&
    (selectedFilters.type.length     === 0 || selectedFilters.type.includes(p.propertyType)) &&
    (selectedFilters.location.length === 0 || selectedFilters.location.includes(p.city)) &&
    (selectedFilters.propertyType.length === 0 || selectedFilters.propertyType.includes(p.propertyType)) &&
    (selectedFilters.city.length     === 0 || selectedFilters.city.includes(p.city))
  ), [selectedFilters]);

  const filteredVehicles = useMemo(() => mockVehicles.filter(v =>
    (selectedFilters.status.length      === 0 || selectedFilters.status.includes(v.status)) &&
    (selectedFilters.type.length        === 0 || selectedFilters.type.includes(v.vehicleType)) &&
    (selectedFilters.location.length    === 0 || selectedFilters.location.includes(v.department)) &&
    (selectedFilters.vehicleType.length === 0 || selectedFilters.vehicleType.includes(v.vehicleType))
  ), [selectedFilters]);

  const stats = useMemo(() => {
    const props = selectedAssetType === 'vehicles' ? [] : filteredProperties;
    const vehs  = selectedAssetType === 'properties' ? [] : filteredVehicles;
    return {
      total:         props.length + vehs.length,
      active:        props.filter(p=>p.status==='Active').length + vehs.filter(v=>v.status==='Active').length,
      monthlyPremium:props.reduce((s,p)=>s+p.monthlyPremium,0) + vehs.reduce((s,v)=>s+v.monthlyPremium,0),
      openClaims:    props.reduce((s,p)=>s+p.openClaims,0) + vehs.reduce((s,v)=>s+v.openClaims,0),
    };
  }, [selectedAssetType, filteredProperties, filteredVehicles]);

  const clearFilters = () => setSelectedFilters({ status:[], type:[], location:[], propertyType:[], vehicleType:[], city:[] });
  const activeFiltersCount = Object.values(selectedFilters).reduce((s, v) => s + v.length, 0);

  return (
    <div className="map-page">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Asset Map</div>
        <h1>Geospatial coverage <strong>overview.</strong></h1>
        <p className="sp-page-hero__lead">
          Interactive map of all insured properties and fleet vehicles across your portfolio.
        </p>
      </div>

      {/* Map + sidebar layout */}
      <div className="map-layout">
        {/* Map */}
        <div className="map-layout__map">
          <MapView
            properties={selectedAssetType === 'vehicles'   ? [] : filteredProperties}
            vehicles={selectedAssetType   === 'properties' ? [] : filteredVehicles}
            selectedAssetType={selectedAssetType}
          />
        </div>

        {/* Sidebar */}
        <aside className="map-layout__sidebar">
          {/* Asset type selector */}
          <div className="map-sidebar-block">
            <div className="map-sidebar-block__label">Asset Type</div>
            <RadioButtonGroup
              name="asset-type"
              valueSelected={selectedAssetType}
              onChange={val => { setSelectedAssetType(val); clearFilters(); }}
              orientation="vertical"
              legendText=""
            >
              <RadioButton id="asset-all"        labelText="All Assets"   value="all"        />
              <RadioButton id="asset-properties" labelText="Properties"   value="properties" />
              <RadioButton id="asset-vehicles"   labelText="Vehicles"     value="vehicles"   />
            </RadioButtonGroup>
          </div>

          {/* Stats */}
          <div className="map-sidebar-block">
            <div className="map-sidebar-block__label">Summary</div>
            <div className="map-stats-grid">
              <div className="map-stat">
                <span className="map-stat__label">Total Assets</span>
                <span className="map-stat__value">{stats.total}</span>
              </div>
              <div className="map-stat">
                <span className="map-stat__label">Active</span>
                <span className="map-stat__value map-stat__value--green">{stats.active}</span>
              </div>
              <div className="map-stat">
                <span className="map-stat__label">Monthly Premium</span>
                <span className="map-stat__value map-stat__value--red">{formatCurrency(stats.monthlyPremium)}</span>
              </div>
              <div className="map-stat">
                <span className="map-stat__label">Open Claims</span>
                <span className="map-stat__value">{stats.openClaims}</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="map-sidebar-block">
            <div className="map-sidebar-block__header">
              <div className="map-sidebar-block__label">Filters</div>
              {activeFiltersCount > 0 && (
                <Button kind="ghost" size="sm" renderIcon={Close} onClick={clearFilters}>
                  Clear ({activeFiltersCount})
                </Button>
              )}
            </div>
            <FacetedFilterButton
              label={selectedAssetType === 'properties' ? 'Filter Properties' : selectedAssetType === 'vehicles' ? 'Filter Vehicles' : 'Filter Assets'}
              facets={facets}
              selectedFilters={selectedFilters}
              onFiltersChange={setSelectedFilters}
            />
          </div>

          {/* Legend */}
          <div className="map-sidebar-block">
            <div className="map-sidebar-block__label">Legend</div>
            <div className="map-legend">
              <div className="map-legend__item">
                <div className="map-legend__marker map-legend__marker--property" />
                <span>Properties</span>
              </div>
              <div className="map-legend__item">
                <div className="map-legend__marker map-legend__marker--vehicle" />
                <span>Vehicles</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
