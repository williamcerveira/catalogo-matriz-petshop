import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, PawPrint } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?search=${searchQuery}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-orange-500 p-2 rounded-xl group-hover:bg-orange-600 transition-colors">
              <PawPrint className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Pet<span className="text-orange-500">Prime</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-600 hover:text-orange-500 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden lg:relative lg:block">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-100 border-none rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-orange-500 w-64 transition-all"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500">
                <Search size={18} />
              </button>
            </form>

            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-600 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-100 border-none rounded-full py-3 pl-4 pr-10 focus:ring-2 focus:ring-orange-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={20} />
                </button>
              </form>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
