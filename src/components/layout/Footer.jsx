import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.jpg" alt="Erglass Logo" className="h-10 w-auto filter brightness-0 invert" />
            </Link>
            <p className="mt-4 text-gray-400">
              Bütün tikinti ehtiyaclarınız üçün premium tikinti materialları. Keyfiyyətli pəncərələr, qapılar, güzgülər və daha çoxu.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-lg mb-4">Sürətli Keçidlər</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Ana Səhifə</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Haqqımızda</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-primary transition-colors">Məhsullar</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Əlaqə</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-semibold text-lg mb-4">Məhsullar</p>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/windows" className="text-gray-400 hover:text-primary transition-colors">Pəncərələr</Link>
              </li>
              <li>
                <Link to="/catalog/doors" className="text-gray-400 hover:text-primary transition-colors">Qapılar</Link>
              </li>
              <li>
                <Link to="/catalog/mirrors" className="text-gray-400 hover:text-primary transition-colors">Güzgülər</Link>
              </li>
              <li>
                <Link to="/catalog/glass-balcony" className="text-gray-400 hover:text-primary transition-colors">Cam Balkon</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-lg mb-4">Bizimlə Əlaqə</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">Gəncə şəhəri, Avtozavod yolu, Daşqın İnşaatın yanı.</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+994558929298" className="text-gray-400 hover:text-primary transition-colors">+994 (55) 892-92-98</a>
              </li>
               <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+994557404222" className="text-gray-400 hover:text-primary transition-colors">+994 (55) 740-42-22</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@erglass.az" className="text-gray-400 hover:text-primary transition-colors">info@erglass.az</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Erglass. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;