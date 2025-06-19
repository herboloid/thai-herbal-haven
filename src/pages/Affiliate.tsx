
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  DollarSign, 
  Users, 
  Gift,
  CheckCircle,
  Star,
  Loader2
} from "lucide-react";

interface FormData {
  firstName: string;
  email: string;
  marketingChannel: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  marketingChannel?: string;
  agreeToTerms?: string;
}

const Affiliate = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    marketingChannel: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.marketingChannel) newErrors.marketingChannel = 'Please select your platform';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Please agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please check your information",
        description: "Make sure all required fields are filled correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application submitted!",
        description: "We'll get back to you within 2 business days.",
      });

      setFormData({
        firstName: '',
        email: '',
        marketingChannel: '',
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
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
      description: "Earn up to 25% on every sale you make"
    },
    {
      icon: Users,
      title: "Full Support",
      description: "Get help from our dedicated team"
    },
    {
      icon: Gift,
      title: "Free Products",
      description: "Receive samples to test and review"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Apply",
      description: "Fill out the simple form below"
    },
    {
      step: "2", 
      title: "Get Approved",
      description: "We'll review and approve within 2 days"
    },
    {
      step: "3",
      title: "Start Earning",
      description: "Share your links and earn money"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nature-600 to-nature-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-6 text-base px-4 py-2">
            <Star className="h-5 w-5 mr-2" />
            Partner Program
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            Become Our Partner
          </h1>
          <p className="text-2xl text-nature-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Share natural supplements you believe in and earn up to 25% commission on every sale.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-nature-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
            onClick={scrollToForm}
          >
            Start Earning Today - It's Free!
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as our affiliate partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-nature-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-nature-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Partner Program</h2>
              <p className="text-xl text-gray-600">Ready to start earning? It takes less than 2 minutes.</p>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`text-lg p-4 h-12 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`text-lg p-4 h-12 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Where will you promote? *
                    </label>
                    <select 
                      className={`w-full p-4 h-12 text-lg border rounded-md ${errors.marketingChannel ? 'border-red-500' : 'border-green-300'}`}
                      value={formData.marketingChannel}
                      onChange={(e) => handleInputChange('marketingChannel', e.target.value)}
                    >
                      <option value="">Choose your platform</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="youtube">YouTube</option>
                      <option value="website">My Website/Blog</option>
                      <option value="line">Line</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.marketingChannel && (
                      <p className="text-red-500 text-sm mt-1">{errors.marketingChannel}</p>
                    )}
                  </div>
                  
                  <div className="flex items-start space-x-3 pt-4">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-4 h-4"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    />
                    <label className="text-gray-600">
                      I agree to the <a href="#" className="text-nature-600 hover:underline font-medium">Terms and Conditions</a> *
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full bg-nature-600 hover:bg-nature-700 text-xl py-6 h-auto mt-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
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

      {/* Simple FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much can I earn?",
                answer: "You earn up to 25% commission on every sale. The more you sell, the higher your rate."
              },
              {
                question: "When do I get paid?",
                answer: "Commissions are paid monthly on the 15th, directly to your bank account."
              },
              {
                question: "Is it really free?",
                answer: "Yes! There are no fees to join. You start earning immediately after approval."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
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
