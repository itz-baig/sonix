import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const NAV_LINKS = [
  { id: 'engineering', label: 'Engineering', href: '#engineering' },
  { id: 'acoustics',   label: 'Acoustics',   href: '#acoustics'   },
  { id: 'design',      label: 'Design',       href: '#design'      },
  { id: 'order',       label: 'Order',        href: '#order'       },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  /* Entrance animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  /* Detect scroll direction to show/hide navbar and intensify glass */
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Intensify glass effect on scroll
      setScrolled(currentScrollY > 60);

      // 2. Hide on scroll down, show on scroll up
      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setVisible(false);
        } else {
          // Scrolling up
          setVisible(true);
        }
      } else {
        // Always show at the top of the page
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        height: '72px',
        background: scrolled
          ? 'rgba(10,10,10,0.88)'
          : 'rgba(10,10,10,0.40)',
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Brand Wordmark */}
      <a
        href="#hero"
        id="nav-logo"
        onClick={(e) => handleNavClick(e, '#hero')}
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: '#f5f5f5',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ color: '#c8a96e' }}>Sonic</span>X
      </a>

      {/* Nav Links */}
      <ul
        style={{
          display: 'flex',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          listStyle: 'none',
          alignItems: 'center',
        }}
      >
        {NAV_LINKS.map(({ id, label, href }) => (
          <li key={id} className="nav-item-link">
            <a
              id={`nav-link-${id}`}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,245,245,0.65)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#c8a96e')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(245,245,245,0.65)')}
            >
              {label}
            </a>
          </li>
        ))}

        {/* CTA Button */}
        <li>
          <a
            id="nav-cta"
            href="#order"
            onClick={(e) => handleNavClick(e, '#order')}
            className="btn-primary"
            style={{ fontSize: '0.75rem', padding: '0.625rem 1.5rem' }}
          >
            Pre-Order
          </a>
        </li>
      </ul>

      <style>{`
        @media (max-width: 768px) {
          .nav-item-link {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
