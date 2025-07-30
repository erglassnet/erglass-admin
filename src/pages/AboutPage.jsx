import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, TrendingUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const HeroSection = () => (
  <section className="relative bg-primary text-white py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Erglass Haqqında</h1>
          <p className="text-xl mb-8 text-white/90">
            Sənayedə 20 ildən artıq təcrübəsi olan yüksək keyfiyyətli tikinti materiallarının aparıcı təchizatçısıyıq. Missiyamız gözəl, funksional məkanlar yaratmağınıza kömək etmək üçün müstəsna məhsul və xidmət təqdim etməkdir.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img   className="rounded-lg shadow-xl" alt="Erglass baş ofisi" src="/placeholder-about-hero.jpg" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1688041859733-4cda5a3af17a'; }}/>
        </motion.div>
      </div>
    </div>
  </section>
);

const OurStorySection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <img   className="rounded-lg shadow-xl" alt="Şirkət təsisçiləri" src="/placeholder-about-story.jpg" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1544366981-930f92d6812a'; }}/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold mb-6">Bizim Hekayəmiz</h2>
          <p className="text-gray-600 mb-4">
            Son iyirmi ildə məhsul çeşidimizi və xidmət sahəmizi genişləndirərkən keyfiyyət və müştəri məmnuniyyətinə sadiqliyimizi qoruyub saxlamışıq. Bu gün bölgədəki ev sahiblərinə, podratçılara və inşaatçılara xidmət göstərməkdən qürur duyuruq.
          </p>
          <p className="text-gray-600">
            Mütəxəssislərdən ibarət komandamız tikinti materialları sənayesində onilliklər boyu toplanmış təcrübəyə malikdir və layihələriniz üçün məlumatlı məsləhət və dəstək almanızı təmin edir.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValueItem = ({ icon: Icon, title, description }) => (
  <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const OurValuesSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Əsas Dəyərlərimiz</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Bu prinsiplər məhsul seçimindən tutmuş müştəri xidmətinə qədər etdiyimiz hər şeyi istiqamətləndirir.
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ValueItem icon={CheckCircle} title="Keyfiyyət" description="Məhsullarımızın keyfiyyətindən heç vaxt güzəştə getmirik. Davamlılıq və performansı təmin etmək üçün etibarlı istehsalçılardan materialları diqqətlə seçirik." />
        <ValueItem icon={Users} title="Müştəri Xidməti" description="Müstəsna xidmət, dürüst məsləhət və etibarlı dəstək vasitəsilə müştərilərimizlə davamlı əlaqələr qurmağa inanırıq." />
        <ValueItem icon={Award} title="Peşəkarlıq" description="Komandamız hər layihəyə geniş bilik və təcrübə gətirir, ehtiyaclarınıza uyğunlaşdırılmış mütəxəssis rəhbərliyi və həllər almanızı təmin edir." />
      </motion.div>
    </div>
  </section>
);

const WhyChooseUsItem = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div 
    className="flex gap-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const WhyChooseUsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Niyə Erglass-ı Seçməlisiniz?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sənayedə ən yaxşı məhsul və xidməti təqdim etməyə sadiqik. Bizi fərqləndirən budur:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <WhyChooseUsItem icon={Clock} title="20+ İllik Təcrübə" description="Sənayedə iyirmi ildən artıq təcrübəmizlə istənilən ölçüdə və mürəkkəblikdə layihələri idarə etmək üçün təcrübə qazanmışıq." />
          <WhyChooseUsItem 
            icon={() => (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )} 
            title="Hərtərəfli Zəmanətlər" 
            description="Rahatlığınız üçün məhsullarımızın arxasında sənayenin aparıcı zəmanətləri ilə dayanırıq." 
            delay={0.1} 
          />
          <WhyChooseUsItem icon={TrendingUp} title="Enerji Səmərəli Həllər" description="Məhsullarımız enerji səmərəliliyini artırmaq üçün nəzərdə tutulmuşdur, kommunal xərclərə qənaət etməyə və ətraf mühitə təsirinizi azaltmağa kömək edir." delay={0.2} />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img   className="rounded-lg shadow-xl" alt="Erglass komandası" src="/placeholder-about-whychooseus.jpg" onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1651886104257-e52e9f0b6482'; }}/>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialItem = ({ author, role, text, delay = 0, imageSrc }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0">
        <img   className="w-full h-full object-cover rounded-full" alt={`${author} profil şəkli`} src={imageSrc} onError={(e) => { e.target.onerror = null; e.target.src='/placeholder-avatar.jpg'; }}/>
      </div>
      <div>
        <h3 className="font-semibold">{author}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">{text}</p>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Müştərilərimiz Nə Deyir</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sadəcə bizim sözümüzə etibar etməyin. Məmnun müştərilərimizin Erglass ilə işləmək haqqında dedikləri.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialItem imageSrc="/placeholder-avatar4.jpg" author="Kənan Əliyev" role="Ev Sahibi" text="İllərdir bir neçə tikinti materialı təchizatçısı ilə işləmişəm, lakin Erglass müstəsna keyfiyyəti və xidməti ilə seçilir. Komandaları evimin təmiri üçün mükəmməl pəncərələri tapmaqda mənə kömək etmək üçün əllərindən gələni etdilər və quraşdırma qüsursuz oldu." />
        <TestimonialItem imageSrc="/placeholder-avatar5.jpg" author="Nərgiz Qasımova" role="İnteryer Dizayneri" text="Bir interyer dizayneri olaraq, keyfiyyətli məhsulları vaxtında çatdıra bilən etibarlı tərəfdaşlara ehtiyacım var. Erglass son beş ildə pəncərə, qapı və güzgülər üçün əsas mənbəyim olub. Məhsul seçimləri əladır və komandaları həmişə cavabdeh və köməkçidir." delay={0.1} />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-primary text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Layihənizə Başlamağa Hazırsınız?</h2>
      <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
        Tikinti materialı ehtiyaclarınızı müzakirə etmək üçün bu gün bizimlə əlaqə saxlayın. Komandamız layihəniz üçün mükəmməl məhsulları tapmaqda sizə kömək etməyə hazırdır.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
          <Link to="/contact">Pulsuz Qiymət Təklifi Alın</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
          <a href="tel:+994558929298" className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            <span>İndi Bizə Zəng Edin</span>
          </a>
        </Button>
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <OurStorySection />
      <OurValuesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;