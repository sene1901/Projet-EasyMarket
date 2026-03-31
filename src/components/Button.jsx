import React from 'react';

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '13px 28px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    letterSpacing: '-0.01em',
  },
  primary: {
    background: 'var(--orange)',
    color: '#fff',
    boxShadow: 'var(--shadow-orange)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '2px solid var(--gray-200)',
  },
  ghost: {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.3)',
    backdropFilter: 'blur(8px)',
  },
  sm: { padding: '9px 20px', fontSize: '13px' },
  lg: { padding: '16px 36px', fontSize: '17px' },
};

export default function Button({ children, variant = 'primary', size, onClick, href, style, ...props }) {
  const combined = {
    ...styles.base,
    ...styles[variant],
    ...(size ? styles[size] : {}),
    ...style,
  };

  const hoverMap = {
    primary: { background: 'var(--orange-dark)', transform: 'translateY(-1px)', boxShadow: '0 12px 40px rgba(249,115,22,0.35)' },
    outline: { background: 'var(--gray-50)', borderColor: 'var(--gray-400)', transform: 'translateY(-1px)' },
    ghost:   { background: 'rgba(255,255,255,0.25)', transform: 'translateY(-1px)' },
  };

  const handleMouseEnter = (e) => Object.assign(e.currentTarget.style, hoverMap[variant]);
  const handleMouseLeave = (e) => Object.assign(e.currentTarget.style, combined);

  if (href) {
    return (
      <a href={href} style={combined} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={combined} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
      {children}
    </button>
  );
}