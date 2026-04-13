import React from "react";
import phone from "../assets/phone2.png";

export default function Hero() {
  const hoverOn = e => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
  };
  const hoverOff = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
  };

  return (
    <section className="relative bg-[#053965] flex flex-col items-center justify-start overflow-hidden pt-[90px]">

      {/* Glow */}
      <div className="absolute w-[900px] h-[900px] top-[80px] left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(5,57,101,0)_70%)]" />

      {/* Titre */}
      <h1 className="text-center z-10 px-4 text-white font-extrabold mt-[30px] leading-[1.2] tracking-[-0.5px] text-[clamp(22px,4.5vw,35px)] font-[Montserrat,sans-serif]">
        Votre commerce,{" "}
        <span className="text-[#F59E0B]">sous contrôle</span>{" "}
        24h/24.
      </h1>

      {/* Sous-titre */}
      <p className="text-center z-10 px-4 text-white/90 font-normal mt-4 leading-[1.6] max-w-[600px] text-[clamp(16px,2vw,20px)] font-[Montserrat,sans-serif]">
        Stock, caisse, ventes, tout en temps réel depuis votre téléphone.
      </p>

      {/* PHONE + BADGES */}
      <div className="relative z-10 mt-[69px] w-full max-w-[860px] flex justify-center items-start">

        {/* GOOGLE PLAY */}
        <div
          className="flex items-center gap-[10px] bg-white border-[1.5px] border-[#e0e0e0] rounded-lg px-7 py-[10px] cursor-pointer min-w-[150px] absolute top-[100px] left-[80px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.18 23.5c.32.18.68.2 1.02.06l11.7-11.7L12 8l-8.82 15.5z" fill="#EA4335"/>
            <path d="M20.5 10.5l-2.8-1.6L13.8 12l3.9 3.9 2.8-1.6c.8-.46.8-1.74 0-2.2z" fill="#FBBC05"/>
            <path d="M4.2.44C3.86.3 3.5.32 3.18.5L12 8l3.9-3.9L4.2.44z" fill="#4285F4"/>
            <path d="M3.18.5C2.46.9 2 1.7 2 2.6v18.8c0 .9.46 1.7 1.18 2.1L12 12 3.18.5z" fill="#34A853"/>
          </svg>
          <div>
            <span className="text-[9px] text-[#555] block tracking-[0.3px]">GET IT ON</span>
            <span className="text-[15px] font-extrabold text-[#1a1a1a] block">Google Play</span>
          </div>
        </div>

        {/* PHONE */}
        <img
          src={phone}
          alt="phone"
          className="phone-img w-[250px] block relative z-[2] -mb-[188px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        />

        {/* APP STORE */}
        <div
          className="flex items-center gap-[10px] bg-white border-[1.5px] border-[#e0e0e0] rounded-lg px-7 py-[10px] cursor-pointer min-w-[150px] absolute top-[100px] right-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <svg width="24" height="24" viewBox="0 0 814 1000" fill="#1a1a1a">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-166.1-127.2c-50.4-74.2-91.4-189.6-91.4-299.5 0-159.5 104.4-244 206.7-244 54.8 0 100.5 36 135.1 36 33 0 84.1-38.2 146.8-38.2 23.6 0 107.8 2 167.5 76.8zm-160.6-166.3c27.2-31.7 46.6-76.1 46.6-120.5 0-6.1-.5-12.2-1.6-17.2-44.2 1.6-96.5 29.4-128.4 65.6-24.7 27.5-47.6 71.6-47.6 116.5 0 6.7 1.1 13.4 1.6 15.6 2.8.5 7.2 1.1 11.6 1.1 39.6 0 89.2-26.5 117.8-61.1z"/>
          </svg>
          <div>
            <span className="text-[9px] text-[#555] block tracking-[0.3px]">Available on the</span>
            <span className="text-[15px] font-extrabold text-[#1a1a1a] block">App Store</span>
          </div>
        </div>

      </div>
    </section>
  );
}