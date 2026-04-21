import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Search, Dropdown, Tag } from '@carbon/react';
import { Add, Building } from '@carbon/icons-react';
import PropertyTable from '../../components/business/PropertyTable';
import { mockProperties } from '../../data/businessMockData';
import { formatCurrency } from '../../utils/businessHelpers';
import './PropertiesPage.scss';

export default function PropertiesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm]               = useState('');
  const [statusFilter, setStatusFilter]           = useState('all');
  const [cityFilter, setCityFilter]               = useState('all');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('all');

  const uniqueCities         = useMemo(() => [...new Set(mockProperties.map(p => p.city))].sort(), []);
  const uniquePropertyTypes  = useMemo(() => [...new Set(mockProperties.map(p => p.propertyType))].sort(), []);
  const uniqueStatuses       = useMemo(() => [...new Set(mockProperties.map(p => p.status))].sort(), []);

  const filteredProperties = useMemo(() => mockProperties.filter(p => {
    const search = searchTerm.toLowerCase();
    return (
      (searchTerm === '' ||
        p.name.toLowerCase().includes(search) ||
        p.address.toLowerCase().includes(search) ||
        p.city.toLowerCase().includes(search)) &&
      (statusFilter       === 'all' || p.status       === statusFilter) &&
      (cityFilter         === 'all' || p.city         === cityFilter) &&
      (propertyTypeFilter === 'all' || p.propertyType === propertyTypeFilter)
    );
  }), [searchTerm, statusFilter, cityFilter, propertyTypeFilter]);

  const totalProperties     = filteredProperties.length;
  const activeCount         = filteredProperties.filter(p => p.status === 'Active').length;
  const totalMonthlyPremium = filteredProperties.reduce((s, p) => s + p.monthlyPremium, 0);
  const totalYearlyPremium  = filteredProperties.reduce((s, p) => s + p.yearlyPremium, 0);
  const totalClaims         = filteredProperties.reduce((s, p) => s + p.claimsCount, 0);
  const openClaims          = filteredProperties.reduce((s, p) => s + p.openClaims, 0);
  const totalCoverage       = filteredProperties.reduce((s, p) => s + p.coverageLimit, 0);

  const statusItems       = [{ id: 'all', text: 'All Statuses' },       ...uniqueStatuses.map(s => ({ id: s, text: s }))];
  const cityItems         = [{ id: 'all', text: 'All Cities' },         ...uniqueCities.map(c => ({ id: c, text: c }))];
  const propertyTypeItems = [{ id: 'all', text: 'All Property Types' }, ...uniquePropertyTypes.map(t => ({ id: t, text: t }))];

  const activeFiltersCount = [statusFilter, cityFilter, propertyTypeFilter].filter(f => f !== 'all').length + (searchTerm ? 1 : 0);
  const clearFilters = () => { setSearchTerm(''); setStatusFilter('all'); setCityFilter('all'); setPropertyTypeFilter('all'); };

  return (
    <div className="properties-page">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Property Insurance</div>
        <div className="sp-page-hero__row">
          <div>
            <h1>Your property <strong>portfolio.</strong></h1>
            <p className="sp-page-hero__lead">
              {mockProperties.length} properties insured · {formatCurrency(mockProperties.reduce((s, p) => s + p.monthlyPremium, 0), false)}/mo
            </p>
          </div>
          <div className="sp-page-hero__actions">
            <button className="ln-btn ln-btn--primary" onClick={() => navigate('/business/properties/add')}>
              Add Property <Add size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="sp-statband">
        <div>
          <div className="sp-statband__k">Total Properties</div>
          <div className="sp-statband__v">{totalProperties}</div>
          <div className="sp-statband__d">{activeCount} active</div>
        </div>
        <div>
          <div className="sp-statband__k">Monthly Premium</div>
          <div className="sp-statband__v">{formatCurrency(totalMonthlyPremium, false)}</div>
          <div className="sp-statband__d">{formatCurrency(totalYearlyPremium, false)}/year</div>
        </div>
        <div>
          <div className="sp-statband__k">Total Claims</div>
          <div className="sp-statband__v">{totalClaims}</div>
          <div className="sp-statband__d">{openClaims} currently open</div>
        </div>
        <div>
          <div className="sp-statband__k">Coverage Limit</div>
          <div className="sp-statband__v">{formatCurrency(totalCoverage, false)}</div>
          <div className="sp-statband__d">total across portfolio</div>
        </div>
      </div>

      {/* Filters */}
      <div className="sp-section sp-section--alt">
        <div className="sp-section__header">
          <div className="sp-kicker">Filter</div>
          {activeFiltersCount > 0 && (
            <div className="prop-filter-actions">
              <Tag type="blue" size="sm">{activeFiltersCount} active filter{activeFiltersCount > 1 ? 's' : ''}</Tag>
              <Button kind="ghost" size="sm" onClick={clearFilters}>Clear all</Button>
            </div>
          )}
        </div>
        <div className="prop-filters-grid">
          <Search
            size="lg"
            placeholder="Search by name, address, or city…"
            labelText="Search properties"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onClear={() => setSearchTerm('')}
          />
          <Dropdown
            id="status-filter"
            titleText="Status"
            label="Select status"
            items={statusItems}
            itemToString={i => i ? i.text : ''}
            selectedItem={statusItems.find(i => i.id === statusFilter)}
            onChange={({ selectedItem }) => setStatusFilter(selectedItem.id)}
          />
          <Dropdown
            id="city-filter"
            titleText="City"
            label="Select city"
            items={cityItems}
            itemToString={i => i ? i.text : ''}
            selectedItem={cityItems.find(i => i.id === cityFilter)}
            onChange={({ selectedItem }) => setCityFilter(selectedItem.id)}
          />
          <Dropdown
            id="property-type-filter"
            titleText="Property Type"
            label="Select property type"
            items={propertyTypeItems}
            itemToString={i => i ? i.text : ''}
            selectedItem={propertyTypeItems.find(i => i.id === propertyTypeFilter)}
            onChange={({ selectedItem }) => setPropertyTypeFilter(selectedItem.id)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="sp-section sp-section--no-bottom">
        <div className="sp-kicker">Properties ({filteredProperties.length})</div>
        {filteredProperties.length > 0 ? (
          <PropertyTable properties={filteredProperties} />
        ) : (
          <div className="prop-empty-state">
            <Building size={48} />
            <h4>No properties found</h4>
            <p>Try adjusting your filters or search term</p>
            <Button kind="tertiary" onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
