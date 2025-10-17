import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navigation": {
        "home": "Home",
        "supplements": "Supplements",
        "blog": "Blog",
        "affiliate": "Affiliate",
        "about": "About",
        "signIn": "Sign In",
        "cart": "Cart"
      },
      "hero": {
        "title": "SIAM HEALTHY",
        "subtitle": "Premium Natural Supplements",
        "description": "High-quality natural supplements for optimal health care with 100% natural ingredients",
        "shopButton": "Shop Supplements"
      },
      "categories": {
        "title": "Product Categories",
        "subtitle": "Choose a category that matches your health needs",
        "beauty": "Beauty and Anti-Aging Care",
        "beautyDesc": "Skin brightening and anti-aging support",
        "weight": "Weight Control and Body Shaping",
        "weightDesc": "Fat burning and metabolism support",
        "vision": "Eye Health and Vision",
        "visionDesc": "Vision support and eye protection",
        "heart": "Heart Health",
        "heartDesc": "Blood pressure and cardiovascular system support",
        "detox": "Detox and Cleansing",
        "detoxDesc": "Body cleansing and toxin removal",
        "digestive": "Digestive Health",
        "digestiveDesc": "Support for healthy digestion and gut health",
        "skin": "Skin Health",
        "skinDesc": "Skin care and dermatological support",
        "hearing": "Hearing Health",
        "hearingDesc": "Auditory support and hearing protection",
        "mens": "Men's Health",
        "mensDesc": "Specialized health support for men",
        "prostate": "Prostate Health",
        "prostateDesc": "Prostate care and urinary health",
        "boneJoint": "Bone & Joint Health",
        "boneJointDesc": "Bone strength and joint mobility support",
        "viewButton": "View"
      },
      "products": {
        "featured": "Featured Products",
        "featuredDesc": "High-quality products popular among our customers",
        "allProducts": "All Products",
        "buy": "Buy",
        "reviews": "reviews",
        "originalPrice": "Original Price"
      },
      "blog": {
        "title": "Health & Wellness Blog",
        "subtitle": "Expert insights on healthy living, disease prevention, and natural wellness from nutritionists, doctors, and traditional medicine practitioners.",
        "latestInsights": "Latest Health Insights",
        "insightsDesc": "Expert advice from nutritionists, doctors, and wellness practitioners",
        "readMore": "Read More",
        "read": "Read",
        "viewAllPosts": "View All Posts",
        "categories": {
          "all": "all",
          "detox": "detox",
          "anti-aging": "anti-aging",
          "heart health": "heart health",
          "eye health": "eye health",
          "weight management": "weight management",
          "immunity": "immunity",
          "stress management": "stress management",
          "digestive health": "digestive health"
        },
        "minRead": "min read"
      },
      "productCategories": {
        "all": "All Categories",
        "beauty-supplement": "Beauty & Anti-Aging",
        "weight-loss": "Weight Control",
        "eye-health": "Eye Health",
        "detox-health": "Detox & Cleanse",
        "digestive-health": "Digestive Health",
        "skin-health": "Skin Health",
        "hearing-health": "Hearing Health",
        "mens-health": "Men's Health",
        "prostate-health": "Prostate Health",
        "bone-joint": "Bone & Joint",
        "heart-health": "Heart Health"
      },
      "common": {
        "loading": "Loading...",
        "error": "Error occurred",
        "retry": "Retry",
        "new": "New",
        "sale": "Sale",
        "discount": "Discount"
      },
      "cart": {
        "title": "Shopping Cart",
        "empty": "Your cart is empty",
        "emptyDesc": "Add products to your cart to continue shopping",
        "continueShopping": "Continue Shopping",
        "clearCart": "Clear Cart",
        "items": "items",
        "item": "item",
        "cartItems": "Cart Items",
        "orderSummary": "Order Summary",
        "total": "Total",
        "placeOrder": "Place order",
        "lineCheckout": "Complete your order via LINE",
        "lineCheckoutDesc": "Click the button below to purchase this product through LINE"
      },
      "footer": {
        "description": "High-quality natural supplements online store for better health",
        "quickLinks": "Quick Links",
        "categories": "Categories",
        "support": "Support",
        "contact": "Contact Us",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "allRightsReserved": "All rights reserved"
      }
    }
  },
  th: {
    translation: {
      "navigation": {
        "home": "หน้าแรก",
        "supplements": "อาหารเสริม",
        "blog": "บล็อก",
        "affiliate": "พาร์ทเนอร์",
        "about": "เกี่ยวกับเรา",
        "signIn": "เข้าสู่ระบบ",
        "cart": "ตะกร้า"
      },
      "hero": {
        "title": "SIAM HEALTHY",
        "subtitle": "อาหารเสริมธรรมชาติพรีเมียม",
        "description": "อาหารเสริมธรรมชาติคุณภาพสูง เพื่อการดูแลสุขภาพที่ดีที่สุด ด้วยส่วนผสมจากธรรมชาติ 100%",
        "shopButton": "ช้อปอาหารเสริม"
      },
      "categories": {
        "title": "หมวดหมู่สินค้า",
        "subtitle": "เลือกหมวดหมู่ที่ตรงกับความต้องการด้านสุขภาพของคุณ",
        "beauty": "ความงามและการต้านอนุมูลอิสระ",
        "beautyDesc": "บำรุงผิวพรรณและชะลอวัย",
        "weight": "ควบคุมน้ำหนักและสร้างรูปร่าง",
        "weightDesc": "เผาผลาญไขมันและเสริมเมแทบอลิซึม",
        "vision": "สุขภาพดวงตาและการมองเห็น",
        "visionDesc": "บำรุงสายตาและปกป้องดวงตา",
        "heart": "สุขภาพหัวใจ",
        "heartDesc": "ดูแลระบบไหลเวียนโลหิตและความดันโลหิต",
        "detox": "ดีท็อกซ์และล้างพิษ",
        "detoxDesc": "ล้างสารพิษและทำความสะอาดร่างกาย",
        "digestive": "สุขภาพระบบย่อย",
        "digestiveDesc": "ดูแลระบบย่อยอาหารและสุขภาพลำไส้",
        "skin": "สุขภาพผิวหนัง",
        "skinDesc": "ดูแลผิวหนังและปัญหาทางผิวหนัง",
        "hearing": "สุขภาพการได้ยิน",
        "hearingDesc": "ดูแลการได้ยินและปกป้องหู",
        "mens": "สุขภาพผู้ชาย",
        "mensDesc": "ดูแลสุขภาพเฉพาะสำหรับผู้ชาย",
        "prostate": "สุขภาพต่อมลูกหมาก",
        "prostateDesc": "ดูแลต่อมลูกหมากและระบบปัสสาวะ",
        "boneJoint": "สุขภาพกระดูกและข้อ",
        "boneJointDesc": "เสริมความแข็งแรงของกระดูกและการเคลื่อนไหวของข้อ",
        "viewButton": "ดูสินค้า"
      },
      "products": {
        "featured": "สินค้าแนะนำ",
        "featuredDesc": "สินค้าคุณภาพสูงที่ลูกค้าให้ความนิยม",
        "allProducts": "สินค้าทั้งหมด",
        "buy": "ซื้อ",
        "reviews": "รีวิว",
        "originalPrice": "ราคาเดิม"
      },
      "blog": {
        "title": "บล็อกสุขภาพและการดูแลตนเอง",
        "subtitle": "คำแนะนำจากผู้เชี่ยวชาญด้านโภชนาการ แพทย์ และนักปฏิบัติการแพทย์แผนโบราณ",
        "latestInsights": "ข้อมูลสุขภาพล่าสุด",
        "insightsDesc": "คำแนะนำจากผู้เชี่ยวชาญด้านโภชนาการ แพทย์ และนักปฏิบัติการสุขภาพ",
        "readMore": "อ่านต่อ",
        "read": "อ่าน",
        "viewAllPosts": "ดูบทความทั้งหมด",
        "categories": {
          "all": "ทั้งหมด",
          "detox": "ดีท็อกซ์",
          "anti-aging": "ต้านอนุมูลอิสระ",
          "heart health": "สุขภาพหัวใจ",
          "eye health": "สุขภาพดวงตา",
          "weight management": "จัดการน้ำหนัก",
          "immunity": "ภูมิคุ้มกัน",
          "stress management": "จัดการความเครียด",
          "digestive health": "สุขภาพระบบย่อย"
        },
        "minRead": "นาทีในการอ่าน"
      },
      "productCategories": {
        "all": "ทุกหมวดหมู่",
        "beauty-supplement": "ความงามและต้านอนุมูลอิสระ",
        "weight-loss": "ควบคุมน้ำหนัก",
        "eye-health": "สุขภาพดวงตา",
        "detox-health": "ดีท็อกซ์และล้างพิษ",
        "digestive-health": "สุขภาพระบบย่อย",
        "skin-health": "สุขภาพผิวหนัง",
        "hearing-health": "สุขภาพการได้ยิน",
        "mens-health": "สุขภาพผู้ชาย",
        "prostate-health": "สุขภาพต่อมลูกหมาก",
        "bone-joint": "สุขภาพกระดูกและข้อ",
        "heart-health": "สุขภาพหัวใจ"
      },
      "common": {
        "loading": "กำลังโหลด...",
        "error": "เกิดข้อผิดพลาด",
        "retry": "ลองใหม่",
        "new": "ใหม่",
        "sale": "ลดราคา",
        "discount": "ส่วนลด"
      },
      "cart": {
        "title": "ตะกร้าสินค้า",
        "empty": "ตะกร้าของคุณว่างเปล่า",
        "emptyDesc": "เพิ่มสินค้าลงในตะกร้าเพื่อดำเนินการต่อ",
        "continueShopping": "ช้อปต่อ",
        "clearCart": "ล้างตะกร้า",
        "items": "รายการ",
        "item": "รายการ",
        "cartItems": "สินค้าในตะกร้า",
        "orderSummary": "สรุปคำสั่งซื้อ",
        "total": "ยอดรวม",
        "placeOrder": "สั่งซื้อ",
        "lineCheckout": "สั่งซื้อผ่าน LINE",
        "lineCheckoutDesc": "คลิกปุ่มด้านล่างเพื่อซื้อสินค้านี้ผ่าน LINE"
      },
      "footer": {
        "description": "ร้านค้าออนไลน์อาหารเสริมธรรมชาติคุณภาพสูง เพื่อสุขภาพที่ดีกว่า",
        "quickLinks": "ลิงก์ด่วน",
        "categories": "หมวดหมู่",
        "support": "ช่วยเหลือ",
        "contact": "ติดต่อเรา",
        "privacy": "นโยบายความเป็นส่วนตัว",
        "terms": "ข้อกำหนดการใช้งาน",
        "allRightsReserved": "สงวนลิขสิทธิ์"
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
