import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Package, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { companyContactInfo } from '../data/products';

export default function About({ isPreview = true }) {
  return (
    <section className="py-16 sm:py-20 bg-brand-bgLight/50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase & Business Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="bg-white rounded-3xl p-6 shadow-soft-lg border border-slate-200/90 text-brand-charcoal">
                
                {/* Header with Director info */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <Logo size="sm" showBN={false} />
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Leadership</span>
                    <span className="text-xs font-extrabold text-brand-charcoal">{companyContactInfo.director}</span>
                    <span className="text-[10px] text-slate-500 block">Director</span>
                  </div>
                </div>

                {/* Business Registration Banner */}
                <div className="my-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-emerald-950 block">Registered Entity</span>
                    <span className="text-[11px] text-emerald-700">Federal Republic of Nigeria</span>
                  </div>
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 bg-white rounded shadow-sm text-brand-green border border-emerald-200">
                    {companyContactInfo.bnNumber}
                  </span>
                </div>

                {/* Scope list from official profile */}
                <div className="space-y-2.5 my-4 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                    <span>Refrigeration & AC Gases (R134a, R410A, R22, R507A)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                    <span>Compressors & Motors for Fridges & Air Conditioners</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                    <span>Washing Machine & Vacuum Cleaner Spare Parts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                    <span>Copper Flaring Tools, Gauges, Manifolds & Meters</span>
                  </div>
                </div>

                {/* Location Chip */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                  <MapPin size={15} className="text-brand-green shrink-0" />
                  <span className="font-medium truncate">{companyContactInfo.address}</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-brand-charcoal text-white rounded-2xl p-4 shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-yellow to-amber-500 text-brand-charcoal flex items-center justify-center font-extrabold text-lg shadow-md">
                  <Package size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wide uppercase text-brand-yellow">Sales & Bulk Supply</p>
                  <p className="text-xs font-semibold text-slate-200">Wholesale Distribution</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
              <ShieldCheck size={13} className="text-brand-green" />
              <span>About The Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-5">
              Your Trusted Source for Refrigeration & Technical Supplies in Lagos
            </h2>

            <div className="space-y-4 text-brand-body text-sm sm:text-base leading-relaxed mb-6">
              <p>
                <strong>Ken2Citi Cool Technical Services</strong> is an established cooling and technical supplies enterprise located at <strong>197, Borno Way, Ebute-Metta, Lagos</strong>. Under the leadership of Director <strong>Ebuka Anumnu</strong>, the company operates strictly in the sales, wholesale, and bulk distribution of cooling system components and selected household equipment.
              </p>
              <p>
                We provide HVAC engineers, refrigeration technicians, and regional spare parts retailers direct access to factory-tested refrigerant gases, compressors, blower motors, dehydrated pancake copper coils, precision measuring instruments, and washing machine replacement parts.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "100% Sales & Supply Focused",
                "Bulk & Wholesale Pricing Tiers",
                "Direct Manufacturer Importation",
                "Convenient Ebute-Metta Lagos Depot",
                "Registered Entity: BN 2439593",
                "Fast Nationwide Transport Dispatches"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 size={16} className="text-brand-green shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Link */}
            {isPreview && (
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-600 hover:from-brand-green-dark hover:to-emerald-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-soft hover:shadow-brand-glow transition-all duration-300"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
