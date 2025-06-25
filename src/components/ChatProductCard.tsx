
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  description: string;
  inStock?: boolean;
}

interface ChatProductCardProps {
  product: Product;
  onViewProduct?: (productId: string) => void;
}

const ChatProductCard = ({ product, onViewProduct }: ChatProductCardProps) => {
  const { t } = useLanguage();
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error(t('chat.out_of_stock'));
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
    toast.success(`${product.name} ${t('chat.product_added')}`);
  };

  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct(product.id);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-200 bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.badge && (
            <Badge variant="secondary" className="bg-nature-600 text-white text-xs">
              {product.badge === 'New' ? t('chat.new_product') : 
               product.badge === 'Bestseller' ? t('chat.bestseller') :
               product.badge === 'Popular' ? t('chat.popular') :
               product.badge === 'Recommended' ? t('chat.recommended') :
               product.badge}
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercentage}%
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          {product.inStock === false ? (
            <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
              {t('chat.out_of_stock')}
            </Badge>
          ) : product.inStock === true ? (
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
              {t('chat.in_stock')}
            </Badge>
          ) : null}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {(product.rating || product.reviewCount) && (
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating || 0)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            {product.reviewCount && (
              <span className="text-sm text-gray-500 ml-2">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-nature-600">
              ฿{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ฿{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
              {t('chat.discount')} {discountPercentage}%
            </Badge>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button
            onClick={handleViewProduct}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-1" />
            {t('chat.view_product')}
          </Button>
          <Button
            onClick={handleAddToCart}
            disabled={product.inStock === false}
            size="sm"
            className="flex-1 bg-nature-600 hover:bg-nature-700 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {t('chat.add_to_cart')}
          </Button>
        </div>
        
        {product.originalPrice && (
          <div className="mt-2 text-center">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
              {t('chat.free_shipping')}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatProductCard;
