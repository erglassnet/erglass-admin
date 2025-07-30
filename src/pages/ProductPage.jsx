import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById, getRelatedProducts, getCategoryById } from '@/data/products';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductDetailsTabs from '@/components/product/ProductDetailsTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import ProductCTA from '@/components/product/ProductCTA';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = getProductById(productId);
  
  if (!product) {
    navigate('/catalog');
    return null;
  }
  
  const relatedProducts = getRelatedProducts(productId);
  const category = getCategoryById(product.category);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate(-1)}
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={16} />
          <span>Geriyə</span>
        </Button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            <ProductImageGallery productName={product.name} images={product.images} mainImage={product.image} />
            <ProductInfo product={product} category={category} />
          </div>
        </div>

        <ProductDetailsTabs product={product} />
        <RelatedProducts products={relatedProducts} />
        <ProductCTA />
      </div>
    </div>
  );
};

export default ProductPage;