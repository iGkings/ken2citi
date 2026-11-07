import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Snowflake, 
  Gauge, 
  Wind, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Package, 
  Truck, 
  Check,
  PhoneCall,
  FileText
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import { servicesData, trustStats } from '../data/services';
import { companyContactInfo } from '../data/products';

const iconMap = {
  Wrench,
  Settings,
  Snowflake,
  Gauge,
  Wind,
  ShieldCheck
};

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Wholesale Supplies & Distribution | Ken2Citi Cool Technical Services";
    window.scrollTo(0, 0);
  }, []);

  const distributionWorkflow = [
    {
      step: "01",
      title: "Wholesale Inquiry / Request for Quotation",
      description: "Send us your bill of materials (BOM), required gas cylinders, or tool quantities via WhatsApp, email, or our inquiry form."
    },
    {
      step: "02",
      title: "Stock Verification & Wholesale Pro-Forma",
      description: "Our sales desk immediately verifies stock availability at our Ebute-Metta depot and issues a competitive wholesale invoice."
    },
    {
      step: "03",
      title: "Order Confirmation & Packing",
      description: "Upon order confirmation, our warehouse team carefully inspects, tallies, and packs your order in protective cartons or strapped crates."
    },
    {
      step: "04",
      title: "Immediate Collection or Interstate Dispatch",
      description: "Collect directly at 197 Borno Way, Ebute-Metta, Lagos, or our team dispatches via your preferred interstate transport company with tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Package size={13} className="text-brand-green" />
            <span>Scope of Supply & Bulk Distribution</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Wholesale & Technical Supply Scope
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
            Ken2Citi Cool Technical Services operates strictly as a wholesale and bulk distributor of refrigeration gases, compressors, pancake copper tubing coils, HVAC diagnostic tools, and appliance spare parts.
          </p>
        </div>
      </section>

      {/* Main Categories Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="space-y-8">
          {servicesData.map((category) => {
            const IconComponent = iconMap[category.icon] || Wrench;

            return (
              <div
                key={category.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Info & Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-green/10 to-brand-yellow/20 text-brand-green flex items-center justify-center p-2.5">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        {category.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/50">
                            {category.badge}
                          </span>
                        )}
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal">
                          {category.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                      {category.fullDescription}
                    </p>

                    {category.idealFor && (
                      <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <strong className="text-brand-charcoal">Ideal Buyers:</strong> {category.idealFor}
                      </p>
                    )}

                    {/* CTA Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/contact?interest=${encodeURIComponent(category.title)}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-emerald-600 hover:from-brand-green-dark hover:to-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-soft transition"
                      >
                        <FileText size={15} />
                        <span>Inquire for Wholesale Lots</span>
                      </Link>

                      <a
                        href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Ken2Citi Cool! I want to inquire about bulk supplies for ${category.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-green hover:underline py-2"
                      >
                        <span>WhatsApp Sales Desk</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Inventory Deliverables */}
                  <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-3 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-brand-green" />
                      <span>Product Range & Specifications</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {category.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-brand-green shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4-Step Wholesale Procurement Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-3 py-1 rounded-full">
              Seamless Trade Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-3">
              How to Purchase Bulk Stock From Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Fast, transparent, and dependable wholesale procurement from our Lagos warehouse to your door or transport terminal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionWorkflow.map((step, idx) => (
              <div key={idx} className="relative bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-brand-green mb-2 block">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-sm text-brand-charcoal mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <div className="mt-16">
        <CtaBanner />
      </div>

    </div>
  );
}
