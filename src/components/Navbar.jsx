import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  BookOpen,
  Search,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  BookmarkCheck,
  PlusCircle
} from 'lucide-react';

export default function Navbar() {
  const {
    darkMode,
    setDarkMode,
    cartCount,
    cartTotal,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    searchQuery,
    setSearchQuery,
    setIsRequestModalOpen
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const navLinks = [
    { name: 'Bosh sahifa', href: '#' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Yangi kelganlar', href: '#yangi' },
    { name: 'Aksiyalar', href: '#aksiyalar' },
    { name: 'Sharhlar', href: '#sharhlar' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-200 shadow-sm">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
        <span>200 000 so'mdan ortiq xarid uchun butun O'zbekiston bo'ylab <strong>bepul yetkazib berish!</strong> Promokod: <strong>KITOBXON</strong></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Kitob</span>
                <span className="text-2xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">Xon</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block -mt-1">
                Onlayn Kutubxona
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Kitob topish
            </button>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Kitob nomi, muallif yoki janr bo'yicha qidiruv..."
                className="w-full pl-10 pr-9 py-2 rounded-xl text-sm bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Sevimlilar ro'yxati"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-3.5 py-2.5 rounded-xl font-medium text-sm shadow-md shadow-emerald-600/25 transition-all"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-5 h-5 rounded-full bg-amber-500 text-slate-900 text-[11px] font-black flex items-center justify-center border-2 border-white dark:border-slate-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">
                Savat ({cartCount})
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800 dark:text-slate-100" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kitob nomi yoki muallif..."
              className="w-full pl-10 pr-9 py-2 rounded-xl text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsRequestModalOpen(true);
              }}
              className="mt-2 text-left px-3 py-2 rounded-lg text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60"
            >
              + Topolmagan kitobingizga buyurtma berish
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
