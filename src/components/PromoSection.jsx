import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, ArrowRight, Gift, Percent, Clock } from 'lucide-react';

export default function PromoSection() {
  const { applyPromo, setIsCartOpen } = useShop();

  return (
    <section id="aksiyalar" className="py-12 sm:py-16">
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white shadow-2xl border border-emerald-800/40">
        
        {/* Decorative background glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 -top-10 w-60 h-60 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              <span>Hafta aksiyasi — Maxsus chegirmalar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Barcha Psixologiya va Rivojlanish Kitoblariga <span className="text-amber-400">15% gacha Chegirma!</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Kuzgi mutolaa faslida eng sevimli asarlaringizni maxsus narxlarda xarid qiling. "KITOBXON" promokodidan foydalanib qo'shimcha 10% chegirmaga ega bo'ling.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <Percent className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold">Promokod: <strong className="text-amber-400">KITOBXON</strong></span>
              </div>

              <a
                href="#katalog"
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Aksiyadagi kitoblar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-3 w-full max-w-xs shadow-xl">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-bold block">
                Aksiya yakunlanishiga qoldi:
              </span>
              <div className="flex justify-center gap-2.5 text-center">
                <div className="bg-black/30 rounded-xl p-2.5 min-w-16">
                  <span className="text-2xl font-black text-white">03</span>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Kun</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 min-w-16">
                  <span className="text-2xl font-black text-white">14</span>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Soat</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 min-w-16">
                  <span className="text-2xl font-black text-white">48</span>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Daqiqa</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 pt-2">
                * Chegirma tovarlar soni cheklangan bo'lib, aksiya muddati tugagach asl narxiga qaytadi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
