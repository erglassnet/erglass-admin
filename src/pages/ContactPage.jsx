import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { categories } from '@/data/products';


const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start">
    <Icon className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-0.5" />
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      {children}
    </div>
  </div>
);

const ContactInformation = () => {
  const handleMapClick = () => {
    const latitude = 40.65607740261996;
    const longitude = 46.37894911449457;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h2 className="text-2xl font-bold mb-4">Əlaqə Saxlayın</h2>
          <p className="text-white/90">
            Məhsullarımız, xidmətlərimiz və ya davam edən layihələrimizlə bağlı hər hansı bir sualınız üçün kömək etməyə hazırıq.
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <ContactInfoItem icon={MapPin} title="Ünvanımız">
              <p className="text-gray-600">Gəncə şəhəri, Avtozavod yolu, Daşqın İnşaatın yanı.</p>
              <Button onClick={handleMapClick} variant="outline" size="sm" className="mt-2">
                Xəritədə Aç
              </Button>
            </ContactInfoItem>
            <ContactInfoItem icon={Phone} title="Telefon">
              <p className="text-gray-600">
                <a href="tel:+994558929298" className="hover:text-primary block">+994 (55) 892-92-98</a>
                <a href="tel:+994557404222" className="hover:text-primary block">+994 (55) 740-42-22</a>
              </p>
            </ContactInfoItem>
            <ContactInfoItem icon={Mail} title="Email">
              <p className="text-gray-600">
                <a href="mailto:info@erglass.az" className="hover:text-primary">info@erglass.az</a>
              </p>
            </ContactInfoItem>
            <ContactInfoItem icon={Clock} title="İş Saatları">
              <p className="text-gray-600">Zənglərə Baxılma: Hər gün 09:00 - 19:00</p>
              <p className="text-gray-600">Ümumi İş Saatı: 7/24</p>
            </ContactInfoItem>
          </div>
        </div>
      </div>
    </div>
  );
};


const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting }) => (
  <div className="lg:col-span-2">
    <motion.div 
      className="bg-white rounded-lg shadow-md p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Bizə Mesaj Göndərin</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Adınız</Label>
            <Input id="name" name="name" placeholder="Ad Soyad" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Ünvanı</Label>
            <Input id="email" name="email" type="email" placeholder="nümunə@email.com" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon Nömrəsi</Label>
            <Input id="phone" name="phone" placeholder="(050) 123-45-67" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productInterest">Məhsul Marağı</Label>
            <select 
              id="productInterest" 
              name="productInterest" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.productInterest}
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
              <option value="other">Digər</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Mövzu</Label>
          <Input id="subject" name="subject" placeholder="Sizə necə kömək edə bilərik?" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mesajınız</Label>
          <Textarea id="message" name="message" placeholder="Zəhmət olmasa sorğunuz barədə ətraflı məlumat verin..." rows={5} value={formData.message} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Göndərilir...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              Mesaj Göndər
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div>
    <h3 className="text-xl font-semibold mb-3">{question}</h3>
    <p className="text-gray-600 mb-6">{answer}</p>
  </div>
);

const FAQSection = () => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-12">
    <h2 className="text-2xl font-bold mb-6">Tez-tez Verilən Suallar</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <FAQItem 
          question="Quraşdırma xidmətləri təklif edirsinizmi?" 
          answer="Bəli, bütün məhsullarımız üçün peşəkar quraşdırma xidmətləri təqdim edirik. Təcrübəli texniklərdən ibarət komandamız pəncərələrinizin, qapılarınızın və digər məhsullarınızın optimal performans üçün düzgün quraşdırılmasını təmin edir." 
        />
        <FAQItem 
          question="Hansı ərazilərə xidmət göstərirsiniz?" 
          answer="Hazırda Gəncə şəhəri və ətraf ərazilərə xidmət göstəririk. Daha uzaq məsafələr üçün seçimləri müzakirə etmək üçün bizimlə əlaqə saxlayın." 
        />
      </div>
      <div>
        <FAQItem 
          question="Quraşdırma nə qədər vaxt aparır?" 
          answer="Quraşdırma müddəti məhsuldan və layihənin həcmindən asılı olaraq dəyişir. Standart bir pəncərə dəyişdirilməsi adətən 1-2 gün çəkir, daha böyük layihələr isə daha uzun çəkə bilər. Məsləhətləşmə zamanı sizə konkret bir zaman çizelgesi təqdim edəcəyik." 
        />
        <FAQItem 
          question="Zəmanət təklif edirsinizmi?" 
          answer="Bəli, bütün məhsullarımız hərtərəfli zəmanətlərlə təmin edilir. Xüsusi zəmanət şərtləri məhsula görə dəyişir, lakin əksəriyyəti materiallara və işçiliyə ömürlük zəmanət daxildir. Əlavə rahatlıq üçün genişləndirilmiş zəmanət seçimləri də təklif edirik." 
        />
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: categories.length > 0 ? categories[0].id : 'other',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Mesaj Göndərildi",
        description: "Sorğunuz üçün təşəkkür edirik. Tezliklə sizinlə əlaqə saxlayacağıq.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', productInterest: categories.length > 0 ? categories[0].id : 'other' });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bizimlə Əlaqə</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Məhsullarımız və ya xidmətlərimizlə bağlı suallarınız var? Mütəxəssis məsləhəti və dəstəyi üçün komandamızla əlaqə saxlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <ContactInformation />
          <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
        
        <FAQSection />

        <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Layihənizə Başlamağa Hazırsınız?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Evinizi təmir edirsinizsə və ya yeni bir tikinti layihəsi üzərində işləyirsinizsə, mükəmməl tikinti materiallarını tapmaqda sizə kömək etmək üçün buradayıq.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-primary font-semibold hover:text-primary">
            <a href="tel:+994558929298" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              <span>İndi Bizə Zəng Edin</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
