import React, { useState } from 'react';
import logo from '../assets/test.png'; // ton logo EasyMarket

export default function FeatureCard({ title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? 'var(--orange-light)' : 'var(--gray-200)'}`,
        borderRadius: '14px',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? 'var(--shadow-orange)' : '0 2px 8px rgba(0,0,0,0.06)',
        cursor: 'default',
      }}
    >
      {/* Logo EasyMarket dans carré orange clair */}
      <div
        style={{
      
    objectFit: 'contain',
    filter: 'invert(48%) sepia(92%) saturate(1200%) hue-rotate(10deg)',
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: hovered ? 'var(--orange)' : 'var(--orange-50, #864c15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.25s ease',
        }}
      >
        <img
  src={logo}
  alt="EasyMarket"
  style={{
    width: '28px',
    height: '28px',
    objectFit: 'contain',
    filter: hovered
      ? 'brightness(0) invert(1)' // blanc au hover
      : 'invert(48%) sepia(95%) saturate(1500%) hue-rotate(5deg) brightness(95%) contrast(105%)', // orange
    transition: 'filter 0.25s ease',
  }}
/>
      </div>

      {/* Titre */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '12px',
          fontWeight: '700',
          color: 'var(--navy)',
          lineHeight: '1.3',
          flex: 1,
        }}
      >
        {title}
      </span>

      {/* Point orange à droite */}
      <div
        style={{
          width: '8px',
          height: '8px',
          background: 'var(--orange, #ff6b00)',
          borderRadius: '50%',
          flexShrink: 0,
        }}
      />
    </div>
  );
}