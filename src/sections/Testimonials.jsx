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
import logo7 from '../assets/testlem.png';
import logo8 from '../assets/atyd.jpg';
import logo9 from '../assets/islam.png';
import logo10 from '../assets/sen.jpg';
const TESTIMONIALS = [
  { name: 'All-In-Tech', logo: logo1, description: 'Des soins cosmétiques naturels, fabriqués au Sénégal, pensés pour purifier, réparer et sublimer votre peau et vos cheveux au quotidien. ' },
  { name: 'Karitédema', logo: logo2, description: 'Produits cosmétiques naturels...' },
  { name: 'Inayah', logo: logo3, description: 'Recettes traditionnelles...' },
  { name: 'Eline Biot', logo: logo4, description: 'Soins cosmétiques naturels...' },
  { name: 'Tech Pro', logo: logo5, description: 'Solutions digitales...' },
  { name: 'Market Plus', logo: logo6, description: 'Gestion commerciale...' },
  { name: 'StoreX', logo: logo7, description: 'Plateforme e-commerce...' },
  { name: 'BizPro', logo: logo8, description: 'Outils business...' },
  { name: 'Dakar Shop', logo: logo9, description: 'Commerce local...' },
  { name: 'AfriTech', logo: logo10, description: 'Innovation tech...' },
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
    <section style={{ padding: '48px 24px', background: '#f7f8fa' }}>
      <div style={{ maxWidth: '1100px', margin: '20px auto' }}>

        {/* TITLE */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <SectionTitle
            title="Ils utilisent"
            highlight="EasyMarket"
           subtitle={
      <>
        Plus de <span style={{ fontWeight: '800' }}>100 commerçants</span> nous font confiance !
      </>
    }
            center
          />
          
        </div>

        {/* CAROUSEL */}
        <div style={{ position: 'relative' }}>

          <div
            ref={scrollRef}
             className="scroll-container"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              paddingBottom: '10px'
            }}
          >
            {TESTIMONIALS.map((item, i) => (
              <CompanyCard key={i} {...item} />
            ))}
          </div>

          {/* BUTTONS */}
          {/* BUTTONS */}
<div style={{
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  marginTop: '20px',
}}>
  <button
    onClick={() => scroll('left')}
    style={{
      width: '40px',
      height: '30px',
      borderRadius: '6px',
      border: 'none',
      background: 'transparent',
      color: '#e87722',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }}
  >
    <ArrowLeft size={18} />
  </button>

  <button
    onClick={() => scroll('right')}
    style={{
      width: '40px',
      height: '30px',
  
      border: 'none',
      background: '#e87722',        
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }}
  >
    <ArrowRight size={18} />
  </button>
</div>

        </div>
      </div>
    </section>
  );
}