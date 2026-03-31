import React from 'react';

export default function Badge({ children, variant = 'orange' }) {
  const variants = {
    orange: { background: 'var(--orange-50)', color: 'var(--orange)', border: '1px solid var(--orange-light)' },
    navy:   { background: 'var(--navy)',       color: '#fff',         border: 'none' },
    green:  { background: '#F0FDF4',           color: '#16A34A',      border: '1px solid #BBF7D0' },
  };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: '100px',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '0.02em',
      ...variants[variant],
    }}>
      {children}
    </span>
  );
}