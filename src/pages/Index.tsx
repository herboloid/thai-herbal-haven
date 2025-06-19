
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Bot, MessageCircle } from "lucide-react";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Beauty & Anti-Aging",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      description: "Skin brightening & anti-aging support"
    },
    {
      id: 2,
      name: "Weight Control & Body Shaping",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      description: "Fat burning & metabolism support"
    },
    {
      id: 3,
      name: "Eye Health & Vision",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      description: "Vision support & eye protection"
    },
    {
      id: 4,
      name: "Heart Health",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      description: "Blood pressure & cardiovascular support"
    },
    {
      id: 5,
      name: "Detox & Cleanse",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png", 
      description: "Body cleanse & toxin removal"
    }
  ];

  const featuredProducts = [
    {
      id: 22,
      name: "Extera — Intestinal Detox & Skin Tag Removal Support Capsules",
      price: "฿970",
      originalPrice: "฿1,190",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
      rating: 4.9,
      reviews: 156,
      badge: "🌟 New"
    },
    {
      id: 21,
      name: "S-Complex — Anti-Aging, Brightening & Skin Firming Capsules",
      price: "฿999",
      originalPrice: "฿1,470",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      rating: 4.9,
      reviews: 198,
      badge: "🌟 New"
    },
    {
      id: 20,
      name: "Philola — Eye Health & Vision Support Capsules",
      price: "฿1,190",
      originalPrice: "฿1,400",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      rating: 4.9,
      reviews: 167,
      badge: "🌟 New"
    },
    {
      id: 19,
      name: "Onix — Weight Control, Fat Burning & Body Shaping Capsules",
      price: "฿890",
      originalPrice: "฿1,575",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      rating: 4.8,
      reviews: 175,
      badge: "🌟 New"
    },
    {
      id: 18,
      name: "Oclarizin — Eye Health & Vision Support Capsules",
      price: "฿930",
      originalPrice: "฿1,330",
      image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
      rating: 4.9,
      reviews: 143,
      badge: "🌟 New"
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
              Natural Dietary<br />
              <span className="font-normal text-gray-700">Supplements</span>
            </h1>
            
            {/* AI Consultant Button Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full">
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
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">💊 Personalized Selection</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">🎯 Goal-Based Matching</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">⚡ Instant Recommendations</span>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium"
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
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium"
            >
              <Link to="/products">Shop Supplements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full h-8 w-8">
                      <span className="text-sm">→</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="rounded-full bg-gray-800 text-white border-gray-800 hover:bg-gray-700 hover:border-gray-700"
                  >
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full h-8 w-8">
                      <span className="text-sm">→</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="rounded-full bg-gray-800 text-white border-gray-800 hover:bg-gray-700 hover:border-gray-700"
                    >
                      <Link to={`/product/${product.id}`}>
                        {product.badge || "View"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
