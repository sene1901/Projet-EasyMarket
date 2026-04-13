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

      {/* SECTION 1 — Pourquoi EasyMarket */}
      <section id="fonctionnalites" className="py-[100px] px-6 bg-[#F5F5F5]">
        <div className="max-w-[1100px] mx-auto">
          <div className="why-grid grid grid-cols-2 gap-[60px] items-center">

            {/* Phone */}
            <div className="hidden md:flex justify-center relative">
              <div className="absolute w-[300px] h-[300px] bg-[#e2e6ea] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]" />
           <img
          src={phone}
          alt="EasyMarket app"
          className="phone-img relative z-[5] transition-all duration-[400ms] drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)] w-[280px] lg:w-[370px]"
          style={{
           
            transform: 'rotate(-12deg) translateX(-20px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'rotate(-6deg) translateX(-10px) scale(1.04)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'rotate(-12deg) translateX(-20px)';
          }}
        />
            </div>

            {/* Texte + Cards */}
            <div className="reveal">
              <div className="text-[26px] md:text-[32px] font-bold mb-3 md:mb-[14px] text-center md:text-left]">
                <span className="text-[#1a1919]">Pourquoi </span>
                <span className="text-[#FF6B00]">EasyMarket ?</span>
              </div>
              <p className="text-[#555] mb-[30px] text-[16px] leading-[1.5]">
                Voyez clairement ce qui vous rapporte... et ce qui vous fait perdre
              </p>

              {/* 4 cards en grille 2×2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[22px]">
                {WHY_FEATURES.slice(0, 4).map((f, i) => (
                  <FeatureCard key={i} title={f.title} logo={logo} />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 items-center">
                <FeatureCard title={WHY_FEATURES[4].title} logo={logo} />
                <button
                  className="bg-[#E47000] text-white border-none rounded-[20px] text-[14px] font-bold cursor-pointer flex items-center justify-center gap-[10px] mt-[10px] w-[260px] h-[40px] sm:mt-[10px] w-full sm:w-[220px]  transition-colors duration-200 hover:bg-[#c95e00]"
                >
                  Réserver un démo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Comment ça marche */}
      <section id="demo" className="py-[100px] px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="reveal text-[32px] font-extrabold text-center mb-12">
            Comment ça marche
          </h2>

          <div className="reveal how-grid grid grid-cols-2 gap-4">
            {HOW_STEPS.map((step, i) => (
              <div
                key={i}
                className="bg-[#053965] rounded-[20px] p-[30px_24px] text-white leading-[1.5] min-h-[120px] flex items-center gap-5 transition-all duration-200 cursor-default hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(94,116,161,0.3)]"
              >
                <span className="text-[54px] font-black text-white leading-none shrink-0">
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
      <section className="py-[90px] px-6 bg-[#F7F8FA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="fk-grid grid grid-cols-2 gap-[64px] items-center justify-center">

            {/* Gauche */}
            <div className="reveal">
              <h2 className="text-[32px] font-black mb-[10px] leading-[1.2]">
                <span className="text-[#FF6B00]">Fonctionnalités</span>{' '}
                <span className="text-[#1a1a1a]">clés</span>
              </h2>
              <p className="text-[14px] font-normal text-[#1a1a1a] mb-7 leading-[1.6]">
                Tout ce qu'il vous faut pour gérer et développer votre commerce
              </p>

              <div className="grid grid-cols-2 gap-3 mb-9">
                {KEY_FEATURES.slice(0, 6).map((feat, i) => (
                  <KeyFeatureCard key={i} title={feat} />
                ))}
                <div className="col-span-2">
                  <KeyFeatureCard title={KEY_FEATURES[6]} />
                </div>
              </div>

              <button
                className="bg-[#E47000] text-white border-none py-[14px] px-[48px] rounded-[30px] text-[15px] font-bold cursor-pointer w-full transition-all duration-200 hover:bg-[#c95e00] hover:-translate-y-px"
              >
                Demander une démo
              </button>
            </div>

            {/* Droite — Phone */}
            <div className="reveal flex justify-center items-center">
              <img
                src={phone4}
                alt="App EasyMarket"
                className="phone-img w-[370px] min-h-[500px] max-w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition-transform duration-[400ms] hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* FeatureCard */
function FeatureCard({ title, logo }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-white rounded-[14px] p-[14px] flex items-center gap-[10px] transition-all duration-[250ms] cursor-default
        ${hovered ? 'shadow-[0_6px_18px_rgba(255,107,0,0.15)] -translate-y-[2px] border-[1.5px] border-[#ffcca0]' : 'shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-[1.5px] border-[#ebebeb]'}
      `}
    >
      <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 transition-all duration-[250ms] ${hovered ? 'bg-[#FF6B00]' : 'bg-[#fff3e8]'}`}>
        <img src={logo} alt="icon" className="w-[22px] h-[22px] object-contain" />
      </div>
      <span className="text-[12px] font-bold text-[#222] leading-[1.3] flex-1">
        {title}
      </span>
      <div className="absolute left-[-14px] w-[14px] h-[25px] bg-[#FF6B00] rounded-[40px_0px_0px_40px]" />
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