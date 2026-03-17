import React, { useState } from 'react';
import { services } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle2, ArrowRight, X, Send } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    petName: '',
    petType: '',
    date: '',
    time: ''
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5591991883384';
    const message = `Olá, PetPrime! Gostaria de agendar um serviço:
*Serviço:* ${selectedService}
*Cliente:* ${bookingData.name}
*Pet:* ${bookingData.petName} (${bookingData.petType})
*Data:* ${bookingData.date}
*Horário:* ${bookingData.time}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setSelectedService(null);
    setBookingData({ name: '', petName: '', petType: '', date: '', time: '' });
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Serviços Especializados</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Muito além de um petshop, somos um centro de cuidado completo. Profissionais apaixonados e infraestrutura de ponta para o seu melhor amigo.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-orange-500 font-bold">
                <CheckCircle2 size={20} />
                <span>Profissionais Certificados</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-500 font-bold">
                <CheckCircle2 size={20} />
                <span>Produtos Premium</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-500 font-bold">
                <CheckCircle2 size={20} />
                <span>Ambiente Monitorado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl shadow-slate-200/50 border border-gray-100 flex flex-col md:flex-row group"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              </div>
              <div className="p-10 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.name}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-slate-400 mb-8">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-orange-500" />
                      <span>Sob agendamento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-orange-500" />
                      <span>Segunda a Sábado</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">A partir de</p>
                    <p className="text-2xl font-bold text-orange-500">R$ {service.priceBase.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(service.name)}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all flex items-center space-x-2"
                  >
                    <span>Agendar</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[40px] shadow-2xl z-[110] overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Agendamento</h2>
                    <p className="text-orange-500 font-bold">{selectedService}</p>
                  </div>
                  <button onClick={() => setSelectedService(null)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Seu Nome</label>
                      <input
                        required
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Nome do Pet</label>
                      <input
                        required
                        type="text"
                        value={bookingData.petName}
                        onChange={(e) => setBookingData({...bookingData, petName: e.target.value})}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="Ex: Thor"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Tipo de Animal</label>
                    <select
                      required
                      value={bookingData.petType}
                      onChange={(e) => setBookingData({...bookingData, petType: e.target.value})}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Ave">Ave</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Data Preferencial</label>
                      <input
                        required
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Horário</label>
                      <input
                        required
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-orange-500 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-slate-200"
                  >
                    <span>Confirmar no WhatsApp</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-orange-500 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Por que confiar na PetPrime?</h2>
              <div className="space-y-8">
                <div className="flex space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl h-fit">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Amor Incondicional</h4>
                    <p className="text-orange-100">Tratamos cada pet como se fosse nosso. Carinho e paciência são nossos pilares.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl h-fit">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Tecnologia e Higiene</h4>
                    <p className="text-orange-100">Equipamentos modernos e protocolos rigorosos de esterilização e limpeza.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800" 
                alt="Pet Care" 
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-bold text-orange-500 mb-1">10k+</p>
                <p className="font-bold">Pets Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
