
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Package, Truck, Shield, CheckCircle } from "lucide-react";
import { products, getComboRecommendations, type Product } from "@/utils/productData";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import ChatProductCard from "@/components/ChatProductCard";

const ProductDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: selectedQuantity
    });
    toast.success(`${product.name} ${t('chat.product_added')}`);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted 
        ? t('product_detail.removed_from_wishlist')
        : t('product_detail.added_to_wishlist')
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(t('product_detail.link_copied'));
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('product_detail.product_not_found')}</h2>
          <p className="text-gray-600 mb-6">{t('product_detail.product_not_found_desc')}</p>
          <Button asChild>
            <Link to="/products">{t('product_detail.back_to_products')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const comboProducts = getComboRecommendations(product.id);
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-nature-600 hover:text-nature-700">{t('common.home')}</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-nature-600 hover:text-nature-700">{t('common.products')}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          asChild
          className="mb-6 text-nature-600 hover:text-nature-700"
        >
          <Link to="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('product_detail.back_to_products')}
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-nature-600 text-white">
                    {t(`product_detail.badge.${product.badge.toLowerCase()}`) || product.badge}
                  </Badge>
                </div>
              )}
              {discountPercentage > 0 && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="text-sm">
                    -{discountPercentage}%
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              
              {product.rating && (
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviewCount} {t('product_detail.reviews')})
                  </span>
                </div>
              )}

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-nature-600">
                ฿{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ฿{product.originalPrice.toLocaleString()}
                </span>
              )}
              {discountPercentage > 0 && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {t('product_detail.save')} {discountPercentage}%
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-600 font-medium">
                {product.inStock > 0 
                  ? `${t('product_detail.in_stock')} (${product.inStock} ${t('product_detail.items_left')})`
                  : t('product_detail.out_of_stock')
                }
              </span>
            </div>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{t('product_detail.key_benefits')}</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-nature-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Actions */}
            <Card className="p-6 bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-gray-900">{t('product_detail.quantity')}</label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold">{selectedQuantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={toggleWishlist}
                    variant="outline"
                    className="w-full"
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                    {t('product_detail.wishlist')}
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="w-full"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    {t('product_detail.share')}
                  </Button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={product.inStock === 0}
                  className="w-full bg-nature-600 hover:bg-nature-700 text-white py-3 text-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t('product_detail.add_to_cart')}
                </Button>
              </div>
            </Card>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Truck className="h-6 w-6 text-nature-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{t('product_detail.free_shipping')}</h4>
                  <p className="text-sm text-gray-600">{t('product_detail.free_shipping_desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-nature-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{t('product_detail.secure_payment')}</h4>
                  <p className="text-sm text-gray-600">{t('product_detail.secure_payment_desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Package className="h-6 w-6 text-nature-600" />
                <div>
                  <h4 className="font-medium text-gray-900">{t('product_detail.quality_guarantee')}</h4>
                  <p className="text-sm text-gray-600">{t('product_detail.quality_guarantee_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combo Recommendations */}
        {comboProducts.length > 0 && (
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('product_detail.perfect_combo')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('product_detail.combo_description')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comboProducts.map((comboProduct) => (
                <ChatProductCard
                  key={comboProduct.id}
                  product={{
                    id: comboProduct.id,
                    name: comboProduct.name,
                    price: comboProduct.price,
                    originalPrice: comboProduct.originalPrice,
                    image: comboProduct.image,
                    rating: comboProduct.rating,
                    reviewCount: comboProduct.reviewCount,
                    badge: comboProduct.badge,
                    description: comboProduct.description,
                    inStock: comboProduct.inStock > 0
                  }}
                  onViewProduct={(productId) => window.location.href = `/product/${productId}`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
