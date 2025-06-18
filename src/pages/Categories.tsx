
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Fish, 
  Leaf, 
  Zap, 
  Heart, 
  Brain,
  Shield,
  Sparkles
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "vitamins",
      name: "Vitamins & Minerals",
      description: "Essential vitamins and minerals for your body",
      icon: Pill,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      productCount: 24,
      color: "bg-blue-100 text-blue-800",
      popular: ["Vitamin C", "Vitamin D", "Calcium", "Magnesium"]
    },
    {
      id: "omega",
      name: "Omega & Fish Oil",
      description: "Healthy fats for heart and brain health",
      icon: Fish,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      productCount: 12,
      color: "bg-cyan-100 text-cyan-800",
      popular: ["Omega-3", "Fish Oil", "DHA", "EPA"]
    },
    {
      id: "herbs",
      name: "Natural Herbs",
      description: "Natural herbal extracts",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      productCount: 18,
      color: "bg-green-100 text-green-800",
      popular: ["Turmeric", "Ginkgo", "Gotu Kola", "Korean Ginseng"]
    },
    {
      id: "energy",
      name: "Energy Boost",
      description: "Enhance energy and reduce fatigue",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      productCount: 15,
      color: "bg-yellow-100 text-yellow-800",
      popular: ["Coenzyme Q10", "Rhodiola", "B Vitamins", "Iron"]
    },
    {
      id: "heart",
      name: "Heart Health",
      description: "Support cardiovascular system",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      productCount: 10,
      color: "bg-red-100 text-red-800",
      popular: ["Omega-3", "CoQ10", "Garlic", "Hawthorn"]
    },
    {
      id: "brain",
      name: "Brain Support",
      description: "Enhance memory and focus",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      productCount: 13,
      color: "bg-purple-100 text-purple-800",
      popular: ["Ginkgo", "DHA", "Phosphatidylserine", "Vitamin B12"]
    },
    {
      id: "immunity",
      name: "Immune Support",
      description: "Strengthen immune system",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      productCount: 16,
      color: "bg-orange-100 text-orange-800",
      popular: ["Vitamin C", "Zinc", "Echinacea", "Vitamin D"]
    },
    {
      id: "beauty",
      name: "Beauty & Skin",
      description: "Nourish skin for radiant appearance",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      productCount: 19,
      color: "bg-pink-100 text-pink-800",
      popular: ["Collagen", "Vitamin E", "Biotin", "Hyaluronic Acid"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-nature-50 to-earth-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose products by category that match your needs. 
            High-quality natural dietary supplements
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/products?category=${category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Icon className="h-4 w-4 text-nature-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Badge className={`${category.color} text-xs`}>
                          {category.productCount} products
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-nature-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700">Popular products:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.popular.slice(0, 2).map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                          {category.popular.length > 2 && (
                            <Badge variant="outline" className="text-xs text-gray-500">
                              +{category.popular.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-gray-600">Most purchased product categories by our customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/products?category=${category.id}`}>
                  <Card className="group hover:shadow-lg transition-shadow border-none">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature-200 transition-colors">
                        <Icon className="h-8 w-8 text-nature-600" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-nature-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      <Badge className={`${category.color}`}>
                        {category.productCount} products
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-nature-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure what to choose?</h2>
          <p className="text-nature-100 mb-6 max-w-2xl mx-auto">
            Our expert team is ready to provide consultation to help you choose the right products for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-nature-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View All Products
            </Link>
            <a href="#" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-nature-600 transition-colors">
              Contact Us for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
