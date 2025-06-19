
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Bot, MessageCircle, Sparkles, Heart, Eye, Zap, Leaf } from "lucide-react";
import InteractiveBackground from "@/components/InteractiveBackground";
import { getCategoryColors } from "@/utils/categoryColors";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "beauty",
      name: "Beauty and Anti-Aging Care",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      description: "Skin brightening and anti-aging support",
      icon: Sparkles
    },
    {
      id: "weight",
      name: "Weight Control and Body Shaping",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      description: "Fat burning and metabolism support",
      icon: Zap
    },
    {
      id: "vision",
      name: "Eye Health and Vision",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      description: "Vision support and eye protection",
      icon: Eye
    },
    {
      id: "heart",
      name: "Heart Health",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      description: "Blood pressure and cardiovascular system support",
      icon: Heart
    },
    {
      id: "detox",
      name: "Detox and Cleansing",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png", 
      description: "Body cleansing and toxin removal",
      icon: Leaf
    }
  ];

  const featuredProducts = [
    {
      id: 22,
      name: "Extera — Capsules for Intestinal Detox and Papilloma Removal",
      price: "฿970",
      originalPrice: "฿1,190",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
      rating: 4.9,
      reviews: 156,
      badge: "🌟 New",
      category: "detox"
    },
    {
      id: 21,
      name: "S-Complex — Capsules for Anti-Aging Care, Skin Brightening and Firmness",
      price: "฿999",
      originalPrice: "฿1,470",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      rating: 4.9,
      reviews: 198,
      badge: "🌟 New",
      category: "beauty"
    },
    {
      id: 20,
      name: "Philola — Capsules for Eye Health and Vision Support",
      price: "฿1,190",
      originalPrice: "฿1,400",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      rating: 4.9,
      reviews: 167,
      badge: "🌟 New",
      category: "vision"
    },
    {
      id: 19,
      name: "Onix — Capsules for Weight Control, Fat Burning and Body Shaping",
      price: "฿890",
      originalPrice: "฿1,575",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      rating: 4.8,
      reviews: 175,
      badge: "🌟 New",
      category: "weight"
    },
    {
      id: 18,
      name: "Oclarizin — Capsules for Eye Health and Vision Support",
      price: "฿930",
      originalPrice: "฿1,330",
      image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
      rating: 4.9,
      reviews: 143,
      badge: "🌟 New",
      category: "vision"
    }
  ];

  return (
    <div className="min-h-screen">
      <InteractiveBackground />
      
      {/* Hero Section with AI Consultant Button */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Natural<br />
              <span className="font-normal text-gray-700">Supplements</span>
            </h1>
            
            {/* AI Consultant Button Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl border border-green-200/50">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Get Personalized Recommendations
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our AI consultant analyzes your health goals and recommends the perfect supplements for your needs. 
                Get expert guidance in finding the right products for your wellness journey.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm text-gray-600">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">💊 Personal Selection</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">🎯 Goal-Based Matching</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">⚡ Instant Recommendations</span>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link to="/ai-consultant" className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Start AI Consultation</span>
                </Link>
              </Button>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/products">Shop Supplements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a category that matches your health needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const colors = getCategoryColors(category.id);
              
              return (
                <Card key={category.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden h-full ${colors.hover}`}>
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center shadow-lg border-2 border-white/50`}>
                        <Icon className={`h-5 w-5 ${colors.icon}`} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white rounded-full h-8 w-8 shadow-lg">
                        <span className="text-sm">→</span>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className={`font-semibold text-gray-900 mb-2 group-hover:${colors.text} transition-colors`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className={`rounded-full ${colors.border} ${colors.text} hover:${colors.bg} hover:${colors.hover} transition-all hover:scale-105`}
                    >
                      <Link to="/products">View</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality products popular among our customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => {
              const colors = getCategoryColors(product.category);
              const discount = product.originalPrice ? 
                Math.round((1 - parseFloat(product.price.replace('฿', '')) / parseFloat(product.originalPrice.replace('฿', ''))) * 100) : 0;
              
              return (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {discount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                          -{discount}%
                        </span>
                      )}
                      <div className={`${colors.bg} ${colors.text} px-2 py-1 rounded-full text-xs font-medium shadow-lg border ${colors.border}`}>
                        {product.category === 'beauty' ? '💄' : 
                         product.category === 'weight' ? '⚡' : 
                         product.category === 'vision' ? '👁️' : 
                         product.category === 'detox' ? '🌿' : '💊'}
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white rounded-full h-8 w-8 shadow-lg">
                        <span className="text-sm">→</span>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">{product.name}</h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1 font-medium">{product.rating}</span>
                        <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm"
                        className={`rounded-full text-xs ${colors.border} ${colors.text} hover:${colors.bg} hover:${colors.hover} transition-all hover:scale-105`}
                      >
                        <Link to={`/product/${product.id}`}>
                          Buy
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full border-gray-300 hover:bg-gray-50 transition-all hover:scale-105">
              <Link to="/products">All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
