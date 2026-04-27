import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Close, Checkmark, Information } from '@carbon/icons-react';
import ThemeToggle from '../components/ThemeToggle';
import './SignUpPage.scss';

/* ── Icons ────────────────────────────────────────────────────── */
function ShieldIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 2L28 6V15C28 22 22.6 27.6 16 30C9.4 27.6 4 22 4 15V6Z" fill="currentColor" />
      <path d="M10 16L14.5 20.5L22 11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TruckIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function BuildingIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 21V5a1 1 0 011-1h10a1 1 0 011 1v16M16 21V11h3a1 1 0 011 1v9M4 21h18M8 8h1M8 12h1M8 16h1M12 8h1M12 12h1M12 16h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function BriefcaseIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Constants ────────────────────────────────────────────────── */
const STEPS = [
  { key: 'company',  num: '01', label: 'Company' },
  { key: 'admin',    num: '02', label: 'Admin contact' },
  { key: 'assets',   num: '03', label: 'Portfolio' },
  { key: 'coverage', num: '04', label: 'Coverage' },
  { key: 'billing',  num: '05', label: 'Billing' },
  { key: 'review',   num: '06', label: 'Review & submit' },
];

const INDUSTRIES = [
  'Construction & Contracting', 'Distribution & Logistics', 'Food & Beverage',
  'Healthcare & Medical', 'Hospitality', 'Manufacturing', 'Professional Services',
  'Real Estate & Property', 'Retail', 'Technology', 'Transportation', 'Other',
];
const SIZES = ['1–10', '11–50', '51–250', '251–1 000', '1 000+'];
const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY',
];

/* ── Small shared primitives ──────────────────────────────────── */
function Field({ label, children, help }) {
  return (
    <div className="su-field">
      {label && <label>{label}</label>}
      {children}
      {help && <span className="su-field__help">{help}</span>}
    </div>
  );
}
function Input({ mono, ...props }) {
  return (
    <input
      className="su-input"
      style={mono ? { fontFamily: 'var(--font-family-mono)' } : undefined}
      {...props}
    />
  );
}
function Select({ children, ...props }) {
  return <select className="su-select" {...props}>{children}</select>;
}
function FieldRow({ children }) {
  return <div className="su-field-row">{children}</div>;
}
function FieldRow3({ children }) {
  return <div className="su-field-row-3">{children}</div>;
}

/* ── Tile choice (multi-select) ──────────────────────────────── */
function TileChoice({ on, onClick, children }) {
  return (
    <div className={`su-tile${on ? ' su-tile--on' : ''}`} onClick={onClick} role="checkbox" aria-checked={on} tabIndex={0}
      onKeyDown={e => e.key === ' ' && onClick()}>
      <span className="su-tile__tick" aria-hidden="true" />
      {children}
    </div>
  );
}

