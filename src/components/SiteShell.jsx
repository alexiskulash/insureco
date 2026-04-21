import { useState } from 'react';
import { ArrowRight, ChevronDown } from '@carbon/icons-react';
import ThemeToggle from './ThemeToggle';
import './SiteShell.scss';

/* ── Shield icon ────────────────────────────────────────────── */
export function ShieldIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 2L28 6V15C28 22 22.6 27.6 16 30C9.4 27.6 4 22 4 15V6Z" fill="currentColor" />
      <path d="M10 16L14.5 20.5L22 11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Navigation items ───────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: 'Overview', action: '/' },
  {
    label: 'Coverage',
    links: [
      { label: 'Fleet Insurance',    action: '/business/fleet' },
      { label: 'Property Insurance', action: '/business/properties' },
      { label: 'General Liability',  action: '/signup' },
      { label: 'Workers Comp',       action: '/signup' },
    ],
  },
  { label: 'Claims',  action: '/business/claims' },
  { label: 'Pricing', action: '/signup' },
  {
    label: 'Company',
    links: [
      { label: 'About',   action: '/about' },
      { label: 'Careers', action: null },
      { label: 'Press',   action: null },
      { label: 'Contact', action: null },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Dashboard',            action: '/dashboard' },
      { label: 'Business dashboard',   action: '/business/dashboard' },
      { label: 'Financial dashboards', action: '/financial-dashboards' },
      { label: 'Map view',             action: '/business/map' },
    ],
  },
];

/* ── Top navigation ─────────────────────────────────────────── */
export function TopNav({ onNav, activeRoute = null }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="ln-topnav">
      <div className="ln-topnav__brand" onClick={() => onNav('/')}>
        <ShieldIcon size={26} className="ln-topnav__logo" />
        <span className="ln-topnav__name">InsureCo</span>
        <span className="ln-topnav__tag">Business</span>
      </div>

      <nav className="ln-topnav__links" aria-label="Main navigation">
        {NAV_ITEMS.map(item =>
          item.links ? (
            <div
              key={item.label}
              className="ln-nav-item"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a className="ln-nav-trigger">
                {item.label}
                <ChevronDown size={12} className="ln-nav-trigger__chevron" />
              </a>
              <div className={`ln-nav-dropdown${openMenu === item.label ? ' open' : ''}`}>
                {item.links.map(sub => (
                  <a key={sub.label} onClick={() => sub.action && onNav(sub.action)}>
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.label}
              className={item.action === activeRoute ? 'on' : undefined}
              onClick={() => item.action && onNav(item.action)}
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      <div className="ln-topnav__right">
        <ThemeToggle standalone />
        <button className="ln-btn ln-btn--ghost" onClick={() => onNav('/login')}>Log in</button>
        <button className="ln-btn ln-btn--primary ln-btn--sm" onClick={() => onNav('/signup')}>
          Get started <ArrowRight size={14} />
        </button>
      </div>
    </header>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
export function Footer({ onNav }) {
  const cols = [
    {
      h: 'Coverage',
      links: [
        { label: 'Fleet Insurance',    action: '/business/fleet' },
        { label: 'Property Insurance', action: '/business/properties' },
        { label: 'General Liability',  action: '/signup' },
        { label: 'Workers Comp',       action: '/signup' },
      ],
    },
    {
      h: 'Company',
      links: [
        { label: 'About',    action: '/about' },
        { label: 'Careers',  action: null },
        { label: 'Press',    action: null },
        { label: 'Contact',  action: null },
      ],
    },
    {
      h: 'Resources',
      links: [
        { label: 'Dashboard',            action: '/dashboard' },
        { label: 'Business dashboard',   action: '/business/dashboard' },
        { label: 'Financial dashboards', action: '/financial-dashboards' },
        { label: 'Map view',             action: '/business/map' },
      ],
    },
    {
      h: 'Legal',
      links: [
        { label: 'Privacy',   action: null },
        { label: 'Terms',     action: null },
        { label: 'Licenses',  action: null },
        { label: 'Security',  action: null },
      ],
    },
  ];

  return (
    <footer className="ln-footer">
      <div className="ln-footer__grid">
        <div className="ln-footer__left">
          <div className="ln-footer__brand">
            <ShieldIcon size={22} /> InsureCo
          </div>
          <p className="ln-footer__tag">
            Commercial insurance for operators. Licensed in all 50 states. A product of InsureCo
            Business &amp; Specialty Lines.
          </p>
        </div>
        <div className="ln-footer__cols">
          {cols.map(col => (
            <div key={col.h} className="ln-footer__col">
              <h5>{col.h}</h5>
              {col.links.map(l => (
                <a
                  key={l.label}
                  onClick={() => l.action && onNav(l.action)}
                  className={l.action ? '' : 'ln-footer__link--placeholder'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="ln-footer__bottom">
        <span>© 2026 InsureCo, Inc. NAIC 00421. All rights reserved.</span>
        <span>Licensed in 50 states · California Lic. #0L87432</span>
      </div>
    </footer>
  );
}
