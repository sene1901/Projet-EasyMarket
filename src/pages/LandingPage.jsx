import React from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import  BoutiquesSection from '../sections/BouutiquesSection';
import Pricing from '../sections/Pricing';
import CTASection from '../sections/CTASection';
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <Testimonials/>
        <BoutiquesSection/>
        <Pricing/>
        <CTASection/>
         
      </main>
    
    </>
  );
}