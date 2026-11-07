import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Filter, Sparkles, RefreshCw, Package, PhoneCall, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CtaBanner from '../components/CtaBanner';
import { productsData, productCategories, companyContactInfo } from '../data/products';

export default function ProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read URL query parameters if navigated with ?category=...
  const queryParams = new URLSearchParams(location.search);
  const initialCategoryParam = queryParams.get('category');

  // Match initial category if valid
  const matchedInitial = productCategories.find(
    c => c.toLowerCase().includes(initialCategoryParam?.toLowerCase() || '')
  ) || 'All';

  const [selectedCategory, setSelectedCategory] = useState(matchedInitial);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Products Catalogue | Ken2Citi Cool Technical Services";
    window.scrollTo(0, 0);
  }, []);

  // Update selected category when query parameter changes
  useEffect(() => {
    if (initialCategoryParam) {
      const match = productCategories.find(
        c => c.toLowerCase().includes(initialCategoryParam.toLowerCase())
      );
      if (match) setSelectedCategory(match);
    }
  }, [initialCategoryParam]);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(query)) ||
        product.shortSpec.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectForQuote = (product) => {
    navigate(`/contact?interest=${encodeURIComponent(product.name)}`);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-brand-green text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Package size={13} className="text-brand-yellow fill-brand-yellow" />
            <span>Official Technical Inventory • Wholesale & Bulk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Cooling & Technical Supplies Catalogue
          </h1>
          <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
            Refrigeration gases, compressors, pancake copper tubing coils, HVAC diagnostic tools, manifold gauges, and appliance spare parts available at our Ebute-Metta Lagos central depot.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-soft border border-slate-200/80">
          
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gases, compressors, copper tubing, manifold gauges, flaring tools..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-xs sm:text-sm text-brand-charcoal transition bg-slate-50/50 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-brand-green text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          {/* Active Filter Status Bar */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              Showing <span className="font-bold text-brand-charcoal">{filteredProducts.length}</span> of{' '}
              <span className="font-bold text-brand-charcoal">{productsData.length}</span> products
              {selectedCategory !== 'All' && (
                <span> in <strong className="text-brand-green">{selectedCategory}</strong></span>
              )}
              {searchQuery && (
                <span> matching "<strong className="text-brand-charcoal">{searchQuery}</strong>"</span>
              )}
            </div>

            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-brand-green hover:underline font-bold inline-flex items-center gap-1"
              >
                <RefreshCw size={12} />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectForQuote={handleSelectForQuote}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
              <Search size={28} />
            </div>
            <h3 className="text-lg font-bold text-brand-charcoal">No items found</h3>
            <p className="text-xs text-slate-500 mt-2 mb-6 leading-relaxed">
              We couldn't find any products matching your current query. Try resetting your filters or contacting our sales desk directly.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 bg-brand-green text-white text-xs font-bold rounded-xl shadow hover:bg-brand-green-dark transition"
            >
              Show All Products
            </button>
          </div>
        )}
      </section>

      {/* Trade Purchasing Info Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold text-brand-charcoal text-sm sm:text-base">Bulk Carton & Pallet Rates</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We provide discounted wholesale pricing on full carton orders of manifold gauges, flaring toolkits, filter driers, and vibration absorbers.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-brand-charcoal text-sm sm:text-base">Guaranteed Refrigerant Purity</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All Westron R-507A, R410A, and R134a cylinders arrive with intact holographic/QR seals. Never diluted, recycled, or contaminated.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-brand-charcoal text-sm sm:text-base">Daily Interstate Waybills</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We coordinate daily waybills with reputable transport logistics companies in Lagos to safely deliver cylinders and equipment nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12">
        <CtaBanner />
      </div>

    </div>
  );
}
