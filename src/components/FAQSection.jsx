import React, { useState } from 'react';
import { faqs } from '../data/books';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            Savollaringiz bormi?
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-3 mb-2">
            Tez-tez Beriladigan Savollar
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Xarid qilish, to'lovlar va yetkazib berish bo'yicha eng muhim ma'lumotlar
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
