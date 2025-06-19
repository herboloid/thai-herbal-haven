import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Gift, 
  Star, 
  CheckCircle,
  Calculator,
  Heart,
  Share2,
  Loader2
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketingChannel: string;
  websiteLink: string;
  motivation: string;
  agreeToTerms: boolean;
}

const Affiliate = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    marketingChannel: '',
    websiteLink: '',
    motivation: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.marketingChannel) newErrors.marketingChannel = 'Marketing channel is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please check the required fields and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you within 2-3 business days.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        marketingChannel: '',
        websiteLink: '',
        motivation: '',
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "High Commission",
      description: "Earn 15-25% commission on every sale",
      highlight: "Up to 25%"
    },
    {
      icon: TrendingUp,
      title: "Bonus Rewards",
      description: "Special bonuses when you exceed sales targets",
      highlight: "5% Bonus"
    },
    {
      icon: Users,
      title: "Support Team",
      description: "Dedicated team ready to help and advise",
      highlight: "24/7"
    },
    {
      icon: Gift,
      title: "Free Products",
      description: "Receive sample products for testing and reviews",
      highlight: "Free!"
    }
  ];

  const tiers = [
    {
      name: "Bronze",
      color: "bg-orange-100 text-orange-800",
      minSales: "$1,000",
      commission: "15%",
      perks: ["15% Commission", "1 sample product per month", "Weekly sales reports"]
    },
    {
      name: "Silver",
      color: "bg-gray-100 text-gray-800",
      minSales: "$2,500",
      commission: "20%",
      perks: ["20% Commission", "2 sample products per month", "Daily sales reports", "10% discount code"]
    },
    {
      name: "Gold",
      color: "bg-yellow-100 text-yellow-800",
      minSales: "$5,000",
      commission: "25%",
      perks: ["25% Commission", "Unlimited sample products", "Real-time reporting", "15% discount code", "Exclusive events access"]
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Fill out the application form and submit your affiliate request"
    },
    {
      step: "2", 
      title: "Wait for Approval",
      description: "Our team will review and approve within 2-3 business days"
    },
    {
      step: "3",
      title: "Get Your Links",
      description: "Receive your affiliate links and personal discount codes"
    },
    {
      step: "4",
      title: "Start Sharing",
      description: "Share products and start earning income"
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
              Partner Program
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Become Our
              <span className="text-nature-200 block">Affiliate Partner</span>
            </h1>
            <p className="text-xl text-nature-100 mb-8 leading-relaxed">
              Create additional income by recommending high-quality natural supplements. 
              Earn up to 25% commission on every sale.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-nature-600 hover:bg-gray-100"
                onClick={scrollToForm}
              >
                Join Now - Free!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits You'll Receive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just commission. See what you'll get as our affiliate partner.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commission Tiers</h2>
            <p className="text-gray-600">The more you sell, the higher your commission rate</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden ${index === 1 ? 'ring-2 ring-nature-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-nature-500 text-white text-center py-1 text-sm font-medium">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <Badge className={`${tier.color} mx-auto mb-2`}>
                    {tier.name}
                  </Badge>
                  <CardTitle className="text-2xl">{tier.commission}</CardTitle>
                  <p className="text-gray-600">Minimum sales {tier.minSales}/month</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-gray-600">Easy start in just 4 simple steps</p>
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
                <CardTitle className="text-2xl">Calculate Your Potential Earnings</CardTitle>
                <p className="text-gray-600">Try calculating how much you could earn as our affiliate</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Sales ($)
                  </label>
                  <Input placeholder="e.g. 5,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Commission Tier
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Bronze - 15%</option>
                    <option>Silver - 20%</option>
                    <option>Gold - 25%</option>
                  </select>
                </div>
                <div className="bg-nature-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monthly Income:</span>
                    <span className="text-2xl font-bold text-nature-600">$750</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                    <span>Annual Income:</span>
                    <span>$9,000</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-nature-600 hover:bg-nature-700"
                  onClick={scrollToForm}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for Affiliate Program</h2>
              <p className="text-gray-600">Fill out the form below to start your partnership with us</p>
            </div>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Marketing Channel *
                    </label>
                    <select 
                      className={`w-full p-2 border rounded-md ${errors.marketingChannel ? 'border-red-500' : ''}`}
                      value={formData.marketingChannel}
                      onChange={(e) => handleInputChange('marketingChannel', e.target.value)}
                    >
                      <option value="">Select channel</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="website">Personal Website</option>
                      <option value="line">Line</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.marketingChannel && (
                      <p className="text-red-500 text-xs mt-1">{errors.marketingChannel}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Social Media or Website Link
                    </label>
                    <Input 
                      placeholder="https://..."
                      value={formData.websiteLink}
                      onChange={(e) => handleInputChange('websiteLink', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us why you want to become our affiliate
                    </label>
                    <Textarea 
                      placeholder="Tell us about your experience or interest in health and wellness..."
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      className="mt-1"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    />
                    <label className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-nature-600 hover:underline">Terms and Conditions</a> 
                      and <a href="#" className="text-nature-600 hover:underline">Privacy Policy</a> *
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full bg-nature-600 hover:bg-nature-700 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      'Submit Application'
                    )}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are the requirements to become an affiliate?",
                answer: "You need to have an online marketing channel such as social media, website, or customer groups, and a genuine interest in natural health supplements."
              },
              {
                question: "When are commissions paid?",
                answer: "Commissions are paid on the 15th of each month for the previous month's sales, transferred directly to your registered bank account."
              },
              {
                question: "Is there any cost to join the affiliate program?",
                answer: "No, there are no fees to join our affiliate program. It's completely free to apply and participate."
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
