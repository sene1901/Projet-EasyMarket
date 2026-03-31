import React, { useEffect, useRef, useState } from 'react';
import PricingCard from '../components/PricingCard';
import SectionTitle from '../components/SectionTitle';

const PLANS = [
  {
    plan: 'Starter',
    price: 'Gratuit',
    period: '',
    features: [
      '1 utilisateur',
      'Jusqu\'à 50 produits',
      'Gestion des ventes basique',
      'Tableau de bord',
      'Support communautaire',
    ],
    cta: 'Commencer gratuitement',
  },
  {
    plan: 'Pro',
    price: '15 000',
    period: ' F CFA/mois',
    features: [
      '3 utilisateurs',
      'Produits illimités',
      'Gestion stock avancée',
      'Factures & tickets de caisse',
      'Import/export produits',
      'Tableau de bord complet',
      'Support prioritaire',
    ],
    popular: true,
    cta: 'Essayer 14 jours gratuits',
  },
  {
    plan: 'Business',
    price: '35 000',
    period: ' F CFA/mois',
    features: [
      'Utilisateurs illimités',
      'Produits illimités',
      'Site e-commerce inclus',
      'Multi-boutiques',
      'Contrôle à distance',
      'API & intégrations',
      'Account manager dédié',
    ],
    cta: 'Contacter les ventes',
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <SectionTitle label="Tarification" title="Des prix" highlight="transparents" subtitle="Commencez gratuitement, évoluez selon vos besoins." center />
        </div>

        {/* Toggle */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '14px', fontWeight: annual ? '400' : '600', color: annual ? 'var(--gray-400)' : 'var(--navy)' }}>Mensuel</span>
          <button
            onClick={() => setAnnual(!annual)}
            style={{
              width: '52px',
              height: '28px',
              borderRadius: '100px',
              background: annual ? 'var(--orange)' : 'var(--gray-200)',
              position: 'relative',
              transition: 'background 0.3s',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: annual ? '26px' : '3px',
              width: '22px',
              height: '22px',
              background: '#fff',
              borderRadius: '50%',
              transition: 'left 0.3s',
              boxShadow: 'var(--shadow-sm)',
            }} />
          </button>
          <span style={{ fontSize: '14px', fontWeight: annual ? '600' : '400', color: annual ? 'var(--navy)' : 'var(--gray-400)' }}>
            Annuel <span style={{ background: 'var(--orange-50)', color: 'var(--orange)', borderRadius: '100px', padding: '2px 8px', fontSize: '11px', fontWeight: '700', border: '1px solid var(--orange-light)' }}>-20%</span>
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }} className="pricing-grid">
          {PLANS.map((plan, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="reveal" style={{ textAlign: 'center', marginTop: '48px', fontSize: '14px', color: 'var(--gray-400)' }}>
          ✅ Sans engagement • ✅ Annulation à tout moment • ✅ Paiement sécurisé • ✅ Support inclus
        </p>
      </div>
      <style>{`@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}