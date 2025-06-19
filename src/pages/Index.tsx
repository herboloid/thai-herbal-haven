
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Heart Health",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      description: "Blood pressure & cardiovascular support"
    },
    {
      id: 2,
      name: "Joint & Bone Health",
      image: "/lovable-uploads/2836d04a-02d7-488b-9476-c6b3965d2063.png",
      description: "Strengthen joints and bones"
    },
    {
      id: 3,
      name: "Men's Health",
      image: "/lovable-uploads/30a54550-b6ae-4591-b827-2d061f202b88.png",
      description: "Prostate & performance support"
    },
    {
      id: 4,
      name: "Detox & Cleanse",
      image: "/lovable-uploads/5b11406a-c72a-4900-af98-f63e310c5f46.png", 
      description: "Body cleanse & toxin removal"
    }
  ];

  const featuredProducts = [
    {
      id: 17,
      name: "Helmina — Intestinal Detox, Toxin Cleanse & Skin Tag Removal Support",
      price: "$28",
      originalPrice: "$33",
      image: "/lovable-uploads/5b11406a-c72a-4900-af98-f63e310c5f46.png",
      rating: 4.9,
      reviews: 187,
      badge: "🌟 New"
    },
    {
      id: 16,
      name: "Geralox — Hemorrhoid Relief & Digestive Health Support",
      price: "$26",
      originalPrice: "$31",
      image: "/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png",
      rating: 4.8,
      reviews: 156,
      badge: "🌟 New"
    },
    {
      id: 8,
      name: "Diacard — Blood Pressure & Blood Sugar Support",
      price: "$42",
      originalPrice: "$48",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      rating: 4.9,
      reviews: 189,
      badge: "🔥 Hot"
    },
    {
      id: 7,
      name: "TChrome — Weight Loss & Detox Capsules",
      price: "$35",
      originalPrice: "$42",
      image: "/lovable-uploads/35bcbd8d-63a2-4bc6-949f-fbb3ee34a09c.png",
      rating: 4.9,
      reviews: 256,
      badge: "🌟 New"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Natural Dietary<br />
              <span className="font-normal text-gray-700">Supplements</span>
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for supplements"
                  className="w-full h-14 pl-6 pr-16 text-lg rounded-full border-0 shadow-lg bg-white/90 backdrop-blur-sm"
                />
                <Button 
                  size="icon"
                  className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
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
