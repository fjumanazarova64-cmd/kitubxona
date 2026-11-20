import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Heart,
  Star,
  Eye,
  BookOpen,
  Check,
  ShoppingCart,
  Headphones,
  FileText
} from 'lucide-react';

export default function BookCard({ book }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setActiveModalBook,
    setActiveReaderBook
  } = useShop();

  const [addedAnimation, setAddedAnimation] = useState(false);
  const isFav = isInWishlist(book.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(book);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  const handleToggleFav = (e) => {
    e.stopPropagation();
    toggleWishlist(book.id, book.title);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const badgeColors = {
    'Yangi': 'bg-emerald-500 text-white',
    'Ommabop': 'bg-blue-500 text-white',
    'Bestseller': 'bg-amber-500 text-slate-950 font-bold',
    'Xit sotuv': 'bg-rose-500 text-white',
    'Klassika': 'bg-purple-600 text-white',
    'Tavsiya': 'bg-teal-600 text-white',
    'Aksiya -21%': 'bg-red-600 text-white font-bold',
    'IT Tavsiya': 'bg-indigo-600 text-white',
    'Tarixiy Roman': 'bg-amber-700 text-white',
    'Durdona': 'bg-emerald-700 text-white',
    'Detektiv': 'bg-slate-700 text-white',
  };

  return (
    <div
      onClick={() => setActiveModalBook(book)}
      className="group relative bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Image Container */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-4">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {book.badge && (
              <span
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-md uppercase tracking-wider ${
                  badgeColors[book.badge] || 'bg-slate-800 text-white'
                }`}
              >
                {book.badge}
              </span>
            )}
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={handleToggleFav}
            className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isFav
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-110'
                : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-rose-500 hover:scale-110'
            }`}
            title={isFav ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
          </button>

          {/* Quick Read / Quick View Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveReaderBook(book);
              }}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-emerald-500 hover:text-white transition-colors shadow-lg flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              Parcha o'qish
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveModalBook(book);
              }}
              className="p-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-emerald-500 hover:text-white transition-colors shadow-lg"
              title="Batafsil ma'lumot"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category & Formats */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {book.categoryName}
          </span>

          <div className="flex items-center gap-1 text-slate-400">
            {book.formats.includes("Audio kitob") && (
              <span title="Audio kitob mavjud">
                <Headphones className="w-3.5 h-3.5 text-amber-500" />
              </span>
            )}
            {book.formats.includes("E-Kitob (PDF)") && (
              <span title="E-Kitob PDF mavjud">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
              </span>
            )}
          </div>
        </div>

        {/* Title & Author */}
        <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2.5">
          {book.author}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
            {book.rating}
          </span>
          <span className="text-[11px] text-slate-400">
            ({book.reviewsCount} sharh)
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
          {book.description}
        </p>
      </div>

      {/* Footer: Price & Cart Button */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
        <div>
          {book.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through block leading-none mb-1">
              {formatPrice(book.oldPrice)}
            </span>
          )}
          <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
            {formatPrice(book.price)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 shadow-sm ${
            addedAnimation
              ? 'bg-green-600 text-white'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-4 h-4 animate-bounce" />
              <span>Savatda!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Savatga</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
