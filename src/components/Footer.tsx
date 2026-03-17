import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-xl">
                <PawPrint className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Pet<span className="text-orange-500">Prime</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Sua melhor escolha para o cuidado e felicidade do seu pet. Oferecemos produtos premium e serviços especializados com todo o carinho que eles merecem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Úteis</h3>
            <ul className="space-y-4">
              <li><Link to="/produtos" className="hover:text-orange-500 transition-colors">Produtos</Link></li>
              <li><Link to="/servicos" className="hover:text-orange-500 transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-orange-500 transition-colors">Contato</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Políticas de Devolução</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <span>Av. Nazaré, 1234 - Belém, PA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <span>(91) 99188-3384</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <span>contato@petprime.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Receba ofertas exclusivas e dicas para seu pet.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full bg-slate-800 border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all">
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            © 2026 PetPrime. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <div className="flex items-center space-x-1 text-slate-500 text-xs">
              <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded">Site Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
