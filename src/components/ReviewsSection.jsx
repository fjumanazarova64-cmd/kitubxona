import React from 'react';
import { reviews } from '../data/books';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="sharhlar" className="py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
          Mijozlarimiz fikrlari
        </span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-3 mb-2">
          Kitobxonlar Nima Deyishadi?
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Bizning xizmatlarimiz va kitoblarimiz sifatidan mamnun bo'lgan minglab kitobxonlar fikrlari
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                "{rev.text}"
              </p>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-600"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {rev.name}
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </h4>
                <p className="text-xs text-slate-400">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
