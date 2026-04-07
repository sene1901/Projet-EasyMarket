import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X, ShoppingCart } from 'lucide-react';

const NAV_LINKS = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#equipements', label: 'Equipements' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: '#053965',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>

          {/* Logo gauche */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src={logo} alt="logo" style={{ height: '36px' }} />
          </a>

          {/* Liens desktop centrés */}
          <ul style={{
            display: 'flex', gap: '4px', alignItems: 'center',
            listStyle: 'none', margin: 0, padding: 0,
            flex: 1, justifyContent: 'center',
          }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}
                  style={{
                    padding: '6px 14px', borderRadius: '6px',
                    fontSize: '14px', fontWeight: '500',
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none', transition: 'all 0.2s',
                    display: 'block', whiteSpace: 'nowrap',
                    
                  }}
                  onMouseEnter={e => {
                    e.target.style.color = '#ffffff';
                    e.target.style.background = 'rgba(255,255,255,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = 'rgba(255,255,255,0.85)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Droite : panier + bouton */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>

            {/* Icône panier */}
            <div className="cta-desktop" style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingCart size={22} color="white" />
              <span style={{
                position: 'absolute', top: '-6px', right: '-6px',
                background: '#FFA800', color: 'white',
                borderRadius: '50%', width: '16px', height: '16px',
                fontSize: '10px', fontWeight: '700',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>0</span>
            </div>

            
            
             <a href="https://easymarket.sn"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-desktop demo-btn"
            >
              {/* Cercle blanc décoratif — pointer-events: none pour ne pas bloquer le clic */}
              <span className="demo-logo-circle">
                <img src={logo} alt="" style={{ pointerEvents: 'none' }} />
              </span>
              <span className="demo-text" style={{ pointerEvents: 'none' }}>
                Demo gratuite
              </span>
            </a>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="hamburger"
              style={{
                width: '40px', height: '40px', borderRadius: '8px',
                background: 'rgba(255,255,255,0.12)', border: 'none',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'white',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}
          
           <a href="https://easymarket.sn"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
            style={{ marginTop: '10px' }}
          >
            <span className="demo-logo-circle">
              <img src={logo} alt="" style={{ pointerEvents: 'none' }} />
            </span>
            <span className="demo-text" style={{ pointerEvents: 'none' }}>
              Demo gratuite
            </span>
          </a>
        </div>
      </nav>

      <style>{`

        /* ===== Bouton pill démo ===== */
        .demo-btn {
          display: inline-flex;
          align-items: center;
          background: #FFA800;
          border-radius: 50px;
          text-decoration: none;
          padding: 4px 22px 4px 4px;
          gap: 10px;
          transition: background 0.2s, transform 0.15s;
          cursor: pointer;
          pointer-events: auto;
        }

        .demo-btn:hover {
          background: #e69600;
          transform: scale(1.03);
        }

        
        .demo-logo-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          background: white;
          overflow: hidden;
          flex-shrink: 0;
          pointer-events: none;
        }


        .demo-logo-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
  flex-shrink: 0;
  pointer-events: none;

  transform: rotate(-15deg); 
}


demo-logo-circle {
  transform: rotate(-15deg);
}

.demo-logo-circle img {
  transform: rotate(15deg); /* inverse */
}
        .demo-logo-circle img {
          height: 22px;
          width: 22px;
          object-fit: contain;
          display: block;
          pointer-events: none;
        }

        .demo-text {
          color: white;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.01em;
          pointer-events: none;
        }

        /* ===== Menu mobile ===== */
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #053965;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }

        .mobile-menu.open {
          max-height: 420px;
          padding: 16px 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .mobile-link {
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          font-weight: 500;
        }

        .mobile-link:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        /* ===== Responsive ===== */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .cta-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}