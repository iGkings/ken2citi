import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  useEffect(() => {
    document.title = "Ken2Citi Cool Technical Services | Wholesale & Bulk Cooling Supplies Lagos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Interactive 4-Slide Slider */}
      <Hero />

      {/* Supply Categories Preview (6 Cards) */}
      <Services isPreview={true} />

      {/* Featured Products Showcase (Real Stock Items) */}
      <Products />

      {/* Why Choose Us: Wholesale & Bulk Advantages */}
      <WhyChooseUs />

      {/* About Company & Director Profile Preview */}
      <About isPreview={true} />

      {/* Testimonials from Merchants & Contractors */}
      <Testimonials />

      {/* Wholesale Order CTA Banner */}
      <CtaBanner />
    </div>
  );
}
