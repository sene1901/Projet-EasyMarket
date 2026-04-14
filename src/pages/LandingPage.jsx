import React from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';

import Pricing from '../sections/Pricing';
import CTASection from '../sections/CTASection';
import PartenairesSection from '../sections/PartenairesSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import Matériel from '../sections/Materiel';
import TestimonialsVideo from'../sections/TestimonialsVideo';
import Frequence from'../sections/Frequence';
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <Testimonials/>
        <Pricing/>
        <CTASection/>
        <PartenairesSection/>
        <Matériel/>
        <TestimonialsVideo/>
        <Frequence/>
        <ContactSection/>
         <Footer/>
      </main>
    
    </>
  );
}