import { useState, useRef, useEffect } from "react";
import VideoCard from "../components/VideoCard";

import imgBassirou  from "../assets/Bassirou.jpg";
import imgFatimata  from "../assets/fatoumata.jpg";
import imgSoukeyna  from "../assets/Soukeyna.jpg";
import imgFatou     from "../assets/Fatou.png";

const testimonials = [
  {
    name: "Bassirou",
    role: "Fondateur de",
    company: "SIRA YIITÉ",
    videoId: "ss0SpWhBOD0",
    thumbnail: imgBassirou,
  },
  {
    name: "Fatimata",
    role: "Fondatrice de",
    company: "ATYDI AFRO HAIR",
    videoId: "yNCO3vhNhx8",
    thumbnail: imgFatimata,
  },
  {
    name: "Soukeyna",
    role: "Assistante",
    company: "KEUR DIALAW",
    videoId: "SDYvyoZyi4E",
    thumbnail: imgSoukeyna,
  },
  {
    name: "Fatou",
    role: "Fondatrice de",
    company: "COSAAN GROUPE",
    videoId: "F5pLX991gE8",
    thumbnail: imgFatou,
  },
];

export default function TestimonialsVideo() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const CARD_WIDTH = 256 + 16;

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setCurrent(clamped);
  };

  return (
    <section id="temoignages" className="py-12 px-4">

      <h2 className="text-[38px] font-extrabold text-center text-[#111827] my-5">
        Témoignages
      </h2>

      <div className="relative max-w-[900px] mx-auto">

        {/* Flèche gauche */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Précédent"
          className={`
            absolute -left-5 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 bg-white border border-gray-200 rounded-full
            flex items-center justify-center
            shadow-[0_1px_3px_rgba(0,0,0,0.08)]
            transition-opacity duration-200
            ${current === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}
          `}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * CARD_WIDTH}px)` }}
          >
            {testimonials.map((t, i) => (
              <VideoCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Flèche droite */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current >= maxIndex}
          aria-label="Suivant"
          className={`
            absolute -right-5 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 bg-white border border-gray-200 rounded-full
            flex items-center justify-center
            shadow-[0_1px_3px_rgba(0,0,0,0.08)]
            transition-opacity duration-200
            ${current >= maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}
          `}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
            className={`
              w-2 h-2 rounded-full border-none p-0 cursor-pointer
              transition-colors duration-200
              ${i === current ? "bg-[#f08b07]" : "bg-gray-300"}
            `}
          />
        ))}
      </div>

    </section>
  );
}