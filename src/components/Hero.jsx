import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  Truck, 
  Wrench, 
  Award 
} from 'lucide-react';
import { companyContactInfo } from '../data/products';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef(null);

  const slides = [
    {
      id: 0,
      badge: "Ebute-Metta Lagos Wholesale Hub • BN 2439593",
      title: "Direct Wholesale & Bulk Supplies of Cooling Systems & Parts",
      highlightText: "Wholesale & Bulk Supplies",
      subtitle: "Ken2Citi Cool Technical Services is Nigeria's trusted stockist of refrigeration gases, compressors, pancake copper coils, precision HVAC tools, and household appliance spares.",
      primaryCta: { text: "Browse Wholesale Catalogue", link: "/products" },
      secondaryCta: { text: "Request Bulk Price List", link: "/contact" },
      productsPreview: [
        { img: "/images/products/product_11.png", name: "Westron R-507A Gas", tag: "100% Pure Gas" },
        { img: "/images/products/product_26.png", name: "VALUE Vacuum Pump", tag: "OEM Certified" },
        { img: "/images/products/product_30.png", name: "Pancake Copper Coils", tag: "Pure Copper" }
      ],
      features: ["Wholesale & Bulk Cartons", "Immediate Ebute-Metta Pickup", "Nationwide Logistics"]
    },
    {
      id: 1,
      badge: "Factory Sealed Cylinders & Pure POE Oils",
      title: "Refrigeration Gases, Compressor Oils & Chemical Cleaners",
      highlightText: "Refrigeration Gases & Oils",
      subtitle: "Stock your store with verified pure R134a, R410A, R22, R507A, R600a, and R32 cylinders alongside genuine Emkarate and Motorol synthetic compressor lubricants.",
      primaryCta: { text: "View Gases & Chemicals", link: "/products" },
      secondaryCta: { text: "Inquire via WhatsApp", link: "whatsapp" },
      productsPreview: [
        { img: "/images/products/product_11.png", name: "Westron Gas Cylinders", tag: "Factory Sealed" },
        { img: "/images/products/product_2.png", name: "EMKARATE RL 100H (5L)", tag: "Synthetic POE" },
        { img: "/images/products/product_6.png", name: "Westron Coil Safe", tag: "Neutral Cleaner" }
      ],
      features: ["Guaranteed Pure HFC Gases", "Emkarate RL 68H & 100H", "Westron Chemical Cleaners"]
    },
    {
      id: 2,
      badge: "Contractor Grade HVAC Instruments",
      title: "Precision Technical Tools, Vacuum Pumps & Manifold Gauges",
      highlightText: "Technical Tools & Gauges",
      subtitle: "Original VALUE rotary vane vacuum pumps, HONGSEN vibration-proof dual gauge manifolds, complete copper flaring/swaging sets, and GLOUR oxy-acetylene brazing torches.",
      primaryCta: { text: "Explore Technical Tools", link: "/products" },
      secondaryCta: { text: "Contact Sales Desk", link: "/contact" },
      productsPreview: [
        { img: "/images/products/product_26.png", name: "VALUE Rotary Pump", tag: "VE115N / VE125N" },
        { img: "/images/products/product_27.png", name: "HONGSEN Dual Gauge", tag: "Vibration-Proof" },
        { img: "/images/products/product_28.png", name: "P.M Flaring Kit", tag: "Complete Set" }
      ],
      features: ["VALUE & HONGSEN Importer", "Hard Molded Carry Cases", "Standard EU/NG Voltage"]
    },
    {
      id: 3,
      badge: "ASTM B280 Certified Pure Copper Tubing",
      title: "Copper Coils, Brass Fittings, Insulation & Appliance Spares",
      highlightText: "Copper Tubing & Spares",
      subtitle: "Dehydrated pancake copper coils, Emerson expansion valves, vibration absorbers, AmTape and Gulf-O-flex insulation foam, plus washing machine and vacuum cleaner replacement components.",
      primaryCta: { text: "View Copper & Spare Parts", link: "/products" },
      secondaryCta: { text: "Order Bulk Supplies", link: "/contact" },
      productsPreview: [
        { img: "/images/products/product_30.png", name: "Pancake Copper Tube", tag: "Dehydrated Coil" },
        { img: "/images/products/product_20.png", name: "EMERSON Expansion Valve", tag: "TXV Valve" },
        { img: "/images/products/product_13.png", name: "AmTape Foam Tape", tag: "Elastomeric" }
      ],
      features: ["100% Dehydrated Copper", "Washing Machine Parts", "Gulf-O-flex Distributor"]
    }
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isPaused) {
      slideTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-14 lg:pt-10 lg:pb-20 border-b border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Frame */}
        <div className="relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-brand-green text-xs sm:text-sm font-semibold mb-4 shadow-sm animate-fadeIn">
                <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
                <span>{current.badge}</span>
              </div>

              {/* Slide Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] mb-5 min-h-[96px] sm:min-h-[115px] flex items-center">
                <span>
                  {current.title.split(current.highlightText)[0]}
                  <span className="gradient-text">{current.highlightText}</span>
                  {current.title.split(current.highlightText)[1] || ''}
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-2xl mb-6 min-h-[64px]">
                {current.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
                <Link
                  to={current.primaryCta.link}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green via-emerald-600 to-amber-500 hover:from-brand-green-dark hover:to-amber-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-brand-glow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{current.primaryCta.text}</span>
                  <ArrowRight size={17} />
                </Link>

                {current.secondaryCta.link === 'whatsapp' ? (
                  <a
                    href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Ken2Citi Cool! I want to inquire about bulk wholesale supplies for ${current.highlightText}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition shadow"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Order Desk</span>
                  </a>
                ) : (
                  <Link
                    to={current.secondaryCta.link}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-charcoal hover:text-brand-green border-2 border-slate-200 hover:border-brand-green font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition shadow-sm"
                  >
                    <span>{current.secondaryCta.text}</span>
                  </Link>
                )}
              </div>

              {/* 3 Quick Slide Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200/80 w-full text-xs font-semibold text-slate-700">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-brand-green shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Visual Product Showcase Carousel Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-md lg:max-w-none">
                
                {/* Visual Showcase Card */}
                <div className="bg-white rounded-3xl p-6 shadow-soft-lg border border-slate-200/80 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Top Header of Card */}
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                        Slide {currentSlide + 1} of {slides.length} • Stock Showcase
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                      In Stock Lagos
                    </span>
                  </div>

                  {/* Main Product Featured Image Box */}
                  <div className="relative h-64 sm:h-72 w-full flex items-center justify-center bg-gradient-to-b from-slate-50 to-white rounded-2xl overflow-hidden p-4 group">
                    <img
                      src={current.productsPreview[0].img}
                      alt={current.productsPreview[0].name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transition-all duration-500 transform group-hover:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold bg-brand-charcoal text-white px-2.5 py-1 rounded-md shadow">
                        {current.productsPreview[0].tag}
                      </span>
                    </div>

                    <div className="absolute bottom-2 inset-x-0 text-center">
                      <span className="text-xs font-bold text-brand-charcoal bg-white/95 px-3 py-1 rounded-full shadow-sm border border-slate-200">
                        {current.productsPreview[0].name}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails Row of other products in this slide */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {current.productsPreview.slice(1, 3).map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70"
                      >
                        <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 border border-slate-100">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-[11px] font-bold text-brand-charcoal truncate">{item.name}</p>
                          <span className="text-[10px] text-brand-green font-semibold">{item.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer Inquiry */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`tel:${companyContactInfo.phone}`}
                      className="text-xs font-bold text-slate-700 hover:text-brand-green flex items-center gap-1.5 transition"
                    >
                      <PhoneCall size={14} className="text-brand-green" />
                      <span>{companyContactInfo.phone}</span>
                    </a>

                    <Link
                      to="/products"
                      className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                    >
                      <span>Full Stock List</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Slider Controls: Arrows & Indicators */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
            
            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-brand-green hover:text-white hover:border-brand-green transition flex items-center justify-center shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-brand-green hover:text-white hover:border-brand-green transition flex items-center justify-center shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Indicators / Dots */}
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 bg-gradient-to-r from-brand-green to-amber-500'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-xs font-bold text-slate-400">
              0{currentSlide + 1} / 0{slides.length}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
