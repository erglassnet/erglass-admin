import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="hero-gradient absolute inset-0 z-0"></div>
    <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mükəmməl Məkanınız üçün Premium <span className="text-primary">Tikinti Materialları</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Yüksək keyfiyyətli pəncərə, qapı, güzgü, cam balkon və digər aksesuarlarımızın geniş kolleksiyasını kəşf edin. Uzunömürlü, təsiredici dizayn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/catalog">Məhsullara Baxın</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">Qiymət Təklifi Alın</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img   className="rounded-lg shadow-2xl w-full h-auto" alt="Müasir ev böyük pəncərələr və şüşə qapılarla" src="/placeholder-hero.jpg" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1696846911625-beb54786c1e3'; }}/>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;