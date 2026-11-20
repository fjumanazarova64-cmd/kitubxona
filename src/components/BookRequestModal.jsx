import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Search, CheckCircle2, Send, HelpCircle } from 'lucide-react';

export default function BookRequestModal() {
  const { isRequestModalOpen, setIsRequestModalOpen, addToast } = useShop();

  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isRequestModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast("So'rovingiz qabul qilindi! Mutaxassislarimiz tez orada aloqaga chiqadi.", 'success');
  };

  const handleClose = () => {
    setIsRequestModalOpen(false);
    setSubmitted(false);
    setBookTitle('');
    setAuthor('');
    setContact('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
            <Search className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">
            Topolmagan kitobingiz bormi?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            Kitob nomi va muallifini qoldiring, biz uni nashriyotlar va xalqaro omborlardan siz uchun maxsus topib keltiramiz.
          </p>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                So'rov yuborildi!
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kitob topilishi bilanoq sizga telefon yoki Telegram orqali xabar beramiz.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                Tushunarli
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                  Kitob nomi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Ikki eshik orasi"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                  Muallif (agar bilsangiz)
                </label>
                <input
                  type="text"
                  placeholder="Masalan: O'tkir Hoshimov"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1">
                  Telefon yoki Telegram username *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+998 90 123 45 67 yoki @username"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all mt-2"
              >
                <Send className="w-4 h-4" />
                So'rovni yuborish
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
