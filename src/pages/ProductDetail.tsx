
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, ArrowLeft, Plus, Minus } from "lucide-react";
import { products } from "@/utils/productData";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('common.loading')}</h1>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      }
    });
    toast.success(`${product.name} ${t('chat.product_added')}`);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productImages = [product.image, product.image, product.image]; // Simulate multiple images

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t('common.back')}</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-nature-600 text-white">
                    {product.badge}
                  </Badge>
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">
                    -{product.discount}%
                  </Badge>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-nature-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
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
                <span className="text-gray-600 ml-2">
                  ({product.reviewCount} {t('product.reviews')})
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-nature-600">
                  ฿{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ฿{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900">{t('product.quantity')}:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-nature-600 hover:bg-nature-700 text-white py-3 text-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t('product.add_to_cart')}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-nature-600" />
                <span className="text-sm text-gray-600">{t('product.free_shipping')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-nature-600" />
                <span className="text-sm text-gray-600">{t('product.satisfaction_guarantee')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-nature-600" />
                <span className="text-sm text-gray-600">{t('product.secure_payment')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">{t('product.overview')}</TabsTrigger>
                <TabsTrigger value="benefits">{t('product.benefits')}</TabsTrigger>
                <TabsTrigger value="ingredients">{t('product.ingredients')}</TabsTrigger>
                <TabsTrigger value="usage">{t('product.usage')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                  <h3 className="text-lg font-semibold mt-4 mb-2">{t('product.specifications')}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Premium natural ingredients</li>
                    <li>GMP certified manufacturing</li>
                    <li>Third-party tested for purity</li>
                    <li>Suitable for adults 18+ years</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">{t('product.benefits')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Supports overall health and wellness</li>
                    <li>Boosts natural energy levels</li>
                    <li>Enhances immune system function</li>
                    <li>Promotes healthy metabolism</li>
                    <li>Supports stress management</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">{t('product.ingredients')}</h3>
                  <p className="text-gray-700 mb-4">
                    All ingredients are naturally sourced and carefully selected for maximum potency and effectiveness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Active Ingredients</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Natural Extract A - 500mg</li>
                        <li>Herbal Extract B - 300mg</li>
                        <li>Vitamin Complex - 200mg</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Other Ingredients</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Vegetable Capsule</li>
                        <li>Rice Flour</li>
                        <li>Magnesium Stearate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="usage" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">{t('product.usage')}</h3>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Recommended Dosage</h4>
                    <p className="text-blue-800">
                      Take 2 capsules daily with meals, or as directed by your healthcare professional.
                    </p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Best Time to Take:</strong> With breakfast and dinner</p>
                    <p><strong>Duration:</strong> For best results, use consistently for 3-6 months</p>
                    <p><strong>Storage:</strong> Store in a cool, dry place away from direct sunlight</p>
                    <p><strong>Warning:</strong> Consult with your doctor before use if pregnant, nursing, or taking medications</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('product.related_products')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {relatedProduct.badge && (
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-nature-600 text-white text-xs">
                          {relatedProduct.badge}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating || 0)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        ({relatedProduct.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-nature-600">
                        ฿{relatedProduct.price.toLocaleString()}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/product/${relatedProduct.id}`}>
                          {t('common.view')}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
