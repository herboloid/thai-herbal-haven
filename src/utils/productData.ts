
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
    description: "Эффективная формула для очищения кишечника и поддержки детоксикации",
    keywords: ["детокс", "очищение", "кишечник", "токсины", "папилломы", "бородавки"],
    category: "Detox & Cleanse",
    benefits: ["Очищает от токсинов", "Улучшает пищеварение", "Поддерживает здоровье кожи"],
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
    description: "Комплекс для омоложения, осветления и укрепления кожи",
    keywords: ["омоложение", "кожа", "антиэйдж", "красота", "упругость", "морщины", "пигментация"],
    category: "Beauty & Anti-Aging",
    benefits: ["Уменьшает морщины", "Повышает упругость кожи", "Осветляет пигментацию"],
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
    description: "Комплексная поддержка здоровья глаз и улучшение зрения",
    keywords: ["зрение", "глаза", "здоровье глаз", "усталость глаз", "близорукость", "дальнозоркость"],
    category: "Eye Health & Vision",
    benefits: ["Улучшает остроту зрения", "Снижает усталость глаз", "Защищает от синего света"],
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
    description: "Эффективный комплекс для контроля веса и жиросжигания",
    keywords: ["похудение", "вес", "жиросжигание", "фигура", "метаболизм", "аппетит", "целлюлит"],
    category: "Weight Control & Body Shaping",
    benefits: ["Ускоряет метаболизм", "Сжигает жиры", "Подавляет аппетит"],
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
    description: "Премиальная формула для поддержки зрения и здоровья глаз",
    keywords: ["зрение", "глаза", "здоровье глаз", "катаракта", "глаукома", "сетчатка"],
    category: "Eye Health & Vision",
    benefits: ["Защищает сетчатку", "Предотвращает катаракту", "Улучшает ночное зрение"],
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
  
  // Логика комбо-предложений
  const combos: { [key: number]: number[] } = {
    21: [22], // S-Complex + Extera (красота + детокс)
    19: [22], // Onix + Extera (похудение + детокс)
    20: [18], // Philola + Oclarizin (комплекс для глаз)
  };
  
  const comboIds = combos[productId] || [];
  return allProducts.filter(p => comboIds.includes(p.id));
};
