import React from 'react';
import { useShop } from '../context/ShopContext';
import { categories, booksData } from '../data/books';
import {
  BookOpen,
  Feather,
  Globe,
  Sparkles,
  Brain,
  TrendingUp,
  Code,
  Clock,
  Layers
} from 'lucide-react';

const iconMap = {
  BookOpen: Layers,
  Feather: Feather,
  Globe: Globe,
  Sparkles: Sparkles,
  Brain: Brain,
  TrendingUp: TrendingUp,
  Code: Code,
  Clock: Clock,
};

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useShop();

  const getBookCount = (catId) => {
    if (catId === 'all') return booksData.length;
    return booksData.filter(b => b.category === catId).length;
  };

  return (
    <div className="w-full pb-4">
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || BookOpen;
          const isSelected = selectedCategory === cat.id;
          const count = getBookCount(cat.id);

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/80'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
              <span>{cat.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
