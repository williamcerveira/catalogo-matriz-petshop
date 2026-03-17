import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, Cat, Dog, Bird, Fish } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const banners = [
    {
      title: 'Ofertas de Verão',
      subtitle: 'Até 30% de desconto em acessórios de passeio.',
      image: '/images/banner_summer.png',
      cta: 'Ver Ofertas',
      link: '/produtos?categoria=Acessórios'
    },
    {
      title: 'Banho e Tosa Premium',
      subtitle: 'Seu pet cheiroso e relaxado com nossos especialistas.',
      image: '/images/banner_grooming.png',
      cta: 'Agendar Agora',
      link: '/servicos'
    },
    {
      title: 'Novidades em Rações',
      subtitle: 'As melhores marcas mundiais agora na PetPrime.',
      image: '/images/banner_food.png',
      cta: 'Confira',
      link: '/produtos?categoria=Rações'
    }
  ];

  const categories = [
    { name: 'Cachorros', icon: <Dog size={32} />, color: 'bg-blue-500', path: '/produtos?animal=Cachorros' },
    { name: 'Gatos', icon: <Cat size={32} />, color: 'bg-orange-500', path: '/produtos?animal=Gatos' },
    { name: 'Aves', icon: <Bird size={32} />, color: 'bg-yellow-500', path: '/produtos?animal=Aves' },
    { name: 'Peixes', icon: <Fish size={32} />, color: 'bg-cyan-500', path: '/produtos?animal=Peixes' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Carousel */}
      <section className="relative h-[450px] md:h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full group"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img src={banner.image} alt={banner.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-xl text-white"
                    >
                      <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
                        {banner.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8 text-slate-100">
                        {banner.subtitle}
                      </p>
                      <Link
                        to={banner.link}
                        className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
                      >
                        <span>{banner.cta}</span>
                        <ArrowRight size={20} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tudo para seu melhor amigo</h2>
          <p className="text-slate-500">Navegue por categorias e encontre o que precisa.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={cat.path}>
                <div className={`${cat.color} p-8 rounded-3xl text-white flex flex-col items-center space-y-4 transition-all group-hover:scale-105 shadow-lg`}>
                  {cat.icon}
                  <span className="font-bold text-lg">{cat.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Destaques da Semana</h2>
            <p className="text-slate-500">Os produtos mais amados pelos nossos clientes.</p>
          </div>
          <Link to="/produtos" className="hidden md:flex items-center space-x-2 text-orange-500 font-bold hover:text-orange-600">
            <span>Ver todos</span>
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center space-x-6 text-white">
              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <Truck className="text-orange-500" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Entrega Rápida</h3>
                <p className="text-slate-400">Receba em casa com agilidade.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-white">
              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <ShieldCheck className="text-orange-500" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Compra Segura</h3>
                <p className="text-slate-400">Pagamento direto no WhatsApp.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-white">
              <div className="bg-orange-500/20 p-4 rounded-2xl">
                <Clock className="text-orange-500" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Suporte 24/7</h3>
                <p className="text-slate-400">Estamos sempre aqui para você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">O que dizem os pais de pets</h2>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Mariana Silva', pet: 'Bento (Golden)', text: 'A PetPrime é incrível! O atendimento via WhatsApp é super rápido e os produtos chegam sempre perfeitos.' },
            { name: 'Ricardo Oliveira', pet: 'Luna (Persa)', text: 'Melhor banho e tosa da cidade. A Luna volta sempre tranquila e muito cheirosa. Recomendo demais!' },
            { name: 'Ana Costa', pet: 'Thor (Bulldog)', text: 'Encontro tudo que preciso para o Thor. O catálogo online facilita muito a minha vida.' }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <p className="text-slate-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-orange-500">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">Mãe do {t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
