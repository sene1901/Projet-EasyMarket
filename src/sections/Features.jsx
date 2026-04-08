// Features.jsx — version finale corrigée

import React, { useEffect, useRef } from 'react';
import phone from '../assets/phone3.png';
import phone4 from '../assets/PHONE4.png';
import logo from '../assets/test.png';

const WHY_FEATURES = [
  { title: "Suivez vos ventes en temps réel" },
  { title: "Évitez les ruptures et les pertes de stock" },
  { title: "Identifiez vos produits rentables" },
  { title: "Maîtrisez vos dépenses" },
  { title: "Prenez de meilleures décisions" },
];

const HOW_STEPS = [
  "Ajoutez vos produits en quelques minutes",
  "Suivez votre activité en temps réel",
  "Enregistrez vos ventes et dépenses facilement",
  "Pilotez votre business avec des chiffres clairs",
];

const KEY_FEATURES = [
  'Suivi des ventes et dépenses',
  'Gestion du stock',
  'Factures et tickets de caisse',
  'Tableau de bord',
  "Gestion d'équipe",
  'Import de produits',
  'Votre boutique en ligne en 2 semaines',
];

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
                className="phone-img"
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
              <p style={{ color: '#555', marginBottom: '30px', fontSize: '16px', lineHeight: 1.5 }}>
                Voyez clairement ce qui vous rapporte... et ce qui vous fait perdre
              </p>

              {/* 4 cards en grille 2×2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' }}>
                {WHY_FEATURES.slice(0, 4).map((f, i) => (
                  <FeatureCard key={i} title={f.title} logo={logo} />
                ))}
              </div>

              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginTop: '12px',
                alignItems: 'stretch',
              }}>
                
                <FeatureCard title={WHY_FEATURES[4].title} logo={logo} />

                {/* Bouton Réserver */}
                <button
                  style={{
                    background: '#E47000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(255,107,0,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop:'10px',
                    transition: 'background 0.2s',
                    width: '260px',
                    height: '40px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c95e00'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#E47000'; }}
                >
                  {/* Icône carré blanc à gauche */}
                  
                  Réserver un démo
                </button>
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
          <h2 className="reveal" style={{ fontSize: '32px', fontWeight: 800, textAlign: 'center', marginBottom: '48px' }}>
            Comment ça marche
          </h2>

          <div className="reveal how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {HOW_STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#053965',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  color: '#fff',
                  lineHeight: 1.5,
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(94,116,161,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '54px', fontWeight: 900, color: '#fff', lineHeight: 1, flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: '15px', fontWeight: 600 }}>
                  {step}
                </span>
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
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center',justifyContent:'center' }}
          >
            {/* Gauche — titre + cards + bouton */}
            <div className="reveal">
              <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '10px', lineHeight: 1.2 }}>
                <span style={{ color: '#FF6B00' }}>Fonctionnalités</span>{' '}
                <span style={{ color: '#1a1a1a' }}>clés</span>
              </h2>
              <p style={{ fontSize: '14px', fontWeight: 400, color: '#1a1a1a', marginBottom: '28px', lineHeight: 1.6 }}>
                Tout ce qu'il vous faut pour gérer et développer votre commerce
              </p>

              {/* Grille 2 colonnes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
                {KEY_FEATURES.slice(0, 6).map((feat, i) => (
                  <KeyFeatureCard key={i} title={feat} />
                ))}
                {/* Dernière feature sur toute la largeur */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <KeyFeatureCard title={KEY_FEATURES[6]} />
                </div>
              </div>

              <button
                style={{
                  background: '#E47000',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 48px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s, transform 0.2s',
                  width: '100%',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#c95e00'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#E47000'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Demander une démo
              </button>
            </div>

            {/* Droite — Phone */}
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={phone4}
                alt="App EasyMarket"  className="phone-img"
                style={{
                  width: '370px', minHeight: '500px',
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

       
      </section>


    </div>
  );
}

/* ══════════════════════════════════════
   FeatureCard — Section 1 (Pourquoi EasyMarket)
══════════════════════════════════════ */
function FeatureCard({ title, logo }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
      position:'relative',
        background: '#fff',
        borderRadius: '14px',
        padding: '14px 14px',
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
            color: '#f19c1c',
            transition: 'filter 0.25s ease',
          }}
        />
      </div>
      <span style={{ fontSize: '12px', fontWeight: 700, color: '#222', lineHeight: 1.3, flex: 1 }}>
        {title}
      </span>
      <div
        style={{
          position: 'absolute',
          left: '-14px', 
          width: '14px',
          height: '25px',
          background: '#FF6B00',
          borderRadius: '40px 0px 0px 40px',
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════
   KeyFeatureCard — Section 3 (Fonctionnalités)
  
══════════════════════════════════════ */
function KeyFeatureCard({ title }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', 
        background: '#fff',
        borderRadius: '8px',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingRight: '18px',
        paddingLeft: '20px', 
        marginLeft:'20px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        boxShadow: hovered
          ? '0 6px 20px rgba(0,0,0,0.09)'
          : '0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid #f0f0f0',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        cursor: 'default',
      }}
    >
      {/* Demi-cercle à moitié en dehors */}
      <div
        style={{
          position: 'absolute',
          left: '-14px', // fait sortir le cercle
          width: '14px',
          height: '25px',
          background: '#FF6B00',
          borderRadius: '40px 0px 0px 40px',
        }}
      />

      <span
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#1a1a1a',
          lineHeight: 1.4,
        }}
      >
        {title}
      </span>
    </div>
  );
}