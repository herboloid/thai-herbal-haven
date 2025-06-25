
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.supplements': 'Supplements',
    'nav.ai_consultant': 'AI Consultant',
    'nav.blog': 'Blog',
    'nav.affiliate': 'Affiliate',
    'nav.about': 'About',
    'nav.sign_in': 'Sign In',
    'nav.logout': 'Logout',
    'nav.profile': 'Profile',
    
    // AI Consultant Page
    'ai.title': 'AI Supplement',
    'ai.subtitle': 'Consultant',
    'ai.description': 'Get personalized supplement recommendations based on your health goals and needs. Our AI consultant will help you find the perfect products for your wellness journey.',
    'ai.consultant_name': 'AI Consultant',
    'ai.consultant_subtitle': 'Personalized supplement selection',
    'ai.input_placeholder': 'Describe your needs...',
    'ai.initial_message': 'Hello! I will help you find the perfect supplements for your needs. Tell me about your health problems or goals you want to achieve?',
    
    // Footer
    'footer.brand_description': 'Leading provider of high-quality natural dietary supplements for better health for you and your family',
    'footer.quick_links': 'Quick Links',
    'footer.all_products': 'All Products',
    'footer.categories': 'Categories',
    'footer.affiliate_program': 'Affiliate Program',
    'footer.about_us': 'About Us',
    'footer.customer_service': 'Customer Service',
    'footer.faq': 'FAQ',
    'footer.return_policy': 'Return Policy',
    'footer.shipping': 'Shipping',
    'footer.contact_us': 'Contact Us',
    'footer.copyright': '© 2024 SIAM HEALTHY. All rights reserved',
    
    // Home Page
    'home.hero_title': 'Natural Health',
    'home.hero_subtitle': 'Premium Supplements',
    'home.hero_description': 'Discover our curated collection of high-quality dietary supplements designed to support your wellness journey naturally.',
    'home.shop_now': 'Shop Now',
    'home.learn_more': 'Learn More',
    'home.featured_products': 'Featured Products',
    'home.why_choose_title': 'Why Choose SIAM HEALTHY?',
    'home.quality_title': 'Premium Quality',
    'home.quality_description': 'All our supplements are third-party tested and made with the highest quality ingredients.',
    'home.natural_title': 'Natural Ingredients',
    'home.natural_description': 'We source only the finest natural ingredients from trusted suppliers worldwide.',
    'home.expert_title': 'Expert Formulated',
    'home.expert_description': 'Our products are developed by nutrition experts and health professionals.',
    'home.testimonials_title': 'What Our Customers Say',
  },
  th: {
    // Navigation
    'nav.home': 'หน้าหลัก',
    'nav.supplements': 'อาหารเสริม',
    'nav.ai_consultant': 'ที่ปรึกษา AI',
    'nav.blog': 'บล็อก',
    'nav.affiliate': 'พันธมิตร',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.sign_in': 'เข้าสู่ระบบ',
    'nav.logout': 'ออกจากระบบ',
    'nav.profile': 'โปรไฟล์',
    
    // AI Consultant Page
    'ai.title': 'ที่ปรึกษา AI',
    'ai.subtitle': 'อาหารเสริม',
    'ai.description': 'รับคำแนะนำอาหารเสริมเฉพาะบุคคลตามเป้าหมายสุขภาพและความต้องการของคุณ ที่ปรึกษา AI ของเราจะช่วยคุณค้นหาผลิตภัณฑ์ที่เหมาะสมสำหรับการดูแลสุขภาพของคุณ',
    'ai.consultant_name': 'ที่ปรึกษา AI',
    'ai.consultant_subtitle': 'การเลือกอาหารเสริมเฉพาะบุคคล',
    'ai.input_placeholder': 'อธิบายความต้องการของคุณ...',
    'ai.initial_message': 'สวัสดี! ฉันจะช่วยคุณค้นหาอาหารเสริมที่เหมาะสมสำหรับความต้องการของคุณ บอกฉันเกี่ยวกับปัญหาสุขภาพหรือเป้าหมายที่คุณต้องการบรรลุ?',
    
    // Footer
    'footer.brand_description': 'ผู้นำในการจำหน่ายอาหารเสริมธรรมชาติคุณภาพสูงเพื่อสุขภาพที่ดีขึ้นสำหรับคุณและครอบครัว',
    'footer.quick_links': 'ลิงก์ด่วน',
    'footer.all_products': 'สินค้าทั้งหมด',
    'footer.categories': 'หมวดหมู่',
    'footer.affiliate_program': 'โปรแกรมพันธมิตร',
    'footer.about_us': 'เกี่ยวกับเรา',
    'footer.customer_service': 'บริการลูกค้า',
    'footer.faq': 'คำถามที่พบบ่อย',
    'footer.return_policy': 'นโยบายการคืนสินค้า',
    'footer.shipping': 'การจัดส่ง',
    'footer.contact_us': 'ติดต่อเรา',
    'footer.copyright': '© 2024 SIAM HEALTHY สงวนลิขสิทธิ์',
    
    // Home Page
    'home.hero_title': 'สุขภาพธรรมชาติ',
    'home.hero_subtitle': 'อาหารเสริมพรีเมียม',
    'home.hero_description': 'ค้นพบคอลเลกชันอาหารเสริมคุณภาพสูงที่คัดสรรมาเพื่อสนับสนุนการดูแลสุขภาพของคุณอย่างธรรมชาติ',
    'home.shop_now': 'ช้อปเลย',
    'home.learn_more': 'เรียนรู้เพิ่มเติม',
    'home.featured_products': 'สินค้าแนะนำ',
    'home.why_choose_title': 'ทำไมต้องเลือก SIAM HEALTHY?',
    'home.quality_title': 'คุณภาพพรีเมียม',
    'home.quality_description': 'อาหารเสริมทั้งหมดของเราผ่านการทดสอบโดยบุคคลที่สามและทำจากส่วนผสมคุณภาพสูงสุด',
    'home.natural_title': 'ส่วนผสมธรรมชาติ',
    'home.natural_description': 'เราคัดสรรเฉพาะส่วนผสมธรรมชาติที่ดีที่สุดจากผู้จำหน่ายที่เชื่อถือได้ทั่วโลก',
    'home.expert_title': 'สูตรโดยผู้เชี่ยวชาญ',
    'home.expert_description': 'ผลิตภัณฑ์ของเราพัฒนาโดยผู้เชี่ยวชาญด้านโภชนาการและผู้เชี่ยวชาญด้านสุขภาพ',
    'home.testimonials_title': 'ลูกค้าของเราพูดถึงเรา',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
