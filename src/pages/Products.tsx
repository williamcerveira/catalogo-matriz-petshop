import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('categoria') || 'Todos');
  const [animalFilter, setAnimalFilter] = useState(searchParams.get('animal') || 'Todos');
  const [brandFilter, setBrandFilter] = useState('Todas');
  const [sortOrder, setSortOrder] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = ['Todos', 'Rações', 'Brinquedos', 'Acessórios', 'Higiene'];
  const animals = ['Todos', 'Cachorros', 'Gatos', 'Aves', 'Peixes'];

  // Get unique brands based on current category and animal filters
  const availableBrands = useMemo(() => {
    const filtered = products.filter(p => {
      const matchesCategory = categoryFilter === 'Todos' || p.category === categoryFilter;
      const matchesAnimal = animalFilter === 'Todos' || p.animalType === animalFilter;
      return matchesCategory && matchesAnimal;
    });
    const brands = Array.from(new Set(filtered.map(p => p.brand)));
    return ['Todas', ...brands];
  }, [categoryFilter, animalFilter]);

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) setSearchQuery(search);
    const cat = searchParams.get('categoria');
    if (cat) setCategoryFilter(cat);
    const animal = searchParams.get('animal');
    if (animal) setAnimalFilter(animal);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === 'Todos' || p.category === categoryFilter;
        const matchesAnimal = animalFilter === 'Todos' || p.animalType === animalFilter;
        const matchesBrand = brandFilter === 'Todas' || p.brand === brandFilter;
        const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
        return matchesSearch && matchesCategory && matchesAnimal && matchesBrand && matchesPrice;
      })
      .sort((a, b) => {
        if (sortOrder === 'price-asc') return a.price - b.price;
        if (sortOrder === 'price-desc') return b.price - a.price;
        if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [searchQuery, categoryFilter, animalFilter, brandFilter, priceRange, sortOrder]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Nosso Catálogo</h1>
          <p className="text-slate-500">Encontre os melhores produtos para seu pet.</p>
        </div>
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="O que você procura hoje?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-8">
          {/* Category Filter */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <Filter size={18} className="text-orange-500" />
              <span>Categorias</span>
            </h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoryFilter(cat);
                    setBrandFilter('Todas');
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-xl transition-all ${
                    categoryFilter === cat 
                    ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20' 
                    : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Animal Filter */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Tipo de Animal</h3>
            <div className="flex flex-wrap gap-2">
              {animals.map(animal => (
                <button
                  key={animal}
                  onClick={() => {
                    setAnimalFilter(animal);
                    setBrandFilter('Todas');
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    animalFilter === animal 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {animal}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter (Hierarchical) */}
          {availableBrands.length > 1 && (
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Marca</h3>
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
              >
                {availableBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Faixa de Preço</h3>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full accent-orange-500"
            />
            <div className="flex justify-between text-sm text-slate-500 mt-2">
              <span>R$ 0</span>
              <span>Até R$ {priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Ordenação</h3>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="featured">Destaques</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name-asc">A-Z</option>
            </select>
          </div>
        </aside>

        {/* Mobile Filters Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold text-slate-700 shadow-sm"
          >
            <SlidersHorizontal size={18} />
            <span>Filtros</span>
          </button>
          <p className="text-slate-500 text-sm">{filteredProducts.length} produtos</p>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleCount < filteredProducts.length && (
                <div className="mt-16 text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 8)}
                    className="bg-white border-2 border-slate-900 text-slate-900 px-12 py-4 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Carregar mais produtos
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-slate-500">Tente ajustar seus filtros ou busca.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('Todos');
                  setPriceRange([0, 500]);
                }}
                className="mt-6 text-orange-500 font-bold hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-[32px] z-[110] p-8 lg:hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Filtros</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Categorias</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setCategoryFilter(cat);
                          setBrandFilter('Todas');
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                          categoryFilter === cat 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Tipo de Animal</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {animals.map(animal => (
                      <button
                        key={animal}
                        onClick={() => {
                          setAnimalFilter(animal);
                          setBrandFilter('Todas');
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                          animalFilter === animal 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {animal}
                      </button>
                    ))}
                  </div>
                </div>

                {availableBrands.length > 1 && (
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4">Marca</h3>
                    <select
                      value={brandFilter}
                      onChange={(e) => setBrandFilter(e.target.value)}
                      className="w-full bg-slate-100 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-orange-500 outline-none text-sm font-bold"
                    >
                      {availableBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Faixa de Preço</h3>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>R$ 0</span>
                    <span>Até R$ {priceRange[1]}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold"
                >
                  Aplicar Filtros
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
