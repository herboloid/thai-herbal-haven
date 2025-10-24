import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductName } from "@/utils/productHelpers";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface RecommendedProductsProps {
  currentProductId: number;
  currentCategory: string;
  allProducts: Product[];
}

export const RecommendedProducts = ({ 
  currentProductId, 
  currentCategory, 
  allProducts 
}: RecommendedProductsProps) => {
  const { t } = useTranslation();
  
  // Filter products from the same category, excluding current product
  const recommendedProducts = allProducts
    .filter(p => p.category === currentCategory && p.id !== currentProductId)
    .slice(0, 4);

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-nature-50" aria-labelledby="recommended-heading">
      <div className="container mx-auto px-4">
        <h2 id="recommended-heading" className="text-2xl font-bold text-gray-900 mb-6">
          You May Also Like
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              onClick={() => {
                const productName = getProductName(product.id, t);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Google Analytics tracking
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'recommendation_click', {
                    product_id: product.id,
                    product_name: productName,
                    source_product_id: currentProductId
                  });
                }
              }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-sm overflow-hidden bg-white cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${getProductName(product.id, t)} - Recommended supplement`}
                    className="w-full h-48 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm">
                    {getProductName(product.id, t)}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-nature-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-nature-600 hover:bg-nature-700"
                      aria-label={`View ${getProductName(product.id, t)}`}
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