/* ── Checkbox row ────────────────────────────────────────────── */
function CheckRow({ checked, onChange, children }) {
  return (
    <label className="su-check-row">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}

/* ── Step renderers ──────────────────────────────────────────── */
function StepCompany({ data, upd }) {
  return (
    <>
      <div className="su-stepnum">Step 01 / 06</div>
      <h2>Tell us about the <strong>business.</strong></h2>
      <p className="su-sub">We'll use this to verify your entity and determine which lines you qualify for. All data is encrypted at rest.</p>
      <div className="su-form-stack">
        <Field label="Legal business name">
          <Input value={data.companyName} onChange={e => upd('companyName', e.target.value)} placeholder="Northbound Logistics, Inc." />
        </Field>
        <FieldRow>
          <Field label="EIN / Tax ID">
            <Input mono value={data.ein} onChange={e => upd('ein', e.target.value)} placeholder="12-3456789" />
          </Field>
          <Field label="Website (optional)">
            <Input value={data.website} onChange={e => upd('website', e.target.value)} placeholder="https://" />
          </Field>
        </FieldRow>
        <FieldRow>
          <Field label="Industry">
            <Select value={data.industry} onChange={e => upd('industry', e.target.value)}>
              <option value="">Select industry…</option>
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </Select>
          </Field>
          <Field label="Company size">
            <Select value={data.size} onChange={e => upd('size', e.target.value)}>
              <option value="">Select size…</option>
              {SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
            </Select>
          </Field>
        </FieldRow>
        <Field label="Headquarters address">
          <Input value={data.street} onChange={e => upd('street', e.target.value)} placeholder="Street address" />
        </Field>
        <FieldRow3>
          <Field label="City">
            <Input value={data.city} onChange={e => upd('city', e.target.value)} />
          </Field>
          <Field label="State">
            <Select value={data.state} onChange={e => upd('state', e.target.value)}>
              <option value="">—</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </Select>
          </Field>
          <Field label="ZIP">
            <Input mono value={data.zip} onChange={e => upd('zip', e.target.value)} />
          </Field>
        </FieldRow3>
      </div>
    </>
  );
}

function StepAdmin({ data, upd }) {
  return (
    <>
      <div className="su-stepnum">Step 02 / 06</div>
      <h2>Who's the <strong>admin?</strong></h2>
      <p className="su-sub">This person is the primary contact on the account and has full permissions. You can add roles later.</p>
      <div className="su-form-stack">
        <FieldRow>
          <Field label="First name"><Input value={data.firstName} onChange={e => upd('firstName', e.target.value)} /></Field>
          <Field label="Last name"><Input value={data.lastName} onChange={e => upd('lastName', e.target.value)} /></Field>
        </FieldRow>
        <Field label="Title"><Input value={data.title} onChange={e => upd('title', e.target.value)} placeholder="e.g. CFO, Operations Director" /></Field>
        <Field label="Work email"><Input type="email" value={data.email} onChange={e => upd('email', e.target.value)} placeholder="name@company.com" /></Field>
        <Field label="Phone"><Input mono type="tel" value={data.phone} onChange={e => upd('phone', e.target.value)} placeholder="(555) 123-4567" /></Field>
      </div>
    </>
  );
}

function StepAssets({ data, upd }) {
  return (
    <>
      <div className="su-stepnum">Step 03 / 06</div>
      <h2>Your <strong>portfolio,</strong> at a glance.</h2>
      <p className="su-sub">Rough numbers are fine — we'll pull exact details later. This just helps us route your application.</p>
      <div className="su-form-stack">
        <FieldRow>
          <Field label="Fleet size (vehicles)" help="Include owned, leased, and specialty equipment.">
            <Input mono type="number" min="0" value={data.fleetCount} onChange={e => upd('fleetCount', Number(e.target.value))} />
          </Field>
          <Field label="Properties / locations" help="Owned real estate, leased spaces, warehouses, etc.">
            <Input mono type="number" min="0" value={data.propertyCount} onChange={e => upd('propertyCount', Number(e.target.value))} />
          </Field>
        </FieldRow>
        <Field label="Annual revenue band" help="Used for premium calculation. Doesn't affect acceptance.">
          <Select value={data.revenue} onChange={e => upd('revenue', e.target.value)}>
            <option value="">Select a range…</option>
            <option value="<1M">Under $1M</option>
            <option value="1-5M">$1M – $5M</option>
            <option value="5-25M">$5M – $25M</option>
            <option value="25-100M">$25M – $100M</option>
            <option value="100M+">$100M+</option>
          </Select>
        </Field>
      </div>
    </>
  );
}

function StepCoverage({ data, upd, toggle }) {
  const lines = [
    { v: 'fleet',     Icon: TruckIcon,    h: 'Fleet',     p: 'Vehicles, trailers, specialty equipment.' },
    { v: 'property',  Icon: BuildingIcon,  h: 'Property',  p: 'Buildings, contents, business interruption.' },
    { v: 'liability', Icon: BriefcaseIcon, h: 'Liability', p: 'General liability, umbrella up to $10M.' },
  ];
  return (
    <>
      <div className="su-stepnum">Step 04 / 06</div>
      <h2>Which lines of <strong>coverage?</strong></h2>
      <p className="su-sub">Select one or more. You can add or remove lines after onboarding without re-underwriting.</p>
      <div className="su-form-stack">
        <div className="su-tile-group" style={{ '--cols': 3 }}>
          {lines.map(({ v, Icon, h, p }) => (
            <TileChoice key={v} on={data.coverageLines.includes(v)} onClick={() => toggle('coverageLines', v)}>
              <span className="su-tile__ico"><Icon size={28} /></span>
              <span className="su-tile__h">{h}</span>
              <span className="su-tile__p">{p}</span>
            </TileChoice>
          ))}
        </div>
        <FieldRow>
          <Field label="Per-occurrence limit">
            <Select value={data.coverageLimit} onChange={e => upd('coverageLimit', e.target.value)}>
              <option value="500K">$500,000</option>
              <option value="1M">$1,000,000</option>
              <option value="2M">$2,000,000</option>
              <option value="5M">$5,000,000</option>
              <option value="10M">$10,000,000</option>
            </Select>
          </Field>
          <Field label="Deductible">
            <Select value={data.deductible} onChange={e => upd('deductible', e.target.value)}>
              <option value="500">$500</option>
              <option value="1000">$1,000</option>
              <option value="2500">$2,500</option>
              <option value="5000">$5,000</option>
              <option value="10000">$10,000</option>
            </Select>
          </Field>
        </FieldRow>
        <div className="su-info-banner">
          <Information size={18} className="su-info-banner__icon" />
          <span>Preliminary quote — a licensed underwriter will review and return a firm quote within 1 business day of submission.</span>
        </div>
      </div>
    </>
  );
}

function StepBilling({ data, upd }) {
  return (
    <>
      <div className="su-stepnum">Step 05 / 06</div>
      <h2>How should we <strong>bill</strong> the account?</h2>
      <p className="su-sub">We won't charge anything until you accept the final binder — this is just to speed up activation once you do.</p>
      <div className="su-form-stack">
        <fieldset className="su-fieldset">
          <legend>Billing contact</legend>
          <CheckRow checked={data.billingContact === 'same'} onChange={() => upd('billingContact', 'same')}>Same as admin user</CheckRow>
          <CheckRow checked={data.billingContact === 'different'} onChange={() => upd('billingContact', 'different')}>Different person</CheckRow>
        </fieldset>
        {data.billingContact === 'different' && (
          <Field label="Billing email">
            <Input type="email" value={data.billingEmail} onChange={e => upd('billingEmail', e.target.value)} placeholder="billing@company.com" />
          </Field>
        )}
        <fieldset className="su-fieldset">
          <legend>Preferred payment method</legend>
          <div className="su-tile-group" style={{ '--cols': 2 }}>
            <TileChoice on={data.paymentMethod === 'ach'} onClick={() => upd('paymentMethod', 'ach')}>
              <span className="su-tile__h">ACH bank transfer</span>
              <span className="su-tile__p">Preferred — lowest processing fees, set up after binder.</span>
            </TileChoice>
            <TileChoice on={data.paymentMethod === 'card'} onClick={() => upd('paymentMethod', 'card')}>
              <span className="su-tile__h">Corporate card</span>
              <span className="su-tile__p">Visa, Mastercard, or Amex. 2.9% processing.</span>
            </TileChoice>
          </div>
        </fieldset>
      </div>
    </>
  );
}

function ReviewRow({ label, val }) {
  return <><dt>{label}</dt><dd>{val || '—'}</dd></>;
}
function ReviewTile({ title, onEdit, children }) {
  return (
    <div className="su-review-tile">
      <div className="su-review-tile__head">
        <h4>{title}</h4>
        <a onClick={onEdit}>Edit</a>
      </div>
      <dl>{children}</dl>
    </div>
  );
}

function StepReview({ data, setStep, upd }) {
  return (
    <>
      <div className="su-stepnum">Step 06 / 06</div>
      <h2>Review &amp; <strong>submit.</strong></h2>
      <p className="su-sub">Confirm the details below. An underwriter will respond with a firm quote within one business day.</p>
      <div className="su-form-stack su-form-stack--gap-sm">
        <ReviewTile title="Company" onEdit={() => setStep(0)}>
          <ReviewRow label="Name" val={data.companyName} />
          <ReviewRow label="EIN" val={data.ein} />
          <ReviewRow label="Industry" val={data.industry} />
          <ReviewRow label="Size" val={data.size ? `${data.size} employees` : ''} />
          <ReviewRow label="HQ" val={[data.street, data.city, data.state, data.zip].filter(Boolean).join(', ')} />
        </ReviewTile>
        <ReviewTile title="Admin" onEdit={() => setStep(1)}>
          <ReviewRow label="Name" val={`${data.firstName} ${data.lastName}`.trim()} />
          <ReviewRow label="Title" val={data.title} />
          <ReviewRow label="Email" val={data.email} />
          <ReviewRow label="Phone" val={data.phone} />
        </ReviewTile>
        <ReviewTile title="Portfolio" onEdit={() => setStep(2)}>
          <ReviewRow label="Fleet size" val={`${data.fleetCount} vehicles`} />
          <ReviewRow label="Properties" val={`${data.propertyCount} locations`} />
          <ReviewRow label="Revenue" val={data.revenue} />
        </ReviewTile>
        <ReviewTile title="Coverage" onEdit={() => setStep(3)}>
          <ReviewRow label="Lines" val={data.coverageLines.join(', ')} />
          <ReviewRow label="Limit" val={`$${data.coverageLimit}`} />
          <ReviewRow label="Deductible" val={`$${Number(data.deductible).toLocaleString()}`} />
        </ReviewTile>
        <ReviewTile title="Billing" onEdit={() => setStep(4)}>
          <ReviewRow label="Contact" val={data.billingContact === 'same' ? 'Same as admin' : data.billingEmail} />
          <ReviewRow label="Method" val={data.paymentMethod === 'ach' ? 'ACH bank transfer' : 'Corporate card'} />
        </ReviewTile>
        <label className="su-check-row su-check-row--mt">
          <input type="checkbox" checked={data.agree} onChange={e => upd('agree', e.target.checked)} />
          <span>
            I certify the information provided is accurate and I am authorized to apply on behalf of this
            business. I agree to the <a className="su-link">Terms</a> and <a className="su-link">Privacy Policy</a>.
          </span>
        </label>
      </div>
    </>
  );
}

/* ── Main component ───────────────────────────────────────────── */
export default function SignUpPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    companyName: '', ein: '', industry: '', size: '', website: '',
    street: '', city: '', state: '', zip: '',
    firstName: '', lastName: '', title: '', email: '', phone: '',
    fleetCount: 0, propertyCount: 0, revenue: '',
    coverageLines: [], coverageLimit: '1M', deductible: '1000',
    billingContact: 'same', billingEmail: '', paymentMethod: 'ach',
    agree: false,
  });

  const upd = (k, v) => setData(p => ({ ...p, [k]: v }));
  const toggle = (k, v) => setData(p => ({
    ...p,
    [k]: p[k].includes(v) ? p[k].filter(x => x !== v) : [...p[k], v],
  }));

  const valid = () => {
    const cur = STEPS[step].key;
    if (cur === 'company')  return !!(data.companyName && data.ein && data.industry && data.size && data.state);
    if (cur === 'admin')    return !!(data.firstName && data.lastName && data.email && data.phone);
    if (cur === 'assets')   return !!data.revenue;
    if (cur === 'coverage') return !!(data.coverageLines.length && data.coverageLimit && data.deductible);
    if (cur === 'billing')  return !!data.paymentMethod;
    if (cur === 'review')   return data.agree;
    return true;
  };

  const next = () => {
    if (step < STEPS.length - 1) { setStep(s => s + 1); window.scrollTo(0, 0); }
    else submit();
  };
  const back = () => { if (step > 0) { setStep(s => s - 1); window.scrollTo(0, 0); } };

  const submit = () => {
    const ts  = Date.now().toString().slice(-6);
    const rnd = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const confirmationNumber = `IC-B-${ts}-${rnd}`;
    navigate('/signup/confirmation', { state: { confirmationNumber, formData: data } });
  };

  const pct = ((step + 1) / STEPS.length) * 100;

  const renderStep = () => {
    switch (STEPS[step].key) {
      case 'company':  return <StepCompany  data={data} upd={upd} />;
      case 'admin':    return <StepAdmin    data={data} upd={upd} />;
      case 'assets':   return <StepAssets   data={data} upd={upd} />;
      case 'coverage': return <StepCoverage data={data} upd={upd} toggle={toggle} />;
      case 'billing':  return <StepBilling  data={data} upd={upd} />;
      case 'review':   return <StepReview   data={data} setStep={setStep} upd={upd} />;
      default: return null;
    }
  };

  return (
    <div className="su-page">
      {/* ── Header ── */}
      <div className="su-head">
        <div className="su-head__brand" onClick={() => navigate('/')}>
          <ShieldIcon size={22} className="su-head__logo" />
          <span>InsureCo</span>
          <span className="su-head__tag">Business · Application</span>
        </div>
        <div className="su-head__right">
          <ThemeToggle standalone />
          <button className="su-head__exit" onClick={() => navigate('/')}>
            Exit <Close size={14} />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="su-body">
        {/* Sidebar */}
        <aside className="su-sidebar">
          <div className="su-sidebar__progress-label">
            Application progress · {Math.round(pct)}%
          </div>
          <div className="su-sidebar__bar">
            <div className="su-sidebar__bar-fill" style={{ width: `${pct}%` }} />
          </div>

          <ol className="su-step-nav">
            {STEPS.map((s, i) => {
              const state = i === step ? 'cur' : i < step ? 'done' : '';
              return (
                <li key={s.key} className={`su-step-nav__item${state ? ` su-step-nav__item--${state}` : ''}`}>
                  <span className="su-step-nav__dot" />
                  <span className="su-step-nav__n">{s.num}</span>
                  <span className="su-step-nav__label">{s.label}</span>
                </li>
              );
            })}
          </ol>

          <div className="su-help-card">
            <h5>Need help?</h5>
            <p>Our commercial specialists can walk you through the application in 15 minutes.</p>
            <a className="su-link">Schedule a call →</a>
          </div>
        </aside>

        {/* Main content */}
        <main className="su-main">
          {renderStep()}

          <div className="su-actions">
            {step > 0 ? (
              <button className="su-btn su-btn--tertiary" onClick={back}>
                <ArrowLeft size={14} /> Back
              </button>
            ) : (
              <button className="su-btn su-btn--ghost" onClick={() => navigate('/')}>Cancel</button>
            )}
            <span className="su-actions__spacer" />
            {step < STEPS.length - 1 ? (
              <button className="su-btn su-btn--primary" disabled={!valid()} onClick={next}>
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button className="su-btn su-btn--primary" disabled={!valid()} onClick={submit}>
                Submit application <Checkmark size={14} />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
