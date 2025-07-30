import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, ShoppingCart, Heart, Share2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const ProductInfo = ({ product, category }) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast({
      title: "Səbətə əlavə edildi",
      description: `${quantity} × ${product.name} səbətinizə əlavə edildi.`,
      duration: 3000,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "İstək siyahısına əlavə edildi",
      description: `${product.name} istək siyahınıza əlavə edildi.`,
      duration: 3000,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Bu məhsula baxın: ${product.name}`,
        url: window.location.href,
      })
      .then(() => toast({ title: "Paylaşıldı!", description: "Məhsul uğurla paylaşıldı."}))
      .catch((error) => toast({ title: "Xəta", description: `Paylaşım zamanı xəta: ${error}`, variant: "destructive" }));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link kopyalandı",
        description: "Məhsul linki mübadilə buferinə kopyalandı.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-2">
          <Link to={`/catalog/${product.category}`} className="text-sm text-primary hover:underline">
            {category?.name}
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">{product.rating} reytinq</span>
        </div>
        
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow">
          {product.price !== undefined && product.price > 0 ? (
            <>
              <span className="text-3xl font-bold text-primary">{product.price.toFixed(2)} AZN</span>
              <p className="text-sm text-gray-700 mt-1">
                <Phone size={14} className="inline mr-1" />
                Qiymət təxminidir. Dəqiq məlumat üçün zəng edin.
              </p>
            </>
          ) : (
            <div className="text-xl font-semibold text-orange-600 flex items-center">
              <Phone size={20} className="mr-2" />
              Dəqiq qiymət üçün zəng edin
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Əsas Xüsusiyyətlər:</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border rounded-md">
            <button 
              className="px-3 py-2 border-r hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Miqdarı azalt"
            >
              -
            </button>
            <span className="px-4 py-2 min-w-[40px] text-center" aria-live="polite">{quantity}</span>
            <button 
              className="px-3 py-2 border-l hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Miqdarı artır"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button 
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white" 
            size="lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Səbətə Əlavə Et</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2" 
            size="lg"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-5 w-5" />
            <span>İstək Siyahısına Əlavə Et</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-4 text-gray-500">
          <button 
            className="flex items-center gap-1 hover:text-primary transition-colors"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
            <span>Paylaş</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;