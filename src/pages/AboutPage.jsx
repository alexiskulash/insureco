import './AboutPage.scss';

export default function AboutPage() {
  const mission = [
    {
      title: 'Mission',
      body: 'Eliminate the friction between operators and the coverage they need. Insurance should move as fast as your business does.',
    },
    {
      title: 'Values',
      body: 'Transparency in pricing, speed in claims, and honesty in every interaction — no surprise letters, no opaque adjusters.',
    },
    {
      title: 'Approach',
      body: 'Technology-first underwriting means your quote reflects your actual risk, not an industry average from 1987.',
    },
  ];

  const stats = [
    { k: 'Founded',           v: '2019',   d: 'Chicago, IL' },
    { k: 'Businesses served', v: '3,400+', d: 'across 48 states' },
    { k: 'Claims paid',       v: '$840M+', d: '2019–2025' },
    { k: 'Avg. claim close',  v: '72 hrs', d: 'vs. industry avg of 30 days' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <div className="sp-page-hero sp-page-hero--dark">
        <div className="sp-eyebrow">Company</div>
        <h1>
          Built for the operators who{' '}
          <strong>keep commerce moving.</strong>
        </h1>
        <p className="sp-page-hero__lead">
          InsureCo was founded to fix commercial insurance for the businesses that can't afford
          to wait — fleets, property portfolios, and complex liability structures that deserve
          a platform, not a paper trail.
        </p>
      </div>

      {/* Mission */}
      <div className="sp-section">
        <div className="sp-kicker">Our mission</div>
        <h2>
          Insurance built around{' '}
          <strong>your operations.</strong>
        </h2>
        <p className="sp-section__lead">
          We started with a simple question: why does getting commercial insurance feel like filing
          a tax return? Three policy lines, one platform, zero runaround.
        </p>
        <div className="about-mission-grid">
          {mission.map(m => (
            <div key={m.title} className="about-mission-card">
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div className="sp-statband">
        {stats.map(s => (
          <div key={s.k}>
            <div className="sp-statband__k">{s.k}</div>
            <div className="sp-statband__v">{s.v}</div>
            <div className="sp-statband__d">{s.d}</div>
          </div>
        ))}
      </div>

      {/* Team placeholder */}
      <div className="sp-section sp-section--alt sp-section--no-bottom">
        <div className="sp-kicker">Team</div>
        <h2>Leadership</h2>
        <p className="sp-section__lead">
          Our leadership team brings experience from insurance, logistics, and enterprise software.
          Full bios and profiles coming soon.
        </p>
        <div className="about-team-placeholder">
          {['CEO', 'CTO', 'COO', 'VP Claims', 'VP Growth', 'General Counsel'].map(role => (
            <div key={role} className="about-team-card">
              <div className="about-team-card__avatar" />
              <div className="about-team-card__role">{role}</div>
              <div className="about-team-card__name">Coming soon</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
