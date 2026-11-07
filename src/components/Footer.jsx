import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Package } from 'lucide-react';
import Logo from './Logo';
import { companyContactInfo } from '../data/products';
import { servicesData } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo size="md" isWhite={true} showBN={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Nigeria's dependable wholesale and bulk distributor of refrigeration gases, compressors, pancake copper tubing coils, HVAC technical tools, and household appliance spare parts.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-yellow shrink-0" />
                <span>{companyContactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-brand-yellow shrink-0" />
                <span>{companyContactInfo.openingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-yellow shrink-0" />
                <span>Director: {companyContactInfo.director} ({companyContactInfo.bnNumber})</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products Catalogue', path: '/products' },
                { name: 'Wholesale Supplies', path: '/services' },
                { name: 'Company Profile', path: '/about' },
                { name: 'Contact & Orders', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-yellow transition-colors duration-150 inline-flex items-center gap-1 text-slate-300"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Supply Lines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Supply Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to="/products"
                    className="hover:text-brand-yellow transition-colors duration-150 text-slate-300"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Order Hotlines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sales Desk Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${companyContactInfo.phone}`}
                className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Depot Phone:</span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                  {companyContactInfo.phone}
                </span>
                <span className="text-xs font-bold text-slate-300 block">
                  {companyContactInfo.phoneAlt}
                </span>
              </a>

              <a
                href={`mailto:${companyContactInfo.email}`}
                className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Official Email:</span>
                <span className="text-xs font-bold text-white block mt-0.5 truncate">
                  {companyContactInfo.email}
                </span>
              </a>

              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block mb-1.5">Trade Terms:</span>
                <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Bulk & Wholesale Sales Only
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Ken2Citi Cool Technical Services ({companyContactInfo.bnNumber}). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Ebute-Metta, Lagos, Nigeria • Cooling & Technical Supplies</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
