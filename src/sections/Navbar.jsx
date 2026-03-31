import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#demo', label: 'Démo' },
  { href: '#apropos', label: 'À-propos' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--gray-200)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: '38px' }} />
          </a>

          {/* Desktop menu */}
         <ul className="desktop-nav" style={{
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
}}>
  {NAV_LINKS.map(link => (
    <li key={link.href}>
      <a
        href={link.href}
        style={{
          padding: '8px 14px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          color: 'var(--gray-600)',
          transition: 'all 0.2s',
          display: 'block',
        }}
        onMouseEnter={e => {
          e.target.style.color = 'var(--orange)';
          e.target.style.background = 'var(--orange-50)';
        }}
        onMouseLeave={e => {
          e.target.style.color = 'var(--gray-600)';
          e.target.style.background = 'transparent';
        }}
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* CTA (hidden on mobile) */}
            <div className="cta-desktop">
              <Button href="#" variant="primary" size="sm">
                Téléchargement de L'appli
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hamburger"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--gray-100)',
                border: 'none',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}

          <Button href="#" variant="primary" style={{ width: '100%', marginTop: '10px' }}>
            Télécharger l'appli
          </Button>
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }

        .mobile-menu.open {
          max-height: 400px;
          padding: 20px;
          border-top: 1px solid var(--gray-200);
        }

        .mobile-link {
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--gray-700);
        }

        .mobile-link:hover {
          background: var(--gray-100);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }

          .cta-desktop {
            display: none;
          }
        }
      `}</style>
    </>
  );
}