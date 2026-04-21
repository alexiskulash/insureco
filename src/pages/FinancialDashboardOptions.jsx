import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '@carbon/icons-react';
import { ChartLineData, Analytics, Dashboard } from '@carbon/icons-react';
import './FinancialDashboardOptions.scss';

const OPTIONS = [
  {
    id: 'conservative',
    icon: <Dashboard size={40} />,
    title: 'Conservative',
    description: 'Traditional Carbon Design System implementation with familiar layouts and standard components.',
    features: ['Standard Carbon Tiles and DataTable', 'Traditional financial color scheme', 'Professional, corporate aesthetic', 'Proven UI patterns for financial data'],
    tags: ['Traditional', 'Professional', 'Carbon DS'],
    route: '/financial-dashboard-1',
  },
  {
    id: 'modern',
    icon: <ChartLineData size={40} />,
    title: 'Modern Sleek',
    description: 'Contemporary design using Carbon components with enhanced visuals and modern aesthetics.',
    features: ['Enhanced Carbon components', 'Modern card designs with shadows', 'Improved visual hierarchy', 'Area charts with gradients'],
    tags: ['Modern', 'Sleek', 'Carbon DS'],
    route: '/financial-dashboard-2',
  },
  {
    id: 'wild',
    icon: <Analytics size={40} />,
    title: 'Wild Creative',
    description: 'Bold, creative design with custom components, InsureCo red branding, and glassmorphism.',
    features: ['Custom components (no Carbon constraints)', 'Dark theme with glassmorphism', 'Bold InsureCo red branding', 'Unique card grid layout'],
    tags: ['Creative', 'Bold', 'Custom'],
    route: '/financial-dashboard-3',
  },
];

const COMMON = [
  'KPI summary cards with YTD metrics',
  'Interactive charts (line/bar toggle)',
  'Asset performance table with filtering',
  'Drill-down to property/vehicle details',
  'Traditional financial colors (green = premiums, red = claims)',
  'Fully responsive design',
];

export default function FinancialDashboardOptions() {
  const navigate = useNavigate();

  return (
    <div className="fd-options-page">
      {/* Hero */}
      <div className="sp-page-hero">
        <div className="sp-eyebrow">Resources</div>
        <h1>Financial dashboard <strong>views.</strong></h1>
        <p className="sp-page-hero__lead">
          Three distinct design approaches for the Insurance Financial Analytics Dashboard.
          Pick the layout that fits your workflow.
        </p>
      </div>

      {/* Option cards */}
      <div className="sp-section">
        <div className="sp-kicker">Choose a style</div>
        <div className="fd-options-grid">
          {OPTIONS.map(opt => (
            <div
              key={opt.id}
              className={`fd-option-card fd-option-card--${opt.id}`}
              onClick={() => navigate(opt.route)}
            >
              <div className="fd-option-card__icon">{opt.icon}</div>
              <h2>{opt.title}</h2>
              <p className="fd-option-card__desc">{opt.description}</p>
              <ul className="fd-option-card__features">
                {opt.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="fd-option-card__footer">
                <div className="fd-option-card__tags">
                  {opt.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <span className="fd-option-card__cta">
                  View <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common features band */}
      <div className="sp-section sp-section--alt sp-section--no-bottom">
        <div className="sp-kicker">All options include</div>
        <div className="fd-common-grid">
          {COMMON.map(f => (
            <div key={f} className="fd-common-item">
              <span className="fd-common-item__check">✓</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
