import { useState } from "react";

export default function VideoCard({ testimonial }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`;

  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.07)]">

      {/* Zone vidéo */}
      <div
        className="relative w-[280px] h-[200px] bg-[#e4e1e1] cursor-pointer"
        onClick={() => setPlaying(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {playing ? (
          <iframe
            src={embedUrl}
            title={testimonial.name}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          />
        ) : (
          <>
            <img
              src={testimonial.thumbnail}
              alt={testimonial.name}
              className="absolute inset-0 w-[280px] h-[200px] object-cover object-center"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-200 ${
                hovered ? "bg-black/25" : "bg-black/10"
              }`}
            />

            {/* Bouton Play YouTube */}
            <button
              onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
              aria-label={`Regarder ${testimonial.name}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[34px] bg-[#D31F1F] rounded-lg border-none cursor-pointer flex items-center justify-center"
            >
              <svg width="18" height="20" viewBox="0 0 16 18" fill="white">
                <path d="M1 1l14 8L1 17V1z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Infos */}
      <div className="flex items-end justify-between px-4 py-3">
        <div>
          <p className="text-[16px] font-semibold text-black m-0">
            {testimonial.name}
          </p>
          <p className="text-[12px]  text-black mt-0.5 mb-0">
            {testimonial.role}
          </p>
          <p className="text-[12px]  text-black tracking-[0.05em]  mb-0">
            {testimonial.company}
          </p>
        </div>

        <button
          onClick={() => setPlaying(true)}
          className="bg-[#E47000] text-white text-[12px] px-3 py-1.5 rounded-md border-none cursor-pointer whitespace-nowrap"
        >
          Regarder
        </button>
      </div>

    </div>
  );
}