
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Gift, 
  Star, 
  CheckCircle,
  Calculator,
  Heart,
  Share2
} from "lucide-react";

const Affiliate = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "คอมมิชชั่นสูง",
      description: "รับคอมมิชชั่น 15-25% จากยอดขายทุกครั้ง",
      highlight: "สูงสุด 25%"
    },
    {
      icon: TrendingUp,
      title: "โบนัสเพิ่มเติม",
      description: "โบนัสพิเศษเมื่อยอดขายเกินเป้าหมาย",
      highlight: "โบนัส 5%"
    },
    {
      icon: Users,
      title: "ทีมงานสนับสนุน",
      description: "ทีมงานคอยช่วยเหลือและให้คำปรึกษา",
      highlight: "24/7"
    },
    {
      icon: Gift,
      title: "ผลิตภัณฑ์ฟรี",
      description: "รับสินค้าตัวอย่างสำหรับทดลองและรีวิว",
      highlight: "ฟรี!"
    }
  ];

  const tiers = [
    {
      name: "Bronze",
      color: "bg-orange-100 text-orange-800",
      minSales: "฿10,000",
      commission: "15%",
      perks: ["คอมมิชชั่น 15%", "สินค้าตัวอย่างเดือนละ 1 ชิ้น", "รายงานยอดขายรายสัปดาห์"]
    },
    {
      name: "Silver",
      color: "bg-gray-100 text-gray-800",
      minSales: "฿25,000",
      commission: "20%",
      perks: ["คอมมิชชั่น 20%", "สินค้าตัวอย่างเดือนละ 2 ชิ้น", "รายงานยอดขายรายวัน", "โค้ดส่วนลด 10%"]
    },
    {
      name: "Gold",
      color: "bg-yellow-100 text-yellow-800",
      minSales: "฿50,000",
      commission: "25%",
      perks: ["คอมมิชชั่น 25%", "สินค้าตัวอย่างไม่จำกัด", "รายงานแบบเรียลไทม์", "โค้ดส่วนลด 15%", "เข้าร่วมงานพิเศษ"]
    }
  ];

  const steps = [
    {
      step: "1",
      title: "สมัครสมาชิก",
      description: "กรอกข้อมูลและส่งใบสมัครแอฟฟิลิเอท"
    },
    {
      step: "2", 
      title: "รอการอนุมัติ",
      description: "ทีมงานจะตรวจสอบและอนุมัติภายใน 2-3 วันทำการ"
    },
    {
      step: "3",
      title: "รับลิงก์พิเศษ",
      description: "รับลิงก์แอฟฟิลิเอทและโค้ดส่วนลดส่วนตัว"
    },
    {
      step: "4",
      title: "เริ่มแชร์และขาย",
      description: "แชร์สินค้าและเริ่มสร้างรายได้"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nature-600 to-nature-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">
              <Star className="h-4 w-4 mr-1" />
              โปรแกรมพาร์ทเนอร์
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              ร่วมเป็น
              <span className="text-nature-200 block">แอฟฟิลิเอทกับเรา</span>
            </h1>
            <p className="text-xl text-nature-100 mb-8 leading-relaxed">
              สร้างรายได้เสริมด้วยการแนะนำสินค้าอาหารเสริมธรรมชาติคุณภาพสูง 
              รับคอมมิชชั่นสูงสุด 25% ทุกยอดขาย
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-nature-600 hover:bg-gray-100">
                สมัครเลย ฟรี!
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nature-600">
                เรียนรู้เพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ประโยชน์ที่คุณจะได้รับ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เราให้มากกว่าแค่คอมมิชชั่น มาดูว่าการเป็นแอฟฟิลิเอทกับเราจะได้อะไรบ้าง
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-nature-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                    <Badge className="bg-nature-100 text-nature-700">
                      {benefit.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ระดับคอมมิชชั่น</h2>
            <p className="text-gray-600">ยิ่งขายมากยิ่งได้คอมมิชชั่นสูง</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden ${index === 1 ? 'ring-2 ring-nature-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-nature-500 text-white text-center py-1 text-sm font-medium">
                    แนะนำ
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <Badge className={`${tier.color} mx-auto mb-2`}>
                    {tier.name}
                  </Badge>
                  <CardTitle className="text-2xl">{tier.commission}</CardTitle>
                  <p className="text-gray-600">ยอดขายขั้นต่ำ {tier.minSales}/เดือน</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-nature-600 mr-2 flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">วิธีการเริ่มต้น</h2>
            <p className="text-gray-600">เริ่มต้นง่าย ๆ ใน 4 ขั้นตอน</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-nature-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Calculator */}
      <section className="py-16 bg-nature-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-6 w-6 text-nature-600" />
                </div>
                <CardTitle className="text-2xl">คำนวณรายได้ที่คุณจะได้</CardTitle>
                <p className="text-gray-600">ลองคำนวณดูว่าคุณจะได้รายได้เท่าไหร่จากการเป็นแอฟฟิลิเอท</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ยอดขายต่อเดือน (บาท)
                  </label>
                  <Input placeholder="เช่น 50,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ระดับคอมมิชชั่น
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Bronze - 15%</option>
                    <option>Silver - 20%</option>
                    <option>Gold - 25%</option>
                  </select>
                </div>
                <div className="bg-nature-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">รายได้ต่อเดือน:</span>
                    <span className="text-2xl font-bold text-nature-600">฿7,500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                    <span>รายได้ต่อปี:</span>
                    <span>฿90,000</span>
                  </div>
                </div>
                <Button className="w-full bg-nature-600 hover:bg-nature-700">
                  สมัครเลยตอนนี้
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">สมัครแอฟฟิลิเอท</h2>
              <p className="text-gray-600">กรอกข้อมูลด้านล่างเพื่อเริ่มต้นการเป็นพาร์ทเนอร์กับเรา</p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ชื่อ *
                      </label>
                      <Input placeholder="ชื่อของคุณ" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        นามสกุล *
                      </label>
                      <Input placeholder="นามสกุลของคุณ" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      อีเมล *
                    </label>
                    <Input type="email" placeholder="อีเมลของคุณ" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เบอร์โทรศัพท์ *
                    </label>
                    <Input placeholder="เบอร์โทรศัพท์" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ช่องทางการตลาดหลัก *
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>เลือกช่องทาง</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>YouTube</option>
                      <option>เว็บไซต์ส่วนตัว</option>
                      <option>Line</option>
                      <option>อื่น ๆ</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ลิงก์โซเชียลมีเดียหรือเว็บไซต์
                    </label>
                    <Input placeholder="https://..." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เล่าให้ฟังหน่อยว่าทำไมอยากเป็นแอฟฟิลิเอทกับเรา
                    </label>
                    <Textarea 
                      placeholder="บอกเราเกี่ยวกับประสบการณ์หรือความสนใจในด้านสุขภาพ..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm text-gray-600">
                      ยอมรับ <a href="#" className="text-nature-600 hover:underline">ข้อกำหนดและเงื่อนไข</a> 
                      และ <a href="#" className="text-nature-600 hover:underline">นโยบายความเป็นส่วนตัว</a>
                    </label>
                  </div>
                  
                  <Button className="w-full bg-nature-600 hover:bg-nature-700 text-lg py-3">
                    ส่งใบสมัคร
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "เงื่อนไขในการสมัครเป็นแอฟฟิลิเอทคืออะไร?",
                answer: "ต้องมีช่องทางการตลาดออนไลน์ เช่น โซเชียลมีเดีย เว็บไซต์ หรือกลุ่มลูกค้า และมีความสนใจในผลิตภัณฑ์อาหารเสริมธรรมชาติ"
              },
              {
                question: "คอมมิชชั่นจ่ายเมื่อไหร่?",
                answer: "จ่ายทุกวันที่ 15 ของเดือนถัดไป สำหรับยอดขายของเดือนก่อนหน้า โดยโอนเข้าบัญชีธนาคารที่ลงทะเบียนไว้"
              },
              {
                question: "มีค่าใช้จ่ายในการสมัครไหม?",
                answer: "ไม่มีค่าใช้จ่ายใดๆ ในการสมัครเป็นแอฟฟิลิเอท สมัครฟรี 100%"
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
