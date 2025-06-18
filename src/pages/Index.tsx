import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Energy Boosters",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      description: "Natural energy enhancement"
    },
    {
      id: 2,
      name: "Immunity Support",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=300&fit=crop",
      description: "Strengthen immune system"
    },
    {
      id: 3,
      name: "Beauty & Wellness",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
      description: "Beauty and wellness support"
    },
    {
      id: 4,
      name: "Joint Health",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop", 
      description: "Joint and bone care"
    }
  ];

  const featuredProducts = [
    {
      id: 7,
      name: "TChrome — Weight Loss & Detox Capsules",
      price: "$35",
      originalPrice: "$42",
      image: "/lovable-uploads/48b88798-0d32-4b8b-a25f-4d87e1a60f83.png",
      rating: 4.9,
      reviews: 256,
      badge: "🌟 New"
    },
    {
      id: 1,
      name: "Natural Vitamin C",
      price: "$19",
      originalPrice: "$23",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      price: "$28",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Natural Probiotics",
      price: "$24",
      originalPrice: "$27",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <Link to="/categories">Best Sellers</Link>
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
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                        {product.badge || "Best Seller"}
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
