import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Checkmark,
  CheckmarkFilled,
  Building,
} from '@carbon/icons-react';
import { TopNav, Footer, ShieldIcon } from '../components/SiteShell';
import './LandingPage.scss';

function TruckIcon({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function BriefcaseIcon({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
function Hero({ onNav }) {
  return (
    <section className="ln-hero">
      <div className="ln-hero__text">
        <div className="ln-eyebrow">Business Insurance · Built for operators</div>
        <h1>
          Insure your <strong>fleet</strong>, <em>properties</em>
          <br />and everything in between.
        </h1>
        <p className="ln-hero__lead">
          One platform to manage commercial policies across vehicles, real estate, and
          liability — with instant quotes, geospatial oversight, and claims that close
          in days, not months.
        </p>
        <div className="ln-hero__ctas">
          <button className="ln-btn ln-btn--primary" onClick={() => onNav('/signup')}>
            Start a quote <ArrowRight size={14} />
          </button>
          <button className="ln-btn ln-btn--tertiary">Talk to sales</button>
        </div>
      </div>

      <div className="ln-hero__visual" aria-hidden="true">
        <div className="ln-hero__grid-bg" />
        <div className="ln-hero__shield">
          <ShieldIcon size={180} />
        </div>
        <div className="ln-chip ln-chip--a">
          <div className="ln-chip__icon"><TruckIcon size={16} /></div>
          <div className="ln-chip__text">
            <div className="ln-chip__big">42 vehicles</div>
            <div className="ln-chip__sm">Fleet active</div>
          </div>
        </div>
        <div className="ln-chip ln-chip--b">
          <div className="ln-chip__icon"><Building size={16} /></div>
          <div className="ln-chip__text">
            <div className="ln-chip__big">$2.1M coverage</div>
            <div className="ln-chip__sm">Property portfolio</div>
          </div>
        </div>
        <div className="ln-chip ln-chip--c">
          <div className="ln-chip__icon"><CheckmarkFilled size={16} /></div>
          <div className="ln-chip__text">
            <div className="ln-chip__big">Claim closed</div>
            <div className="ln-chip__sm">3 day avg · 2025 Q1</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Trust Band ─────────────────────────────────────────────── */
function TrustBand() {
  const logos = [
    { name: 'MERIDIAN',    style: 'caps-serif' },
    { name: 'NorthBridge', style: 'title-sans' },
    { name: 'AXLE CO',     style: 'caps-sans'  },
    { name: 'Halcyon',     style: 'light-serif'},
    { name: 'CargoWright', style: 'bold-sans'  },
    { name: 'Brick&Mortar',style: 'title-sans' },
  ];
  return (
    <div className="ln-trust-band">
      <div className="ln-trust-band__label">Trusted by 3,200+ operators</div>
      <div className="ln-trust-band__divider" />
      <div className="ln-trust-band__logos">
        {logos.map(l => (
          <span key={l.name} className={`ln-trust-band__logo ln-trust-band__logo--${l.style}`}>
            {l.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Stat Band ──────────────────────────────────────────────── */
function StatBand() {
  const stats = [
    { k: 'Policies managed',   v: '12.4K', d: 'across 3,400 business accounts' },
    { k: 'Average claim',      v: '3 days', d: 'from file to decision' },
    { k: 'Saved vs. legacy',   v: '27%',   d: 'on comparable portfolios' },
    { k: 'Coverage footprint', v: '48',    d: 'states — lower 48 + AK, HI' },
  ];
  return (
    <section className="ln-statband">
      {stats.map(s => (
        <div key={s.k}>
          <div className="ln-statband__k">{s.k}</div>
          <div className="ln-statband__v">{s.v}</div>
          <div className="ln-statband__d">{s.d}</div>
        </div>
      ))}
    </section>
  );
}

/* ── Coverage Cards ─────────────────────────────────────────── */
function CoverageSection({ onNav }) {
  const cards = [
    {
      icon: <TruckIcon size={48} className="ln-coverage__ico" />,
      title: 'Commercial Fleet',
      sub: 'Vehicles, trailers, and specialty equipment — priced by mileage, not guesswork.',
      items: ['Collision + comprehensive', 'Telematics-based pricing', 'Driver roster management', 'Hired & non-owned coverage'],
      link: 'Explore fleet',
    },
    {
      icon: <Building size={48} className="ln-coverage__ico" />,
      title: 'Commercial Property',
      sub: 'Buildings, contents, business interruption, and loss-of-rent — single portfolio view.',
      items: ['Replacement-cost coverage', 'Business interruption', 'Natural disaster riders', 'Multi-location portfolios'],
      link: 'Explore property',
      badge: 'Most common',
    },
    {
      icon: <BriefcaseIcon size={48} className="ln-coverage__ico" />,
      title: 'General Liability',
      sub: 'Bodily injury, property damage, and professional liability with per-occurrence limits up to $10M.',
      items: ['Bodily injury & property damage', 'Product & completed operations', 'Personal & advertising injury', 'Umbrella to $10M'],
      link: 'Explore liability',
    },
  ];

  return (
    <section className="ln-section">
      <div className="ln-kicker">Coverage</div>
      <h2>Three policy lines. <strong>One unified portfolio.</strong></h2>
      <p className="ln-section__lead">
        Traditional carriers force you to silo vehicles, buildings, and liability across different
        brokers. We don't. Everything rolls up into a single dashboard with one renewal date.
      </p>
      <div className="ln-coverage-grid">
        {cards.map(c => (
          <div key={c.title} className="ln-coverage" onClick={() => onNav('/signup')}>
            {c.badge && <span className="ln-coverage__badge">{c.badge}</span>}
            {c.icon}
            <h3>{c.title}</h3>
            <p className="ln-coverage__sub">{c.sub}</p>
            <ul>
              {c.items.map(item => (
                <li key={item}><Checkmark size={16} /> {item}</li>
              ))}
            </ul>
            <span className="ln-coverage__link">{c.link} <ArrowRight size={14} /></span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── How It Works ───────────────────────────────────────────── */
function HowSection() {
  const steps = [
    { num: '01', h: 'Profile',   p: 'Industry, headcount, and a lightweight assets overview — fleet size, property count, revenue band.' },
    { num: '02', h: 'Configure', p: 'Pick lines, limits, and deductibles. Our pricing engine returns live quotes, not estimates.' },
    { num: '03', h: 'Activate',  p: 'E-sign the binder. Certificates of insurance issued instantly — usually within the hour.' },
    { num: '04', h: 'Operate',   p: 'Add assets, file claims, and pay premiums from the dashboard. Renewals auto-quoted 60 days out.' },
  ];
  return (
    <section className="ln-section ln-section--alt">
      <div className="ln-kicker">How it works</div>
      <h2>From quote to coverage in under a week.</h2>
      <p className="ln-section__lead">
        A linear onboarding flow — no back-and-forth with adjusters, no surprise underwriting letters.
      </p>
      <div className="ln-how">
        {steps.map((s, i) => (
          <div key={s.num} className="ln-how-step">
            <div className="ln-how-step__num">0{i + 1} — Tell us about the business</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Quote / Testimonial ────────────────────────────────────── */
function QuoteSection() {
  return (
    <section className="ln-quote">
      <blockquote>
        We closed three fleet claims last quarter inside of a week. That used to take us a month.
      </blockquote>
      <div className="ln-quote__attr">
        <div className="ln-quote__avatar">MR</div>
        <div>
          <div className="ln-quote__name">Marcelle Rivera</div>
          <div>Ops Director, Northbound Logistics · 82-vehicle fleet</div>
        </div>
      </div>
      <div className="ln-quote__metrics">
        <div>
          <div className="ln-quote__mv">72 hrs</div>
          <div className="ln-quote__mk">avg close time</div>
        </div>
        <div>
          <div className="ln-quote__mv">$840K</div>
          <div className="ln-quote__mk">paid out 2025 YTD</div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Band ───────────────────────────────────────────────── */
function CTABand({ onNav }) {
  return (
    <section className="ln-cta-band">
      <div>
        <h2>Ready to consolidate your policies?</h2>
        <p>Quotes are free and non-binding. Most businesses finish onboarding in under 20 minutes.</p>
      </div>
      <div className="ln-cta-band__actions">
        <button className="ln-btn ln-btn--white" onClick={() => onNav('/signup')}>
          Start a quote <ArrowRight size={14} />
        </button>
        <button className="ln-btn ln-btn--outline-white" onClick={() => onNav('/login')}>
          Log in
        </button>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function LandingPage() {
  const navigate = useNavigate();
  const onNav = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <div className="ln-page">
      <TopNav onNav={onNav} />
      <Hero onNav={onNav} />
      <TrustBand />
      <StatBand />
      <CoverageSection onNav={onNav} />
      <HowSection />
      <QuoteSection />
      <CTABand onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}
