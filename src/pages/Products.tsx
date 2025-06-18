
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "วิตามินซี ธรรมชาติ",
      nameEn: "Natural Vitamin C",
      price: "฿590",
      originalPrice: "฿690",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "ขายดี",
      category: "vitamins"
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
      badge: "แนะนำ",
      category: "omega"
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
      badge: "ใหม่",
      category: "probiotics"
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
      badge: null,
      category: "herbs"
    },
    {
      id: 5,
      name: "วิตามินดี3 + K2",
      nameEn: "Vitamin D3 + K2",
      price: "฿680",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 92,
      badge: null,
      category: "vitamins"
    },
    {
      id: 6,
      name: "แมกนีเซียม ธรรมชาติ",
      nameEn: "Natural Magnesium",
      price: "฿520",
      originalPrice: "฿580",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 167,
      badge: "ลดราคา",
      category: "minerals"
    }
  ];

  const categories = [
    { value: "all", label: "หมวดหมู่ทั้งหมด" },
    { value: "vitamins", label: "วิตามิน" },
    { value: "omega", label: "โอเมก้า" },
    { value: "probiotics", label: "โปรไบโอติกส์" },
    { value: "herbs", label: "สมุนไพร" },
    { value: "minerals", label: "แร่ธาตุ" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">สินค้าทั้งหมด</h1>
          <p className="text-gray-600">อาหารเสริมธรรมชาติคุณภาพสูง เพื่อสุขภาพที่ดีกว่า</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="ค้นหาสินค้า..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="เรียงตาม" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">ความนิยม</SelectItem>
                <SelectItem value="price-low">ราคาต่ำ - สูง</SelectItem>
                <SelectItem value="price-high">ราคาสูง - ต่ำ</SelectItem>
                <SelectItem value="rating">คะแนนรีวิว</SelectItem>
                <SelectItem value="newest">ใหม่ล่าสุด</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              แสดง {filteredProducts.length} จาก {products.length} รายการ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow border-none overflow-hidden bg-white">
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
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-nature-600 text-lg">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full bg-nature-600 hover:bg-nature-700">
                      <Link to={`/product/${product.id}`}>ดูรายละเอียด</Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      เพิ่มใส่ตะกร้า
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับการค้นหา</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
                }}
              >
                แสดงสินค้าทั้งหมด
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
