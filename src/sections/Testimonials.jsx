import React, { useRef } from 'react';
import CompanyCard from '../components/CompanyCard';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo1 from '../assets/ALL.png';
import logo2 from '../assets/kalite.png';
import logo3 from '../assets/inayah.png';
import logo4 from '../assets/Eline.jpg';
import logo5 from '../assets/lekk.png';
import logo6 from '../assets/sira.jpg';
import logo7 from '../assets/atyd.jpg';
import logo8 from '../assets/sen.jpg';

const TESTIMONIALS = [
  { name: 'All-In-Tech', logo: logo1, description: 'All-In-Tech est une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. ' },
  { name: 'Karitédema', logo: logo2, description: 'Karitédiema est une marque de produits cosmétiques naturels et équitables, spécialisée dans les soins à base de beurre de karité biologique. ' },
  { name: 'Inayah', logo: logo3, description: 'Inayah réinvente les soins beauté en mêlant recettes traditionnelles authentiques, ingrédients naturels et savoir-faire transmis de génération en génération.' },
  { name: 'Eline Biot', logo: logo4, description: 'Des soins cosmétiques naturels, fabriqués au Sénégal, pensés pour purifier, réparer et sublimer votre peau et vos cheveux au quotidien. ' },
  { name: 'Tech Pro', logo: logo5, description: 'Lekku Mbed est une expérience culinaire moderne ancrée dans les saveurs locales. un concept revisite la street food sénégalaise avec créativité, exigence et générosité.' },
  { name: 'Market Plus', logo: logo6, description: 'Sira yiité est Magasin de chaussures sandales stylées, du cuir 100% local, un savoir-faire artisanal qui fait la différence…' },
  { name: 'BizPro', logo: logo7, description: 'ATydi Afro Hair est une marque de soins capillaires naturels dédiée aux cheveux texturés, crépus, bouclés et frisés spécialement pensée pour les enfants..' },
  { name: 'AfriTech', logo: logo8, description: 'Vente de crochets , perruques , postiches , faux locs et mèches de tout genre en ligne.' },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300;
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-6 bg-[#f7f8fa]">
      <div className="max-w-[1100px] mx-auto mt-5">

        {/* TITLE */}
        <div className="text-center mb-[60px]">
          <SectionTitle
            title="Ils utilisent"
            highlight="EasyMarket"
            subtitle={
              <>
                Plus de <span className="font-extrabold">100 commerçants</span> nous font confiance !
              </>
            }
            center
          />
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="scroll-container flex gap-5 overflow-x-auto scroll-smooth pb-[10px]"
          >
            {TESTIMONIALS.map((item, i) => (
              <CompanyCard key={i} {...item} />
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-[10px] mt-5">

            <button
              onClick={() => scroll('left')}
              className="w-10 h-[30px] rounded-md border-none bg-transparent text-[#e87722] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => scroll('right')}
              className="w-10 h-[30px] border-none bg-[#e87722] text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}