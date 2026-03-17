import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, checkoutWhatsApp } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [userName, setUserName] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      checkoutWhatsApp(userName);
      setShowCheckoutModal(false);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="text-orange-500" size={24} />
                <h2 className="text-xl font-bold text-slate-900">Seu Carrinho</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-slate-50 p-8 rounded-full">
                    <ShoppingBag size={48} className="text-slate-300" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-slate-900">Carrinho vazio</p>
                    <p className="text-slate-500">Que tal adicionar alguns mimos para seu pet?</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all"
                  >
                    Ver Produtos
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 group">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-orange-500 font-bold mt-1">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-slate-100 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-md transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-md transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-slate-900">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-slate-50 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-bold text-slate-900">R$ {totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  O frete e prazos serão combinados via WhatsApp.
                </p>
                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-orange-500/20"
                >
                  <span>Finalizar Pedido</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>

          {/* Checkout Modal */}
          <AnimatePresence>
            {showCheckoutModal && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowCheckoutModal(false)}
                  className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-[40px] shadow-2xl z-[110] overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-slate-900">Finalizar Pedido</h2>
                      <button onClick={() => setShowCheckoutModal(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                        <X size={18} />
                      </button>
                    </div>

                    <form onSubmit={handleCheckout} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Como podemos te chamar?</label>
                        <input
                          required
                          autoFocus
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                          placeholder="Digite seu nome completo"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-orange-500 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-slate-200"
                      >
                        <span>Ir para WhatsApp</span>
                        <Send size={20} />
                      </button>
                    </form>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
