import { useState } from "react";

export default function VideoCard({ testimonial }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
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
        style={{
          position: "relative",
          width: "280px",
          height: "200px",
          aspectRatio: "9/16",
          backgroundColor: "#e4e1e1",
          cursor: "pointer",
        }}
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
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        ) : (
          <>
            <img
              src={testimonial.thumbnail}
              alt={testimonial.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "280px",
                height: "200px",
                objectFit: "cover",
                backgroundPosition:'center',
              }}
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)",
                transition: "background-color 0.2s",
              }}
            />
            {/* Bouton Play YouTube */}
            <button
              onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
              aria-label={`Regarder ${testimonial.name}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "48px",
                height: "34px",
                backgroundColor: "#D31F1F",
                borderRadius: "8px",
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
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <div>
          <p style={{ fontSize: "14px", fontWeight: "600", color: "#000000", margin: 0 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: "12px", color: "#000000", margin: "2px 0 0" }}>
            {testimonial.role}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#000000",
              letterSpacing: "0.05em",
              margin: "2px 0 0",
            }}
          >
            {testimonial.company}
          </p>
        </div>
        <button
          onClick={() => setPlaying(true)}
          style={{
            backgroundColor: "#E47000",
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