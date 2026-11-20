import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('kitobxon_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  // Cart state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('kitobxon_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('kitobxon_wishlist');
    return saved ? JSON.parse(saved) : [1]; // Default Sariq devni minib favorited
  });

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [maxPrice, setMaxPrice] = useState(120000);
  const [formatFilter, setFormatFilter] = useState('all');

  // Modals & Drawers
  const [activeModalBook, setActiveModalBook] = useState(null);
  const [activeReaderBook, setActiveReaderBook] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Promo Code
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Toasts
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Sync Dark Mode to DOM
  useEffect(() => {
    localStorage.setItem('kitobxon_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync Cart to LocalStorage
  useEffect(() => {
    localStorage.setItem('kitobxon_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync Wishlist to LocalStorage
  useEffect(() => {
    localStorage.setItem('kitobxon_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Operations
  const addToCart = (book, quantity = 1, format = "Qog'oz kitob") => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.book.id === book.id && item.format === format);
      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prev, { book, quantity, format }];
      }
    });

    addToast(`"${book.title}" savatga qo'shildi!`, 'success');
  };

  const removeFromCart = (bookId, format) => {
    setCart(prev => prev.filter(item => !(item.book.id === bookId && item.format === format)));
    addToast('Kitob savatdan olib tashlandi', 'info');
  };

  const updateQuantity = (bookId, format, newQty) => {
    if (newQty <= 0) {
      removeFromCart(bookId, format);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.book.id === bookId && item.format === format ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Operations
  const toggleWishlist = (bookId, bookTitle = '') => {
    setWishlist(prev => {
      const exists = prev.includes(bookId);
      if (exists) {
        addToast(`"${bookTitle || 'Kitob'}" sevimlilardan o'chirildi`, 'info');
        return prev.filter(id => id !== bookId);
      } else {
        addToast(`"${bookTitle || 'Kitob'}" sevimlilarga qo'shildi!`, 'success');
        return [...prev, bookId];
      }
    });
  };

  const isInWishlist = (bookId) => wishlist.includes(bookId);

  // Promo Code Validation
  const applyPromo = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'KITOBXON' || cleanCode === 'YANGI2024') {
      setAppliedPromo({ code: cleanCode, discountPercent: 10 });
      addToast('Ajoyib! 10% maxsus chegirma qo\'llandi.', 'success');
      return true;
    } else if (cleanCode === 'BAHOR') {
      setAppliedPromo({ code: cleanCode, discountPercent: 15 });
      addToast('Ajoyib! 15% bahoriy chegirma qo\'llandi.', 'success');
      return true;
    } else {
      addToast('Promokod noto\'g\'ri yoki muddati tugagan.', 'error');
      return false;
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
    addToast('Promokod bekor qilindi', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.book.price * item.quantity), 0);
  const discountAmount = appliedPromo ? Math.round((cartSubtotal * appliedPromo.discountPercent) / 100) : 0;
  const deliveryFee = cartSubtotal > 200000 || cartSubtotal === 0 ? 0 : 20000;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <ShopContext.Provider
      value={{
        darkMode,
        setDarkMode,
        cart,
        cartCount,
        cartSubtotal,
        discountAmount,
        deliveryFee,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        maxPrice,
        setMaxPrice,
        formatFilter,
        setFormatFilter,
        activeModalBook,
        setActiveModalBook,
        activeReaderBook,
        setActiveReaderBook,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isRequestModalOpen,
        setIsRequestModalOpen,
        promoCode,
        setPromoCode,
        appliedPromo,
        applyPromo,
        removePromo,
        toasts,
        addToast,
        triggerCelebration,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
