import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, CheckmarkFilled } from '@carbon/icons-react';
import ThemeToggle from '../components/ThemeToggle';
import './SignUpConfirmationPage.scss';

function ShieldIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 2L28 6V15C28 22 22.6 27.6 16 30C9.4 27.6 4 22 4 15V6Z" fill="currentColor" />
      <path d="M10 16L14.5 20.5L22 11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SignUpConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const confNum = location.state?.confirmationNumber || 'IC-B-000000-0000';
  const d       = location.state?.formData || {};

  const company = d.companyName || 'Your business';
  const firstName = d.firstName || 'there';
  const lines   = d.coverageLines?.length ? d.coverageLines : ['fleet', 'property'];

  const estPremium = useMemo(() => {
    const base = 1200;
    const mult = (lines.length || 1) * 1.4 + (d.fleetCount || 0) * 45 + (d.propertyCount || 0) * 180;
    return Math.round(base + mult);
  }, [lines, d.fleetCount, d.propertyCount]);

  return (
    <div className="conf-page">
      {/* ── Header ── */}
      <div className="conf-head">
        <div className="conf-head__brand" onClick={() => navigate('/')}>
          <ShieldIcon size={22} className="conf-head__logo" />
          <span>InsureCo</span>
          <span className="conf-head__tag">Business</span>
        </div>
        <ThemeToggle standalone />
      </div>

      {/* ── Body ── */}
      <div className="conf-body">
        {/* Left: confirmation details */}
        <div className="conf-left">
          <div className="conf-check">
            <CheckmarkFilled size={40} />
          </div>

          <h1>Application <strong>received.</strong></h1>

          <p className="conf-sub">
            Thanks, {firstName}. We've received {company}'s application and a licensed underwriter
            will review it within one business day.
          </p>

          <div className="conf-num">
            <div className="conf-num__k">Confirmation number</div>
            <div className="conf-num__v">{confNum}</div>
          </div>

          <div className="conf-next">
            <h4>What happens next</h4>

            {[
              {
                n: '01',
                h: 'Verification (today)',
                p: 'We verify your entity via EIN and run a soft risk assessment.',
              },
              {
                n: '02',
                h: 'Firm quote (within 1 business day)',
                p: `An underwriter emails a signed binder with exact premiums for ${lines.join(', ')}.`,
              },
              {
                n: '03',
                h: 'E-sign & activate',
                p: 'Review the binder, e-sign, and your dashboard unlocks — certificates issued instantly.',
              },
            ].map(s => (
              <div key={s.n} className="conf-step">
                <div className="conf-step__n">{s.n}</div>
                <div className="conf-step__body">
                  <div className="conf-step__h">{s.h}</div>
                  <div className="conf-step__p">{s.p}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="conf-actions">
            <button className="conf-btn conf-btn--primary" onClick={() => navigate('/business/dashboard')}>
              Preview your dashboard <ArrowRight size={14} />
            </button>
            <button className="conf-btn conf-btn--tertiary" onClick={() => navigate('/')}>
              Back to home
            </button>
          </div>
        </div>

        {/* Right: dark panel with estimate */}
        <div className="conf-right" aria-hidden="true">
          <div className="conf-right__tag">— Preliminary estimate</div>
          <h3>Based on what you told us.</h3>

          <div className="conf-stat-col">
            {[
              { label: 'Estimated annual premium', val: <><strong>${estPremium.toLocaleString()}</strong></> },
              { label: 'Coverage lines', val: lines.length },
              { label: 'Per-occurrence limit', val: `$${d.coverageLimit || '1M'}` },
              { label: 'Deductible', val: `$${Number(d.deductible || 1000).toLocaleString()}` },
            ].map(r => (
              <div key={r.label} className="conf-stat-row">
                <span>{r.label}</span>
                <span className="conf-stat-row__v">{r.val}</span>
              </div>
            ))}
          </div>

          <p className="conf-fine">
            Estimate is indicative only. Firm pricing depends on underwriting review of loss history,
            vehicle types, building construction, and jurisdiction-specific rating factors.
          </p>
        </div>
      </div>
    </div>
  );
}
