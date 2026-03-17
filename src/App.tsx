import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produto/:id" element={<ProductDetails />} />
            <Route path="servicos" element={<Services />} />
            <Route path="sobre" element={<About />} />
            <Route path="contato" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
