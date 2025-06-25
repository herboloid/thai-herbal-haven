export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  description: string;
  keywords: string[];
  category: string;
  benefits: string[];
  inStock: number;
  badge?: string;
  createdAt?: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "detox-cleanse",
    name: "Detox & Cleanse",
    description: "Natural detoxification and cleansing supplements",
    image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png"
  },
  {
    id: "beauty-anti-aging",
    name: "Beauty & Anti-Aging",
    description: "Advanced anti-aging and beauty enhancement formulas",
    image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png"
  },
  {
    id: "eye-health-vision",
    name: "Eye Health & Vision",
    description: "Comprehensive eye health and vision support",
    image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png"
  },
  {
    id: "weight-control-body-shaping",
    name: "Weight Control & Body Shaping",
    description: "Effective weight management and body shaping solutions",
    image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png"
  }
];

export const products: Product[] = [
  {
    id: "22",
    name: "Extera — Intestinal Detox & Skin Tag Removal Support Capsules",
    price: 970,
    originalPrice: 1190,
    image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
    rating: 4.9,
    reviewCount: 156,
    description: "Effective formula for intestinal cleansing and detox support",
    keywords: ["detox", "cleanse", "intestinal", "toxins", "papillomas", "warts", "skin tags", "body cleanse", "digestive health"],
    category: "detox-cleanse",
    benefits: ["Cleanses toxins", "Improves digestion", "Supports skin health"],
    inStock: 12,
    badge: "Popular",
    discount: 18
  },
  {
    id: "21",
    name: "S-Complex — Anti-Aging, Brightening & Skin Firming Capsules",
    price: 999,
    originalPrice: 1470,
    image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
    rating: 4.9,
    reviewCount: 198,
    description: "Complex for anti-aging, skin brightening and firming",
    keywords: ["anti-aging", "skin", "beauty", "firming", "wrinkles", "pigmentation", "brightening", "collagen", "youth"],
    category: "beauty-anti-aging",
    benefits: ["Reduces wrinkles", "Improves skin firmness", "Brightens pigmentation"],
    inStock: 8,
    badge: "Bestseller",
    discount: 32
  },
  {
    id: "20",
    name: "Philola — Eye Health & Vision Support Capsules",
    price: 1190,
    originalPrice: 1400,
    image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
    rating: 4.9,
    reviewCount: 167,
    description: "Comprehensive eye health and vision improvement support",
    keywords: ["vision", "eyes", "eye health", "eye strain", "myopia", "farsightedness", "sight", "visual", "eye protection"],
    category: "eye-health-vision",
    benefits: ["Improves visual acuity", "Reduces eye fatigue", "Protects from blue light"],
    inStock: 15,
    badge: "New",
    discount: 15
  },
  {
    id: "19",
    name: "Onix — Weight Control, Fat Burning & Body Shaping Capsules",
    price: 890,
    originalPrice: 1575,
    image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
    rating: 4.8,
    reviewCount: 175,
    description: "Effective complex for weight control and fat burning",
    keywords: ["weight loss", "weight", "fat burning", "body shaping", "metabolism", "appetite", "cellulite", "slimming", "diet"],
    category: "weight-control-body-shaping",
    benefits: ["Boosts metabolism", "Burns fat", "Suppresses appetite"],
    inStock: 6,
    badge: "Popular",
    discount: 43
  },
  {
    id: "18",
    name: "Oclarizin — Eye Health & Vision Support Capsules",
    price: 930,
    originalPrice: 1330,
    image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
    rating: 4.9,
    reviewCount: 143,
    description: "Premium formula for vision support and eye health",
    keywords: ["vision", "eyes", "eye health", "cataract", "glaucoma", "retina", "sight", "visual health", "eye care"],
    category: "eye-health-vision",
    benefits: ["Protects retina", "Prevents cataracts", "Improves night vision"],
    inStock: 10,
    badge: "Recommended",
    discount: 30
  }
];

// Keep the existing allProducts array for backward compatibility
export const allProducts: Product[] = products;

export const getProductsByKeywords = (query: string): Product[] => {
  const queryLower = query.toLowerCase();
  const scored = products.map(product => {
    let score = 0;
    
    product.keywords.forEach(keyword => {
      if (queryLower.includes(keyword) || keyword.includes(queryLower)) {
        score += 2;
      }
    });
    
    if (product.description.toLowerCase().includes(queryLower)) {
      score += 1;
    }
    
    return { product, score };
  });
  
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
};

export const getComboRecommendations = (productId: string): Product[] => {
  const mainProduct = products.find(p => p.id === productId);
  if (!mainProduct) return [];
  
  // Combo recommendation logic
  const combos: { [key: string]: string[] } = {
    "21": ["22"], // S-Complex + Extera (beauty + detox)
    "19": ["22"], // Onix + Extera (weight loss + detox)
    "20": ["18"], // Philola + Oclarizin (eye health combo)
  };
  
  const comboIds = combos[productId] || [];
  return products.filter(p => comboIds.includes(p.id));
};
