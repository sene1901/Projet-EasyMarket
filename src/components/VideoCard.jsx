import { useState } from "react";

export default function VideoCard({ testimonial }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const thumb = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`;

  return (
    <div
      style={{
        flexShrink: 0,
        width: "256px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #f3f4f6",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
      }}
    >
      {/* Zone vidéo */}
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000", cursor: "pointer" }}
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
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={testimonial.name}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: hovered ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)",
                transition: "background-color 0.2s",
              }}
            />
            {/* Bouton Play */}
            <button
              onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
              aria-label={`Regarder ${testimonial.name}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "40px",
                height: "36px",
                backgroundColor: "#fd3e03",
              
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="20" viewBox="0 0 16 18" fill="white">
                <path d="M1 1l14 8L1 17V1z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Infos */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "12px 16px" }}>
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: 0 }}>{testimonial.name}</p>
          <p style={{ fontSize: "12px", color: "#6b7280", margin: "2px 0 0" }}>{testimonial.role}</p>
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#9ca3af", letterSpacing: "0.05em", margin: "2px 0 0" }}>
            {testimonial.company}
          </p>
        </div>
        <button
          onClick={() => setPlaying(true)}
          style={{
            backgroundColor: "#f87427",
            color: "#ffffff",
            fontSize: "12px",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Regarder
        </button>
      </div>
    </div>
  );
}