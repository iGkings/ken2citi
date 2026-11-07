import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Package, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { companyContactInfo } from '../data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products Catalogue', path: '/products' },
    { name: 'Wholesale Supplies', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact & Orders', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-brand-charcoal text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${companyContactInfo.phone}`} 
              className="flex items-center gap-2 hover:text-brand-yellow transition"
            >
              <Phone size={13} className="text-brand-yellow" />
              <span>{companyContactInfo.phone} / {companyContactInfo.phoneAlt}</span>
            </a>
            <a 
              href={`mailto:${companyContactInfo.email}`} 
              className="flex items-center gap-2 hover:text-brand-yellow transition"
            >
              <Mail size={13} className="text-brand-yellow" />
              <span>{companyContactInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-brand-yellow" />
              <span>197, Borno Way, Ebute-Metta, Lagos</span>
            </div>
            <span className="text-slate-500">|</span>
            <span className="text-brand-yellow font-bold">Wholesale & Bulk Supply</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-md py-3' 
            : 'shadow-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Link */}
          <Link to="/" className="group" aria-label="Ken2Citi Cool Technical Services Home">
            <Logo size="md" showBN={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 relative py-1 hover:text-brand-green ${
                    isActive
                      ? 'text-brand-green after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-brand-green after:to-brand-yellow after:rounded-full font-bold'
                      : 'text-brand-charcoal/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Ken2Citi Cool! I want to request a wholesale price quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-4 py-2.5 rounded-full shadow transition"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Order</span>
            </a>

            <a
              href={`tel:${companyContactInfo.phone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-amber-500 hover:from-brand-green-dark hover:to-amber-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-soft hover:shadow-brand-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={14} className="text-brand-yellow" />
              <span>Call Depot</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${companyContactInfo.phone}`}
              className="p-2 text-brand-green hover:bg-slate-100 rounded-lg sm:hidden"
              aria-label="Call depot"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-green hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-4 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-base font-semibold px-4 py-3 rounded-xl transition ${
                      isActive
                        ? 'bg-brand-green/10 text-brand-green font-bold'
                        : 'text-brand-charcoal hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} className="text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`tel:${companyContactInfo.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green to-amber-500 text-white font-bold py-3 px-4 rounded-xl shadow-md text-center text-sm"
                >
                  <Phone size={18} className="text-brand-yellow" />
                  <span>Call 08069690775 / 08172425151</span>
                </a>
                <a
                  href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Ken2Citi Cool! I want to inquire about bulk wholesale supplies.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl text-center text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
