
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Minus
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product data based on ID
  const getProductData = (productId: string) => {
    if (productId === "7") {
      return {
        id: 7,
        name: "TChrome — Weight Loss & Detox Capsules",
        price: "$35",
        originalPrice: "$42",
        images: [
          "/lovable-uploads/48b88798-0d32-4b8b-a25f-4d87e1a60f83.png",
          "/lovable-uploads/aacbb27e-cd19-495a-865d-a1dbbe6d2e3b.png",
          "/lovable-uploads/35bcbd8d-63a2-4bc6-949f-fbb3ee34a09c.png"
        ],
        rating: 4.9,
        reviews: 256,
        badge: "🌟 New",
        inStock: true,
        description: "TChrome is an innovative dietary supplement for weight management. It helps burn fat, detoxify the body, restore healthy digestion, and reduce appetite. Effectively blocks the accumulation of new fat and supports a lean physique.",
        benefits: [
          "Boosts fat burning",
          "Blocks fat absorption", 
          "Improves bowel movement",
          "Controls appetite",
          "Stimulates metabolism"
        ],
        ingredients: "Garcinia Cambogia Extract, Green Tea Extract, Calcium Pyruvate, White Kidney Bean Extract, Chitosan, Kelp Extract, Black Pepper Powder, Ginger Extract, Chromium Picolinate",
        dosage: "Take 2 capsules daily: 1 capsule with breakfast, 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "60 capsules per bottle",
        registration: "FDA Thailand Registration No.: 11-106353-1-0137",
        idealFor: [
          "Individuals with excess weight",
          "People with poor digestion or constipation", 
          "Those with slow metabolism",
          "Anyone looking to lose 5 kg or more"
        ]
      };
    }
    
    // Default product data for other IDs
    return {
      id: 1,
      name: "Natural Vitamin C",
      price: "$19",
      originalPrice: "$23",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      inStock: true,
      description: "Natural Vitamin C from mixed fruits and vegetables. Strengthens immune system, reduces risk of illness, and helps maintain radiant skin",
      benefits: [
        "Strengthens immune system",
        "Antioxidant protection",
        "Supports radiant skin",
        "Reduces fatigue",
        "Easy absorption, gentle on stomach"
      ],
      ingredients: "Vitamin C from Acerola Cherry 500mg, Vitamin C from Orange 200mg, Bioflavonoids 50mg",
      dosage: "Take 1-2 capsules daily after meals",
      warnings: "Do not exceed recommended dosage. If allergic reactions occur, discontinue use",
      size: "60 capsules per bottle"
    };
  };

  const product = getProductData(id || "1");

  const relatedProducts = [
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      price: "$28",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Natural Probiotics", 
      price: "$24",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Turmeric Extract",
      price: "$15",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=300&fit=crop",
      rating: 4.6
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "December 15, 2024",
      comment: id === "7" ? "Amazing results! Lost 8 kg in 2 months with TChrome. My digestion improved significantly and I feel more energetic." : "Feel refreshed after taking this. Rarely get sick now. Highly recommend!"
    },
    {
      name: "Mike Chen", 
      rating: 5,
      date: "December 10, 2024",
      comment: id === "7" ? "TChrome really works! My appetite is much better controlled and I'm losing weight steadily. Great product!" : "My skin looks much better. Been taking for 2 months, will continue buying."
    },
    {
      name: "Lisa Wilson",
      rating: 4,
      date: "December 5, 2024", 
      comment: id === "7" ? "Good quality supplement. Noticed changes in my metabolism after 3 weeks. Will continue using." : "Good quality product, reasonable price, fast delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-nature-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-nature-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={`w-full h-96 rounded-lg ${
                  id === "7" ? 'object-contain bg-white p-4' : 'object-cover'
                }`}
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-nature-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-nature-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt="" 
                    className={`w-full h-full ${
                      id === "7" ? 'object-contain bg-white p-1' : 'object-cover'
                    }`} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">{product.rating}</span>
                <span className="ml-1 text-gray-600">({product.reviews} reviews)</span>
              </div>
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-nature-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge className="bg-red-100 text-red-800">
                  Save ${parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))}
                </Badge>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Benefits:</h3>
              <ul className="space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {product.idealFor && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Ideal For:</h3>
                <ul className="space-y-1">
                  {product.idealFor.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-nature-600 hover:bg-nature-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Quality Guarantee</p>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Certified Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dosage Instructions:</h3>
                  <p className="text-gray-700">{product.dosage}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Package Size:</h3>
                  <p className="text-gray-700">{product.size}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warnings:</h3>
                  <p className="text-gray-700">{product.warnings}</p>
                </div>
                {product.registration && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Registration:</h3>
                    <p className="text-gray-700">{product.registration}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="p-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Active Ingredients:</h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-nature-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-3" variant="outline">
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
