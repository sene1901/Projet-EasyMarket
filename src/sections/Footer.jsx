import React from 'react';
import logo from '../assets/logo.png';
const NAV_LINKS = ['Fonctionnalités', 'Tarifs', 'Equipements', 'Témoignages','FAQ','Clients', 'Contact'];




const SOCIALS = [
  {
    label: 'Facebook',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    fill: true,
  },
  {
    label: 'Instagram',
    fill: false,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    fill: true,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'TikTok',
    fill: true,
    icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />,
  },
];

export default function Footer() {
  return (
    <footer style={{
      fontFamily: 'Nunito, sans-serif',
      background: 'linear-gradient(135deg, #e55a00     0%, #E47000 60%, #FF8C00 100%)',
      padding: '48px 48px 0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        paddingBottom: '40px',
        alignItems: 'start',
        justifyContent:'center',
      }}>
        {/* Logo + description */}
       {/* Logo + description */}
<div>
  <img
    src={logo}
    alt="EasyMarket"
    style={{ height: '48px', marginBottom: '14px', objectFit: 'contain' }}
  />
  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, maxWidth: '230px', margin: 0,fontWeight:700 }}>
    L'outil d'aide à la  décision des commerçants africains
  </p>
</div>

        {/* Navigation */}
        <nav>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none' }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Réseaux sociaux */}
        <div>
          <p style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginBottom: '16px', marginTop: 0 }}>
            Rejoignez nous
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill={s.fill ? '#fff' : 'none'} width="17" height="17">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        borderTop: '1px solid rgba(255,255,255,0.25)',
        padding: '18px 0', textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0, fontWeight: '600' }}>
          © 2026 EasyMarket. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}