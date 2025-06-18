
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ShieldCheck, Truck, Sprout } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 to-lavender-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-olive-600 bg-clip-text text-transparent">
              Premium Natural Supplements
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the power of nature with our carefully selected collection of high-quality supplements from Thailand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 text-lg"
                asChild
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-terracotta-500 text-terracotta-600 hover:bg-terracotta-50 px-8 py-3 text-lg"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular natural supplements, trusted by thousands of customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-peach-200">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-peach-50 p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain hover-scale"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-olive-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-terracotta-600">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-terracotta-500 hover:bg-terracotta-600"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-peach-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Siam Healthy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the highest quality natural supplements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-terracotta-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-olive-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-terracotta-600 to-olive-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-terracotta-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their health with our premium supplements
          </p>
          <Button 
            size="lg" 
            className="bg-white text-terracotta-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link to="/products">Explore All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const featuredProducts = [
  {
    id: 1,
    name: "Moringa Oleifera",
    description: "Boost your energy levels and overall health with our pure Moringa leaf powder.",
    image: "https://images.unsplash.com/photo-1627530852263-7a7d84270499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vcmluZ2ElMjBwb3dkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 29.99,
  },
  {
    id: 2,
    name: "Turmeric Curcumin",
    description: "Support healthy joints and reduce inflammation with our high-potency Turmeric capsules.",
    image: "https://images.unsplash.com/photo-1617987326544-431f39550413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVybWVyaWMlMjBjdXJjdW1pbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 34.50,
  },
  {
    id: 3,
    name: "Coconut Oil",
    description: "Experience the numerous health benefits of our organic, cold-pressed Coconut Oil.",
    image: "https://images.unsplash.com/photo-1563453392955-494759771692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29jb251dCUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D&auto=format%2Ccompress&w=800&q=60",
    price: 19.99,
  },
];

const features = [
  {
    title: "Premium Quality",
    description: "Sourced directly from local farms in Thailand, ensuring the highest purity and potency.",
    icon: Leaf,
  },
  {
    title: "Sustainable Practices",
    description: "We're committed to eco-friendly farming and ethical sourcing to protect our planet.",
    icon: Sprout,
  },
  {
    title: "Secure Checkout",
    description: "Your payments are 100% secure with our encrypted payment gateway.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Shipping",
    description: "Get your supplements delivered quickly and reliably to your doorstep.",
    icon: Truck,
  },
];

export default Index;
