const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: '#', icon: 'IG' },
  { id: 'twitter',   label: 'Twitter/X', href: '#', icon: 'X'  },
  { id: 'youtube',   label: 'YouTube',   href: '#', icon: 'YT' },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      aria-label="SonicX site footer"
      style={{
        padding: '3rem clamp(1.5rem, 6vw, 7rem)',
        background: '#070707',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#f5f5f5',
          }}
        >
          <span style={{ color: '#c8a96e' }}>Sonic</span>X
        </span>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              flexWrap: 'wrap',
            }}
          >
            {['Engineering', 'Acoustics', 'Design', 'Order'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,245,245,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#c8a96e')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,245,0.4)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {SOCIAL_LINKS.map(({ id, label, href, icon }) => (
            <a
              key={id}
              id={`footer-social-${id}`}
              href={href}
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid rgba(255,255,255,0.08)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                color: 'rgba(245,245,245,0.4)',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)';
                e.currentTarget.style.color = '#c8a96e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(245,245,245,0.4)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Legal row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: 'rgba(245,245,245,0.2)',
          }}
        >
          © 2026 SonicX Audio. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.58rem',
                letterSpacing: '0.08em',
                color: 'rgba(245,245,245,0.2)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgba(245,245,245,0.5)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,245,0.2)')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
