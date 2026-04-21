import React from 'react';
import icon1 from '../assets/test.png';
import icon2 from '../assets/ICON4.png';
import icon3 from '../assets/ICON1.png';
import icon4 from '../assets/ICON3.png';
import icon5 from '../assets/ICON2.png'


const ICONS = [icon1, icon2, icon3, icon4, icon5];

export default function FeatureCard({ title, index = 0 }) {
  const icon = ICONS[index % ICONS.length];

  return (
    <div
      className="
        bg-white border rounded-[14px] px-[18px] py-[12px]
        flex items-center gap-[10px] relative
        transition-all duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_4px_14px_rgba(255,168,0,0.25)]
        border-gray-200 hover:border-orange-300
      "
    >
      {/* Icon box */}
      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0">
<img
  src={icon}
  alt="feature icon"
  className="w-[28px] h-[28px] object-contain"
  style={{ filter: 'invert(45%) sepia(90%) saturate(800%) hue-rotate(360deg) brightness(1.05)' }}
/>
      </div>

      {/* Title */}
      <span className="text-[16px] leading-[20px] text-black font-bold flex-1">
        {title}
      </span>

      {/* Left accent bar */}
      <div className="absolute left-[-14px] w-[14px] h-[25px] bg-[#E47000] rounded-[40px_0px_0px_40px]" />
    </div>
  );
}