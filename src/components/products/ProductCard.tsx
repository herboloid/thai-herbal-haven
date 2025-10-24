import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getProductName } from "@/utils/productHelpers";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  onAddToCart: () => void;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge, 
  onAddToCart 
}: ProductCardProps) => {
  const { t } = useTranslation();
  const translatedName = getProductName(id, t);
  
  return (
    <Link 
      to={`/product/${id}`} 
      className="block"
      onClick={() => {
        // Google Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'product_click', {
            product_id: id,
            product_name: translatedName,
            product_category: 'supplement'
          });
        }
      }}
    >
      <Card className="group hover:shadow-lg transition-shadow border-none overflow-hidden bg-white/95 backdrop-blur-sm cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={`${translatedName} - Natural dietary supplement for better health`}
            className="w-full h-48 object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 bg-nature-600 text-white" aria-label={badge}>
              {badge}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{translatedName}</h3>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
              <span className="text-sm text-gray-400 ml-1">({reviews} reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-nature-600 text-lg">{price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">{originalPrice}</span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button 
              className="w-full bg-nature-600 hover:bg-nature-700"
              onClick={(e) => e.preventDefault()}
              aria-label={`View details for ${translatedName}`}
            >
              View Details
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart();
                // Google Analytics tracking
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'add_to_cart', {
                    product_id: id,
                    product_name: translatedName
                  });
                }
              }}
              aria-label={`Add ${translatedName} to cart`}
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
