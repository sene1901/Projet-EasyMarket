import React from 'react';
import phone from '../assets/phone.png';

export default function Hero() {
  return (
    <section
      id="apropos"
    style={{
        background: 'linear-gradient(100deg, #F97316 0%, #FB8C00 60%, #F57C00 100%)',
        minHeight: '460px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px',
        marginTop: '60px',
      }}
    >
      {/* ── Lueurs décoratives de fond ── */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.07)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '2%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(0,0,0,0.06)', pointerEvents: 'none',
      }} />

      {/* ── Grille 2 colonnes ── */}
      <div
        className="hero-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '56px 48px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >

        {/* ══ COLONNE GAUCHE ══ */}
        <div style={{ animation: 'fadeUp 0.7s ease both' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.2vw, 48px)',
              fontWeight: '700',
              color: '#fff',
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              marginBottom: '36px',
            }}
          >
            EasyMarket, l'outil{' '}
            <br />d'aide à la décision des
            <br />commerçants africains
          </h1>

          <div style={{
            display: 'flex', gap: '16px',
            flexWrap: 'wrap', marginBottom: '40px',
            alignItems: 'center',
          }}>
            <a
              href="#demo"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 30px',
                background: '#1a2b3c',
                color: '#fff',
                borderRadius: '100px',
                fontSize: '15px', fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0f1d2b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1a2b3c';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Demander une démo
            </a>

            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 30px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.55)',
                borderRadius: '100px',
                fontSize: '15px', fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Commencer maintenant
            </a>
          </div>
        </div>

        {/* ══ COLONNE DROITE – téléphone + 2 badges ══ */}
        <div
          className="hero-mockup"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'relative',
            minHeight: '420px',
            overflow: 'hidden',   // ← coupe le bas du téléphone
          }}
        >

          {/* ── Image du téléphone – ancrée en bas, légèrement débordante ── */}
          <img
            src={phone}
            alt="EasyMarket app"
            style={{
              width: '370px',
                minHeight: '500px', 
              maxWidth: '100%',
              position: 'absolute',
              bottom: '-30px',          // ← dépasse un peu en bas (effet coupé)
              left: '50%',
              transform: 'translateX(-50%) rotate(8deg)',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.40))',
              animation: 'floatPhone 4s ease-in-out infinite',
              zIndex: 1,
            }}
          />

          {/* ── Badge Google Play – EN HAUT À DROITE ── */}
          <div
            style={{
              position: 'absolute',
              right: '4%',
              top: '12%',
              background: '#fff',
              padding: '10px 16px',
              borderRadius: '14px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#1E2A3B',
              whiteSpace: 'nowrap',
              zIndex: 2,
              animation: 'fadeUp 0.9s 0.3s ease both',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76A2 2 0 0 0 5 23l10.54-6.08-2.9-2.9L3.18 23.76Z" fill="#EA4335"/>
              <path d="M21.54 10.27 18.46 8.5l-3.27 3 3.27 3 3.1-1.79a1.5 1.5 0 0 0 0-2.44Z" fill="#FBBC04"/>
              <path d="M3.18.24a2 2 0 0 0-.18.87v21.78c0 .3.06.6.18.87l.1.1 12.2-12.2v-.3L3.28.14l-.1.1Z" fill="#4285F4"/>
              <path d="M15.54 16.92 5 23a2 2 0 0 0 1.82.24l.15-.08L19.82 16l-4.28.92Z" fill="#34A853"/>
            </svg>
            Google Play
          </div>

          {/* ── Badge Google Play – EN BAS À GAUCHE ── */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              bottom: '22%',
              background: '#fff',
              padding: '10px 16px',
              borderRadius: '14px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#1E2A3B',
              whiteSpace: 'nowrap',
              zIndex: 2,
              animation: 'fadeUp 1.1s 0.5s ease both',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76A2 2 0 0 0 5 23l10.54-6.08-2.9-2.9L3.18 23.76Z" fill="#EA4335"/>
              <path d="M21.54 10.27 18.46 8.5l-3.27 3 3.27 3 3.1-1.79a1.5 1.5 0 0 0 0-2.44Z" fill="#FBBC04"/>
              <path d="M3.18.24a2 2 0 0 0-.18.87v21.78c0 .3.06.6.18.87l.1.1 12.2-12.2v-.3L3.28.14l-.1.1Z" fill="#4285F4"/>
              <path d="M15.54 16.92 5 23a2 2 0 0 0 1.82.24l.15-.08L19.82 16l-4.28.92Z" fill="#34A853"/>
            </svg>
            Google Play
          </div>

        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes floatPhone {
          0%,100% { transform: translateX(-50%) rotate(8deg) translateY(0px); }
          50%      { transform: translateX(-50%) rotate(8deg) translateY(-14px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
            padding: 40px 20px 64px !important;
          }
          .hero-mockup { display: none !important; }
        }
      `}</style>
    </section>
  );
}