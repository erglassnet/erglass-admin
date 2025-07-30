import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { categories } from '@/data/products';

const CategoryCard = ({ category }) => (
  <Link 
    to={`/catalog/${category.id}`}
    className="category-card group block"
  >
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img      
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          alt={`${category.name} kateqoriyası`} src="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
          <p className="text-sm text-gray-200">{category.description}</p>
        </div>
      </div>
    </Card>
  </Link>
);

const ProductCategoriesSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Məhsul Kateqoriyalarımız</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hər ehtiyaca uyğun hazırlanmış geniş çeşidli yüksək keyfiyyətli tikinti məhsullarımızı kəşf edin.
        </p>
      </div>
    </div>
  </section>
);

export default ProductCategoriesSection;
