
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Fish, 
  Leaf, 
  Zap, 
  Heart, 
  Brain,
  Shield,
  Sparkles
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "vitamins",
      name: "วิตามินและแร่ธาตุ",
      nameEn: "Vitamins & Minerals",
      description: "วิตามินและแร่ธาตุที่จำเป็นต่อร่างกาย",
      icon: Pill,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      productCount: 24,
      color: "bg-blue-100 text-blue-800",
      popular: ["วิตามินซี", "วิตามินดี", "แคลเซียม", "แมกนีเซียม"]
    },
    {
      id: "omega",
      name: "โอเมก้าและน้ำมันปลา",
      nameEn: "Omega & Fish Oil", 
      description: "กรดไขมันที่ดีต่อหัวใจและสมอง",
      icon: Fish,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      productCount: 12,
      color: "bg-cyan-100 text-cyan-800",
      popular: ["โอเมก้า 3", "น้ำมันปลา", "DHA", "EPA"]
    },
    {
      id: "herbs",
      name: "สมุนไพรธรรมชาติ",
      nameEn: "Natural Herbs",
      description: "สารสกัดจากสมุนไพรธรรมชาติ",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      productCount: 18,
      color: "bg-green-100 text-green-800",
      popular: ["ขมิ้น", "กิงโก", "ใบบัวบก", "โสมเกาหลี"]
    },
    {
      id: "energy",
      name: "เพิ่มพลังงาน",
      nameEn: "Energy Boost",
      description: "เสริมพลังงานและลดความเมื่อยล้า",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      productCount: 15,
      color: "bg-yellow-100 text-yellow-800",
      popular: ["โคเอนไซม์ Q10", "โรดิโอลา", "วิตามินบี", "เหล็ก"]
    },
    {
      id: "heart",
      name: "สุขภาพหัวใจ",
      nameEn: "Heart Health",
      description: "ดูแลระบบหัวใจและหลอดเลือด",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      productCount: 10,
      color: "bg-red-100 text-red-800",
      popular: ["โอเมก้า 3", "โค Q10", "กระเทียม", "ฮอว์ธอร์น"]
    },
    {
      id: "brain",
      name: "บำรุงสมอง",
      nameEn: "Brain Support",
      description: "เสริมสร้างความจำและสมาธิ",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      productCount: 13,
      color: "bg-purple-100 text-purple-800",
      popular: ["กิงโก", "DHA", "ฟอสฟาติดิลเซรีน", "วิตามินบี12"]
    },
    {
      id: "immunity",
      name: "เสริมภูมิคุ้มกัน",
      nameEn: "Immune Support",
      description: "เพิ่มความแข็งแรงของระบบภูมิคุ้มกัน",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      productCount: 16,
      color: "bg-orange-100 text-orange-800",
      popular: ["วิตามินซี", "สังกะสี", "เอชินาเซีย", "วิตามินดี"]
    },
    {
      id: "beauty",
      name: "ความงามและผิวพรรณ",
      nameEn: "Beauty & Skin",
      description: "บำรุงผิวพรรณให้เปล่งปลั่ง",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      productCount: 19,
      color: "bg-pink-100 text-pink-800",
      popular: ["คอลลาเจน", "วิตามินอี", "ไบโอติน", "ฮีโรนิค แอซิด"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-nature-50 to-earth-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">หมวดหมู่สินค้า</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เลือกสินค้าตามหมวดหมู่ที่ตรงกับความต้องการของคุณ 
            ผลิตภัณฑ์อาหารเสริมธรรมชาติคุณภาพสูง
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/products?category=${category.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Icon className="h-4 w-4 text-nature-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <Badge className={`${category.color} text-xs`}>
                          {category.productCount} สินค้า
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-nature-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{category.nameEn}</p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700">สินค้ายอดนิยม:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.popular.slice(0, 2).map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                          {category.popular.length > 2 && (
                            <Badge variant="outline" className="text-xs text-gray-500">
                              +{category.popular.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">หมวดหมู่ยอดนิยม</h2>
            <p className="text-gray-600">หมวดหมู่สินค้าที่ลูกค้าเลือกซื้อมากที่สุด</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/products?category=${category.id}`}>
                  <Card className="group hover:shadow-lg transition-shadow border-none">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature-200 transition-colors">
                        <Icon className="h-8 w-8 text-nature-600" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-nature-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      <Badge className={`${category.color}`}>
                        {category.productCount} สินค้า
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-nature-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">ไม่แน่ใจว่าควรเลือกอะไร?</h2>
          <p className="text-nature-100 mb-6 max-w-2xl mx-auto">
            ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาเพื่อช่วยเลือกผลิตภัณฑ์ที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-nature-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              ดูสินค้าทั้งหมด
            </Link>
            <a href="#" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-nature-600 transition-colors">
              ติดต่อเราเพื่อปรึกษา
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
