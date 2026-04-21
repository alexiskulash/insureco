import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Time, DocumentBlank, CheckmarkFilled, Money } from '@carbon/icons-react';
import './BusinessComingSoon.scss';

export default function BusinessComingSoon() {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const isPayments = path.includes('/payments');

  const config = isPayments
    ? {
        eyebrow: 'Payments',
        h1: <>Premiums and deductibles, <strong>paid in one place.</strong></>,
        lead: 'Consolidated billing across all your policies. Schedule payments, view history, and manage autopay — coming soon.',
        features: [
          { icon: <Money size={24} />, title: 'Autopay scheduling',   body: 'Set it once and never miss a due date.' },
          { icon: <DocumentBlank size={24} />, title: 'Unified billing', body: 'One invoice across fleet, property, and liability lines.' },
          { icon: <CheckmarkFilled size={24} />, title: 'Payment history', body: 'Full audit trail of every transaction and adjustment.' },
          { icon: <Time size={24} />, title: 'Renewal quotes',    body: 'Auto-quoted 60 days before renewal, pre-filled for your review.' },
        ],
      }
    : {
        eyebrow: 'Claims',
        h1: <>Claims that close in <strong>days, not months.</strong></>,
        lead: 'Submit, track, and resolve commercial claims across all your policy lines from a single dashboard. Launching soon.',
        features: [
          { icon: <DocumentBlank size={24} />, title: 'Digital FNOL',         body: 'File first notice of loss in under 5 minutes, any device.' },
          { icon: <Time size={24} />,          title: '72-hour target close',  body: 'Our average claim-to-decision time in 2025 Q1.' },
          { icon: <CheckmarkFilled size={24} />, title: 'Real-time status',   body: 'Track every step — adjuster assigned, inspection, decision.' },
          { icon: <Money size={24} />,          title: 'Direct deposit payout', body: 'Same-day ACH once the claim is approved.' },
        ],
      };

  return (
    <div className="coming-soon-page">
      {/* Hero */}
      <div className="sp-page-hero sp-page-hero--dark">
        <div className="sp-eyebrow">{config.eyebrow}</div>
        <h1>{config.h1}</h1>
        <p className="sp-page-hero__lead">{config.lead}</p>
        <div className="sp-page-hero__actions" style={{ marginTop: '32px' }}>
          <button className="ln-btn ln-btn--primary" onClick={() => navigate('/signup')}>
            Get early access <ArrowRight size={14} />
          </button>
          <button className="ln-btn ln-btn--outline-white" onClick={() => navigate('/business/dashboard')}>
            Back to dashboard
          </button>
        </div>
      </div>

      {/* Feature preview */}
      <div className="sp-section">
        <div className="sp-kicker">Coming soon</div>
        <h2>Full {isPayments ? 'payment management' : 'claims management'}, launching soon.</h2>
        <p className="sp-section__lead">
          We're building the fastest commercial claims experience in the industry.
          Join the waitlist and be the first to know when it's live.
        </p>
        <div className="cs-features-grid">
          {config.features.map(f => (
            <div key={f.title} className="cs-feature-card">
              <div className="cs-feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div className="sp-statband">
        <div>
          <div className="sp-statband__k">Avg. close time</div>
          <div className="sp-statband__v">72 hrs</div>
          <div className="sp-statband__d">2025 Q1 average</div>
        </div>
        <div>
          <div className="sp-statband__k">Claims paid</div>
          <div className="sp-statband__v">$840K</div>
          <div className="sp-statband__d">YTD 2025</div>
        </div>
        <div>
          <div className="sp-statband__k">Customer satisfaction</div>
          <div className="sp-statband__v">94%</div>
          <div className="sp-statband__d">post-claim survey</div>
        </div>
        <div>
          <div className="sp-statband__k">First contact resolution</div>
          <div className="sp-statband__v">88%</div>
          <div className="sp-statband__d">no follow-up required</div>
        </div>
      </div>
    </div>
  );
}
