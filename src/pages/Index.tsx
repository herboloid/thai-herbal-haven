import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, Heart, Eye, Zap, Leaf, Calendar, Clock, ArrowRight, Scale, Activity, Shield, Users, Ear, Bone } from "lucide-react";
import InteractiveBackground from "@/components/InteractiveBackground";
import { getCategoryColors } from "@/utils/categoryColors";
import { getLatestPosts } from "@/utils/blogData";
import { CATEGORIES } from "@/config/categories";
import { useProducts } from "@/hooks/useProducts";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const latestPosts = getLatestPosts(5);
  const { data: allProducts = [] } = useProducts();

  // Use CATEGORIES from config but map to include translations and product counts
  // This ensures consistency across the application
  const categories = CATEGORIES
    .filter(cat => cat.value !== "all") // Exclude "all" from homepage display
    .map(cat => {
      // Count products in this category
      const productCount = allProducts.filter(product => product.category === cat.value).length;
      
      return {
        id: cat.value,
        name: t(cat.labelKey),
        description: t('categories.beautyDesc'), // TODO: Add description keys to translation files
        icon: cat.icon,
        productCount
      };
    });

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
      category: "detox-health"
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
      category: "beauty-supplement"
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
      category: "eye-health"
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
      category: "weight-loss"
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
      category: "eye-health"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <InteractiveBackground />
      
      {/* Hero Section with natural supplements background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/b3f5e681-c31e-4f83-bfc0-c5a19353e221.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/c1722a12-adf6-4917-b555-5bb7eb9d8656.png" 
                alt="iHealth" 
                className="w-60 h-60 object-contain"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="font-bold text-white drop-shadow-lg">iHealth</span><br />
              {t('hero.subtitle')}
            </h1>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-white/90 hover:bg-white text-gray-900 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/products">{t('hero.shopButton')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Grid */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('categories.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('categories.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const colors = getCategoryColors(category.id);
              
              return (
                <Link 
                  key={category.id} 
                  to={`/products?category=${category.id}`}
                  className="block group"
                >
                  <Card className={`h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50/50 ${colors.hover} cursor-pointer relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white h-48 flex items-center justify-center">
                        <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center shadow-lg border-2 border-white/80 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-10 w-10 ${colors.icon}`} />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Top badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className={`${colors.bg} ${colors.text} shadow-lg border border-white/20`}>
                            {category.productCount} products
                          </Badge>
                        </div>
                        
                        {/* Bottom arrow - appears on hover */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center shadow-lg border border-white/20`}>
                            <ArrowRight className={`h-5 w-5 ${colors.icon}`} />
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 relative">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className={`font-bold text-lg text-gray-900 group-hover:${colors.text} transition-colors duration-300 leading-tight`}>
                            {category.name}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {category.description}
                        </p>
                        
                        {/* Call to action */}
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${colors.text} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            Explore products
                          </span>
                          <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-gray-500">View all</span>
                            <ArrowRight className="h-3 w-3 text-gray-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                        
                        {/* Subtle gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-${colors.bg.split('-')[1]}-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products with updated styling */}
      <section className="py-16 bg-nature-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('products.featured')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('products.featuredDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => {
              const colors = getCategoryColors(product.category);
              const discount = product.originalPrice ? 
                Math.round((1 - parseFloat(product.price.replace('฿', '')) / parseFloat(product.originalPrice.replace('฿', ''))) * 100) : 0;
              
              return (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-sm overflow-hidden bg-white cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-contain bg-white p-3 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 flex flex-col gap-1">
                        {discount > 0 && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                            -{discount}%
                          </span>
                        )}
                        <div className="bg-nature-100 text-nature-700 px-2 py-1 rounded-full text-xs font-medium shadow-lg border border-nature-200">
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
                          variant="outline" 
                          size="sm"
                          className="rounded-full text-xs border-nature-300 text-nature-700 hover:bg-nature-100 hover:text-nature-800 transition-all hover:scale-105"
                          onClick={(e) => e.preventDefault()}
                        >
                          Buy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full border-nature-300 hover:bg-nature-50 transition-all hover:scale-105">
              <Link to="/products">{t('products.allProducts')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('blog.latestInsights')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('blog.insightsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {latestPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-sm overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-nature-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white rounded-full h-8 w-8 shadow-lg">
                      <span className="text-sm">→</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">{post.title}</h3>
                  
                  <div className="flex items-center mb-3 text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime} {t('blog.minRead')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600 font-medium">{post.author.name}</span>
                    </div>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="rounded-full text-xs border-nature-300 text-nature-700 hover:bg-nature-100 hover:text-nature-800 transition-all hover:scale-105"
                    >
                      <Link to={`/blog/${post.slug}`}>
                        {t('blog.read')}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="rounded-full border-nature-300 hover:bg-nature-50 transition-all hover:scale-105">
              <Link to="/blog">{t('blog.viewAllPosts')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
