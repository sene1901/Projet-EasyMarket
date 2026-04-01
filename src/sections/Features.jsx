// Features.jsx — version complète corrigée

import React, { useEffect, useRef } from 'react';
import phone from '../assets/phone.png';
import logo from '../assets/test.png';

const WHY_FEATURES = [
  { title: "Suivez vos ventes en temps réel" },
  { title: "Sachez ce qu'il vous reste en stock" },
  { title: "Identifiez vos produits les plus rentables" },
  { title: "Contrôlez votre activité même à distance" },
  { title: "Gardez un œil sur vos dépenses" },
  { title: "Décidez plus vite grâce à des chiffres clairs" },
];

const HOW_STEPS = [
  "Ajoutez vos produits et organisez votre catalogue",
  "Suivez vos chiffres en temps réel",
  "Enregistrez ventes, dépenses et mouvements de stock",
  "Analysez vos performances et prenez de meilleures décisions",
];

const KEY_FEATURES = [
  'Gestion des ventes et dépenses',
  'Import / export de produits',
  'Factures et tickets de caisse',
  'Multi-utilisateurs · Contrôle à distance',
  'Gestion du stock en temps réel',
  "Site e-commerce lié à l'application",
  'Tableau de bord de performance',
  'Suivi des encaissements et décaissements',
  'Suivi des meilleurs produits',
];

const dotStyle = {
  width: '14px',
  height: '14px',
  background: '#FF6B00',
  borderRadius: '50% 50% 50% 0',
  transform: 'rotate(-45deg)',
  flexShrink: 0,
  marginTop: '2px',
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    const el = ref.current;
    if (el) el.querySelectorAll('.reveal').forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Features() {
  const ref = useReveal();

  return (
    <div ref={ref}>

      {/* ══════════════════════════════════════
          SECTION 1 — Pourquoi EasyMarket
      ══════════════════════════════════════ */}
      <section id="fonctionnalites" style={{ padding: '100px 24px', background: '#f0f2f5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            className="why-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
          >
            {/* Phone */}
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                position: 'absolute', width: '300px', height: '300px',
                background: '#e2e6ea', borderRadius: '50%',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', zIndex: 1,
              }} />
              <img
                src={phone}
                alt="EasyMarket app"
                style={{
                  width: '370px', minHeight: '500px', maxWidth: '100%',
                  transform: 'rotate(-12deg)',
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.35))',
                  position: 'relative', zIndex: 2, transition: '0.4s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(-7deg) scale(1.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(-12deg)'; }}
              />
            </div>

            {/* Texte + Cards */}
            <div className="reveal">
              <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '14px' }}>
                <span style={{ color: '#1a1919' }}>Pourquoi </span>
                <span style={{ color: '#FF6B00' }}>EasyMarket ?</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 400, marginBottom: '24px', lineHeight: 1.25 }}>
                Prenez de meilleures décisions pour votre boutique
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {WHY_FEATURES.map((f, i) => (
                  <FeatureCard key={i} title={f.title} logo={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
            .why-grid img { width: 260px !important; min-height: auto !important; }
          }
          @media (max-width: 600px) {
            #fonctionnalites { padding: 60px 16px !important; }
            .why-grid img { width: 220px !important; }
            .why-grid > div:last-child > div:last-child { grid-template-columns: 1fr !important; gap: 12px !important; }
          }
          @media (max-width: 400px) {
            .why-grid img { width: 180px !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Comment ça marche
      ══════════════════════════════════════ */}
      <section id="demo" style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '10px' }}>
            Comment ça marche
          </h2>
          <p className="reveal" style={{ textAlign: 'center', color: '#888', fontSize: '15px', marginBottom: '48px' }}>
            Une gestion simple.<br />Des décisions plus intelligentes.
          </p>

          <div className="reveal how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {HOW_STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #E47000, #FFA800)',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  minHeight: '100px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(255,107,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Fonctionnalités clés
      ══════════════════════════════════════ */}
      <section style={{ padding: '90px 24px', background: '#F7F8FA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            className="fk-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Gauche — titre + cards + bouton */}
            <div className="reveal">
              <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '10px', lineHeight: 1.2 }}>
                <span style={{ color: '#FF6B00' }}>Fonctionnalités</span>{' '}
                <span style={{ color: '#1a1a1a' }}>clés</span>
              </h2>
              <p style={{ fontSize: '14px', fontWeight: 400, color: '#aaa', marginBottom: '28px', lineHeight: 1.6 }}>
                Tout ce qu'il vous faut pour gérer et développer votre commerce
              </p>

              {/* Cards 2 colonnes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
                {KEY_FEATURES.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '13px 15px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      border: '1px solid #f0f0f0',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.09)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={dotStyle} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              
               <button
                style={{
                  background: '#053965', color: '#fff', border: 'none',
                  padding: '13px 24px', borderRadius: '30px',
                  fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                  fontFamily: 'inherit', transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#074d8c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#053965'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Demander une démo
              </button>
                </div>




             
            </div>

            {/* Droite — Phone droit */}
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={phone}
                alt="App EasyMarket"
                style={{
                  width: '320px',
                  maxWidth: '100%',
                  filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.18))',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .fk-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .fk-grid img { width: 260px !important; }
          }
          @media (max-width: 600px) {
            .fk-grid img { width: 220px !important; }
          }
          @media (max-width: 400px) {
            .fk-grid img { width: 180px !important; }
          }
        `}</style>
      </section>

      {/* ── Animations reveal globales ── */}
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 800px) {
          .why-grid, .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}

/* ══════════════════════════════════════
   FeatureCard — Section 1
══════════════════════════════════════ */
function FeatureCard({ title, logo }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '14px',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: hovered ? '0 6px 18px rgba(255,107,0,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        cursor: 'default',
        border: `1.5px solid ${hovered ? '#ffcca0' : '#ebebeb'}`,
      }}
    >
      <div style={{
        width: '36px', height: '36px', borderRadius: '10px',
        background: hovered ? '#FF6B00' : '#fff3e8',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'all 0.25s ease',
      }}>
        <img
          src={logo}
          alt="icon"
          style={{
            width: '22px', height: '22px', objectFit: 'contain',
            filter: hovered ? 'brightness(0) invert(1)' : 'none',
            transition: 'filter 0.25s ease',
          }}
        />
      </div>
      <span style={{ fontSize: '12px', fontWeight: 700, color: '#222', lineHeight: 1.3, flex: 1 }}>
        {title}
      </span>
      <div style={{ width: '8px', height: '8px', background: '#FF6B00', borderRadius: '50%', flexShrink: 0 }} />
    </div>
  );
}