import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function MaterielCard({ image, name, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative rounded-2xl  flex flex-row items-start gap-4"
      style={{ backgroundColor: "#f3f4f6" ,
        padding: '30px',
      }}
    >

      {/* Image */}
      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "130px" }}>
        <img
          src={image}
          alt={name}
          style={{ width: "130px", height: "130px", objectFit: "contain" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1" style={{ minWidth: 0 }}>

        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>
          {name}
        </h3>

        <p style={{ fontSize: "14px", color: "#777b85", marginTop: "4px" }}>
          Catégories / air frayer
        </p>

        <p style={{ fontSize: "14px", color: "#a1a2a5", marginTop: "6px", lineHeight: "1.5" }}>
          Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem upsum
        </p>

        {/* Prix */}
        <p style={{ marginTop: "10px", fontSize: "13px", color: "#374151" }}>
          Prix :{" "}
          <span style={{ fontWeight: "800", fontSize: "20px", color: "#111827" }}>
            {price} FCFA
          </span>
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            style={{
              width: "100%",
              backgroundColor: "#f97316",
              color: "#ffffff",
              padding: "9px 0",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Acheter maintenant
          </button>
          <button
            style={{
              width: "100%",
              backgroundColor: "transparent",
              color: "#374151",
              padding: "8px 0",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "500",
              border: "1.5px solid #d1d5db",
              cursor: "pointer",
            }}
          >
            Ajouter au panier
          </button>
        </div>

      </div>

      {/* Heart */}
      <button
        onClick={() => setLiked(!liked)}
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <Heart
          size={18}
          style={{ color: liked ? "#ef4444" : "#9ca3af", fill: liked ? "#ef4444" : "none" }}
        />
      </button>

    </div>
  );
}