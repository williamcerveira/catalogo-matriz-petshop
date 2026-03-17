import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { 
  ShoppingCart, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Plus, 
  Minus,
  CheckCircle2,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Link to="/produtos" className="text-orange-500 font-bold">Voltar para a loja</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-orange-500">Início</Link>
        <span>/</span>
        <Link to="/produtos" className="hover:text-orange-500">Produtos</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden bg-white border border-gray-100 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-transparent hover:border-orange-500 cursor-pointer transition-all">
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center text-yellow-400">
                <Star size={14} className="fill-yellow-400" />
                <Star size={14} className="fill-yellow-400" />
                <Star size={14} className="fill-yellow-400" />
                <Star size={14} className="fill-yellow-400" />
                <Star size={14} className="fill-yellow-400" />
                <span className="text-slate-400 text-xs ml-2">(48 avaliações)</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex items-end space-x-4">
              <span className="text-4xl font-bold text-orange-500">R$ {product.price.toFixed(2)}</span>
              <span className="text-slate-400 text-sm mb-1">Ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros</span>
            </div>
          </div>

          <div className="space-y-8 mb-10">
            <div className="flex items-center space-x-6">
              <div className="flex items-center bg-slate-100 rounded-2xl p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-orange-500/20"
              >
                <ShoppingCart size={24} />
                <span>Adicionar ao Carrinho</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center space-x-3 text-slate-600">
                <Truck size={20} className="text-orange-500" />
                <span className="text-sm">Entrega em todo o Brasil</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <ShieldCheck size={20} className="text-orange-500" />
                <span className="text-sm">Compra 100% Segura</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <RotateCcw size={20} className="text-orange-500" />
                <span className="text-sm">7 dias para devolução</span>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="font-bold text-slate-900 mb-4">Informações Técnicas</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">SKU</span>
                <span className="font-medium text-slate-900">{product.sku}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Categoria</span>
                <span className="font-medium text-slate-900">{product.category}</span>
              </div>
              {product.technicalInfo && (
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Composição</span>
                  <span className="font-medium text-slate-900 text-right max-w-[200px]">{product.technicalInfo}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Quem viu este, também viu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl z-[100] flex items-center space-x-3"
          >
            <CheckCircle2 className="text-green-500" />
            <span className="font-bold">Produto adicionado ao carrinho!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
