import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-medium animate-slideUp"
        >
          {toast.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          )}
          {toast.type === 'info' && (
            <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
          )}
          {toast.type === 'error' && (
            <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
          )}
          <span className="flex-1 text-xs sm:text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
