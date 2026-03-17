import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Link to={`/produto/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 pointer-events-none group-hover:pointer-events-auto">
          <Link
            to={`/produto/${product.id}`}
            className="bg-white text-slate-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-lg"
          >
            <Eye size={20} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-all shadow-lg"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
        {product.featured && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Destaque
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-slate-900 font-bold text-lg mb-2 line-clamp-2 flex-1 hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-orange-500 font-bold text-xl">
              R$ {product.price.toFixed(2)}
            </p>
            <p className="text-[10px] text-slate-400">
              Ou 3x de R$ {(product.price / 3).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-slate-900 text-white p-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
