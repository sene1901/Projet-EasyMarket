import React, { useState } from 'react';

export default function FeatureCard({ icon, title, description, accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--white)' : 'var(--gray-50)',
        border: `1.5px solid ${hovered ? 'var(--orange-light)' : 'var(--gray-200)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? 'var(--shadow-orange)' : 'var(--shadow-sm)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '14px',
        background: hovered ? 'var(--orange)' : 'var(--orange-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        transition: 'all 0.25s ease',
        fontSize: '22px',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '16px',
        fontWeight: '600',
        color: 'var(--navy)',
        marginBottom: '8px',
        letterSpacing: '-0.01em',
      }}>{title}</h3>
      {description && (
        <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.65' }}>{description}</p>
      )}
    </div>
  );
}