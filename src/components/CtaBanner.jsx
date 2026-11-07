import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageCircle, ArrowRight, ShieldCheck, Sparkles, Package } from 'lucide-react';
import { companyContactInfo } from '../data/products';

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Ken2Citi Cool! I want to request your latest wholesale price list and carton terms."
  )}`;

  return (
    <section className="py-14 sm:py-18 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gradient Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-green via-emerald-600 to-amber-500 p-8 sm:p-12 text-white shadow-2xl">
          
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Package size={14} className="text-brand-yellow" />
              <span>Wholesale & Bulk Supplies</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Stock Your Store with Nigeria's Trusted Cooling & Technical Supplies
            </h2>

            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed max-w-2xl mb-6">
              Refrigeration gases, compressors, pancake copper tubing coils, HVAC diagnostic tools, and appliance spare parts ready for direct collection at 197 Borno Way, Ebute-Metta, Lagos or fast transport dispatch nationwide.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span>Order via WhatsApp</span>
              </a>

              <a
                href={`tel:${companyContactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <PhoneCall size={18} className="text-brand-yellow" />
                <span>Call ({companyContactInfo.phone})</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl backdrop-blur-sm transition"
              >
                <span>Request Price List</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-white/20 flex flex-wrap items-center gap-5 text-xs text-emerald-50 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-brand-yellow" />
                <span>100% Factory Sealed & Genuine</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-brand-yellow" />
                <span>Wholesale & Bulk Supply Only</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-brand-yellow" />
                <span>BN 2439593 Registered</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
