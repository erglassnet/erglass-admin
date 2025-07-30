import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductCTA = () => {
  return (
    <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Düzgün Məhsul Seçməkdə Kömək Lazımdır?</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Mütəxəssislərimiz məhsul seçimi, ölçülər və quraşdırma məsləhətləri ilə sizə kömək etməyə hazırdır.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="secondary" size="lg" className="text-primary font-semibold">
          <Link to="/contact">Bizimlə Əlaqə</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
          <Link to="/catalog">Alış-verişə Davam Et</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCTA;