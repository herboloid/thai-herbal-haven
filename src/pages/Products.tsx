import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");
  const { addItem } = useCart();

  const products = [
    {
      id: 22,
      name: "Extera — Intestinal Detox & Skin Tag Removal Support Capsules",
      price: "฿970",
      originalPrice: "฿1,190",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
      rating: 4.9,
      reviews: 156,
      badge: "🌟 New",
      category: "detox-health"
    },
    {
      id: 21,
      name: "S-Complex — Anti-Aging, Brightening & Skin Firming Capsules",
      price: "฿999",
      originalPrice: "฿1,470",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      rating: 4.9,
      reviews: 198,
      badge: "🌟 New",
      category: "beauty-supplement"
    },
    {
      id: 20,
      name: "Philola — Eye Health & Vision Support Capsules",
      price: "฿1,190",
      originalPrice: "฿1,400",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      rating: 4.9,
      reviews: 167,
      badge: "🌟 New",
      category: "eye-health"
    },
    {
      id: 19,
      name: "Onix — Weight Control, Fat Burning & Body Shaping Capsules",
      price: "฿890",
      originalPrice: "฿1,575",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      rating: 4.8,
      reviews: 175,
      badge: "🌟 New",
      category: "weight-loss"
    },
    {
      id: 18,
      name: "Oclarizin — Eye Health & Vision Support Capsules",
      price: "฿930",
      originalPrice: "฿1,330",
      image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
      rating: 4.9,
      reviews: 143,
      badge: "🌟 New",
      category: "eye-health"
    },
    {
      id: 17,
      name: "Helmina — Intestinal Detox, Toxin Cleanse & Skin Tag Removal Support",
      price: "฿980",
      originalPrice: "฿1,155",
      image: "/lovable-uploads/5b11406a-c72a-4900-af98-f63e310c5f46.png",
      rating: 4.9,
      reviews: 187,
      badge: "🌟 New",
      category: "detox-health"
    },
    {
      id: 16,
      name: "Geralox — Hemorrhoid Relief & Digestive Health Support",
      price: "฿950",
      originalPrice: "฿1,085",
      image: "/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png",
      rating: 4.8,
      reviews: 156,
      badge: "🌟 New",
      category: "digestive-health"
    },
    {
      id: 15,
      name: "Genesis Caps — Hearing Restoration & Ear Health Support",
      price: "฿873",
      originalPrice: "฿1,575",
      image: "/lovable-uploads/a4aea223-69b4-4f7a-b244-3c5d71392fe0.png",
      rating: 4.7,
      reviews: 164,
      badge: "🌟 New",
      category: "hearing-health"
    },
    {
      id: 14,
      name: "Turbine — Prostate & Sexual Health Support",
      price: "฿940",
      originalPrice: "฿1,715",
      image: "/lovable-uploads/7e5ab9ec-c4af-456d-b2da-f7a95ed6efa5.png",
      rating: 4.8,
      reviews: 142,
      badge: "🌟 New",
      category: "prostate-health"
    },
    {
      id: 13,
      name: "Elsie — Skin Restoration & Fungal Infection Support",
      price: "฿940",
      originalPrice: "฿1,470",
      image: "/lovable-uploads/f4d1f76d-a661-4428-a1b3-04a1f64eee34.png",
      rating: 4.9,
      reviews: 198,
      badge: "🌟 New",
      category: "skin-health"
    },
    {
      id: 12,
      name: "Andicellix — Hearing Support & Ear Nerve Protection",
      price: "฿990",
      originalPrice: "฿1,645",
      image: "/lovable-uploads/1d68a6b5-de0a-4b8b-8fcc-4faebf7de5d3.png",
      rating: 4.8,
      reviews: 127,
      badge: "🌟 New",
      category: "hearing-health"
    },
    {
      id: 11,
      name: "Black Rhino — Male Performance & Testosterone Booster",
      price: "฿855",
      originalPrice: "฿1,450",
      image: "/lovable-uploads/30a54550-b6ae-4591-b827-2d061f202b88.png",
      rating: 4.8,
      reviews: 89,
      badge: "🌟 New",
      category: "mens-health"
    },
    {
      id: 10,
      name: "BackPro — Prostate Health & Urinary Function Support",
      price: "฿950",
      originalPrice: "฿1,820",
      image: "/lovable-uploads/cd55ad2c-2744-4f3f-bb08-aeaa1a47bcee.png",
      rating: 4.7,
      reviews: 173,
      badge: "🔥 New",
      category: "prostate-health"
    },
    {
      id: 9,
      name: "Carthisin — Bone & Joint Health Support",
      price: "฿970",
      originalPrice: "฿1,990",
      image: "/lovable-uploads/2836d04a-02d7-488b-9476-c6b3965d2063.png",
      rating: 4.8,
      reviews: 142,
      badge: "🦴 Joint Health",
      category: "bone-joint"
    },
    {
      id: 8,
      name: "Diacard — Blood Pressure & Blood Sugar Support",
      price: "฿890",
      originalPrice: "฿1,680",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      rating: 4.9,
      reviews: 189,
      badge: "🔥 Hot",
      category: "heart-health"
    },
    {
      id: 7,
      name: "TChrome — Weight Loss & Detox Capsules",
      price: "฿990",
      originalPrice: "฿1,990",
      image: "/lovable-uploads/35bcbd8d-63a2-4bc6-949f-fbb3ee34a09c.png",
      rating: 4.9,
      reviews: 256,
      badge: "🌟 New",
      category: "weight-loss"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "beauty-supplement", label: "Beauty & Anti-Aging" },
    { value: "weight-loss", label: "Weight Control & Body Shaping" },
    { value: "eye-health", label: "Eye Health & Vision Support" },
    { value: "detox-health", label: "Detox & Body Cleanse" },
    { value: "digestive-health", label: "Digestive Health" },
    { value: "skin-health", label: "Skin Health" },
    { value: "hearing-health", label: "Hearing Health" },
    { value: "mens-health", label: "Men's Health" },
    { value: "prostate-health", label: "Prostate Health" },
    { value: "bone-joint", label: "Bone & Joint Health" },
    { value: "heart-health", label: "Heart Health" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      originalPrice: product.originalPrice || undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">High-quality natural dietary supplements for better health</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow border-none overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-nature-600 text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-nature-600 text-lg">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full bg-nature-600 hover:bg-nature-700">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
                }}
              >
                Show All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
