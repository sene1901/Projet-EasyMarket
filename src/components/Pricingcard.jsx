import React, { useState } from 'react';

export default function PricingCard({
  plan,
  description,
  price,
  period,
  features,
  cta,
  highlight
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#f9f9f9',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #eee',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 10px 30px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      {/* TOP */}
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          marginBottom: '6px'
        }}>
          {plan}
        </h3>

        <p style={{
          fontSize: '12px',
          color: '#777',
          marginBottom: '14px'
        }}>
          {description}
        </p>

        {/* ligne */}
        <div style={{
          height: '1px',
          width: '60px',
          background: 'var(--orange)',
          margin: '0 auto'
        }} />
      </div>

      {/* PRICE BAR */}
      <div style={{
        background: 'linear-gradient(135deg, var(--orange), var(--orange-dark))',
        color: '#fff',
        textAlign: 'center',
        padding: '14px 10px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '800'
        }}>
          {price} FCFA
        </div>
        <div style={{ fontSize: '12px', opacity: 0.9 }}>
          {period}
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: '24px' }}>
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '24px'
        }}>
          {features.map((f, i) => (
            <li key={i} style={{
              fontSize: '13px',
              color: '#555',
              display: 'flex',
              gap: '8px'
            }}>
              <span style={{ color: 'var(--orange)', fontWeight: '700' }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button style={{
          width: '100%',
          background: 'var(--orange)',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          padding: '10px',
          fontSize: '13px',
          cursor: 'pointer',
          transition: '0.2s'
        }}>
          {cta}
        </button>
      </div>
    </div>
  );
}