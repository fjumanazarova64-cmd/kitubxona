import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import FilterBar from './components/FilterBar';
import BookGrid from './components/BookGrid';
import PromoSection from './components/PromoSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import BookDetailModal from './components/BookDetailModal';
import BookReaderModal from './components/BookReaderModal';
import CheckoutModal from './components/CheckoutModal';
import BookRequestModal from './components/BookRequestModal';
import ToastContainer from './components/ToastContainer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Showcase with stats and featured book */}
      <Hero />

      {/* Main Catalog Area */}
      <main id="katalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Category Filter Pills */}
        <CategoryFilter />

        {/* Filter & Sort Controls */}
        <FilterBar />

        {/* Books Grid */}
        <BookGrid />

        {/* Promotional Banner */}
        <PromoSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <BookDetailModal />
      <BookReaderModal />
      <CheckoutModal />
      <BookRequestModal />

      {/* Floating Notifications */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
}
