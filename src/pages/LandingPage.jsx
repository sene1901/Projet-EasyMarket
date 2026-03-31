import React from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonial';


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <Pricing/>
         <Testimonials/>
      </main>
    
    </>
  );
}