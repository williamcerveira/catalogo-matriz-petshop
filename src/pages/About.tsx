import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Eye, Users, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    { name: 'Dr. Ricardo Santos', role: 'Veterinário Chefe', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Juliana Lima', role: 'Groomer Master', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
    { name: 'Marcos Oliveira', role: 'Adestrador', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dra. Ana Paula', role: 'Nutricionista Pet', image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="About Hero"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Nossa História
          </motion.h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Desde 2015, transformando o cuidado animal em Belém com paixão, ética e inovação.
          </p>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Missão', icon: <Target className="text-orange-500" size={32} />, text: 'Proporcionar saúde e felicidade aos pets através de produtos e serviços de excelência.' },
            { title: 'Visão', icon: <Eye className="text-orange-500" size={32} />, text: 'Ser a referência número um em cuidado pet premium no Norte do Brasil até 2030.' },
            { title: 'Valores', icon: <Heart className="text-orange-500" size={32} />, text: 'Amor aos animais, transparência, inovação constante e respeito aos nossos clientes.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 text-center"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Onde o amor pelos pets encontra a excelência.</h2>
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                A PetPrime nasceu de um sonho compartilhado por dois veterinários que acreditavam que o mercado pet precisava de algo mais humano e profissional. O que começou como um pequeno consultório, hoje é um centro completo de bem-estar.
              </p>
              <p>
                Nossa jornada é marcada pela busca incessante por novidades. Fomos os primeiros em Belém a implementar o sistema de banho com água ozonizada e a oferecer um hotelzinho com monitoramento 24h via app para os donos.
              </p>
              <p>
                Para nós, cada latido, miado ou pio é um compromisso de vida. Estamos aqui para garantir que a relação entre você e seu pet seja a mais longa e feliz possível.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center space-x-4">
                <Award className="text-orange-500" size={40} />
                <span className="font-bold text-slate-900">Melhor Petshop 2024</span>
              </div>
              <div className="flex items-center space-x-4">
                <Sparkles className="text-orange-500" size={40} />
                <span className="font-bold text-slate-900">Inovação em Serviços</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=800" 
              alt="PetPrime Story" 
              className="rounded-[60px] shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-orange-500 p-12 rounded-[40px] text-white shadow-2xl hidden md:block">
              <p className="text-6xl font-bold mb-2">9+</p>
              <p className="font-bold text-xl uppercase tracking-widest">Anos de História</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Conheça nossa Equipe</h2>
            <p className="text-slate-500 text-lg">Especialistas prontos para cuidar do seu melhor amigo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-white p-4 rounded-[40px] shadow-sm border border-gray-100 group-hover:shadow-xl transition-all">
                  <div className="aspect-square rounded-[32px] overflow-hidden mb-6">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="text-center pb-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                    <p className="text-orange-500 font-medium">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
