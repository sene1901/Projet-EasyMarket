import React from 'react';

export default function SectionTitle({ label, title, highlight, subtitle, center = false, light }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="inline-block bg-orange-50 text-orange-500 border border-orange-200 rounded-full px-3.5 py-1 text-xs font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-montserrat text-[38px] font-bold leading-[1.15] tracking-[-0.02em] mb-4 ${light ? 'text-white' : 'text-[var(--navy)]'}`}>
        {title}{' '}
        {highlight && (
          <span className="text-[#E47000]">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`font-montserrat text-[18px] font-medium leading-[35px] tracking-[0] ${light ? 'text-white/75' : 'text-black'} ${center ? 'max-w-lg mx-auto' : 'max-w-none'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}