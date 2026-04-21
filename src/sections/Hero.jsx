import React from "react";
import phone from "../assets/phone2.png";
import google from "../assets/google1.png";
import apple from "../assets/APPLE.png";

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
      <h1 className="text-center z-10 px-4 text-white font-extrabold mt-[30px] leading-[1.2] tracking-[-0.5px] text-[clamp(28px,4.5vw,36px)] font-[Montserrat,sans-serif]">
        Votre commerce,{" "}
        <span className="text-[#F59E0B]">sous contrôle</span>{" "}
        24h/24.
      </h1>

      {/* Sous-titre */}
      <p className="text-center z-10 px-4 text-white/90 mt-4 leading-[1.6] max-w-[600px] text-[clamp(14px,2vw,20px)] font-semibold font-[Montserrat]">
        Stock, caisse, ventes, tout en temps réel depuis votre téléphone.
      </p>

      {/* ── MOBILE & TABLETTE : CTA + badges empilés ── */}
      <div className="md:hidden z-10 flex flex-col items-center gap-3 mt-6 px-4 w-full">

        {/* CTA */}
        
         <a href="https://easymarket.sn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFA800] hover:bg-[#e69600] text-white font-bold text-[15px] rounded-full px-10 py-3 no-underline transition-all duration-200 hover:scale-105 w-full max-w-[320px] text-center"
        >
          Demo gratuite
        </a>

        {/* Badges côte à côte */}
        <div className="flex gap-3 justify-center">
          <div
            className="flex items-center justify-center w-[148px] h-[52px] bg-white border border-[#e0e0e0] rounded-lg cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            <img src={google} alt="Get it on Google Play" className="h-[32px] object-contain" />
          </div>
          <div
            className="flex items-center justify-center w-[148px] h-[52px] bg-white border border-[#e0e0e0] rounded-lg cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            <img src={apple} alt="Download on the App Store" className="h-[32px] object-contain" />
          </div>
        </div>
      </div>

      {/* ── PHONE + badges flottants (desktop seulement) ── */}
      <div className="relative z-10 mt-8 w-full max-w-[860px] flex justify-center items-start">

        {/* GOOGLE PLAY — desktop uniquement */}
        <div
          className="hidden md:flex items-center justify-center w-[190px] h-[66px]
            bg-white border border-[#e0e0e0] rounded-lg cursor-pointer
            absolute top-[100px] left-[60px]
            shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <img src={google} alt="Get it on Google Play" className="h-[40px] object-center" />
        </div>

        {/* PHONE */}
        <img
          src={phone}
          alt="phone"
          className="w-[220px] sm:w-[250px] block relative z-[2] -mb-[188px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        />

        {/* APP STORE — desktop uniquement */}
        <div
          className="hidden md:flex items-center justify-center w-[190px] h-[66px]
            bg-white border border-[#e0e0e0] rounded-lg cursor-pointer
            absolute top-[100px] right-[60px]
            shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          <img src={apple} alt="Download on the App Store" className="h-[40px] object-center" />
        </div>

      </div>
    </section>
  );
}