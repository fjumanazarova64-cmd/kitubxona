import React from 'react';
import {
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Send,
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-16 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-black text-slate-900 dark:text-white">Kitob</span>
                <span className="text-2xl font-black text-emerald-600">Xon</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              KitobXon — O'zbekistondagi eng boy va qulay onlayn kitob vitrinasi. Har bir xonadonga ziyo va ma'rifat ulashish bizning oliy maqsadimizdir.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-2">
                Yangi kitoblardan xabardor bo'ling:
              </span>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Elektron pochtangiz..."
                  className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all">
                  Obuna
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Katalog
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">O'zbek Adabiyoti</a></li>
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">Jahon Adabiyoti</a></li>
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">Bolalar Adabiyoti</a></li>
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">Psixologiya va Rivojlanish</a></li>
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">Biznes va Moliya</a></li>
              <li><a href="#katalog" className="hover:text-emerald-600 transition-colors">IT va Dasturlash</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Xizmatlar
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <li><a href="#aksiyalar" className="hover:text-emerald-600 transition-colors">Aksiyalar & Chegirmalar</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 transition-colors">Yetkazib berish shartlari</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 transition-colors">To'lov turlari</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 transition-colors">Kitob qaytarish tartibi</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Hamkorlik qilish</a></li>
            </ul>
          </div>

          {/* Contacts & Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Aloqa
            </h4>
            <ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>+998 (71) 200-00-00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>aloqa@kitobxon.uz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Toshkent sh., Navoiy shoh ko'chasi, 1-uy</span>
              </li>
            </ul>

            {/* Payment Systems Badges */}
            <div className="pt-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Qabul qilinadigan to'lovlar:
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-cyan-600 border border-slate-200 dark:border-slate-700">
                  Payme
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-blue-600 border border-slate-200 dark:border-slate-700">
                  Click
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-purple-600 border border-slate-200 dark:border-slate-700">
                  Uzum
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-emerald-600 border border-slate-200 dark:border-slate-700">
                  Naqd
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024–2026 KitobXon onlayn vitrinasi. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Sevgi bilan yaratildi <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white transition-colors"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
