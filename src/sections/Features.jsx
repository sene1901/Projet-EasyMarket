import React, { useEffect, useRef } from 'react';
import phone3 from '../assets/phone3.png';
import phone4 from '../assets/PHONE4.png';
import FeatureCard from '../components/Featurecard';

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

      {/* SECTION 1 — Pourquoi EasyMarket */}
<section id="fonctionnalites" className="py-[100px] bg-[#F5F5F5]">
  <div className="max-w-[1150px] mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">

      {/* IMAGE desktop uniquement */}
      <div className="hidden md:flex justify-center">
        <img
          src={phone3}
          alt="EasyMarket app"
          className="relative z-[5] w-[290px] h-[450px] drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
          style={{ transform: 'rotate(-10deg) translateX(16px) translateY(10px)' }}
        />
      </div>

      {/* CONTENU */}
      <div className="flex flex-col">

        {/* Titre */}
        <div className="text-[clamp(24px,5vw,38px)] font-bold mb-3 text-center md:text-left">
          <span className="text-[#1a1919]">Pourquoi </span>
          <span className="text-[#FF6B00]">EasyMarket ?</span>
        </div>

        {/* Paragraphe */}
        <p className="text-[#000000] mb-5 text-[15px] leading-[28px] font-medium font-[Montserrat] text-center md:text-left">
          Voyez clairement ce qui vous rapporte... et ce qui vous fait perdre
        </p>

        {/* IMAGE mobile */}
        <div className="flex md:hidden justify-center mb-6">
          <img
            src={phone3}
            alt="EasyMarket app"
            className="w-[200px] h-[310px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            style={{ transform: 'rotate(-4deg)' }}
          />
        </div>

        {/* MOBILE : cards 1 colonne — largeur limitée + centrée */}
        <div className="flex md:hidden flex-col gap-3 mb-4 pl-[14px] max-w-[320px] mx-auto w-full">
          {WHY_FEATURES.map((f, i) => (
            <FeatureCard key={i} title={f.title} index={i} />
          ))}
        </div>

        {/* DESKTOP : 4 cards 2×2 */}
        <div className="hidden md:grid grid-cols-2 gap-[22px] mb-3 pl-[14px]">
          {WHY_FEATURES.slice(0, 4).map((f, i) => (
            <FeatureCard key={i} title={f.title} index={i} />
          ))}
        </div>

        {/* DESKTOP : 5e card + bouton */}
        <div className="hidden md:grid grid-cols-2 gap-3 items-center pl-[14px]">
          <FeatureCard title={WHY_FEATURES[4].title} index={4} />
          <button className="bg-[#E47000] hover:bg-[#c95e00] text-white rounded-[20px] text-[15px] font-bold cursor-pointer flex items-center justify-center min-h-[50px] w-full transition-colors duration-200">
            Réserver un démo
          </button>
        </div>

        {/* MOBILE : bouton pleine largeur */}
        <button className="md:hidden bg-[#E47000] hover:bg-[#c95e00] text-white rounded-[20px] text-[15px] font-bold cursor-pointer flex items-center justify-center min-h-[52px] w-full transition-colors duration-200 mt-2">
          Réserver un démo
        </button>

      </div>
    </div>
  </div>
</section>

      {/* SECTION 2 — Comment ça marche */}
     <section id="demo" className="py-[100px] bg-white">
  <div className="max-w-[1100px] mx-auto px-6">
    <h2 className="reveal text-[clamp(24px,5vw,38px)] font-extrabold text-center mb-12">
      Comment ça marche
    </h2>

    <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px] md:max-w-full mx-auto">
      {HOW_STEPS.map((step, i) => (
        <div
          key={i}
          className="bg-[#053965] rounded-[20px] px-6 py-7 text-white leading-[1.5] min-h-[90px] flex items-center gap-5 transition-all duration-200 cursor-default hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(94,116,161,0.3)]"
        >
          <span className="text-[48px] font-black text-white leading-none shrink-0">
            {i + 1}
          </span>
          <span className="text-[15px] font-semibold">
            {step}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SECTION 3 — Fonctionnalités clés */}
    <section className="py-[90px]  bg-[#F7F8FA]">
  <div className="max-w-[1100px] mx-auto">
    <div className="fk-grid grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center justify-center">

      {/* Gauche */}
      <div className="reveal">

        {/* Titre */}
        <h2 className="text-[clamp(28px,2.5vw,38px)] font-black mb-[10px] leading-[1.2] text-center md:text-left">
          <span className="text-[#FF6B00]">Fonctionnalités</span>{' '}
          <span className="text-[#1a1a1a]">clés</span>
        </h2>

        {/* Paragraphe */}
        <p className="text-[#000000] mb-5 text-[15px] leading-[28px] font-medium font-[Montserrat] text-center md:text-left">
          Tout ce qu'il vous faut pour gérer et développer votre commerce
        </p>

        {/* IMAGE mobile — après texte, avant les cards */}
        <div className="flex md:hidden justify-center mb-6">
          <img
            src={phone4}
            alt="App EasyMarket"
            className="w-[160px] h-[250px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* MOBILE : cards en 1 colonne */}
        {/* MOBILE : cards 1 colonne */}
<div className="flex md:hidden flex-col gap-3 mb-4 max-w-[375px]">
  {WHY_FEATURES.map((f, i) => (
    <KeyFeatureCard key={i} title={f.title} index={i} />
  ))}
</div>

        {/* DESKTOP : cards 2×2 + dernière pleine largeur */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-3 mb-9  ">
            {KEY_FEATURES.slice(0, 6).map((feat, i) => (
              <KeyFeatureCard key={i} title={feat} />
            ))}
            <div className="col-span-2">
              <KeyFeatureCard title={KEY_FEATURES[6]} />
            </div>
          </div>
        </div>

        {/* Bouton pleine largeur */}
        <button className="bg-[#E47000] text-white border-none py-[14px] px-[48px] rounded-[30px] text-[15px] font-bold cursor-pointer w-full h-[65px] transition-all duration-200 hover:bg-[#c95e00] hover:-translate-y-px">
          Demander une démo
        </button>

      </div>

      {/* Droite — Phone desktop uniquement */}
      <div className="reveal hidden md:flex justify-center items-center">
        <img
          src={phone4}
          alt="App EasyMarket"
          className="phone-img w-[300px] h-[450px] max-w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition-transform duration-[400ms] hover:scale-[1.03]"
        />
      </div>

    </div>
  </div>
</section>

    </div>
  );
}

/* KeyFeatureCard */
function KeyFeatureCard({ title }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white rounded-lg py-[14px] pr-[18px] pl-5 ml-5 flex items-center gap-[15px] border border-[#f0f0f0] transition-all duration-200 cursor-default
        ${hovered ? 'shadow-[0_6px_20px_rgba(0,0,0,0.09)] -translate-y-[2px]' : 'shadow-[0_2px_8px_rgba(0,0,0,0.05)]'}
      `}
    >
      <div className="absolute left-[-14px] w-[14px] h-[25px] bg-[#FF6B00] rounded-[40px_0px_0px_40px]" />
      <span className="text-[13px] font-semibold text-[#1a1a1a] leading-[1.4]">
        {title}
      </span>
    </div>
  );
}