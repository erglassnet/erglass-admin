import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductCategoriesSection from '@/components/home/ProductCategoriesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeaturesSection />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;