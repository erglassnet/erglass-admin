import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductsByCategory, getCategoryById } from '@/data/products';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    navigate('/catalog');
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const categoryInfoContent = {
    windows: "Pəncərələrimiz həm estetika, həm də funksionallıq nəzərə alınmaqla dizayn edilmişdir. Hər hansı bir memarlıq dizaynını tamamlamaq üçün geniş üslub, material və bitirmə çeşidi təklif edirik. Bütün pəncərələrimiz enerji səmərəlidir və enerji xərclərinizi azaltmağa kömək etmək üçün əla izolyasiya təmin edir.",
    doors: "Qapılarımız təhlükəsizlik, davamlılıq və üslubu birləşdirir. Evinizin görünüşünü artırmaq üçün xarici qapılar və ya dekorunuzu tamamlamaq üçün daxili qapılar axtarırsınızsa, hər ehtiyaca uyğun seçimlərimiz var. Bütün qapılarımız yüksək keyfiyyətli materiallardan hazırlanmışdır və uzunömürlü olmaq üçün nəzərdə tutulmuşdur.",
    mirrors: "Güzgülərimiz sadəcə funksional əşyalar deyil – onlar məkanı dəyişdirə bilən dizayn elementləridir. Zərif çərçivəsiz dizaynlardan naxışlı dekorativ parçalara qədər güzgülərimiz dəqiqlik və detallara diqqətlə hazırlanır. Aydın, təhrifsiz əks etdirmə təmin etmək üçün yalnız ən yüksək keyfiyyətli şüşədən istifadə edirik.",
    accessories: "Pəncərə və qapı quraşdırmalarınızı yüksək keyfiyyətli aksesuarlarımızla tamamlayın. Avadanlıq və dəstəklərdən tutmuş hava izolyasiyası və jalüzlərə qədər, pəncərə və qapılarınızın funksionallığını və görünüşünü artırmaq üçün lazım olan hər şeyi təklif edirik.",
    "glass-balcony": "Cam balkon sistemlərimiz məkanınıza müasir bir toxunuş əlavə edərkən, eyni zamanda hava şəraitindən qorunma və əlavə yaşayış sahəsi təmin edir. Yüksək keyfiyyətli temperli şüşə və davamlı profillərdən istifadə edərək uzunömürlü və estetik həllər təqdim edirik.",
    "shower-cabin": "Duş kabinlərimiz hamamınıza funksionallıq və zəriflik qatmaq üçün dizayn edilmişdir. Müxtəlif ölçü və üslublarda mövcud olan kabinlərimiz, məkanınıza uyğunlaşaraq rahat və müasir bir duş təcrübəsi yaradır.",
    "electronic-openings": "Elektron açılıb bağlanan sistemlərimiz gündəlik həyatınızı asanlaşdırmaq və təhlükəsizliyinizi artırmaq üçün nəzərdə tutulmuşdur. Avtomatik qapı və qaraj sistemlərimiz müasir texnologiya ilə rahatlıq və etibarlılıq təmin edir.",
    "glass-railings": "Şüşə prillalarımız həm təhlükəsizliyi təmin edir, həm də məkanınıza şəffaf və müasir bir görünüş bəxş edir. Balkonlar, terraslar və pilləkənlər üçün ideal olan bu sistemlər davamlı materiallardan hazırlanır və uzunömürlü istifadə üçün nəzərdə tutulmuşdur."
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/catalog')}
        >
          <ArrowLeft size={16} />
          <span>Kataloqa Qayıt</span>
        </Button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="relative h-64 md:h-80">
            <img    
              className="w-full h-full object-cover" 
              alt={`${category.name} kateqoriya banneri`} 
              src={category.image || '/placeholder-category.jpg'}
              onError={(e) => { e.target.onerror = null; e.target.src='/placeholder-category.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">{category.name} Məhsullarımıza Baxın</h2>
          
          {products.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Link to={`/product/${product.id}`} className="product-card block h-full">
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img    
                          className="w-full h-full object-cover" 
                          alt={product.name} 
                          src={product.image || '/placeholder-product.jpg'}
                          onError={(e) => { e.target.onerror = null; e.target.src='/placeholder-product.jpg'; }}
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                          <Button size="sm">Ətraflı Bax</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
             <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Bu Kateqoriyada Hələ Məhsul Yoxdur</h3>
                <p className="text-gray-600 mb-6">Tezliklə bu kateqoriyaya yeni məhsullar əlavə edəcəyik. Digər kateqoriyalara nəzər yetirə bilərsiniz.</p>
                <Button asChild>
                  <Link to="/catalog">Bütün Məhsullara Baxın</Link>
                </Button>
              </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">{category.name} Haqqında</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                {categoryInfoContent[category.id] || "Məhsullarımız haqqında daha çox məlumat üçün bizimlə əlaqə saxlayın."}
              </p>
              <p className="text-gray-600">
                Bütün {category.name.toLowerCase()} məhsullarımız hərtərəfli zəmanətlərlə təmin edilir və mükəmməl uyğunluq və funksiya təmin etmək üçün təcrübəli mütəxəssislərdən ibarət komandamız tərəfindən quraşdırılır.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Niyə Bizim {category.name} Seçməlisiniz?</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Davamlılıq və uzunömürlülük üçün premium keyfiyyətli materiallar",
                  "Hər hansı bir memarlıq dizaynına uyğun geniş üslub çeşidi",
                  "Kommunal xərcləri azaltmağa kömək edən enerji səmərəli dizaynlar (əgər varsa)",
                  "Təcrübəli texniklər tərəfindən peşəkar quraşdırma",
                  "Rahatlığınız üçün hərtərəfli zəmanətlər"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{category.name} Məhsullarınızı Yeniləməyə Hazırsınız?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Pulsuz məsləhət və qiymət təklifi üçün bu gün bizimlə əlaqə saxlayın. Mütəxəssislərimiz ehtiyaclarınız üçün mükəmməl {category.name.toLowerCase()} tapmaqda sizə kömək edəcək.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-primary font-semibold">
              <Link to="/contact">Pulsuz Qiymət Təklifi Alın</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/catalog">Daha Çox Məhsul Kəşf Edin</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;