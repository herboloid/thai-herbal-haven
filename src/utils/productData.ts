
export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  keywords: string[];
  category: string;
  benefits: string[];
  inStock: number;
}

export const allProducts: Product[] = [
  {
    id: 22,
    name: "Extera — Intestinal Detox & Skin Tag Removal Support Capsules",
    price: "฿970",
    originalPrice: "฿1,190",
    image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
    rating: 4.9,
    reviews: 156,
    description: "Effective formula for intestinal cleansing and detox support",
    keywords: ["detox", "cleanse", "intestinal", "toxins", "papillomas", "warts", "skin tags", "body cleanse", "digestive health"],
    category: "Detox & Cleanse",
    benefits: ["Cleanses toxins", "Improves digestion", "Supports skin health"],
    inStock: 12
  },
  {
    id: 21,
    name: "S-Complex — Anti-Aging, Brightening & Skin Firming Capsules",
    price: "฿999",
    originalPrice: "฿1,470",
    image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
    rating: 4.9,
    reviews: 198,
    description: "Complex for anti-aging, skin brightening and firming",
    keywords: ["anti-aging", "skin", "beauty", "firming", "wrinkles", "pigmentation", "brightening", "collagen", "youth"],
    category: "Beauty & Anti-Aging",
    benefits: ["Reduces wrinkles", "Improves skin firmness", "Brightens pigmentation"],
    inStock: 8
  },
  {
    id: 20,
    name: "Philola — Eye Health & Vision Support Capsules",
    price: "฿1,190",
    originalPrice: "฿1,400",
    image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
    rating: 4.9,
    reviews: 167,
    description: "Comprehensive eye health and vision improvement support",
    keywords: ["vision", "eyes", "eye health", "eye strain", "myopia", "farsightedness", "sight", "visual", "eye protection"],
    category: "Eye Health & Vision",
    benefits: ["Improves visual acuity", "Reduces eye fatigue", "Protects from blue light"],
    inStock: 15
  },
  {
    id: 19,
    name: "Onix — Weight Control, Fat Burning & Body Shaping Capsules",
    price: "฿890",
    originalPrice: "฿1,575",
    image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
    rating: 4.8,
    reviews: 175,
    description: "Effective complex for weight control and fat burning",
    keywords: ["weight loss", "weight", "fat burning", "body shaping", "metabolism", "appetite", "cellulite", "slimming", "diet"],
    category: "Weight Control & Body Shaping",
    benefits: ["Boosts metabolism", "Burns fat", "Suppresses appetite"],
    inStock: 6
  },
  {
    id: 18,
    name: "Oclarizin — Eye Health & Vision Support Capsules",
    price: "฿930",
    originalPrice: "฿1,330",
    image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
    rating: 4.9,
    reviews: 143,
    description: "Premium formula for vision support and eye health",
    keywords: ["vision", "eyes", "eye health", "cataract", "glaucoma", "retina", "sight", "visual health", "eye care"],
    category: "Eye Health & Vision",
    benefits: ["Protects retina", "Prevents cataracts", "Improves night vision"],
    inStock: 10
  }
];

export const getProductsByKeywords = (query: string): Product[] => {
  const queryLower = query.toLowerCase();
  const scored = allProducts.map(product => {
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

export const getComboRecommendations = (productId: number): Product[] => {
  const mainProduct = allProducts.find(p => p.id === productId);
  if (!mainProduct) return [];
  
  // Combo recommendation logic
  const combos: { [key: number]: number[] } = {
    21: [22], // S-Complex + Extera (beauty + detox)
    19: [22], // Onix + Extera (weight loss + detox)
    20: [18], // Philola + Oclarizin (eye health combo)
  };
  
  const comboIds = combos[productId] || [];
  return allProducts.filter(p => comboIds.includes(p.id));
};
