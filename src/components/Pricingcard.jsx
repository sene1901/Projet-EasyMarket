import React, { useState } from 'react';
import Button from './Button';

export default function PricingCard({ plan, price, period, features, popular, cta }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: popular ? 'linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%)' : 'var(--white)',
        border: popular ? 'none' : '1.5px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        padding: '36px 32px',
        transform: popular ? 'scale(1.05)' : hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: popular ? 'var(--shadow-orange)' : hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        zIndex: popular ? 2 : 1,
      }}
    >
      {popular && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--navy)',
          color: '#fff',
          borderRadius: '100px',
          padding: '5px 16px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}>⭐ Le plus populaire</div>
      )}
      <p style={{
        fontSize: '13px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: popular ? 'rgba(255,255,255,0.8)' : 'var(--orange)',
        marginBottom: '12px',
      }}>{plan}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '40px',
          fontWeight: '700',
          color: popular ? '#fff' : 'var(--navy)',
          letterSpacing: '-0.03em',
        }}>{price}</span>
        {period && <span style={{ fontSize: '14px', color: popular ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)' }}>{period}</span>}
      </div>
      <div style={{ height: '1px', background: popular ? 'rgba(255,255,255,0.2)' : 'var(--gray-200)', margin: '24px 0' }} />
      <ul style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: popular ? 'rgba(255,255,255,0.9)' : 'var(--gray-600)' }}>
            <span style={{ color: popular ? '#fff' : 'var(--orange)', flexShrink: 0, fontWeight: '700' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? 'ghost' : 'outline'}
        style={{ width: '100%', justifyContent: 'center', ...(popular ? { border: '2px solid rgba(255,255,255,0.5)' } : {}) }}
      >
        {cta || 'Commencer'}
      </Button>
    </div>
  );
}