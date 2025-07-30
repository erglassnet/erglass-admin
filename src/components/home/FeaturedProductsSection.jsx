import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ProductCard = ({ product }) => (
  <motion.div variants={itemVariants}>
    <Link to={`/product/${product.id}`} className="product-card block h-full">
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img      
            className="w-full h-full object-cover" 
            alt={product.name} src={product.image && product.image !== "/placeholder-product.jpg" ? product.image : "https://images.unsplash.com/photo-1632065509860-4fbcfc89ed7c"} />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold text-primary">{product.price ? `${product.price.toFixed(2)} AZN` : ''}</span>
            </div>
            {product.price === 0 || !product.price ? (
              <div className="text-sm text-orange-600 font-medium flex items-center">
                <Phone size={14} className="mr-1" />
                Qiymət üçün zəng edin
              </div>
            ) : (
               <p className="text-xs text-gray-500">Dəqiq qiymət üçün zəng edin.</p>
            )}
            <Button size="sm" className="w-full mt-3">Ətraflı Bax</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

const FeaturedProductsSection = () => {
  const featuredProducts = [
    products.find(p => p.id === 'w1'),
    products.find(p => p.id === 'd2'),
    products.find(p => p.id === 'gb1'),
    products.find(p => p.id === 'sc1'),
  ].filter(Boolean);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seçilmiş Məhsullar</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Keyfiyyəti və müştəri məmnuniyyəti ilə seçilən ən populyar məhsullarımız.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/catalog" className="flex items-center">
              Bütün Məhsullara Baxın <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        <div className="mt-12 text-center md:hidden">
          <Button asChild>
            <Link to="/catalog">Bütün Məhsullara Baxın</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;