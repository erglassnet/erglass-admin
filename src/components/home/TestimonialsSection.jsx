import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

const TestimonialCard = ({ rating, text, author, role, imageSrc }) => (
  <motion.div variants={itemVariants} className="testimonial-card bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
    <div className="flex items-center mb-4 flex-shrink-0">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 text-yellow-400 fill-yellow-400`} />
      ))}
    </div>
    <p className="text-gray-600 mb-6 flex-grow">{text}</p>
    <div className="flex items-center flex-shrink-0">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0">
        <img     className="w-full h-full object-cover rounded-full" alt={`${author} profil şəkli`} src={imageSrc} onError={(e) => { e.target.onerror = null; e.target.src='/placeholder-avatar.jpg'; }} />
      </div>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Müştərilərimiz Nə Deyir</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sadəcə bizim sözümüzə etibar etməyin. Məmnun müştərilərimizin məhsullarımız və xidmətimiz haqqında dedikləri.
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TestimonialCard 
          rating={5}
          text="Erglass-dan aldığımız pəncərələr evimizi dəyişdirdi. Onlar təkcə gözəl deyil, həm də enerji hesablarımızı əhəmiyyətli dərəcədə azaldıb. Quraşdırma komandası peşəkar və səmərəli idi."
          author="Aygün Səmədova"
          role="Ev Sahibi"
          imageSrc="/placeholder-avatar1.jpg"
        />
        <TestimonialCard 
          rating={5}
          text="Bir podratçı olaraq bir çox təchizatçı ilə işləmişəm, lakin Erglass keyfiyyəti və etibarlılığı ilə seçilir. Məhsulları davamlı olaraq əladır və müştəri xidmətləri yüksək səviyyədədir."
          author="Rəşad Quliyev"
          role="Tikinti Podratçısı"
          imageSrc="/placeholder-avatar2.jpg"
        />
        <TestimonialCard 
          rating={5}
          text="Erglass-ın hamam təmirimiz üçün yaratdığı fərdi güzgülər gözləntilərimizi aşdı. Keyfiyyət müstəsnadır və onlar tam vəd edildiyi vaxtda çatdırıldı. Şiddətlə tövsiyə edirəm!"
          author="Leyla Məmmədova"
          role="İnteryer Dizayneri"
          imageSrc="/placeholder-avatar3.jpg"
        />
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;