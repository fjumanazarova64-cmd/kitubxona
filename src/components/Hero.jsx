import React from 'react';
import { useShop } from '../context/ShopContext';
import { booksData } from '../data/books';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  BookOpen,
  Award,
  BookMarked,
  Eye
} from 'lucide-react';

export default function Hero() {
  const { setActiveModalBook, setActiveReaderBook, addToCart } = useShop();

  // Featured book (Sariq devni minib)
  const featuredBook = booksData[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 dark:bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span>O'zbekistonning eng zamonaviy onlayn kitob vitrinasi</span>
            </div>

            {/* Main Heading - Preserving user's exact phrase */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              Kitoblar — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600">Qalb Chirog'idir</span>
            </h1>

            {/* Subtitle - User's exact phrase expanded */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dunyo durdonalari va sevimli asarlaringizni bizning onlayn vitrinamizdan toping. Har bir sahifada yangi olam va bitmas-tuganmas ma'naviy boylik sizni kutmoqda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#katalog"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all group"
              >
                <span>Katalogga o'tish</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#aksiyalar"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-bold text-base border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center"
              >
                Chegirmalar & Aksiyalar
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">10 000+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Kitoblar xilma-xilligi</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">24 Soatda</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Tezkor yetkazish</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">100% Asl</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Sifat kafolati</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">50 000+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Mamnun kitobxon</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Featured Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Floating Glass Tag */}
              <div className="absolute -top-4 -left-4 z-20 glass-card px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-pulse">
                <BookMarked className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Hafta Tavsiyasi</div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">Xudoyberdi To'xtaboyev</div>
                </div>
              </div>

              {/* Main Visual Card */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200/80 dark:border-slate-700/80 relative overflow-hidden group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900">
                  <img
                    src={featuredBook.image}
                    alt={featuredBook.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-[11px] font-bold uppercase tracking-wider w-max mb-2">
                      {featuredBook.categoryName}
                    </span>
                    <h3 className="text-2xl font-black">{featuredBook.title}</h3>
                    <p className="text-sm text-slate-200">{featuredBook.author}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-5">
                  {featuredBook.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div>
                    <span className="text-xs text-slate-400 block line-through">55 000 so'm</span>
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      45 000 so'm
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveReaderBook(featuredBook)}
                      className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      title="Parcha o'qish"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => addToCart(featuredBook)}
                      className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all"
                    >
                      Savatga
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
