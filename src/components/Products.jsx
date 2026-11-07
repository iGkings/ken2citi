import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Package } from 'lucide-react';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

export default function Products() {
  const navigate = useNavigate();

  // Get featured products (6 to 8 items)
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 8);

  const handleSelectForQuote = (product) => {
    navigate(`/contact?interest=${encodeURIComponent(product.name)}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-brand-bgLight/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60">
              <Sparkles size={13} className="text-amber-500 fill-amber-500" />
              <span>Wholesale & Bulk Supplies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Featured Cooling & Technical Inventory
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
              Factory-sealed Westron refrigerant gases, Emkarate POE compressor oils, pancake copper tubing coils, VALUE vacuum pumps, and Hongsen manifold gauges ready for instant warehouse pickup or nationwide freight.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-green-dark group bg-white px-5 py-2.5 rounded-xl border border-slate-200 hover:border-brand-green transition-all shadow-sm"
            >
              <span>Explore All {productsData.length} Stock Items</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectForQuote={handleSelectForQuote}
            />
          ))}
        </div>

        {/* Bulk Order Wholesale Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
              <Package size={14} />
              <span>Contractors, Dealers & Bulk Buyers</span>
            </div>
            <h3 className="text-lg font-bold text-brand-charcoal">
              Looking for Full Carton Lots, Pallets, or Container Loads?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              We offer tiered wholesale dealer discounts for HVAC merchants, technical retailers, and mechanical contractors nationwide.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap px-6 py-3 bg-brand-charcoal hover:bg-black text-white text-xs sm:text-sm font-bold rounded-xl transition shadow"
          >
            Request Dealer Wholesale Terms
          </Link>
        </div>

      </div>
    </section>
  );
}
