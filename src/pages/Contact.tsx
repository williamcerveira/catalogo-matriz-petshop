import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Fale Conosco
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Dúvidas, sugestões ou agendamentos? Nossa equipe está pronta para te atender.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-orange-50 p-4 rounded-2xl text-orange-500 mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Telefone & WhatsApp</h3>
            <p className="text-slate-500 mb-4">Atendimento rápido e prático.</p>
            <a href="tel:5591991883384" className="text-orange-500 font-bold text-lg hover:underline">(91) 99188-3384</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-orange-50 p-4 rounded-2xl text-orange-500 mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
            <p className="text-slate-500 mb-4">Para assuntos corporativos.</p>
            <a href="mailto:contato@petprime.com.br" className="text-orange-500 font-bold text-lg hover:underline">contato@petprime.com.br</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-orange-50 p-4 rounded-2xl text-orange-500 mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Horários</h3>
            <p className="text-slate-500 mb-1">Seg - Sex: 08h às 19h</p>
            <p className="text-slate-500">Sáb: 08h às 14h</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Envie uma mensagem</h2>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center"
              >
                <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-green-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-green-700">Obrigado pelo contato. Retornaremos em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500"
                      placeholder="Ex: joao@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Assunto</label>
                  <input
                    required
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl shadow-orange-500/20"
                >
                  <Send size={20} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Map & Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex-1 bg-slate-200 rounded-[40px] overflow-hidden shadow-xl relative min-h-[400px]">
              {/* Google Maps Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.529321594921!2d-48.48398462417647!3d-1.456101435914614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e906965d55d%3A0x6d70d95687707e4d!2sAv.%20Nazar%C3%A9%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1710512345678!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 bg-white p-8 rounded-3xl shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-xl text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Nossa Localização</h4>
                    <p className="text-slate-500">Av. Nazaré, 1234 - Nazaré</p>
                    <p className="text-slate-500">Belém - PA, 66035-170</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
