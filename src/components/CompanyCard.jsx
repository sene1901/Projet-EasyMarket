import React, { useState } from 'react';

export default function CompanyCard({ name, description, active, height }) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        height: `${height}px`,
        borderRadius: '16px',
        padding: '28px 22px',
        boxSizing: 'border-box',
        background: highlighted
          ? 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)'
          : '#f9f9f9',
        border: highlighted ? 'none' : '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
    >
      {/* TOP */}
      <div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: highlighted ? '#fff' : '#111',
          marginBottom: '10px'
        }}>
          {name}
        </h3>

        {/* Ligne */}
        <div style={{
          width: '40px',
          height: '2px',
          background: highlighted ? '#fff' : 'var(--orange)',
          marginBottom: '14px'
        }} />

        <p style={{
          fontSize: '13px',
          lineHeight: '1.6',
          color: highlighted ? 'rgba(255,255,255,0.9)' : '#666'
        }}>
          {description}
        </p>
      </div>

      {/* LINK */}
      <p style={{
        fontSize: '13px',
        fontWeight: '500',
        color: highlighted ? '#fff' : 'var(--orange)',
        marginTop: '20px'
      }}>
        Visiter le site
      </p>
    </div>
  );
}