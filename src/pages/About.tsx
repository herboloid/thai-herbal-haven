
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Users, 
  Award, 
  Heart, 
  Shield, 
  Truck,
  CheckCircle,
  Star,
  Target,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "ธรรมชาติ 100%",
      description: "เราเลือกใช้วัตถุดิบธรรมชาติคุณภาพสูงเท่านั้น ปราศจากสารเคมีที่เป็นอันตราย"
    },
    {
      icon: Shield,
      title: "มาตรฐานระดับสากล", 
      description: "ผลิตภัณฑ์ทุกชิ้นผ่านการรับรองมาตรฐาน GMP, FDA และ ISO"
    },
    {
      icon: Heart,
      title: "ใส่ใจลูกค้า",
      description: "เราเข้าใจความต้องการของลูกค้าแต่ละคน และมุ่งมั่นให้บริการที่ดีที่สุด"
    },
    {
      icon: Users,
      title: "ทีมผู้เชี่ยวชาญ",
      description: "ทีมงานที่มีความรู้ด้านโภชนาการและสุขภาพคอยให้คำปรึกษา"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "ลูกค้าพึงพอใจ",
      icon: Users
    },
    {
      number: "5+",
      label: "ปีประสบการณ์",
      icon: Award
    },
    {
      number: "100+",
      label: "ผลิตภัณฑ์คุณภาพ",
      icon: Leaf
    },
    {
      number: "99%",
      label: "ความพึงพอใจ",
      icon: Star
    }
  ];

  const certifications = [
    {
      name: "FDA",
      description: "การรับรองจาก อย.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop"
    },
    {
      name: "GMP",
      description: "มาตรฐานการผลิต",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop"
    },
    {
      name: "ISO 22000",
      description: "มาตรฐานความปลอดภัย",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=100&h=100&fit=crop"
    },
    {
      name: "Organic",
      description: "รับรองออร์แกนิก",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=100&h=100&fit=crop"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "ก่อตั้งบริษัท",
      description: "เริ่มต้นด้วยวิสัยทัศน์ในการนำเสนออาหารเสริมธรรมชาติคุณภาพสูง"
    },
    {
      year: "2020", 
      title: "ขยายสายผลิตภัณฑ์",
      description: "เพิ่มผลิตภัณฑ์หลากหลายประเภทตามความต้องการของตลาด"
    },
    {
      year: "2021",
      title: "รับรองมาตรฐานสากล",
      description: "ได้รับการรับรองมาตรฐาน GMP และ ISO 22000"
    },
    {
      year: "2022",
      title: "เปิดตัวแพลตฟอร์มออนไลน์",
      description: "เปิดให้บริการผ่านช่องทางออนไลน์เพื่อความสะดวกของลูกค้า"
    },
    {
      year: "2023",
      title: "ขยายเครือข่ายพาร์ทเนอร์",
      description: "เริ่มโปรแกรมแอฟฟิลิเอทและขยายเครือข่ายทั่วประเทศ"
    },
    {
      year: "2024",
      title: "มุ่งสู่การเป็นผู้นำตลาด",
      description: "ตั้งเป้าเป็นแบรนด์อาหารเสริมธรรมชาติอันดับหนึ่งในประเทศไทย"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nature-50 to-earth-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-nature-100 text-nature-700 mb-4">
              <Leaf className="h-4 w-4 mr-1" />
              เกี่ยวกับเรา
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              ผู้นำด้าน
              <span className="text-nature-600 block">อาหารเสริมธรรมชาติ</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              เราคือผู้เชี่ยวชาญด้านอาหารเสริมธรรมชาติที่มุ่งมั่นนำเสนอผลิตภัณฑ์คุณภาพสูง 
              เพื่อสุขภาพที่ดีกว่าของคุณและครอบครัว ด้วยประสบการณ์กว่า 5 ปี
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop"
                alt="Natural Health Mission"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-nature-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">พันธกิจของเรา</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  นำเสนอผลิตภัณฑ์อาหารเสริมธรรมชาติคุณภาพสูงที่ปลอดภัย มีประสิทธิภาพ 
                  และเข้าถึงได้ง่าย เพื่อช่วยให้ทุกคนมีสุขภาพที่ดีและชีวิตที่มีคุณภาพมากขึ้น
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-nature-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">วิสัยทัศน์ของเรา</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  เป็นแบรนด์อาหารเสริมธรรมชาติที่ได้รับความไว้วางใจมากที่สุดในประเทศไทย 
                  และขยายสู่ตลาดสากลในอนาคต โดยยึดหลักการพัฒนาอย่างยั่งยืน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ค่านิยมองค์กร</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              หลักการและค่านิยมที่เป็นรากฐานของการทำงานและการให้บริการของเรา
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-nature-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-nature-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ผลงานที่ภาคภูมิใจ</h2>
            <p className="text-nature-100">ตัวเลขที่สะท้อนความสำเร็จและความไว้วางใจจากลูกค้า</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-nature-100">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">การรับรองมาตรฐาน</h2>
            <p className="text-gray-600">ผลิตภัณฑ์ของเราได้รับการรับรองมาตรฐานจากหน่วยงานที่น่าเชื่อถือ</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">เส้นทางการเติบโต</h2>
            <p className="text-gray-600">ประวัติและความก้าวหน้าของเราตลอดหลายปีที่ผ่านมา</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-nature-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <Badge className="bg-nature-100 text-nature-700 mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-nature-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ทำไมต้องเลือกเรา</h2>
            <p className="text-gray-600">เหตุผลที่ลูกค้ามากกว่า 10,000 คนไว้วางใจเรา</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">คุณภาพที่เชื่อถือได้</h3>
              <p className="text-gray-600">
                ผลิตภัณฑ์ทุกชิ้นผ่านการตรวจสอบคุณภาพอย่างเข้มงวด 
                และได้รับการรับรองมาตรฐานสากล
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">บริการส่งมอบที่รวดเร็ว</h3>
              <p className="text-gray-600">
                จัดส่งฟรีทั่วประเทศ รับประกันการส่งมอบภายใน 1-2 วันทำการ 
                พร้อมบริการติดตามพัสดุ
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา</h3>
              <p className="text-gray-600">
                ทีมเภสัชกรและนักโภชนาการคอยให้คำปรึกษาเรื่องการเลือกใช้ผลิตภัณฑ์ 
                ตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nature-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มต้นการดูแลสุขภาพกับเราแล้วหรือยัง?</h2>
          <p className="text-nature-100 mb-8 max-w-2xl mx-auto">
            มาร่วมเป็นส่วนหนึ่งของครอบครัว NaturalHealth และสัมผัสประสบการณ์การดูแลสุขภาพแบบธรรมชาติ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-nature-600 hover:bg-gray-100">
              <Link to="/products">เลือกซื้อสินค้า</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nature-600">
              <Link to="/affiliate">เข้าร่วมแอฟฟิลิเอท</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
