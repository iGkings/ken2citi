import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Package, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  Truck
} from 'lucide-react';
import Logo from '../components/Logo';
import CtaBanner from '../components/CtaBanner';
import { companyContactInfo } from '../data/products';
import { trustStats } from '../data/services';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Ken2Citi Cool Technical Services";
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "100% Genuine Supplies",
      description: "We strictly supply verified OEM products with factory seals, unadulterated gases, and pure copper tubing meeting ASTM specifications.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Wholesale Price Competitiveness",
      description: "Direct importer access allows us to deliver volume carton rates and tiered wholesale discounts to dealers and mechanical contractors.",
      icon: Award,
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "Consistent Stock Availability",
      description: "We maintain heavy year-round inventory at our Ebute-Metta warehouse to ensure our trade partners never suffer project delays.",
      icon: Package,
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Reliable Nationwide Logistics",
      description: "Prompt processing and secure freight packaging ensuring your cylinders, delicate gauges, and copper coils arrive safely anywhere in Nigeria.",
      icon: Truck,
      color: "from-amber-600 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Sparkles size={13} className="text-brand-yellow fill-brand-yellow" />
            <span>Company Profile & Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            About Ken2Citi Cool Technical Services
          </h1>
          <p className="mt-4 text-sm sm:text-base text-brand-body leading-relaxed">
            Cooling Systems • Refrigeration • Air Conditioning • Technical Supplies. Registered entity {companyContactInfo.bnNumber} located at 197 Borno Way, Ebute-Metta, Lagos.
          </p>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-brand-body text-xs sm:text-sm leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-3 py-1 rounded-md">
                Official Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                Dedicated Exclusively to Sales, Wholesale & Bulk Technical Supplies
              </h2>
              
              <p>
                <strong>Ken2Citi Cool Technical Services</strong> is a leading cooling and technical supplies business situated at <strong>197, Borno Way, Ebute-Metta, Lagos, Nigeria</strong>. The company operates under the leadership of Director <strong>Ebuka Anumnu</strong> and is registered under business number <strong>BN 2439593</strong>.
              </p>
              
              <p>
                Our core business is focused entirely on the supply and distribution of products for refrigeration, air conditioning, and selected household equipment applications. We do not engage in repair or field installation contracts — our 100% focus is maintaining deep, authentic inventory and delivering the best wholesale pricing for technicians, retailers, and mechanical contractors.
              </p>

              <p>
                Our comprehensive product portfolio includes factory-sealed refrigeration and air conditioning gases, compressors, blower motors, dehydrated pancake copper coils, precision measuring instruments, manifold gauges, and washing machine spare parts.
              </p>

              <div className="pt-2">
                <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2">Our Key Product Lines Include:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Refrigeration & AC Gases (R134a, R410A, R22, R507A)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Refrigeration & AC Compressors</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Washing Machine Spare Parts</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Vacuum Cleaner Products & Components</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Copper Flaring Tools & Tube Cutters</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                    <span>Digital & Analogue Manifold Gauges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Business Card & Official Identity */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 shadow-sm text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Official Trade Identity & Credentials
                </span>
                
                {/* Official Business Card presentation */}
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src="/images/business-card.jpg"
                    alt="Ken2Citi Cool Technical Services Business Card - Ebuka Anumnu Director"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <div className="text-left">
                    <span className="font-bold text-brand-charcoal block">{companyContactInfo.director}</span>
                    <span className="text-[11px] text-slate-500">Director</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-brand-green block">{companyContactInfo.bnNumber}</span>
                    <span className="text-[11px] text-slate-500">Registered BN</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-brand-green flex items-center justify-center mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal mb-3">
                Our Commercial Mission
              </h3>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                To provide cooling technicians, mechanical engineers, and retail dealers with immediate, dependable access to 100% genuine refrigeration products, certified gases, and precision tools at the most competitive wholesale prices in Nigeria.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                <Eye size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal mb-3">
                Our Commercial Vision
              </h3>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                To stand as Nigeria's most reliable and comprehensive one-stop wholesale distribution hub for cooling systems, technical tools, and household spare parts, celebrated for integrity and seamless nationwide fulfillment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-2.5">
              Distributor Standards & Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${val.color} text-white flex items-center justify-center mb-4 shadow`}>
                      <IconComp size={22} />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-brand-charcoal mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-brand-body leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-brand-charcoal text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {trustStats.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-gold-text tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.description}
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
