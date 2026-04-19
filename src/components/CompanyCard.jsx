import React, { useState } from 'react';

export default function CompanyCard({ name, description, logo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        min-w-[270px] h-[270px] rounded-2xl p-5 bg-white border border-[#eee]
        flex flex-col justify-between cursor-pointer
        transition-all duration-300 ease-in-out
        ${hovered ? '-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.08)]' : 'translate-y-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <img
          src={logo}
          alt={name}
          className="h-[70px] w-[150px] object-contain opacity-100 mb-3"
        />

        {/* Ligne */}
        <div className="w-full h-px bg-[#E47000] mb-3" />

        {/* TEXTE */}
        <p className="text-[13px] text-black font-['Montserrat'] font-medium leading-[18px] tracking-normal">
          {description}
        </p>
      </div>

      {/* LINK */}
      <p className="text-[13px] font-semibold text-[#E47000]">
        Visiter le site
      </p>
    </div>
  );
}