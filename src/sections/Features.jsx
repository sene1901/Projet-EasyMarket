import React, { useEffect, useRef } from 'react';
// import  SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import phone from '../assets/phone.png'; 

const WHY_FEATURES = [
  { icon: '📊', title: 'Suivez vos ventes en temps réel', description: "Visualisez votre chiffre d'affaires instantanément." },
  { icon: '📦', title: 'Sachez ce qu’il vous reste en stock', description: "Gérez votre inventaire facilement." },
  { icon: '🏆', title: 'Identifiez vos produits rentables', description: "Optimisez votre catalogue." },
  { icon: '📱', title: 'Contrôlez votre activité à distance', description: "Accédez partout." },
  { icon: '💸', title: 'Gardez un œil sur vos dépenses', description: "Maîtrisez vos coûts." },
  { icon: '⚡', title: 'Décidez plus vite', description: "Grâce à des chiffres clairs." },
];

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach(c => observer.observe(c));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Features() {
  const ref = useReveal();

  return (
    <div ref={ref}>
      {/* WHY SECTION */}
      <section
        id="fonctionnalites"
        style={{
          padding: '100px 24px',
          background: '#f5f5f5' 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="why-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center'
            }}
          >

            {/* PHONE IMAGE */}
            <div
              className="reveal"
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* cercle décoratif */}
              <div
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  background: '#eaeaea',
                  borderRadius: '50%',
                  zIndex: 1
                }}
              />

              <img
                src={phone}
                alt="EasyMarket app"
                style={{
                  width: '360px',
                  maxWidth: '100%',
                  transform: 'rotate(-15deg)',
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.35))',
                  position: 'relative',
                  zIndex: 2,
                  transition: '0.4s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotate(-10deg) scale(1.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotate(-15deg)';
                }}
              />
            </div>

            {/* TEXT */}
            <div className="reveal">
              <div
                style={{
                  background: '#fff3e8',
                  color: '#ff6b00',
                  display: 'inline-block',
                  padding: '6px 14px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  marginBottom: '16px'
                }}
              >
                Pourquoi EasyMarket ?
              </div>

              <h2
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  marginBottom: '16px'
                }}
              >
                Prenez de meilleures décisions<br />
                pour votre <span style={{ color: '#ff6b00' }}>boutique</span>
              </h2>

              <p style={{ marginBottom: '30px', color: '#666' }}>
                Toutes les informations dont vous avez besoin.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}
              >
                {WHY_FEATURES.map((f, i) => (
                  <FeatureCard key={i} {...f} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            @media (max-width: 900px) {
              .why-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </section>
    </div>
  );
}