import React from 'react';
import logo from '../assets/logo.png';

const NAV_LINKS = ['Fonctionnalités', 'Tarifs', 'Equipements', 'Témoignages', 'FAQ'];

const SOCIALS = [
  {
    label: 'Facebook',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" strokeWidth="1.5" fill="white" />,
  },
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="white" />
        <rect x="2" y="9" width="4" height="12" fill="white" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </>
    ),
  },
  {
    label: 'TikTok',
    icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" fill="white" />,
  },
];

export default function Footer() {
  return (
    <footer className="font-Montserrat bg-[#0a3460] px-12 pt-12">
      <div className="max-w-[1100px] mx-auto grid grid-cols-3 gap-10 pb-10 items-start">

        {/* Logo + Tagline */}
        <div>
          <img src={logo} alt="EasyMarket" className="h-[36px] mb-4 object-contain" />
          <p className="text-[18px] font-medium leading-[1.6] text-white/90 max-w-[180px] m-0">
            L'outil d'aide à la décision des commerçants africains
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-[15px] text-white/90 no-underline hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Réseaux sociaux */}
        <div>
          <p className="text-[15px] font-bold text-white mb-4 mt-0">
            Rejoignez nous
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-[38px] h-[38px]  iconsocial rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1100px] mx-auto border-t border-white/25 py-[18px] text-center">
        <p className="text-[13px] text-white/85 m-0 font-semibold">
          © 2026 EasyMarket. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}