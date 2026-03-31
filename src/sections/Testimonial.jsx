import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';

const TESTIMONIALS = [
  { name: 'Astou Diop',    business: 'Astou Shop – Dakar',   quote: 'EasyMarket a complètement transformé ma façon de gérer ma boutique...' },
  { name: 'Moussa Diallo', business: 'Grandkabir – Dakar',   quote: 'Avant EasyMarket, je perdais du temps à compter manuellement...' },
  { name: 'Mariama Sarr',  business: 'Yeksina Home – Dakar', quote: 'L\'application est simple, claire et puissante...' },
  { name: 'Ibrahim Ka',    business: 'Kazamansa – Dakar',    quote: 'Le suivi des stocks en temps réel m\'a évité plusieurs ruptures...' },
  { name: 'Fatou Ndiaye',  business: 'All-In-Tech – Dakar',  quote: 'Gérer plusieurs utilisateurs depuis la même interface est un vrai plus...' },
];

const CARD_W  = 200;   // largeur exacte définie dans le design
const CARD_H  = 337;   // hauteur exacte
const GAP     = 20;
const VISIBLE = 4;     // 4 cards visibles

export default function TestimonialsSection() {
  const ref          = useRef(null);
  const trackRef     = useRef(null);
  const timerRef     = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex,  setStartIndex]  = useState(0);

  // Intersection observer pour animations reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    timerRef.current = setInterval(handleNext, 4000);
    return () => clearInterval(timerRef.current);
  }, [activeIndex, startIndex]);

  const handleNext = () => {
    setActiveIndex(prev => {
      const next = (prev + 1) % TESTIMONIALS.length;
      setStartIndex(s => {
        // Si la card active sort par la droite, décaler la fenêtre
        if (next === (s + VISIBLE) % TESTIMONIALS.length) return (s + 1) % TESTIMONIALS.length;
        return s;
      });
      return next;
    });
  };

  const handlePrev = () => {
    setActiveIndex(prev => {
      const next = (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
      setStartIndex(s => {
        // Si la card active sort par la gauche, décaler la fenêtre
        if (next === (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
          return (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        return s;
      });
      return next;
    });
  };

  // Construire le tableau de 4 cards visibles
  const visibleCards = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIndex + i) % TESTIMONIALS.length;
    return { ...TESTIMONIALS[idx], globalIndex: idx };
  });

  return (
    <section ref={ref} style={{ padding: '100px 24px', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: `${CARD_W * VISIBLE + GAP * (VISIBLE - 1) + 48}px`, margin: '0 auto' }}>

        {/* Titre */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTitle
            label="Témoignages"
            title="Ils utilisent"
            highlight="EasyMarket"
            subtitle="Des commerçants qui utilisent EasyMarket au quotidien"
            center
          />
        </div>

        {/* Carousel — 4 cards fixes, pas de translation CSS, juste re-render */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${VISIBLE}, ${CARD_W}px)`,
            gap: `${GAP}px`,
            marginBottom: '32px',
          }}
        >
          {visibleCards.map(({ globalIndex, ...t }) => (
            <div
              key={globalIndex}
              style={{ width: CARD_W, height: CARD_H }}
            >
              <TestimonialCard
                {...t}
                active={globalIndex === activeIndex}
                height={CARD_H}
              />
            </div>
          ))}
        </div>

        {/* Boutons nav */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button
            onClick={handlePrev}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--gray-100)', border: '1px solid var(--gray-200)',
              fontSize: 16, cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gray-100)'; e.currentTarget.style.color = 'inherit'; }}
          >←</button>
          <button
            onClick={handleNext}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--orange)', border: 'none',
              fontSize: 16, color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >→</button>
        </div>
      </div>
    </section>
  );
}