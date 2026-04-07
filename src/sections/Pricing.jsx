
import Pricingcard from '../components/Pricingcard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { FaShieldAlt } from "react-icons/fa";


const PLANS = [
  {
    plan: 'Formule unique',
    price: '5 900',
    period: 'par utilisateur / mois',
    features: [
      'Gestion des ventes',
      'Gestion de stock',
      'Suivi des dépenses',
      'Tableau de bord',
      'Factures & tickets',
    ],
    cta: 'Commencer maintenant',
  },
  {
    plan: 'Option e-commerce',
    price: '25 000',
    period: '/ mois',
    features: [
      'Boutique en ligne connectée à votre application de gestion',
      '1 compte principal (admin)',
      '4 comptes vendeurs (accès limités)',
      'Suivi des ventes et performances',
    ],
    cta: 'Commencer maintenant',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a2e', marginBottom: '12px' }}>
          Un petit investissement pour éviter de grosses pertes.
        </h2>
        <p style={{ fontSize: '14px', color: '#1a1a2e', marginBottom: '48px', lineHeight: '1.7' }}>
          Payez uniquement par utilisateur.<br />
          Ajoutez des options selon vos besoins.
        </p>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          {PLANS.map((plan, i) => <Pricingcard key={i} {...plan} />)}
        </div>

        {/* Trust bar */}
        <div style={{
          background: '#fff', borderRadius: '999px', border: '1.5px solid #e87722',
          padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px'
        }}>
         <FaShieldAlt style={{ fontSize: '20px', color: '#000' }} />
          <p style={{ fontSize: '12.5px', color: '#333', margin: 0, textAlign: 'left' }}>
            <strong>Contrôlez</strong> votre business à distance dès <strong>2 comptes</strong> : 1 admin + 1 vendeur (accès limité) = <strong>11 800 FCFA/mois</strong>
          </p>
        </div>
      </div>
    </section>
  );
}