import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Star,
  Heart,
  ShoppingCart,
  BookOpen,
  Calendar,
  Building,
  Layers,
  Globe,
  Check,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

export default function BookDetailModal() {
  const {
    activeModalBook,
    setActiveModalBook,
    setActiveReaderBook,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen
  } = useShop();

  if (!activeModalBook) return null;

  const [selectedFormat, setSelectedFormat] = useState(
    activeModalBook.formats[0] || "Qog'oz kitob"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('tavsif'); // 'tavsif' | 'malumot' | 'parcha'

  const isFav = isInWishlist(activeModalBook.id);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const handleAddToCart = () => {
    addToCart(activeModalBook, quantity, selectedFormat);
  };

  const handleBuyNow = () => {
    addToCart(activeModalBook, quantity, selectedFormat);
    setActiveModalBook(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveModalBook(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Cover & Quick Stats */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-4 bg-slate-100 dark:bg-slate-900">
              <img
                src={activeModalBook.image}
                alt={activeModalBook.title}
                className="w-full h-full object-cover"
              />
              {activeModalBook.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md">
                  {activeModalBook.badge}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                setActiveReaderBook(activeModalBook);
              }}
              className="w-full max-w-xs py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center gap-2 transition-all mb-3"
            >
              <BookOpen className="w-4 h-4" />
              Kitobdan parcha o'qish (Bepul)
            </button>

            <button
              onClick={() => toggleWishlist(activeModalBook.id, activeModalBook.title)}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-500 flex items-center gap-1.5 transition-colors"
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
              {isFav ? "Sevimlilardan o'chirish" : "Sevimlilarga saqlash"}
            </button>
          </div>

          {/* Right Column: Book Details & Actions */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                  {activeModalBook.categoryName}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {activeModalBook.rating}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({activeModalBook.reviewsCount} ta sharh)
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
                {activeModalBook.title}
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
                Muallif: <span className="text-emerald-600 dark:text-emerald-400">{activeModalBook.author}</span>
              </p>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80">
                <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {formatPrice(activeModalBook.price)}
                </span>
                {activeModalBook.oldPrice && (
                  <span className="text-base text-slate-400 line-through">
                    {formatPrice(activeModalBook.oldPrice)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 ml-auto flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Omborda mavjud
                </span>
              </div>

              {/* Format Selection */}
              <div className="mb-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Formatni tanlang:
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeModalBook.formats.map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSelectedFormat(fmt)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedFormat === fmt
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs: Tavsif, Ma'lumot, Parcha */}
              <div className="border-b border-slate-200 dark:border-slate-700 mb-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab('tavsif')}
                    className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                      activeTab === 'tavsif'
                        ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Tavsif
                  </button>
                  <button
                    onClick={() => setActiveTab('malumot')}
                    className={`pb-2 text-sm font-bold border-b-2 transition-all ${
                      activeTab === 'malumot'
                        ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Xususiyatlari
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-24 max-h-36 overflow-y-auto pr-2 mb-6">
                {activeTab === 'tavsif' && (
                  <p>{activeModalBook.description}</p>
                )}

                {activeTab === 'malumot' && (
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Nashriyot:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalBook.publisher}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Sahifalar soni:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalBook.pages} bet</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Nashr yili:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalBook.year}-yil</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Muqova turi:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalBook.coverType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Til:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalBook.language}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Controls: Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
              
              {/* Quantity stepper */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-700 rounded-xl p-1 w-full sm:w-auto justify-between">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  -
                </button>
                <span className="px-4 font-bold text-sm text-slate-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                Savatga qo'shish
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md transition-all active:scale-95"
              >
                Hozir xarid qilish
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
