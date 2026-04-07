import { useState } from 'react';

export default function PricingCard({ plan, price, period, features, cta }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        
        width: '280px', position: 'relative', flexShrink: 0,
        transform: hovered ? 'translateY(-6px)' : 'none',
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Point orange */}
      <div style={{
        width: '30px', height: '30px', background: '#e87722', borderRadius: '50%',
        position: 'absolute', top: '-10px', left: '30%', transform: 'translateX(-50%)'
      }} />

      {/* En-tête */}
      <div style={{ padding: '28px 24px 20px', background: '#053965', borderRadius: '16px', overflow: 'visible' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#f1f1f1', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
          {plan}
        </div>
        <div style={{ fontSize: '36px', fontWeight: '800', color: '#fff', lineHeight: '1.1', marginBottom: '2px' }}>
          {price} <span style={{ fontSize: '15px', fontWeight: '500' }}>FCFA</span>
        </div>
        <div style={{ fontSize: '12px', color: '#aab8d0' }}>{period}</div>
      </div>

      {/* Features */}
      <div style={{ padding: '20px 24px 24px' ,color: '#000000',background:'#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
        <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {features.map((f, i) => (
            <li key={i} style={{ fontSize: '13px', color: '#000000', display: 'flex', gap: '8px', alignItems: 'flex-start', lineHeight: '1.4' }}>
              <span style={{ color: '#e87722', fontWeight: '700', flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
        <button style={{
          width: '100%', background: '#e87722', color: '#fff', border: 'none',
          borderRadius: '999px', padding: '11px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'
        }}>
          {cta}
        </button>
      </div>
    </div>
  );
}