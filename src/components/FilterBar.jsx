import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpDown, SlidersHorizontal, RotateCcw } from 'lucide-react';

export default function FilterBar() {
  const {
    sortBy,
    setSortBy,
    maxPrice,
    setMaxPrice,
    formatFilter,
    setFormatFilter,
    setSelectedCategory,
    setSearchQuery,
    searchQuery
  } = useShop();

  const handleReset = () => {
    setSortBy('popular');
    setMaxPrice(120000);
    setFormatFilter('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Sort Selector */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Saralash:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-medium rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="popular">Eng ommabop</option>
            <option value="rating">Reyting bo'yicha</option>
            <option value="price-low">Narxi: Avval arzonlari</option>
            <option value="price-high">Narxi: Avval qimmatlari</option>
            <option value="newest">Yangi qo'shilganlar</option>
          </select>
        </div>

        {/* Format Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Format:
          </span>
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            {['all', 'paper', 'pdf', 'audio'].map((fmt) => {
              const labels = {
                all: 'Barchasi',
                paper: "Qog'oz",
                pdf: 'PDF',
                audio: 'Audio'
              };
              const isSelected = formatFilter === fmt;
              return (
                <button
                  key={fmt}
                  onClick={() => setFormatFilter(fmt)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {labels[fmt]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Slider */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Maks. narx:
          </span>
          <input
            type="range"
            min="35000"
            max="120000"
            step="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-28 sm:w-36 accent-emerald-600 cursor-pointer"
          />
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 min-w-16">
            {formatPrice(maxPrice)}
          </span>
        </div>

        {/* Reset Filter Button */}
        <button
          onClick={handleReset}
          className="text-xs font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1.5 ml-auto sm:ml-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Tozalash
        </button>

      </div>
    </div>
  );
}
