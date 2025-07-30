import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FolderHeart as WarrantyIcon, Zap as EnergyIcon, UserCircle as InstallationIcon } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const FeatureItem = ({ icon: Icon, title, description }) => (
  <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md text-center h-full flex flex-col">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </motion.div>
);

const FeaturesSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Niyə Erglass-ı Seçməlisiniz?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Gözləntiləri aşan tikinti məhsulları təqdim etmək üçün keyfiyyətli materialları, usta sənətkarlığı və müstəsna xidməti birləşdiririk.
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeatureItem icon={Check} title="Premium Keyfiyyət" description="Bütün məhsullarımız davamlılıq və performans üçün ən yüksək keyfiyyətli materiallardan hazırlanır." />
        <FeatureItem icon={WarrantyIcon} title="Zəmanətli Qoruma" description="Məhsullarımız sizin rahatlığınız üçün hərtərəfli zəmanətlərlə təmin edilir." />
        <FeatureItem icon={EnergyIcon} title="Enerji Səmərəli" description="Yüksək səmərəli pəncərə və qapılarımızla enerji xərclərinə qənaət edin." />
        <FeatureItem icon={InstallationIcon} title="Peşəkar Quraşdırma" description="Peşəkar komandamız optimal performans üçün mükəmməl quraşdırmanı təmin edir." />
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;