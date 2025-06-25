
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, products } from "@/utils/productData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ArrowRight, Package2 } from "lucide-react";

const Categories = () => {
  const { t } = useLanguage();

  const getPopularProductsForCategory = (categoryId: string) => {
    return products
      .filter(product => product.category === categoryId)
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nature-100 to-earth-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-lg">
                <Package2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('categories.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('categories.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const popularProducts = getPopularProductsForCategory(category.id);
              
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {t('categories.popular_products')}
                      </h4>
                      <div className="space-y-3">
                        {popularProducts.map((product) => (
                          <div key={product.id} className="flex items-center space-x-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-gray-900 truncate">
                                {product.name}
                              </p>
                              <div className="flex items-center space-x-2">
                                <span className="text-nature-600 font-semibold text-sm">
                                  ฿{product.price.toLocaleString()}
                                </span>
                                {product.badge && (
                                  <Badge variant="secondary" className="text-xs">
                                    {product.badge}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-nature-600 hover:bg-nature-700 text-white">
                      <Link to={`/products?category=${category.id}`} className="flex items-center justify-center">
                        {t('categories.view_all')}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
