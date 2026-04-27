import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Analytics, UserMultiple, Earth } from '@carbon/icons-react';
import ThemeToggle from '../components/ThemeToggle';
import './LoginPage.scss';

function ShieldIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 2L28 6V15C28 22 22.6 27.6 16 30C9.4 27.6 4 22 4 15V6Z" fill="currentColor" />
      <path d="M10 16L14.5 20.5L22 11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) { setErr('Email and password are required.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setErr('Enter a valid email address.'); return; }
    setErr('');
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/business/dashboard'); }, 700);
  };

  return (
    <div className="auth-page">
      {/* ── Left: form panel ── */}
      <div className="auth-form-panel">
        <div className="auth-form-inner">
          <button className="auth-back" onClick={() => navigate('/')}>
            <ArrowLeft size={14} /> Back to InsureCo
          </button>

          <div className="auth-brand">
            <ShieldIcon size={24} className="auth-brand__logo" />
            <span>InsureCo</span>
            <span className="auth-brand__tag">Business</span>
          </div>

          <h1>Welcome <strong>back.</strong></h1>
          <p className="auth-sub">
            Sign in to manage your commercial policies, file claims, and update assets.
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                className={`auth-input${err ? ' has-error' : ''}`}
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className={`auth-input${err ? ' has-error' : ''}`}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="auth-row">
              <label className="auth-checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                />
                <span>Remember this device for 30 days</span>
              </label>
              <a className="auth-link" href="#">Forgot password?</a>
            </div>

            {err && <div className="auth-error" role="alert">{err}</div>}

            <div className="auth-theme-row">
              <ThemeToggle standalone />
            </div>

            <div className="auth-actions">
              <button type="submit" className="auth-btn auth-btn--primary" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'} <ArrowRight size={14} />
              </button>
            </div>
          </form>

          <div className="auth-alt">
            <span>
              New to InsureCo?{' '}
              <a className="auth-link" onClick={() => navigate('/signup')}>
                Start a business application →
              </a>
            </span>
            <span className="auth-sso">SSO · SAML 2.0</span>
          </div>

          <div className="auth-demo">
            <strong>Demo:</strong> enter any email + password to continue.
          </div>
        </div>
      </div>

      {/* ── Right: dark marketing panel ── */}
      <div className="auth-side-panel" aria-hidden="true">
        <div>
          <div className="auth-side__tag">InsureCo Business</div>
          <h2>
            One dashboard. <em>Every policy.</em>
            <br />Every <strong>asset.</strong>
          </h2>
          <p className="auth-side__pitch">
            Built for operators who are tired of managing three brokers, four portals, and a
            spreadsheet of renewal dates.
          </p>
        </div>

        <div className="auth-side__features">
          {[
            {
              Icon: Analytics,
              h: 'Real-time portfolio view',
              p: 'Track premiums, claims, and coverage across every asset — one timeline.',
            },
            {
              Icon: UserMultiple,
              h: 'Role-based access',
              p: 'Admin, Finance, and Fleet Manager roles keep the right eyes on the right data.',
            },
            {
              Icon: Earth,
              h: 'Nationwide footprint',
              p: 'Licensed in all 50 states, with multi-location and multi-entity support.',
            },
          ].map(({ Icon, h, p }) => (
            <div key={h} className="auth-side__feature">
              <div className="auth-side__feature-ico"><Icon size={18} /></div>
              <div>
                <div className="auth-side__feature-h">{h}</div>
                <div className="auth-side__feature-p">{p}</div>
              </div>
            </div>
          ))}

          <div className="auth-side__badges">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>NAIC 00421</span>
          </div>
        </div>
      </div>
    </div>
  );
}
