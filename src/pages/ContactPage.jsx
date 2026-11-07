import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, MessageCircle, Phone, Mail, Clock, MapPin, Package } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { companyContactInfo } from '../data/products';

export default function ContactPage() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const prefilledInterest = searchParams.get('interest') || '';

  useEffect(() => {
    document.title = "Contact Sales Desk & Orders | Ken2Citi Cool Technical Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Package size={13} className="text-brand-yellow fill-brand-yellow" />
            <span>Direct Sales Desk & Depot Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Contact & Wholesale Orders
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
            Need current carton pricing for gas cylinders, bulk copper coils, vacuum pumps, or appliance spare parts? Contact our sales desk at 197 Borno Way, Ebute-Metta, Lagos.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <ContactForm prefilledInterest={prefilledInterest} showDetails={true} />
      </section>

      {/* Quick Depot Support Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-brand-charcoal to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              Immediate Stock Pickup
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Visiting Our Ebute-Metta Lagos Warehouse?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              197, Borno Way, Ebute-Metta, Lagos. Open Monday through Saturday, 8:00 AM to 6:00 PM for cash-and-carry, trade accounts, and freight loading.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`tel:${companyContactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green to-amber-500 hover:from-brand-green-dark hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow"
            >
              <Phone size={16} className="text-brand-yellow" />
              <span>Call ({companyContactInfo.phone})</span>
            </a>
            <a
              href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Ken2Citi Cool! I want to check stock availability for pickup at 197 Borno Way, Ebute-Metta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Depot</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
