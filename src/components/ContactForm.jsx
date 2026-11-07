import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, MessageCircle, Package, Sparkles } from 'lucide-react';
import { companyContactInfo, productsData, productCategories } from '../data/products';

export default function ContactForm({ prefilledInterest = '', showDetails = true }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: prefilledInterest || '',
    orderType: 'Wholesale / Bulk Order',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledInterest) {
      setFormData((prev) => ({ ...prev, interest: prefilledInterest }));
    }
  }, [prefilledInterest]);

  // Dropdown options
  const dropdownOptions = [
    { 
      group: "Product Categories", 
      items: productCategories.filter(c => c !== 'All').map(c => `Bulk ${c} Supply`) 
    },
    { 
      group: "Popular Stock Items", 
      items: productsData.slice(0, 10).map(p => p.name) 
    },
    { 
      group: "Other Enquiries", 
      items: ["Wholesale Price List Request", "Container / Pallet Shipment", "Spare Parts Availability Check"] 
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppSubmissionUrl = () => {
    const msg = encodeURIComponent(
      `Hello Ken2Citi Cool Technical Services!\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Order Type:* ${formData.orderType}\n*Item of Interest:* ${formData.interest}\n*Message:* ${formData.message}`
    );
    return `https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`;
  };

  return (
    <div className="w-full">
      <div className={`grid grid-cols-1 ${showDetails ? 'lg:grid-cols-12' : ''} gap-12 items-start`}>
        
        {/* Contact Info & Details */}
        {showDetails && (
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
                <Sparkles size={13} className="text-brand-yellow fill-brand-yellow" />
                <span>Sales Desk & Warehouse</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
                Order Direct from Our Ebute-Metta Depot
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-brand-body leading-relaxed">
                Contact our sales desk for wholesale carton pricing, gas cylinder stock verification, or nationwide dispatch scheduling.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              <a 
                href={`tel:${companyContactInfo.phone}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-green/40 shadow-soft transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Lines (Calls)</h4>
                  <p className="text-sm font-bold text-brand-charcoal group-hover:text-brand-green transition">
                    {companyContactInfo.phone} / {companyContactInfo.phoneAlt}
                  </p>
                  <span className="text-[11px] text-slate-400">Director: {companyContactInfo.director}</span>
                </div>
              </a>

              <a 
                href={`https://wa.me/${companyContactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 hover:border-emerald-500 shadow-soft transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Instant WhatsApp Orders</h4>
                  <p className="text-sm font-bold text-emerald-950">
                    {companyContactInfo.phone}
                  </p>
                  <span className="text-[11px] text-emerald-700">Immediate reply for price quotes and availability</span>
                </div>
              </a>

              <a 
                href={`mailto:${companyContactInfo.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-green/40 shadow-soft transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Official Email</h4>
                  <p className="text-sm font-bold text-brand-charcoal group-hover:text-brand-green transition truncate">
                    {companyContactInfo.email}
                  </p>
                  <span className="text-[11px] text-slate-400">Formal purchase orders and invoices</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Depot & Showroom Address</h4>
                  <p className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    {companyContactInfo.address}
                  </p>
                  <span className="text-[11px] text-slate-400">Open Mon - Sat 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 p-6 text-center">
              <MapPin size={26} className="mx-auto text-brand-green mb-1.5" />
              <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">197, Borno Way, Ebute-Metta, Lagos</p>
              <p className="text-[11px] text-slate-500 mt-1">Easy collection point for mainland and island orders.</p>
            </div>

          </div>
        )}

        {/* Contact Form */}
        <div className={`${showDetails ? 'lg:col-span-7' : 'w-full'} bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft-lg`}>
          
          {submitted ? (
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-charcoal">
                  Order Request Received!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-brand-body max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName || 'Valued Customer'}</strong>. Your inquiry for <strong>{formData.interest || 'Technical Supplies'}</strong> has been sent to our sales desk. We will contact you at <strong>{formData.phone}</strong> with wholesale rates.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md mx-auto text-center space-y-2.5">
                <p className="text-xs font-semibold text-emerald-900">
                  Need faster confirmation? Forward this inquiry directly to our WhatsApp sales desk:
                </p>
                <a
                  href={getWhatsAppSubmissionUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow transition"
                >
                  <MessageCircle size={16} />
                  <span>Send to WhatsApp ({companyContactInfo.phone})</span>
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      interest: '',
                      orderType: 'Wholesale / Bulk Order',
                      message: ''
                    });
                  }}
                  className="text-xs font-bold text-brand-green hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal">
                  Customer & Wholesale Order Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Specify the items, quantities, or carton lots you need. We provide fast stock confirmation and wholesale quotes.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name / Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ebuka / Prime HVAC Merchants"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0806 969 0775"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@business.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition"
                  />
                </div>
              </div>

              {/* Order Type & Item of Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="orderType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Order Scale
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition bg-white"
                  >
                    <option value="Wholesale / Bulk Order">Wholesale / Bulk Order</option>
                    <option value="Retail / Single Item">Retail / Single Item</option>
                    <option value="Distributor / Full Carton Lots">Distributor / Full Carton Lots</option>
                    <option value="Contractor Regular Account">Contractor Regular Supply</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Item of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition bg-white"
                  >
                    <option value="">Select category or item...</option>
                    {dropdownOptions.map((group, idx) => (
                      <optgroup key={idx} label={group.group}>
                        {group.items.map((item, itemIdx) => (
                          <option key={itemIdx} value={item}>
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Required Quantities / Delivery Location <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify quantities (e.g. 5 cylinders of R507A, 10 rolls of pancake copper, pickup in Ebute-Metta or dispatch to Abuja)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition resize-y"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green via-emerald-600 to-amber-500 hover:from-brand-green-dark hover:to-amber-600 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-brand-glow hover:shadow-2xl transition-all duration-300 disabled:opacity-75"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Wholesale Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
