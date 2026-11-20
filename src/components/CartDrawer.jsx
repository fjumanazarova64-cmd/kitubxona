import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Tag,
  CheckCircle,
  Truck
} from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    cartTotal,
    removeFromCart,
    updateQuantity,
    appliedPromo,
    applyPromo,
    removePromo,
    setIsCheckoutOpen
  } = useShop();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const handleApplyCode = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyPromo(inputCode);
      setInputCode('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Xarid Savati
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {cartCount} ta mahsulot tanlangan
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Savatingiz bo'sh
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto">
                  Katalogimizdagi sevimli kitoblaringizni tanlang va savatga qo'shing.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  Kitoblarni ko'rish
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.book.id}-${item.format}-${idx}`}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 relative group"
                >
                  <img
                    src={item.book.image}
                    alt={item.book.title}
                    className="w-16 h-22 object-cover rounded-xl bg-slate-200 dark:bg-slate-700 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {item.book.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.book.id, item.format)}
                          className="text-slate-400 hover:text-rose-500 transition-colors"
                          title="O'chirish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {item.book.author}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                        {item.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="font-black text-sm text-slate-900 dark:text-white">
                        {formatPrice(item.book.price * item.quantity)}
                      </span>

                      {/* Quantity stepper */}
                      <div className="flex items-center bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                        <button
                          onClick={() => updateQuantity(item.book.id, item.format, item.quantity - 1)}
                          className="p-1 hover:text-emerald-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.book.id, item.format, item.quantity + 1)}
                          className="p-1 hover:text-emerald-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
              
              {/* Promo Code Form */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                      <Tag className="w-4 h-4" />
                      <span>{appliedPromo.code} ({appliedPromo.discountPercent}% chegirma)</span>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-rose-500 hover:text-rose-700 font-bold ml-2"
                    >
                      Bekor qilish
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCode} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promokod: KITOBXON"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 text-white text-xs font-bold hover:bg-slate-700"
                    >
                      Qo'llash
                    </button>
                  </form>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Kitoblar narxi:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formatPrice(cartSubtotal)}
                  </span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Chegirma ({appliedPromo.discountPercent}%):</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-slate-400" />
                    Yetkazib berish:
                  </span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">BEPUL</span>
                    ) : (
                      formatPrice(deliveryFee)
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-baseline text-sm">
                  <span className="font-bold text-slate-900 dark:text-white text-base">Jami to'lov:</span>
                  <span className="font-black text-xl text-emerald-600 dark:text-emerald-400">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Buyurtmani rasmiylashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
