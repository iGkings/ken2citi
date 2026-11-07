import React from 'react';
import { Star, Quote, CheckCircle, Sparkles, Package } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alhaji Bello S.",
      role: "Cooling Supplies Wholesaler",
      location: "Sabon Gari Market, Kano",
      comment: "We regularly order pallets of Westron R-507A and R134a cylinders from Ken2Citi Cool. Every cylinder arrives factory-sealed with verified purity. Their Ebute-Metta dispatch team loads our interstate trailers without delay.",
      rating: 5,
      badge: "Wholesale Partner"
    },
    {
      name: "Engr. Paul Eze",
      role: "HVAC Mechanical Contractor",
      location: "Trans-Amadi, Port Harcourt",
      comment: "Finding genuine VALUE vacuum pumps and ASTM copper coils in bulk was challenging before we found Ken2Citi Cool. Their prices are unbeatable and they supply authentic contractor-grade tools with original cases.",
      rating: 5,
      badge: "Contractor Account"
    },
    {
      name: "Mr. Segun Oladipo",
      role: "Senior Refrigeration Technician",
      location: "Ikeja / Ebute-Metta, Lagos",
      comment: "I always pick up my Emkarate POE compressor oils, filter driers, and flaring kits directly at 197 Borno Way. Ebuka and his team are dependable, knowledgeable, and provide transparent wholesale pricing.",
      rating: 5,
      badge: "Verified Trade Customer"
    },
    {
      name: "Chief Kalu M.",
      role: "Appliance Spares Merchant",
      location: "Main Market, Onitsha",
      comment: "Excellent bulk supplier for washing machine spare parts, capacitors, and copper tubing coils. Fast freight delivery to the east and consistent stock availability throughout the year.",
      rating: 5,
      badge: "Regional Dealer"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60">
            <Sparkles size={13} className="text-amber-500 fill-amber-500" />
            <span>Merchant & Contractor Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Trusted by HVAC Dealers & Trade Merchants
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
            See why technical stockists, regional retailers, and commercial cooling contractors across Nigeria rely on our Ebute-Metta supply depot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-bgLight/80 rounded-2xl p-6 border border-slate-200/80 hover:border-brand-green/30 hover:bg-white transition-all duration-300 hover:shadow-soft-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-charcoal">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.role}</p>
                  <p className="text-[10px] text-slate-400">{item.location}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <CheckCircle size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
