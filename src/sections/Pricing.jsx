
import Pricingcard from '../components/Pricingcard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { Lightbulb } from "lucide-react";


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
       <>
        Boutique en ligne connectée <br />
        à votre application de gestion
      </>,
      '1 compte principal (admin)',
      '4 comptes vendeurs (accès limités)',
      'Suivi des ventes et performances',
    ],
    cta: 'Commencer maintenant',
  },
];

export default function Pricing() {
  return (
   <section id="pricing" className="py-20 px-6 bg-white">
  <div className="max-w-[780px] mx-auto ">
    <h2 className="font-montserrat text-[clamp(24px,5vw,38px)] font-bold leading-[50px] tracking-[-0.07em] text-center text-[#1a1a2e] mb-3">
      Un petit investissement pour éviter de grosses pertes .
    </h2>
    <p className="font-montserrat text-[16px] font-medium leading-[35px] tracking-[0] text-center text-[#1a1a2e] mb-12">
      Payez uniquement par utilisateur.<br />
      Ajoutez des options selon vos besoins.
    </p>

    <div className="flex gap-6 justify-center flex-wrap mb-8">
      {PLANS.map((plan, i) => <Pricingcard key={i} {...plan} />)}
    </div>

    {/* Trust bar */}
<div
  className="
    bg-[#FFFF]
    rounded-[14px]
    border border-[#e87722]
    px-5 py-4

    flex flex-col items-center text-center
    md:flex-row md:items-center md:text-left
    gap-3
  "
>
  {/* Icon */}
  <Lightbulb
    size={28}
    color="#e87722"
    fill="#e87722"
    strokeWidth={1}
    className="shrink-0"
  />

  {/* Text */}
  <p className="text-[13px] text-[#333] m-0 leading-[18px]">
    <strong>Contrôlez</strong> votre business à distance dès{" "}
    <strong>2 comptes</strong> : 1 admin + 1 vendeur (accès limité) ={" "}
    <strong>11 800 FCFA/mois</strong>
  </p>
</div>
  </div>
</section>
  );
}