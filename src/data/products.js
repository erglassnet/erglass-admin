import { productsArray, categoriesArray } from '@/data/productsData';

export const products = productsArray;
export const categories = categoriesArray;

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export const getCategoryById = (categoryId) => {
  return categories.find(category => category.id === categoryId);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => product.category === currentProduct.category && product.id !== productId)
    .slice(0, limit);
};