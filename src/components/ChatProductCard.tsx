
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/utils/productData";
import { getStatusColor } from "@/utils/categoryColors";

interface ChatProductCardProps {
  product: Product;
  reason?: string;
  onAddToCart?: (productId: number) => void;
  showCombo?: boolean;
}

const ChatProductCard = ({ product, reason, onAddToCart, showCombo = false }: ChatProductCardProps) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  const discount = product.originalPrice ? 
    Math.round((1 - parseFloat(product.price.replace('฿', '')) / parseFloat(product.originalPrice.replace('฿', ''))) * 100) : 0;

  const getStockStatus = () => {
    if (product.inStock === 0) return { status: 'out-of-stock', text: 'Out of Stock', color: 'bg-red-500' };
    if (product.inStock <= 5) return { status: 'low-stock', text: `${product.inStock} left`, color: 'bg-orange-500' };
    return { status: 'in-stock', text: 'In Stock', color: 'bg-green-500' };
  };

  const stockInfo = getStockStatus();

  return (
    <Card className={`border hover:shadow-md transition-all cursor-pointer ${showCombo ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-contain bg-white rounded"
            />
            {product.inStock <= 5 && (
              <div className={`absolute -top-1 -right-1 ${stockInfo.color} text-white text-xs px-1 rounded-full`}>
                {stockInfo.text}
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              {product.name}
            </h4>
            
            {reason && (
              <p className="text-xs text-green-700 bg-green-100 p-1 rounded mb-2">
                💡 {reason}
              </p>
            )}
            
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
              </div>
              {discount > 0 && (
                <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded font-medium">
                  -{discount}% OFF
                </span>
              )}
              {product.badge && (
                <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-1 rounded font-medium">
                  {product.badge}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-green-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                )}
              </div>
              
              <div className="flex space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewProduct}
                  className="h-7 px-2 text-xs hover:bg-gray-50"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Details
                </Button>
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  disabled={product.inStock === 0}
                  className="h-7 px-2 text-xs bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  {product.inStock === 0 ? 'Sold Out' : 'Add'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatProductCard;
