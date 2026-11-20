import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  X,
  CheckCircle2,
  CreditCard,
  Banknote,
  Smartphone,
  MapPin,
  User,
  Phone,
  Truck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    clearCart,
    triggerCelebration
  } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+998 ',
    region: 'Toshkent shahri',
    address: '',
    paymentMethod: 'payme',
    comment: ''
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const regions = [
    'Toshkent shahri',
    'Toshkent viloyati',
    'Samarqand viloyati',
    'Buxoro viloyati',
    'Andijon viloyati',
    "Farg'ona viloyati",
    'Namangan viloyati',
    'Qashqadaryo viloyati',
    'Surxondaryo viloyati',
    'Xorazm viloyati',
    'Navoiy viloyati',
    'Jizzax viloyati',
    'Sirdaryo viloyati',
    'Qoraqalpog\'iston Respublikasi'
  ];

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || formData.phone.length < 9 || !formData.address) {
      alert("Iltimos, barcha majburiy maydonlarni to'ldiring!");
      return;
    }

    const randomId = 'KTB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomId);
    setOrderSuccess(true);
    triggerCelebration();
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {orderSuccess ? "Buyurtma Tasdiqlandi!" : "Buyurtmani Rasmiylashtirish"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {orderSuccess ? "Buyurtmangiz muvaffaqiyatli qabul qilindi" : "Ma'lumotlaringizni kiriting va to'lov usulini tanlang"}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
                Buyurtma raqamingiz
              </span>
              <h2 className="text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-wider font-mono">
                {orderNumber}
              </h2>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Qabul qiluvchi:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Telefon:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Yetkazish manzili:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{formData.region}, {formData.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">To'lov usuli:</span>
                <span className="font-bold text-emerald-600 uppercase">{formData.paymentMethod}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
              Operatorimiz 15 daqiqa ichida siz bilan bog'lanib, yetkazib berish vaqtini tasdiqlaydi. KitobXon ni tanlaganingiz uchun tashakkur!
            </p>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Bosh sahifaga qaytish
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  Ism va Familiya *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Sardor Aliyev"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  Telefon raqam *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Region & Address */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Viloyat / Shahar *
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5">
                  Aniq manzil (ko'cha, uy, xonadon) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Navoiy ko'chasi, 24-uy"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-2">
                To'lov usulini tanlang:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'payme', name: 'Payme', icon: CreditCard, color: 'text-cyan-600' },
                  { id: 'click', name: 'Click', icon: Smartphone, color: 'text-blue-600' },
                  { id: 'uzum', name: 'Uzum Pay', icon: Sparkles, color: 'text-purple-600' },
                  { id: 'cash', name: 'Naqd yetkazganda', icon: Banknote, color: 'text-emerald-600' },
                ].map((pm) => (
                  <button
                    type="button"
                    key={pm.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                      formData.paymentMethod === pm.id
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <pm.icon className={`w-5 h-5 ${pm.color}`} />
                    <span>{pm.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Total Order Summary */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-800 dark:text-emerald-300 block">Jami to'lov miqdori:</span>
                <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Tasdiqlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
