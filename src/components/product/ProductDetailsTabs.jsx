import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Check } from 'lucide-react';

const ProductDetailsTabs = ({ product }) => {
  const faqItems = [
    {
      question: "Zəmanət müddəti nə qədərdir?",
      answer: product.specifications.warranty || "Bu məhsul standart zəmanətimizlə təmin edilir. Ətraflı məlumat üçün xüsusiyyətlər bölməsinə baxın."
    },
    {
      question: "Quraşdırma xidmətləri təklif edirsinizmi?",
      answer: `Bəli, bütün məhsullarımız üçün peşəkar quraşdırma xidmətləri təklif edirik. Təcrübəli texniklərdən ibarət komandamız ${product.name} məhsulunuzun optimal performans üçün düzgün quraşdırılmasını təmin edəcək.`
    },
    {
      question: "Qaytarma siyasətiniz nədir?",
      answer: "Orijinal vəziyyətində olan məhsullar üçün alış tarixindən etibarən 30 gün ərzində qaytarmaları qəbul edirik. Fərdi sifarişlər qaytarılmaya bilər. Ətraflı məlumat üçün müştəri xidmətləri komandamızla əlaqə saxlayın."
    },
    {
      question: "Çatdırılma nə qədər vaxt aparır?",
      answer: "Standart çatdırılma adətən 5-7 iş günü çəkir. Fərdi və ya böyük sifarişlər üçün çatdırılma müddətləri dəyişə bilər. Sifarişinizi yerləşdirərkən sizə xüsusi çatdırılma təxmini təqdim edəcəyik."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
      <Tabs defaultValue="details" className="p-6">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="details">Təfərrüatlar</TabsTrigger>
          <TabsTrigger value="specifications">Xüsusiyyətlər</TabsTrigger>
          <TabsTrigger value="faq">Tez-tez Verilən Suallar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Məhsul Təfərrüatları</h2>
          <p className="text-gray-600">
            {product.description}
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Xüsusiyyətlər</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="specifications" className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Texniki Xüsusiyyətlər</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b last:border-b-0">
                    <td className="px-4 py-3 font-medium bg-gray-50 w-1/3 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                    <td className="px-4 py-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="faq" className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Tez-tez Verilən Suallar</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTabs;