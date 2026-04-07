import React from 'react';

export default function SectionTitle({ label, title, highlight, subtitle, center = false , light }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '48px' }}>
      {label && (
        <span style={{
          display: 'inline-block',
          background: 'var(--orange-50)',
          color: 'var(--orange)',
          border: '1px solid var(--orange-light)',
          borderRadius: '100px',
          padding: '4px 14px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>{label}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: '700',
        color: light ? '#fff' : 'var(--navy)',
        lineHeight: '1.15',
        letterSpacing: '-0.02em',
        marginBottom: '16px',
      }}>
        {title}{' '}
        {highlight && <span style={{ color: 'var(--orange)' }}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '16px',
          color: light ? 'rgba(34, 26, 26, 0.75)' : 'var(--gray-950)',
          lineHeight: '1.7',
          maxWidth: center ? '560px' : '100%',
          margin: center ? '0 auto' : '0',
        }}>{subtitle}</p>
      )}
    </div>
  );
}