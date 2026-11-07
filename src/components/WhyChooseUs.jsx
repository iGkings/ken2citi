import React from 'react';
import { Award, Package, MapPin, Truck, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { trustStats } from '../data/services';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Package,
      title: "Direct Wholesale & Bulk Supply",
      description: "We supply in singles, full cartons, pallets, and container quantities with tiered wholesale pricing tailored for technical retailers and contractors.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: ShieldCheck,
      title: "100% Verified Genuine Equipment",
      description: "Zero counterfeit products. We guarantee factory-sealed Westron refrigerants, OEM Emkarate POE lubricants, and VALUE precision tools.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: MapPin,
      title: "Strategic Lagos Central Depot",
      description: "Conveniently situated at 197, Borno Way, Ebute-Metta, Lagos for easy road access, quick in-person inspections, and instant order collection.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Truck,
      title: "Fast Nationwide Distribution",
      description: "We handle daily freight and waypoint deliveries to major trade hubs across Lagos, Abuja, Port Harcourt, Kano, Onitsha, and all 36 states.",
      color: "from-amber-600 to-amber-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <Sparkles size={13} className="text-brand-yellow fill-brand-yellow" />
            <span>The Distributor Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Why Technical Merchants Partner With Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            We focus exclusively on wholesale distribution and bulk sales, providing genuine cooling products and tools that keep HVAC contractors and retailers stocked and profitable.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 hover:border-brand-green/40 hover:bg-white transition-all duration-300 hover:shadow-soft-lg group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-green">
                  <CheckCircle2 size={13} />
                  <span>Verified Supply Partner</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="bg-gradient-to-r from-brand-charcoal via-slate-900 to-brand-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {trustStats.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-gold-text tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
