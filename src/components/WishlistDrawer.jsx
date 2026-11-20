import React from 'react';
import { useShop } from '../context/ShopContext';
import { booksData } from '../data/books';
import { X, Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    setActiveModalBook
  } = useShop();

  if (!isWishlistOpen) return null;

  const favBooks = booksData.filter(b => wishlist.includes(b.id));

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Sevimlilar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {favBooks.length} ta saqlangan kitob
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Book List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favBooks.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Sevimlilar ro'yxati bo'sh
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto">
                  Sizga yoqqan kitoblardagi yurakcha belgisini bosib, ularni bu yerga saqlashingiz mumkin.
                </p>
              </div>
            ) : (
              favBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 group"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-16 h-22 object-cover rounded-xl bg-slate-200 dark:bg-slate-700 flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setActiveModalBook(book);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setActiveModalBook(book);
                          }}
                          className="text-sm font-bold text-slate-900 dark:text-white truncate cursor-pointer hover:text-emerald-600"
                        >
                          {book.title}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(book.id, book.title)}
                          className="text-slate-400 hover:text-rose-500 transition-colors"
                          title="Sevimlilardan o'chirish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {book.author}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="font-black text-sm text-slate-900 dark:text-white">
                        {formatPrice(book.price)}
                      </span>

                      <button
                        onClick={() => addToCart(book)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Savatga
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
