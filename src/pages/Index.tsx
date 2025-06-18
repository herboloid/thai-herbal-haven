
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, Award, ArrowRight, Heart, Leaf } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "วิตามินซี ธรรมชาติ",
      nameEn: "Natural Vitamin C",
      price: "฿590",
      originalPrice: "฿690",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "ขายดี"
    },
    {
      id: 2,
      name: "โอเมก้า 3 จากปลา",
      nameEn: "Omega-3 Fish Oil",
      price: "฿850",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "แนะนำ"
    },
    {
      id: 3,
      name: "โปรไบโอติกส์ธรรมชาติ",
      nameEn: "Natural Probiotics",
      price: "฿720",
      originalPrice: "฿820",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      badge: "ใหม่"
    },
    {
      id: 4,
      name: "สารสกัดขมิ้น",
      nameEn: "Turmeric Extract",
      price: "฿450",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 203,
      badge: null
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "คุณภาพมาตรฐาน",
      description: "ผลิตภัณฑ์ผ่านการรับรองมาตรฐานสากล FDA และ GMP"
    },
    {
      icon: Leaf,
      title: "ธรรมชาติ 100%",
      description: "วัตถุดิบธรรมชาติล้วน ไม่มีสารเคมีที่เป็นอันตราย"
    },
    {
      icon: Truck,
      title: "จัดส่งรวดเร็ว",
      description: "จัดส่งฟรีทั่วประเทศ ได้รับภายใน 1-2 วันทำการ"
    },
    {
      icon: Award,
      title: "การันตีคุณภาพ",
      description: "รับประกันความพึงพอใจ คืนเงิน 100% หากไม่พอใจ"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nature-50 to-earth-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-nature-100 text-nature-700 hover:bg-nature-200">
                🌿 สุขภาพดี เริ่มต้นที่นี่
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                อาหารเสริมธรรมชาติ
                <span className="text-nature-600 block">คุณภาพพรีเมียม</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                ดูแลสุขภาพด้วยผลิตภัณฑ์ธรรมชาติคุณภาพสูง ที่ได้รับการคัดสรรมาอย่างดีจากธรรมชาติ 
                เพื่อสุขภาพที่ดีกว่าของคุณและครอบครัว
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-nature-600 hover:bg-nature-700">
                  <Link to="/products">
                    เลือกซื้อสินค้า
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">เรียนรู้เพิ่มเติม</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
                alt="Natural Supplements"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-semibold">1,000+ ลูกค้าพึงพอใจ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ทำไมต้องเลือกเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรามุ่งมั่นที่จะนำเสนอผลิตภัณฑ์อาหารเสริมธรรมชาติคุณภาพสูงที่สุดเพื่อสุขภาพของคุณ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-nature-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">สินค้าแนะนำ</h2>
            <p className="text-gray-600">ผลิตภัณฑ์ยอดนิยมที่ลูกค้าเลือกซื้อมากที่สุด</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow border-none overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-nature-600 text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.nameEn}</p>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-nature-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/product/${product.id}`}>ดูรายละเอียด</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">ดูสินค้าทั้งหมด</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nature-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">เริ่มต้นการดูแลสุขภาพที่ดีกว่า</h2>
          <p className="text-nature-100 mb-8 max-w-2xl mx-auto">
            สมัครสมาชิกเพื่อรับข้อมูลข่าวสารและโปรโมชั่นพิเศษจากเรา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-nature-600 hover:bg-gray-100">
              สมัครเลย
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
