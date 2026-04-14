import React from 'react';
import logo from '../assets/test.png';

export default function FeatureCard({ title }) {
  return (
    <div
      className="
        bg-white border rounded-[14px] px-[14px] py-[12px]
        flex items-center gap-[10px] relative
        transition-all duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_4px_14px_rgba(255,168,0,0.25)]
        border-gray-200 hover:border-orange-300
      "
    >
      {/* Icon box */}
      <div
        className="
          w-[36px] h-[36px] rounded-[10px]
          flex items-center justify-center shrink-0
          transition-all duration-200
           
        "
      >
        <img
  src={logo}
  alt="EasyMarket"
  className="w-[28px] h-[28px] object-contain transition-all duration-200"
  style={{ filter: 'invert(48%) sepia(95%) saturate(1500%) hue-rotate(5deg) brightness(1.1)' }}
/>
      </div>

      {/* Title */}
   <span className="font-[Montserrat]  text-[16px] leading-[22px] text-[#222] flex-1">
  {title}
</span>
      <div className="absolute left-[-14px] w-[14px] h-[25px] bg-[#E47000] rounded-[40px_0px_0px_40px]" /> 
    </div>
  );
}