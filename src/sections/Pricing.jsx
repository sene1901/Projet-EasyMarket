import React, { useEffect, useRef, useState } from 'react';
import Pricingcard from '../components/Pricingcard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const PLANS = [
  {
    plan: 'Formule Solo',
    description: 'Pour les commerçants qui veulent démarrer simplement.',
    price: '5 900',
    period: 'par utilisateur / mois',
    features: [
      'Un utilisateur',
      'Gestion des ventes',
      'Gestion du stock simplifiée',
      'Suivi des dépenses',
      'Tableau de bord intuitif',
      'Factures et tickets',
    ],
    cta: 'Commencer maintenant',
  },
  {
    plan: 'Formule Team',
    description: 'Pour les équipes qui veulent mieux collaborer.',
    price: '15 000',
    period: 'par utilisateur / mois',
    features: [
      'Plusieurs comptes utilisateurs',
      'Accès adaptés selon les rôles',
      'Suivi centralisé de l’activité',
      'Contrôle renforcé',
      'Tableau de bord partagé',
    ],
    cta: 'Commencer maintenant',
  },
  {
    plan: 'Formule Team',
    description: 'Pour les commerces qui veulent aller plus loin.',
    price: '25 000',
    period: 'par utilisateur / mois',
    features: [
      'Gestion avancée',
      'Equipe et supervision multi-utilisateurs',
      'Pilotage plus structuré',
      'Site e-commerce lié à l’application',
      'Accompagnement à la mise en place',
    ],
    cta: 'Commencer maintenant',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" style={{ padding: '100px 24px', background: 'var(--gray-50)' }} ref={ref}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      
        <div className="reveal" style={{ textAlign: 'center',  }}>
          <SectionTitle  title="Choisissez la " highlight="Formule" subtitle="qui Vous Convients!" center />
          <p>Des offres simple pour grandir à votre rythme</p>
        </div>

        {/* Toggle */}
        

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }} className="pricing-grid">
          {PLANS.map((plan, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <Pricingcard {...plan} />
            </div>
          ))}
        </div>

        {/* Trust line */}
       
      </div>
      <style>{`@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}