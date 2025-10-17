import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "supplements": "Supplements",
        "blog": "Blog",
        "affiliate": "Affiliate",
        "about": "About",
        "signIn": "Sign In",
        "cart": "Cart"
      },
      "hero": {
        "title": "Your Health, Our Mission",
        "subtitle": "Premium Health Supplements",
        "description": "Discover scientifically-backed supplements for optimal wellness",
        "cta": "Shop Now"
      },
      "categories": {
        "beauty": "Beauty & Skin",
        "beautyDesc": "Radiant skin and youthful appearance",
        "weight": "Weight Control",
        "weightDesc": "Healthy weight management solutions",
        "vision": "Vision Health",
        "visionDesc": "Support for clear, healthy vision",
        "heart": "Heart Health",
        "heartDesc": "Cardiovascular wellness support",
        "detox": "Detox & Cleanse",
        "detoxDesc": "Body purification and renewal",
        "joint": "Joint Health",
        "jointDesc": "Mobility and flexibility support",
        "prostate": "Men's Health",
        "prostateDesc": "Prostate and vitality support",
        "view": "View"
      },
      "products": {
        "featured": "Featured Products",
        "all": "All Products",
        "buy": "Buy",
        "reviews": "reviews",
        "originalPrice": "Original Price"
      },
      "blog": {
        "title": "Health & Wellness Blog",
        "description": "Expert insights on nutrition and wellness",
        "cta": "Read More",
        "category": {
          "nutrition": "Nutrition",
          "wellness": "Wellness",
          "fitness": "Fitness"
        }
      },
      "productCategories": {
        "beauty": "Beauty & Skin Care",
        "weight": "Weight Management",
        "vision": "Vision Support",
        "heart": "Heart Health",
        "detox": "Detox & Cleanse",
        "digestive": "Digestive Health",
        "joint": "Joint & Bone",
        "mens": "Men's Health"
      },
      "common": {
        "loading": "Loading...",
        "error": "Error",
        "retry": "Retry",
        "new": "New",
        "sale": "Sale",
        "discount": "Discount"
      },
      "cart": {
        "title": "Shopping Cart",
        "empty": "Your cart is empty",
        "continueShopping": "Continue Shopping",
        "cartItems": "Cart Items",
        "orderSummary": "Order Summary",
        "total": "Total",
        "placeOrder": "Place order",
        "lineCheckout": "Complete your order via LINE",
        "lineCheckoutDesc": "Click the button below to purchase this product through LINE"
      },
      "footer": {
        "description": "Your trusted source for premium health supplements",
        "quickLinks": "Quick Links",
        "support": "Support",
        "contact": "Contact Us",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use",
        "copyright": "© 2024 HealthSupplements. All rights reserved."
      }
    }
  },
  th: {
    translation: {
      "nav": {
        "home": "หน้าหลัก",
        "supplements": "อาหารเสริม",
        "blog": "บล็อก",
        "affiliate": "พันธมิตร",
        "about": "เกี่ยวกับเรา",
        "signIn": "เข้าสู่ระบบ",
        "cart": "ตะกร้า"
      },
      "hero": {
        "title": "สุขภาพของคุณ ภารกิจของเรา",
        "subtitle": "อาหารเสริมคุณภาพพรีเมียม",
        "description": "ค้นพบอาหารเสริมที่ได้รับการสนับสนุนทางวิทยาศาสตร์เพื่อสุขภาพที่ดีที่สุด",
        "cta": "ช้อปเลย"
      },
      "categories": {
        "beauty": "ความงามและผิวพรรณ",
        "beautyDesc": "ผิวพรรณสดใสและรูปร่างอ่อนเยาว์",
        "weight": "ควบคุมน้ำหนัก",
        "weightDesc": "โซลูชันการจัดการน้ำหนักที่ดีต่อสุขภาพ",
        "vision": "สุขภาพสายตา",
        "visionDesc": "สนับสนุนการมองเห็นที่ชัดเจนและสุขภาพดี",
        "heart": "สุขภาพหัวใจ",
        "heartDesc": "สนับสนุนความเป็นอยู่ของหัวใจและหลอดเลือด",
        "detox": "ดีท็อกซ์และล้างสารพิษ",
        "detoxDesc": "การชำระล้างและฟื้นฟูร่างกาย",
        "joint": "สุขภาพข้อต่อ",
        "jointDesc": "สนับสนุนการเคลื่อนไหวและความยืดหยุ่น",
        "prostate": "สุขภาพผู้ชาย",
        "prostateDesc": "สนับสนุนต่อมลูกหมากและความมีชีวิตชีวา",
        "view": "ดู"
      },
      "products": {
        "featured": "ผลิตภัณฑ์แนะนำ",
        "all": "ผลิตภัณฑ์ทั้งหมด",
        "buy": "ซื้อ",
        "reviews": "รีวิว",
        "originalPrice": "ราคาเดิม"
      },
      "blog": {
        "title": "บล็อกสุขภาพและความเป็นอยู่ที่ดี",
        "description": "ข้อมูลเชิงลึกจากผู้เชี่ยวชาญเกี่ยวกับโภชนาการและความเป็นอยู่ที่ดี",
        "cta": "อ่านเพิ่มเติม",
        "category": {
          "nutrition": "โภชนาการ",
          "wellness": "ความเป็นอยู่ที่ดี",
          "fitness": "ฟิตเนส"
        }
      },
      "productCategories": {
        "beauty": "ความงามและดูแลผิว",
        "weight": "จัดการน้ำหนัก",
        "vision": "สนับสนุนการมองเห็น",
        "heart": "สุขภาพหัวใจ",
        "detox": "ดีท็อกซ์และล้างสารพิษ",
        "digestive": "สุขภาพระบบย่อยอาหาร",
        "joint": "ข้อต่อและกระดูก",
        "mens": "สุขภาพผู้ชาย"
      },
      "common": {
        "loading": "กำลังโหลด...",
        "error": "ข้อผิดพลาด",
        "retry": "ลองอีกครั้ง",
        "new": "ใหม่",
        "sale": "ลดราคา",
        "discount": "ส่วนลด"
      },
      "cart": {
        "title": "ตะกร้าสินค้า",
        "empty": "ตะกร้าของคุณว่างเปล่า",
        "continueShopping": "ช้อปปิ้งต่อ",
        "cartItems": "สินค้าในตะกร้า",
        "orderSummary": "สรุปคำสั่งซื้อ",
        "total": "ยอดรวม",
        "placeOrder": "สั่งซื้อ",
        "lineCheckout": "สั่งซื้อผ่าน LINE",
        "lineCheckoutDesc": "คลิกปุ่มด้านล่างเพื่อซื้อสินค้านี้ผ่าน LINE"
      },
      "footer": {
        "description": "แหล่งที่เชื่อถือได้สำหรับอาหารเสริมคุณภาพพรีเมียม",
        "quickLinks": "ลิงก์ด่วน",
        "support": "สนับสนุน",
        "contact": "ติดต่อเรา",
        "privacy": "นโยบายความเป็นส่วนตัว",
        "terms": "ข้อกำหนดการใช้งาน",
        "copyright": "© 2024 อาหารเสริมเพื่อสุขภาพ สงวนลิขสิทธิ์"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'th',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
