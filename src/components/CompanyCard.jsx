import React, { useState } from 'react';

export default function CompanyCard({ name, description, logo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="company-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: '260px',
        height: '240px',
        borderRadius: '16px',
        padding: '20px',
        background: '#f9f9f9',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 10px 25px rgba(0,0,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <img
          src={logo}
          alt={name}
          style={{
            height: '58px',
            objectFit: 'contain',
            width: '110px',

            opacity: 1,

            marginBottom: '12px',
          }}
        />

        {/* Ligne */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: '#E47000',
            marginBottom: '12px'
          }}
        />

        {/* TEXTE */}
        <p
          style={{
            fontSize: '13px',
          
            color: '#000000',
            fontFamily: 'Montserrat',
          fontWeight: 500,
           lineHeight: '18px',
            letterSpacing:'0%',

          }}
        >
          {description}
        </p>
      </div>

      {/* LINK */}
      <p
        style={{
          fontSize: '13px',
          fontWeight: '600',
          color: '#E47000'
        }}
      >
        Visiter le site
      </p>
    </div>
  );
}