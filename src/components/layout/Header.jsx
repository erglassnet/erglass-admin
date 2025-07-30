import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Səhifə', path: '/' },
    { name: 'Haqqımızda', path: '/about' },
    { name: 'Kataloq', path: '/catalog' },
    { name: 'Əlaqə', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="Erglass Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button asChild variant="outline" className="mr-4">
              <a href="tel:+994558929298" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Bizə Zəng Edin</span>
              </a>
            </Button>
            <Button asChild>
              <Link to="/contact">Qiymət Təklifi Alın</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 transition-colors ${
                      isActive ? 'text-primary' : 'text-gray-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button asChild variant="outline" className="w-full justify-center">
                  <a href="tel:+994558929298" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Bizə Zəng Edin</span>
                  </a>
                </Button>
                <Button asChild className="w-full justify-center">
                  <Link to="/contact">Qiymət Təklifi Alın</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;