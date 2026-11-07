import React, { useState } from 'react';
import { MessageCircle, Check, ShieldCheck, ChevronRight, Sparkles, X, Info, Package, CheckCircle2 } from 'lucide-react';
import { companyContactInfo } from '../data/products';

export default function ProductCard({ product, onSelectForQuote }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Pre-filled WhatsApp message for wholesale inquiries
  const whatsappText = encodeURIComponent(
    `Hello Ken2Citi Cool Technical Services!\n\nI want to inquire about wholesale/bulk pricing for:\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Subcategory:* ${product.subcategory || 'Technical Supplies'}\n*Packaging:* ${product.packaging || 'Wholesale Lot'}\n\nPlease share current price per unit/carton and availability at your Ebute-Metta warehouse.`
  );
  const whatsappUrl = `https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappText}`;

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-green/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden h-full">
        
        {/* Top Image Box */}
        <div className="relative bg-gradient-to-b from-slate-50 to-white p-5 flex items-center justify-center h-56 sm:h-60 overflow-hidden border-b border-slate-100">
          
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-brand-green px-2.5 py-1 rounded-md border border-brand-green/20 shadow-sm flex items-center gap-1">
              <Sparkles size={11} className="text-brand-yellow fill-brand-yellow" />
              {product.badge}
            </span>
          )}

          {/* Category Tag */}
          <span className="absolute top-3 right-3 z-10 text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
            {product.category}
          </span>

          {/* Real Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* In Stock Lagos Chip */}
          <div className="absolute bottom-2.5 left-3 z-10">
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded shadow-sm border border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              In Stock Lagos
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="font-bold text-brand-charcoal text-sm sm:text-base group-hover:text-brand-green transition-colors line-clamp-2 mb-1.5 leading-snug">
              {product.name}
            </h3>

            {/* Short Spec Summary */}
            <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
              {product.shortSpec}
            </p>

            {/* Packaging summary if available */}
            {product.packaging && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <Package size={13} className="text-brand-green shrink-0" />
                <span className="truncate">{product.packaging}</span>
              </div>
            )}
          </div>

          {/* Bottom Pricing & Actions */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block">Wholesale Supply</span>
                <span className="text-xs font-bold text-brand-charcoal">
                  {product.price}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-xs text-brand-green hover:text-brand-green-dark font-semibold inline-flex items-center gap-1 hover:underline"
              >
                <Info size={13} />
                <span>Specs</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-sm hover:shadow"
                aria-label={`Inquire about ${product.name} on WhatsApp`}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onSelectForQuote) {
                    onSelectForQuote(product);
                  } else {
                    setModalOpen(true);
                  }
                }}
                className="flex items-center justify-center gap-1 bg-brand-charcoal hover:bg-black text-white text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-sm hover:shadow"
              >
                <span>Bulk Quote</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Specs Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center h-52 mb-5 border border-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-2.5 py-1 rounded-md">
                  {product.category} • {product.subcategory}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal mt-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {product.shortSpec}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Technical Specifications & Features
                </h4>
                <ul className="space-y-2">
                  {product.specs?.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wholesale packaging */}
              {product.packaging && (
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
                  <Package size={16} className="text-brand-green shrink-0" />
                  <span><strong>Packaging & Distribution:</strong> {product.packaging}</span>
                </div>
              )}

              {/* Action Buttons in Modal */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow transition text-xs sm:text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Order via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    if (onSelectForQuote) onSelectForQuote(product);
                  }}
                  className="flex-1 bg-gradient-to-r from-brand-green to-amber-500 hover:from-brand-green-dark hover:to-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow transition text-center text-xs sm:text-sm"
                >
                  Request Bulk Price List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
