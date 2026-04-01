import logoFooter from '../assets/logoFooter.png';

const NAV_LINKS = ['Pricing', 'Démo', 'A-propos', 'Clients', 'Contact'];

const SOCIALS = [
  {
    label: 'Facebook',
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
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
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        fontFamily: 'Nunito, sans-serif',
        background: 'linear-gradient(135deg, #FF8C00 0%, #FF6B00 60%, #e55a00 100%)',
        padding: '60px 48px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '40px',
          paddingBottom: '48px',
        }}
      >
        {/* Logo + description */}
        <div>
          <img
            src={logoFooter}
            alt="EasyMarket"
            style={{
              height: '48px',
              mixBlendMode: 'screen',
              marginBottom: '16px',
            }}
          />
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.7,
              maxWidth: '220px',
            }}
          >
            Obtenez un outil de gestion et/ou site e-commerce en un temps record !
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.92)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.92)')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Réseaux sociaux */}
        <div>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            Rejoignez nous
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.35)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.25)',
          padding: '20px 0',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
          © 2026 EasyMarket. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}