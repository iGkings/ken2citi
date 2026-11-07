import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyContactInfo } from '../data/products';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hello Ken2Citi Cool Technical Services! I am reaching out to inquire about your wholesale and bulk pricing for cooling systems, gases, tools, and spare parts."
  );
  
  const whatsappUrl = `https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2 relative hidden sm:flex items-center gap-2 bg-white text-brand-charcoal text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg border border-slate-100 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Order Wholesale Stock on WhatsApp!</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 transition ml-1"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
          <div className="absolute -bottom-1 right-6 w-2.5 h-2.5 bg-white border-b border-r border-slate-100 rotate-45"></div>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ken2Citi Cool on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-brand-glow hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-yellow"></span>
        </span>
        <MessageCircle size={28} className="fill-white/20 stroke-white stroke-2" />
      </a>
    </div>
  );
}
