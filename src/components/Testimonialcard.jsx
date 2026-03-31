import React, { useState } from 'react';

export default function TestimonialCard({ name, business, quote, active }) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    style={{
        width: '100%',
        height: `${height}px`,          // ← taille fixe transmise depuis le parent
        background: highlighted
          ? 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)'
          : '#fff',
        border: `1.5px solid ${highlighted ? 'transparent' : 'var(--gray-200)'}`,
        borderRadius: '16px',
        padding: '28px 24px',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        transform: highlighted ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: highlighted ? 'var(--shadow-orange)' : 'var(--shadow-sm)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={{ fontSize: '28px', color: highlighted ? 'rgba(255,255,255,0.5)' : 'var(--orange-light)', marginBottom: '16px' }}>"</div>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.7',
          color: highlighted ? 'rgba(255,255,255,0.95)' : 'var(--gray-600)',
          marginBottom: '24px',
          fontStyle: 'italic',
        }}>{quote}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: highlighted ? 'rgba(255,255,255,0.25)' : 'var(--orange-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          flexShrink: 0,
        }}>🏪</div>
        <div>
          <p style={{ fontWeight: '700', fontSize: '14px', color: highlighted ? '#fff' : 'var(--navy)', marginBottom: '2px' }}>{name}</p>
          <p style={{ fontSize: '12px', color: highlighted ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)' }}>{business}</p>
        </div>
      </div>
    </div>
  );
}