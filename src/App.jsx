
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CatalogPage from '@/pages/CatalogPage';
import ProductPage from '@/pages/ProductPage';
import ContactPage from '@/pages/ContactPage';
import CategoryPage from '@/pages/CategoryPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:categoryId" element={<CategoryPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
