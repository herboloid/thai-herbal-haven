
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
      title: "100% Natural",
      description: "We only use high-quality natural ingredients, free from harmful chemicals"
    },
    {
      icon: Shield,
      title: "International Standards", 
      description: "All products are certified with GMP, FDA and ISO standards"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "We understand each customer's needs and strive to provide the best service"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Knowledgeable team in nutrition and health ready to provide consultation"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "Satisfied Customers",
      icon: Users
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: Award
    },
    {
      number: "100+",
      label: "Quality Products",
      icon: Leaf
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      icon: Star
    }
  ];

  const certifications = [
    {
      name: "FDA",
      description: "FDA Approved",
      image: "/lovable-uploads/79c7131b-160f-42de-ae83-6348662413d8.png"
    },
    {
      name: "GMP",
      description: "Good Manufacturing Practice",
      image: "/lovable-uploads/e799d33b-9141-44f6-8755-34adcf2e1727.png"
    },
    {
      name: "ISO 22000",
      description: "Food Safety Standard",
      image: "/lovable-uploads/4cee8723-c786-4988-b097-b814d2e6a564.png"
    },
    {
      name: "Natural",
      description: "Natural Ingredients",
      image: "/lovable-uploads/6c462123-78a1-4022-ab2e-9949900f8571.png"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to provide high-quality natural dietary supplements"
    },
    {
      year: "2020", 
      title: "Product Line Expansion",
      description: "Added diverse products based on market demands"
    },
    {
      year: "2021",
      title: "International Certification",
      description: "Achieved GMP and ISO 22000 certifications"
    },
    {
      year: "2022",
      title: "Online Platform Launch",
      description: "Launched online services for customer convenience"
    },
    {
      year: "2023",
      title: "Partner Network Expansion",
      description: "Started affiliate program and expanded network nationwide"
    },
    {
      year: "2024",
      title: "Market Leadership Goal",
      description: "Aiming to become the leading natural supplement brand in Thailand"
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
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Partner
              <span className="text-nature-600 block">in Natural Health</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are specialists in natural dietary supplements committed to providing high-quality products 
              for better health for you and your family. With over 5 years of experience
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
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality natural dietary supplements that are safe, effective, 
                  and accessible to help everyone achieve better health and quality of life
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-nature-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted natural supplement brand in Thailand 
                  and expand to international markets in the future, following sustainable development principles
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles and values that form the foundation of our work and service
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
            <h2 className="text-3xl font-bold mb-4">Achievements We're Proud Of</h2>
            <p className="text-nature-100">Numbers that reflect our success and customer trust</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard Certifications</h2>
            <p className="text-gray-600">Our products are certified by trusted organizations</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growth Journey</h2>
            <p className="text-gray-600">Our history and progress over the years</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Reasons why over 10,000 customers trust us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Trusted Quality</h3>
              <p className="text-gray-600">
                Every product undergoes strict quality control 
                and is certified to international standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Fast Delivery Service</h3>
              <p className="text-gray-600">
                Free nationwide delivery, guaranteed delivery within 1-2 business days 
                with package tracking service
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Expert Team Ready to Consult</h3>
              <p className="text-gray-600">
                Pharmacists and nutritionists ready to provide product selection advice 
                24 hours a day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nature-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Health Journey With Us?</h2>
          <p className="text-nature-100 mb-8 max-w-2xl mx-auto">
            Join the NaturalHealth family and experience natural health care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-nature-600 hover:bg-gray-100">
              <Link to="/products">Shop Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-nature-600 hover:bg-white hover:text-nature-600">
              <Link to="/affiliate">Join Affiliate Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
