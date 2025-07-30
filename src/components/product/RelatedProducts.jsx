import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
      duration: 0.4
    }
  }
};

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Bunlar da Sizi Maraqlandıra Bilər</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <Link to={`/product/${product.id}`} className="product-card block h-full">
              <Card className="overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img    
                    className="w-full h-full object-cover" 
                    alt={product.name}
                    src={product.image || `/placeholder-product-${product.id}.jpg`} 
                    onError={(e) => { e.target.onerror = null; e.target.src='/placeholder-product.jpg'; }}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-primary">${product.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RelatedProducts;