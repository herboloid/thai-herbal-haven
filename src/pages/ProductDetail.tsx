
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

  // Mock product data
  const product = {
    id: 1,
    name: "วิตามินซี ธรรมชาติ",
    nameEn: "Natural Vitamin C",
    price: "฿590",
    originalPrice: "฿690",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    badge: "ขายดี",
    inStock: true,
    description: "วิตามินซีธรรมชาติจากผลไม้และผักรวม เสริมสร้างภูมิคุ้มกัน ลดความเสี่ยงจากการเจ็บป่วย และช่วยให้ผิวพรรากระจ่างใส",
    benefits: [
      "เสริมสร้างระบบภูมิคุ้มกัน",
      "ต้านอนุมูลอิสระ",
      "ช่วยให้ผิวพรรากระจ่างใส",
      "ลดความเมื่อยล้า",
      "ดูดซึมง่าย ไม่ระคายกระเพาะ"
    ],
    ingredients: "วิตามินซีจากอะเซโรลาเชอร์รี่ 500mg, วิตามินซีจากส้ม 200mg, ไบโอฟลาโวนอยด์ 50mg",
    dosage: "รับประทานวันละ 1-2 เม็ด หลังอาหาร",
    warnings: "ไม่ควรรับประทานเกินขนาดที่แนะนำ หากมีอาการแพ้ให้หยุดรับประทาน",
    size: "60 เม็ด / กระปุก"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "โอเมก้า 3 จากปลา",
      price: "฿850",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "โปรไบโอติกส์ธรรมชาติ",
      price: "฿720",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "สารสกัดขมิ้น",
      price: "฿450",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=300&fit=crop",
      rating: 4.6
    }
  ];

  const reviews = [
    {
      name: "คุณสมใจ",
      rating: 5,
      date: "15 ธันวาคม 2024",
      comment: "ทานแล้วรู้สึกสดชื่น ไม่ค่อยป่วยเลย แนะนำเลยค่ะ"
    },
    {
      name: "คุณมานี",
      rating: 5,
      date: "10 ธันวาคม 2024", 
      comment: "ผิวดีขึ้นมากเลย กินมา 2 เดือนแล้ว จะซื้อต่อ"
    },
    {
      name: "คุณวิชัย",
      rating: 4,
      date: "5 ธันวาคม 2024",
      comment: "คุณภาพดี ราคาเหมาะสม จัดส่งเร็ว"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-nature-600">หน้าแรก</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-nature-600">สินค้า</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products">
            <ChevronLeft className="h-4 w-4 mr-1" />
            กลับไปดูสินค้า
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
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
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.nameEn}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">{product.rating}</span>
                <span className="ml-1 text-gray-600">({product.reviews} รีวิว)</span>
              </div>
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ มีสินค้า' : '✗ สินค้าหมด'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-nature-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge className="bg-red-100 text-red-800">
                  ประหยัด ฿{parseInt(product.originalPrice.replace('฿', '')) - parseInt(product.price.replace('฿', ''))}
                </Badge>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">ประโยชน์:</h3>
              <ul className="space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">จำนวน:</span>
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
                  เพิ่มลงตะกร้า
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  ถูกใจ
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  แชร์
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">จัดส่งฟรี</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">การันตีคุณภาพ</p>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">รับรองมาตรฐาน</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">รายละเอียดสินค้า</TabsTrigger>
              <TabsTrigger value="ingredients">ส่วนประกอบ</TabsTrigger>
              <TabsTrigger value="reviews">รีวิว ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">คำแนะนำในการรับประทาน:</h3>
                  <p className="text-gray-700">{product.dosage}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ขนาดบรรจุ:</h3>
                  <p className="text-gray-700">{product.size}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">ข้อควรระวัง:</h3>
                  <p className="text-gray-700">{product.warnings}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="p-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">ส่วนประกอบ:</h3>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">สินค้าที่เกี่ยวข้อง</h2>
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
                    <Link to={`/product/${product.id}`}>ดูรายละเอียด</Link>
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
