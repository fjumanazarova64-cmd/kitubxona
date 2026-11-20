import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Coffee,
  ShoppingCart,
  BookmarkCheck
} from 'lucide-react';

export default function BookReaderModal() {
  const { activeReaderBook, setActiveReaderBook, addToCart } = useShop();

  if (!activeReaderBook) return null;

  const [readerTheme, setReaderTheme] = useState('sepia'); // 'white' | 'sepia' | 'dark'
  const [fontSize, setFontSize] = useState(18);

  const themeStyles = {
    white: 'bg-white text-slate-900 border-slate-200',
    sepia: 'bg-[#fbf0d9] text-[#433422] border-[#eed6b4]',
    dark: 'bg-slate-900 text-slate-100 border-slate-800'
  };

  const handleBuy = () => {
    addToCart(activeReaderBook);
    setActiveReaderBook(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className={`relative w-full max-w-3xl rounded-3xl shadow-2xl border flex flex-col max-h-[92vh] overflow-hidden transition-colors ${themeStyles[readerTheme]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Controls */}
        <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <div>
              <h4 className="font-bold text-sm leading-tight">{activeReaderBook.title}</h4>
              <p className="text-xs opacity-70">{activeReaderBook.author} — Namuna parcha</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Selectors */}
            <div className="flex items-center bg-black/5 dark:bg-white/10 rounded-xl p-1 gap-1">
              <button
                onClick={() => setReaderTheme('white')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'white' ? 'bg-white text-slate-900 shadow-sm' : ''}`}
                title="Yorug' rejim"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('sepia')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'sepia' ? 'bg-[#fbf0d9] text-[#433422] shadow-sm font-bold' : ''}`}
                title="Kitobiy sariq rejim"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('dark')}
                className={`p-1.5 rounded-lg text-xs ${readerTheme === 'dark' ? 'bg-slate-800 text-white shadow-sm' : ''}`}
                title="Tungi rejim"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font Size Adjusters */}
            <div className="flex items-center bg-black/5 dark:bg-white/10 rounded-xl p-1 gap-1">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="p-1.5 rounded-lg hover:bg-black/10 text-xs"
                title="Shriftni kichraytirish"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold px-1">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(26, fontSize + 2))}
                className="p-1.5 rounded-lg hover:bg-black/10 text-xs"
                title="Shriftni kattalashtirish"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={() => setActiveReaderBook(null)}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Book Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-serif leading-relaxed">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8 pb-6 border-b border-black/10 dark:border-white/10">
              <span className="text-xs font-sans uppercase tracking-widest font-bold opacity-60">
                1-BOB. KIRISH
              </span>
              <h2 className="text-2xl font-bold mt-2 mb-1">{activeReaderBook.title}</h2>
              <p className="text-sm italic opacity-80">{activeReaderBook.author}</p>
            </div>

            <div
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
              className="whitespace-pre-line text-justify"
            >
              {activeReaderBook.excerpt}
            </div>

            {/* End of Excerpt Notice */}
            <div className="mt-12 p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-center font-sans">
              <BookmarkCheck className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
              <h4 className="font-bold text-base mb-1">Parcha yakunlandi</h4>
              <p className="text-xs opacity-75 mb-4 max-w-sm mx-auto">
                Asarning to'liq va original nusxasini o'qish uchun uni qulay narxda xarid qiling.
              </p>
              <button
                onClick={handleBuy}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md inline-flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                To'liq kitobni sotib olish ({activeReaderBook.price.toLocaleString()} so'm)
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
