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
        "weight-loss": "Weight Loss",
        "heart-health": "Heart Health",
        "bone-joint": "Bone & Joint",
        "prostate-health": "Prostate Health",
        "hearing-health": "Hearing Health",
        "psoriasis": "Psoriasis",
        "mens-health": "Men's Health",
        "hemorrhoids": "Hemorrhoids",
        "parasites": "Parasites",
        "eye-health": "Eye Health",
        "skin-health": "Skin Rejuvenation"
      },
      "common": {
        "loading": "Loading...",
        "error": "Error occurred",
        "retry": "Retry",
        "new": "New",
        "sale": "Sale",
        "discount": "Discount"
      },
      "productDetail": {
        "description": "Description",
        "keyBenefits": "Key Benefits",
        "activeIngredients": "Active Ingredients",
        "directionsForUse": "Directions for Use",
        "productDetails": "Product Details",
        "quantity": "Quantity",
        "capsules": "capsules",
        "fdaNumber": "FDA No.",
        "weight": "Weight",
        "packageSize": "Package Size",
        "shelfLife": "Shelf Life"
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
      "productNames": {
        "1": "Tchrome — Natural Weight Management Capsules",
        "2": "DIACARD — Heart & Blood Pressure Support",
        "3": "Geralox — Prostate Health & Urinary Support",
        "4": "Helmina — Comprehensive Parasite Cleanse",
        "5": "Philola — Natural Hemorrhoid Relief",
        "6": "Turbine — Prostate & Urinary Wellness",
        "7": "Andicellix — Bone & Joint Rejuvenation",
        "8": "Genesis Caps — Men's Vitality & Performance",
        "9": "Oclarizin — Vision Support & Eye Health",
        "10": "Lylac Dew — Anti-Aging & Skin Renewal",
        "11": "Onix — Hearing Health & Cognitive Support",
        "12": "Elsie — Natural Psoriasis Relief",
        "13": "Cartirex — Joint Health & Mobility Support",
        "14": "Backpro — Back Pain & Spinal Health",
        "15": "S-Complex — Ultimate Sleep & Recovery Formula",
        "16": "Black Rhino — Advanced Joint & Cartilage Support"
      },
      "productDescriptions": {
        "1": "Natural supplement for safe and effective weight control",
        "2": "Advanced amino acid complex for cardiovascular balance",
        "3": "Complete prostate care with natural botanical extracts",
        "4": "Gentle yet powerful antiparasitic herbal formula",
        "5": "Soothing relief for hemorrhoids with natural ingredients",
        "6": "Targeted support for prostate health and urinary function",
        "7": "Advanced joint and bone health formula with collagen",
        "8": "Natural boost for male energy and vitality",
        "9": "Comprehensive eye care with lutein and zeaxanthin",
        "10": "Youth-restoring formula for radiant, healthy skin",
        "11": "Supports clear hearing and cognitive function",
        "12": "Natural relief for psoriasis and skin inflammation",
        "13": "Premium joint support with glucosamine and chondroitin",
        "14": "Targeted relief for back pain and spinal health",
        "15": "Deep sleep support with natural relaxation blend",
        "16": "Maximum strength joint and cartilage protection"
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
        "weight-loss": "ควบคุมน้ำหนัก",
        "heart-health": "บำรุงหัวใจและหลอดเลือด",
        "bone-joint": "บำรุงกระดูกและข้อ",
        "prostate-health": "ดูแลต่อมลูกหมาก",
        "hearing-health": "บำรุงการได้ยิน",
        "psoriasis": "โรคสะเก็ดเงิน",
        "mens-health": "สุขภาพผู้ชาย",
        "hemorrhoids": "โรคริดสีดวงทวาร",
        "parasites": "ปรสิต",
        "eye-health": "บำรุงสายตา",
        "skin-health": "ฟื้นฟูผิวพรรณ"
      },
      "common": {
        "loading": "กำลังโหลด...",
        "error": "เกิดข้อผิดพลาด",
        "retry": "ลองใหม่",
        "new": "ใหม่",
        "sale": "ลดราคา",
        "discount": "ส่วนลด"
      },
      "productDetail": {
        "description": "รายละเอียดผลิตภัณฑ์",
        "keyBenefits": "คุณประโยชน์หลัก",
        "activeIngredients": "ส่วนประกอบสำคัญ",
        "directionsForUse": "วิธีรับประทาน",
        "productDetails": "รายละเอียดทางเทคนิค",
        "quantity": "ปริมาณ",
        "capsules": "แคปซูล",
        "fdaNumber": "เลข อย.",
        "weight": "น้ำหนักสุทธิ",
        "packageSize": "ขนาดบรรจุภัณฑ์",
        "shelfLife": "วันหมดอายุ"
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
      "productNames": {
        "1": "Tchrome — แคปซูลควบคุมน้ำหนักจากธรรมชาติ",
        "2": "DIACARD — ผลิตภัณฑ์เสริมอาหารบำรุงหัวใจและควบคุมความดัน",
        "3": "Geralox — บำรุงต่อมลูกหมากและระบบปัสสาวะ",
        "4": "Helmina — สูตรกำจัดปรสิตอย่างครอบคลุม",
        "5": "Philola — บรรเทาริดสีดวงทวารจากธรรมชาติ",
        "6": "Turbine — สุขภาพต่อมลูกหมากและระบบทางเดินปัสสาวะ",
        "7": "Andicellix — ฟื้นฟูกระดูกและข้อต่อ",
        "8": "Genesis Caps — เสริมพลังและความมีชีวิตชีวาสำหรับผู้ชาย",
        "9": "Oclarizin — บำรุงสายตาและสุขภาพดวงตา",
        "10": "Lylac Dew — ต้านริ้วรอยและฟื้นฟูผิว",
        "11": "Onix — บำรุงการได้ยินและสมองจดจำ",
        "12": "Elsie — บรรเทาโรคสะเก็ดเงินจากธรรมชาติ",
        "13": "Cartirex — บำรุงข้อต่อและเสริมความคล่องตัว",
        "14": "Backpro — บรรเทาอาการปวดหลังและดูแลสุขภาพกระดูกสันหลัง",
        "15": "S-Complex — สูตรบำรุงการนอนหลับและฟื้นฟูร่างกาย",
        "16": "Black Rhino — บำรุงข้อต่อและกระดูกอ่อนขั้นสูง"
      },
      "productDescriptions": {
        "1": "อาหารเสริมจากธรรมชาติ เพื่อการลดน้ำหนักอย่างปลอดภัยและได้ผลจริง",
        "2": "สูตรผสมกรดอะมิโน แมกนีเซียม และสมุนไพรธรรมชาติ เพื่อสุขภาพหัวใจและหลอดเลือด",
        "3": "ดูแลต่อมลูกหมากอย่างครอบคลุมด้วยสารสกัดจากพืช",
        "4": "สูตรสมุนไพรกำจัดปรสิตอย่างอ่อนโยนแต่ทรงพลัง",
        "5": "บรรเทาริดสีดวงทวารด้วยส่วนผสมจากธรรมชาติ",
        "6": "สนับสนุนสุขภาพต่อมลูกหมากและการทำงานของระบบทางเดินปัสสาวะ",
        "7": "สูตรบำรุงกระดูกและข้อขั้นสูงพร้อมคอลลาเจน",
        "8": "เสริมพลังงานและความมีชีวิตชีวาให้ผู้ชายด้วยสารธรรมชาติ",
        "9": "ดูแลดวงตาอย่างครอบคลุมด้วยลูทีนและซีแซนทิน",
        "10": "สูตรฟื้นฟูความเยาว์วัยเพื่อผิวสุขภาพดีและเปล่งปลั่ง",
        "11": "สนับสนุนการได้ยินที่ชัดเจนและการทำงานของสมอง",
        "12": "บรรเทาโรคสะเก็ดเงินและอักเสบของผิวหนังอย่างธรรมชาติ",
        "13": "บำรุงข้อต่อระดับพรีเมียมด้วยกลูโคซามีนและคอนดรอยติน",
        "14": "บรรเทาอาการปวดหลังและดูแลสุขภาพกระดูกสันหลังอย่างตรงจุด",
        "15": "สนับสนุนการนอนหลับลึกด้วยส่วนผสมธรรมชาติเพื่อการผ่อนคลาย",
        "16": "ปกป้องข้อต่อและกระดูกอ่อนด้วยประสิทธิภาพสูงสุด"
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
