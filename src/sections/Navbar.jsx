import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X, ShoppingCart } from 'lucide-react';

const NAV_LINKS = [
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#equipements', label: 'Equipements' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#053965] border-b border-white/[0.08]">

        <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 ">
            <img src={logo} alt="logo" className="h-[36px] " />
          </a>

          {/* Menu desktop */}
         <ul className="hidden md:flex gap-2 items-center flex-1 justify-center list-none m-0 p-0">
  {NAV_LINKS.map(link => (
    <li key={link.href}>
      <a
        href={link.href}
        className="
          px-[16px] py-[6px]
          rounded-md
          text-[18px]
        
          leading-[65px]
          text-white
          text-center
          no-underline
          transition-all
          whitespace-nowrap
          font-[Montserrat]
          hover:text-[#053965]
          hover:bg-white
        "
      >
        {link.label}
      </a>
    </li>
  ))}
</ul>

          {/* Right */}
          <div className="flex items-center gap-6 shrink-0">

            {/* Cart */}
            <div className="hidden md:block relative cursor-pointer">
              <ShoppingCart size={22} color="white" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#FFA800] text-white rounded-full w-4 h-4 text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </div>

            {/* Bouton Demo */}
            
             <a href="https://easymarket.sn"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#FFA800] rounded-full pl-[30px] pr-[16px] py-[6px] hover:bg-[#e69600] hover:scale-105 transition-all duration-200 no-underline"
            >
             
              <span className="text-white text-[14px] font-bold whitespace-nowrap">
                Demo gratuite
              </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden w-10 h-10 rounded-md bg-white/10 border-none items-center justify-center text-white cursor-pointer"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`bg-[#053965] flex flex-col px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[420px] py-4 border-t border-white/10' : 'max-h-0 py-0'
        }`}>
          {NAV_LINKS.map(link => (
            
            <a  key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg no-underline text-white/85 text-[15px] font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              {link.label}
            </a>
          ))}

          
           <a href="https://easymarket.sn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-[#FFA800] rounded-full py-2 px-4 no-underline hover:bg-[#e69600] transition-all"
          >
            <span className="text-white text-[14px] font-bold">
              Demo gratuite
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}