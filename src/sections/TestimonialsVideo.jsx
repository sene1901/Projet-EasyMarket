import { useState, useRef, useEffect } from "react";
import VideoCard from "../components/VideoCard";

const testimonials = [
  { name: "Bassirou", role: "Fondateur de", company: "SIRA YIITÉ", videoId: "dQw4w9WgXcQ" },
  { name: "Fatimata", role: "Fondatrice de", company: "ATYDI AFRO HAIR", videoId: "ScMzIvxBSi4" },
  { name: "Soukeyna", role: "Assistante", company: "KEUR DIALAW", videoId: "3JZ_D3ELwOQ" },
  { name: "Fatou", role: "Fondatrice de", company: "COSAAN", videoId: "L_jWHffIx5E" },
  { name: "Mariama", role: "Directrice de", company: "DAKAR STYLE", videoId: "fJ9rUzIMcZQ" },
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
    <section id="temoignages" style={{ padding: "48px 16px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "800", textAlign: "center", color: "#111827", marginBottom: "32px" }}>
        Témoignages
      </h2>

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>

        {/* Flèche gauche */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Précédent"
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === 0 ? "not-allowed" : "pointer",
            opacity: current === 0 ? 0.3 : 1,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Track */}
        <div style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "16px",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${current * CARD_WIDTH}px)`,
            }}
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
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "36px",
            height: "36px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current >= maxIndex ? "not-allowed" : "pointer",
            opacity: current >= maxIndex ? 0.3 : 1,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              backgroundColor: i === current ? "#f08b07" : "#d1d5db",
              transition: "background-color 0.2s",
            }}
          />
        ))}
      </div>
    </section>
  );
}