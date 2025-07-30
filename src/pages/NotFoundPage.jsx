import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Səhifə Tapılmadı</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti olaraq əlçatmaz ola bilər.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="flex items-center">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                <span>Ana Səhifəyə Qayıt</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex items-center">
              <Link to="/catalog">
                <Search className="mr-2 h-5 w-5" />
                <span>Məhsullara Baxın</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;