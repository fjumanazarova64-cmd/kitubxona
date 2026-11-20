import React from 'react';
import { useShop } from '../context/ShopContext';
import { booksData } from '../data/books';
import BookCard from './BookCard';
import { BookX, Sparkles } from 'lucide-react';

export default function BookGrid() {
  const {
    searchQuery,
    selectedCategory,
    sortBy,
    maxPrice,
    formatFilter,
    setSelectedCategory,
    setSearchQuery,
    setMaxPrice
  } = useShop();

  // Filter books
  const filteredBooks = booksData.filter((book) => {
    // Search query filter
    const matchesSearch =
      searchQuery.trim() === '' ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategory === 'all' || book.category === selectedCategory;

    // Price filter
    const matchesPrice = book.price <= maxPrice;

    // Format filter
    let matchesFormat = true;
    if (formatFilter === 'paper') {
      matchesFormat = book.formats.some(f => f.includes("Qog'oz"));
    } else if (formatFilter === 'pdf') {
      matchesFormat = book.formats.some(f => f.includes("PDF"));
    } else if (formatFilter === 'audio') {
      matchesFormat = book.formats.some(f => f.includes("Audio"));
    }

    return matchesSearch && matchesCategory && matchesPrice && matchesFormat;
  });

  // Sort books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return b.year - a.year;
    // default: popular (reviewsCount)
    return b.reviewsCount - a.reviewsCount;
  });

  return (
    <div>
      {/* Title & Total count header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Yangi va Ommabop Kitoblar
            </h2>
            <span className="p-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Har bir kitobxon uchun saralangan eng sara asarlar to'plami
          </p>
        </div>

        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-full w-max">
          Topildi: <span className="text-emerald-600 dark:text-emerald-400 font-black">{sortedBooks.length}</span> ta kitob
        </div>
      </div>

      {/* Grid or Empty State */}
      {sortedBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center mx-auto mb-4">
            <BookX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Kechirasiz, mos kitoblar topilmadi
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            Qidiruv so'zini o'zgartirib ko'ring yoki filtrlarni tozalang. Shuningdek, bizdan topolmagan kitobingizga maxsus buyurtma qoldirishingiz mumkin.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setMaxPrice(120000);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all"
            >
              Barcha filtrlarni tozalash
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
