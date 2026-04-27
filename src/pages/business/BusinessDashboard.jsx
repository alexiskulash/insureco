import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@carbon/react';
import {
  Building,
  CarFront,
  Map,
  DocumentAdd,
  Wallet,
  ArrowRight,
} from '@carbon/icons-react';
import PropertyTable from '../../components/business/PropertyTable';
import FleetTable from '../../components/business/FleetTable';
import {
  mockProperties,
  mockVehicles,
  getTotalBusinessPremium,
  getActiveProperties,
  getActiveVehicles,
} from '../../data/businessMockData';
import { formatCurrency } from '../../utils/businessHelpers';
import './BusinessDashboard.scss';

export default function BusinessDashboard() {
  const navigate = useNavigate();

  const totalProperties     = mockProperties.length;
  const activePropertiesCount = getActiveProperties().length;
  const totalVehicles       = mockVehicles.length;
  const activeVehiclesCount = getActiveVehicles().length;
  const totalMonthlyPremium = getTotalBusinessPremium();
  const openClaims          = mockProperties.reduce((s, p) => s + p.openClaims, 0)
                            + mockVehicles.reduce((s, v) => s + v.openClaims, 0);

  const quickActions = [
    { icon: <Building size={28} />,     label: 'Properties',     sub: 'Manage commercial properties',   route: '/business/properties' },
    { icon: <CarFront size={28} />,     label: 'Fleet',          sub: 'Monitor business vehicles',      route: '/business/fleet'      },
    { icon: <Map size={28} />,          label: 'Map View',       sub: 'See all assets on a map',        route: '/business/map'        },
    { icon: <DocumentAdd size={28} />,  label: 'File a Claim',   sub: 'Submit an insurance claim',      route: '/business/file-claim' },
    { icon: <Wallet size={28} />,       label: 'Make a Payment', sub: 'Pay premiums or deductibles',    route: '/business/make-payment' },
  ];

  return (
    <div className="biz-dashboard">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Business</div>
        <h1>Your commercial <strong>portfolio.</strong></h1>
        <p className="sp-page-hero__lead">
          {totalProperties} properties · {totalVehicles} vehicles · {formatCurrency(totalMonthlyPremium, false)}/mo total premium
        </p>
      </div>

      {/* KPI strip */}
      <div className="sp-statband">
        <div>
          <div className="sp-statband__k">Properties</div>
          <div className="sp-statband__v">{totalProperties}</div>
          <div className="sp-statband__d">{activePropertiesCount} active</div>
        </div>
        <div>
          <div className="sp-statband__k">Fleet Vehicles</div>
          <div className="sp-statband__v">{totalVehicles}</div>
          <div className="sp-statband__d">{activeVehiclesCount} active</div>
        </div>
        <div>
          <div className="sp-statband__k">Monthly Premium</div>
          <div className="sp-statband__v">{formatCurrency(totalMonthlyPremium, false)}</div>
          <div className="sp-statband__d">{totalProperties + totalVehicles} assets</div>
        </div>
        <div>
          <div className="sp-statband__k">Open Claims</div>
          <div className="sp-statband__v">{openClaims}</div>
          <div className="sp-statband__d">across all policies</div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="sp-section sp-section--alt">
        <div className="sp-kicker">Quick actions</div>
        <div className="biz-quick-actions">
          {quickActions.map(a => (
            <div key={a.label} className="biz-action-tile" onClick={() => navigate(a.route)}>
              <div className="biz-action-tile__icon">{a.icon}</div>
              <div className="biz-action-tile__content">
                <h4>{a.label}</h4>
                <p>{a.sub}</p>
              </div>
              <ArrowRight size={16} className="biz-action-tile__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* Properties table */}
      <div className="sp-section">
        <div className="sp-section__header">
          <div className="sp-kicker">Properties</div>
          <Button kind="ghost" size="sm" renderIcon={ArrowRight} onClick={() => navigate('/business/properties')}>
            View All
          </Button>
        </div>
        <PropertyTable properties={mockProperties} compact maxRows={5} />
      </div>

      {/* Fleet table */}
      <div className="sp-section sp-section--alt sp-section--no-bottom">
        <div className="sp-section__header">
          <div className="sp-kicker">Fleet Vehicles</div>
          <Button kind="ghost" size="sm" renderIcon={ArrowRight} onClick={() => navigate('/business/fleet')}>
            View All
          </Button>
        </div>
        <FleetTable vehicles={mockVehicles} compact maxRows={5} />
      </div>
    </div>
  );
}
