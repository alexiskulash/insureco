import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Search, Dropdown, Tag } from '@carbon/react';
import { Add, CarFront } from '@carbon/icons-react';
import FleetTable from '../../components/business/FleetTable';
import { mockVehicles } from '../../data/businessMockData';
import { formatCurrency } from '../../utils/businessHelpers';
import './FleetPage.scss';

export default function FleetPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm]             = useState('');
  const [statusFilter, setStatusFilter]         = useState('all');
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const uniqueVehicleTypes = useMemo(() => [...new Set(mockVehicles.map(v => v.vehicleType))].sort(), []);
  const uniqueDepartments  = useMemo(() => [...new Set(mockVehicles.map(v => v.department))].sort(), []);
  const uniqueStatuses     = useMemo(() => [...new Set(mockVehicles.map(v => v.status))].sort(), []);

  const filteredVehicles = useMemo(() => mockVehicles.filter(v => {
    const search = searchTerm.toLowerCase();
    return (
      (searchTerm === '' ||
        v.make.toLowerCase().includes(search) ||
        v.model.toLowerCase().includes(search) ||
        v.vin.toLowerCase().includes(search) ||
        v.licensePlate.toLowerCase().includes(search) ||
        v.assignedDriver.toLowerCase().includes(search)) &&
      (statusFilter      === 'all' || v.status      === statusFilter) &&
      (vehicleTypeFilter === 'all' || v.vehicleType === vehicleTypeFilter) &&
      (departmentFilter  === 'all' || v.department  === departmentFilter)
    );
  }), [searchTerm, statusFilter, vehicleTypeFilter, departmentFilter]);

  const totalVehicles      = filteredVehicles.length;
  const activeCount        = filteredVehicles.filter(v => v.status === 'Active').length;
  const totalMonthlyPremium = filteredVehicles.reduce((s, v) => s + v.monthlyPremium, 0);
  const totalYearlyPremium  = filteredVehicles.reduce((s, v) => s + v.yearlyPremium, 0);
  const totalClaims        = filteredVehicles.reduce((s, v) => s + v.claimsCount, 0);
  const openClaims         = filteredVehicles.reduce((s, v) => s + v.openClaims, 0);
  const totalCoverage      = filteredVehicles.reduce((s, v) => s + v.coverageLimit, 0);

  const statusItems      = [{ id: 'all', text: 'All Statuses' },     ...uniqueStatuses.map(s => ({ id: s, text: s }))];
  const vehicleTypeItems = [{ id: 'all', text: 'All Vehicle Types' }, ...uniqueVehicleTypes.map(t => ({ id: t, text: t }))];
  const departmentItems  = [{ id: 'all', text: 'All Departments' },  ...uniqueDepartments.map(d => ({ id: d, text: d }))];

  const activeFiltersCount = [statusFilter, vehicleTypeFilter, departmentFilter].filter(f => f !== 'all').length + (searchTerm ? 1 : 0);

  const clearFilters = () => { setSearchTerm(''); setStatusFilter('all'); setVehicleTypeFilter('all'); setDepartmentFilter('all'); };

  return (
    <div className="fleet-page">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Fleet Insurance</div>
        <div className="sp-page-hero__row">
          <div>
            <h1>Your vehicle <strong>fleet.</strong></h1>
            <p className="sp-page-hero__lead">
              {mockVehicles.length} vehicles insured · {formatCurrency(mockVehicles.reduce((s, v) => s + v.monthlyPremium, 0), false)}/mo
            </p>
          </div>
          <div className="sp-page-hero__actions">
            <button className="ln-btn ln-btn--primary" onClick={() => navigate('/business/fleet/add')}>
              Add Vehicle <Add size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="sp-statband">
        <div>
          <div className="sp-statband__k">Total Vehicles</div>
          <div className="sp-statband__v">{totalVehicles}</div>
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
          <div className="sp-statband__d">total across fleet</div>
        </div>
      </div>

      {/* Filters */}
      <div className="sp-section sp-section--alt">
        <div className="sp-section__header">
          <div className="sp-kicker">Filter</div>
          {activeFiltersCount > 0 && (
            <div className="fleet-filter-actions">
              <Tag type="blue" size="sm">{activeFiltersCount} active filter{activeFiltersCount > 1 ? 's' : ''}</Tag>
              <Button kind="ghost" size="sm" onClick={clearFilters}>Clear all</Button>
            </div>
          )}
        </div>
        <div className="fleet-filters-grid">
          <Search
            size="md"
            placeholder="Search by make, model, VIN, plate, or driver…"
            labelText="Search vehicles"
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
            id="vehicle-type-filter"
            titleText="Vehicle Type"
            label="Select vehicle type"
            items={vehicleTypeItems}
            itemToString={i => i ? i.text : ''}
            selectedItem={vehicleTypeItems.find(i => i.id === vehicleTypeFilter)}
            onChange={({ selectedItem }) => setVehicleTypeFilter(selectedItem.id)}
          />
          <Dropdown
            id="department-filter"
            titleText="Department"
            label="Select department"
            items={departmentItems}
            itemToString={i => i ? i.text : ''}
            selectedItem={departmentItems.find(i => i.id === departmentFilter)}
            onChange={({ selectedItem }) => setDepartmentFilter(selectedItem.id)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="sp-section sp-section--no-bottom">
        <div className="sp-kicker">Fleet Vehicles ({filteredVehicles.length})</div>
        {filteredVehicles.length > 0 ? (
          <FleetTable vehicles={filteredVehicles} />
        ) : (
          <div className="fleet-empty-state">
            <CarFront size={48} />
            <h4>No vehicles found</h4>
            <p>Try adjusting your filters or search term</p>
            <Button kind="tertiary" onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
