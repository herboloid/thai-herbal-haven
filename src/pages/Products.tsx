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
      id: 10,
      name: "BackPro — Prostate Health & Urinary Function Support",
      price: "$45",
      originalPrice: "$52",
      image: "/lovable-uploads/b99a13ac-aec8-45e4-975b-d6e1c5618f9b.png",
      rating: 4.7,
      reviews: 173,
      badge: "🔥 New",
      category: "prostate-health"
    },
    {
      id: 9,
      name: "Carthisin — Bone & Joint Health Support",
      price: "$38",
      originalPrice: "$45",
      image: "/lovable-uploads/7cc33d76-2c30-4d3c-a0a1-6b69aead89ea.png",
      rating: 4.8,
      reviews: 142,
      badge: "🦴 Joint Health",
      category: "bone-joint"
    },
    {
      id: 8,
      name: "Diacard — Blood Pressure & Blood Sugar Support",
      price: "$42",
      originalPrice: "$48",
      image: "/lovable-uploads/eb417a32-9a3f-479a-8427-bd90fc6aa3fe.png",
      rating: 4.9,
      reviews: 189,
      badge: "🔥 Hot",
      category: "heart-health"
    },
    {
      id: 7,
      name: "TChrome — Weight Loss & Detox Capsules",
      price: "$35",
      originalPrice: "$42",
      image: "/lovable-uploads/aacbb27e-cd19-495a-865d-a1dbbe6d2e3b.png",
      rating: 4.9,
      reviews: 256,
      badge: "🌟 New",
      category: "weight-loss"
    },
    {
      id: 1,
      name: "Natural Vitamin C",
      price: "$19",
      originalPrice: "$23",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      category: "vitamins"
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      price: "$28",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "Recommended",
      category: "omega"
    },
    {
      id: 3,
      name: "Natural Probiotics",
      price: "$24",
      originalPrice: "$27",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "New",
      category: "probiotics"
    },
    {
      id: 4,
      name: "Turmeric Extract",
      price: "$15",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 203,
      badge: null,
      category: "herbs"
    },
    {
      id: 5,
      name: "Vitamin D3 + K2",
      price: "$22",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 92,
      badge: null,
      category: "vitamins"
    },
    {
      id: 6,
      name: "Natural Magnesium",
      price: "$17",
      originalPrice: "$19",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 167,
      badge: "Sale",
      category: "minerals"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "prostate-health", label: "Prostate Health" },
    { value: "bone-joint", label: "Bone & Joint Health" },
    { value: "heart-health", label: "Heart Health" },
    { value: "weight-loss", label: "Weight Loss" },
    { value: "vitamins", label: "Vitamins" },
    { value: "omega", label: "Omega" },
    { value: "probiotics", label: "Probiotics" },
    { value: "herbs", label: "Herbs" },
    { value: "minerals", label: "Minerals" }
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
                    className={`w-full h-48 transition-transform duration-300 group-hover:scale-105 ${
                      product.id === 7 || product.id === 8 || product.id === 9 || product.id === 10 ? 'object-contain bg-white p-2' : 'object-cover'
                    }`}
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
