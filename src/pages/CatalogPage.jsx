import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, Filter, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, products as allProducts } from '@/data/products';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";


const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const maxPrice = useMemo(() => Math.max(...allProducts.map(p => p.price || 0), 0) || 5000, [allProducts]);
  const [priceRange, setPriceRange] = useState([0, maxPrice]);


  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const nameMatch = product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSearch = nameMatch || descriptionMatch;
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      
      const productPrice = product.price || 0;
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [allProducts, searchTerm, activeCategory, priceRange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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

  const resetFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
    setPriceRange([0, maxPrice]);
  };


  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Məhsul Kataloqu</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Yüksək keyfiyyətli tikinti materialları, pəncərələr, qapılar, güzgülər, cam balkonlar və digər məhsullarımızın geniş kolleksiyasına baxın.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Məhsulları axtarın (məsələn, 'pəncərə', 'qapı')..."
                className="pl-10 py-3 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="w-full md:w-auto flex items-center gap-2 py-3 text-base"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>{showFilters ? 'Filterləri Gizlət' : 'Filterləri Göstər'}</span>
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                  <Label htmlFor="price-range" className="block font-medium mb-2 text-gray-700">Qiymət Aralığı (AZN)</Label>
                  <Slider
                    id="price-range"
                    min={0}
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0]} AZN</span>
                    <span>{priceRange[1]} AZN</span>
                  </div>
                </div>
                <div className="flex justify-end">
                    <Button onClick={resetFilters} variant="ghost" className="flex items-center gap-2">
                        <X size={18} />
                        Filterləri Sıfırla
                    </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="w-full flex overflow-x-auto pb-2 justify-start md:justify-center no-scrollbar">
            <TabsTrigger value="all" className="px-4 py-2 text-sm md:text-base whitespace-nowrap">Bütün Məhsullar</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4 py-2 text-sm md:text-base whitespace-nowrap">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="h-full">
                <Link to={`/product/${product.id}`} className="product-card block h-full">
                  <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img    
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                        alt={product.name} 
                        src={product.image && product.image !== "/placeholder-product.jpg" ? product.image : "https://images.unsplash.com/photo-1631367771698-606007aecd52"} />
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs font-medium py-1 px-2 rounded-full shadow">
                        {categories.find(c => c.id === product.category)?.name}
                      </div>
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
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                      <div className="mt-auto">
                        {product.price !== undefined && product.price > 0 ? (
                          <>
                            <span className="text-xl font-bold text-primary">{product.price.toFixed(2)} AZN</span>
                            <p className="text-xs text-gray-500 mt-1">Dəqiq qiymət üçün zəng edin.</p>
                          </>
                        ) : (
                          <div className="text-sm text-orange-600 font-medium flex items-center">
                            <Phone size={14} className="mr-1" />
                            Qiymət üçün zəng edin
                          </div>
                        )}
                        <Button size="sm" className="w-full mt-3">Ətraflı Bax</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Məhsul tapılmadı</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Axtarışınızı və ya filterlərinizi dəyişdirərək axtardığınızı tapmağa çalışın. Hələ də tapa bilmirsinizsə, bizimlə əlaqə saxlayın.</p>
            <Button onClick={resetFilters} className="bg-primary hover:bg-primary-dark text-white">
              Filterləri Sıfırla
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;