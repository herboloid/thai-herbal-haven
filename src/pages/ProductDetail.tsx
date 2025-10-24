import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Award,
  ChevronLeft,
  Plus,
  Minus,
  Pill,
  FileText,
  Info
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { RecommendedProducts } from "@/components/products/RecommendedProducts";
import { useProduct, useProducts } from "@/hooks/useProducts";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { getProductName } from "@/utils/productHelpers";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  
  const { data: product, isLoading: productLoading } = useProduct(Number(id));
  const { data: allProducts = [], isLoading: productsLoading } = useProducts();

  if (productLoading || productsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const productName = getProductName(product.id, t);
    addItem({
      id: product.id,
      name: productName,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 hover:bg-white/50"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={getProductName(product.id, t)}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.badge && (
                <Badge className="mb-2">{product.badge}</Badge>
              )}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {getProductName(product.id, t)}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {i18n.language === 'th' && product.detailedDescriptionTh 
                    ? product.detailedDescriptionTh 
                    : product.detailedDescriptionEn || product.description}
                </p>
              </div>

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">{t('productDetail.keyBenefits')}</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Active Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <Card className="mb-6 bg-blue-50/50 border-blue-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Pill className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{t('productDetail.activeIngredients')}</h3>
                    </div>
                    <ul className="space-y-2">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-gray-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Directions for Use */}
              {(product.directionsEn || product.directionsTh) && (
                <Card className="mb-6 bg-purple-50/50 border-purple-100">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{t('productDetail.directionsForUse')}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {i18n.language === 'th' && product.directionsTh 
                        ? product.directionsTh 
                        : product.directionsEn}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Product Details */}
              {(product.quantity || product.fdaNumber || product.weight || product.packageSize || product.shelfLife) && (
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{t('productDetail.productDetails')}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {product.quantity && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{t('productDetail.quantity')}</span>
                          <span className="font-medium">{product.quantity} {t('productDetail.capsules')}</span>
                        </div>
                      )}
                      {product.fdaNumber && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{t('productDetail.fdaNumber')}</span>
                          <span className="font-medium">{product.fdaNumber}</span>
                        </div>
                      )}
                      {product.weight && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{t('productDetail.weight')}</span>
                          <span className="font-medium">{product.weight}</span>
                        </div>
                      )}
                      {product.packageSize && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{t('productDetail.packageSize')}</span>
                          <span className="font-medium">{product.packageSize}</span>
                        </div>
                      )}
                      {product.shelfLife && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">{t('productDetail.shelfLife')}</span>
                          <span className="font-medium">{product.shelfLife}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock > 0 ? (
                  <span className="text-green-600 font-medium">
                    ✓ In Stock ({product.inStock} available)
                  </span>
                ) : (
                  <span className="text-red-600 font-medium">
                    ✗ Out of Stock
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                    disabled={quantity >= product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={product.inStock === 0}
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                {product.lineUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(product.lineUrl, '_blank')}
                    className="flex-1"
                  >
                    Order via LINE
                  </Button>
                )}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </Card>
                <Card className="p-4 text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Secure Payment</p>
                </Card>
                <Card className="p-4 text-center">
                  <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Quality Guarantee</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <RecommendedProducts 
              currentProductId={product.id}
              currentCategory={product.category}
              allProducts={allProducts}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
