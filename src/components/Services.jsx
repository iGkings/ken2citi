import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Snowflake, 
  Gauge, 
  Wind, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles,
  PackageCheck
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  Wrench,
  Settings,
  Snowflake,
  Gauge,
  Wind,
  ShieldCheck
};

export default function Services({ isPreview = true }) {
  const displayServices = isPreview ? servicesData.slice(0, 6) : servicesData;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <PackageCheck size={14} className="text-brand-green" />
            <span>Wholesale Supply Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Comprehensive Cooling & Technical Supplies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            Ken2Citi Cool Technical Services is dedicated solely to sales, supplying genuine cooling components, refrigeration gases, compressors, and technical tools in bulk and wholesale to dealers and contractors.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-brand-green/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-green/10 to-brand-yellow/20 text-brand-green flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 p-2.5">
                      <IconComponent size={24} />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-green transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {service.features?.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/products?category=${encodeURIComponent(service.title.split(' ')[0])}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-brand-green-dark group/link"
                  >
                    <span>View Inventory</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">Wholesale & Bulk</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        {isPreview && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-brand-charcoal hover:text-brand-green border-2 border-slate-200 hover:border-brand-green shadow-sm hover:shadow transition-all"
            >
              <span>Explore All Wholesale Supply Lines & Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
