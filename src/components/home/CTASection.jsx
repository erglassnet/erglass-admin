import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => (
  <section className="bg-primary text-white py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Layihənizə Başlamağa Hazırsınız?</h2>
          <p className="text-xl mb-8 text-white/90">
            Pulsuz məsləhət və qiymət təklifi üçün bu gün bizimlə əlaqə saxlayın. Mütəxəssislərimiz tikinti ehtiyaclarınız üçün mükəmməl həllər tapmaqda sizə kömək etməyə hazırdır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
              <Link to="/contact">Pulsuz Qiymət Təklifi Alın</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
              <a href="tel:+994558929298" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>İndi Bizə Zəng Edin</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img     className="rounded-lg shadow-xl" alt="Peşəkar quraşdırma komandası iş başında" src="/placeholder-cta.jpg" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1608806667067-66ebd8b169e8'; }} />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;