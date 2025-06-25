import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
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
        title: t('common.error'),
        description: "Make sure all required fields are filled correctly.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('common.success'),
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
        title: t('common.error'),
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
      title: t('affiliate.high_commission'),
      description: t('affiliate.high_commission_desc')
    },
    {
      icon: Users,
      title: t('affiliate.full_support'),
      description: t('affiliate.full_support_desc')
    },
    {
      icon: Gift,
      title: t('affiliate.free_products'),
      description: t('affiliate.free_products_desc')
    }
  ];

  const steps = [
    {
      step: "1",
      title: t('affiliate.step_apply'),
      description: t('affiliate.step_apply_desc')
    },
    {
      step: "2", 
      title: t('affiliate.step_approved'),
      description: t('affiliate.step_approved_desc')
    },
    {
      step: "3",
      title: t('affiliate.step_earn'),
      description: t('affiliate.step_earn_desc')
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
            {t('affiliate.hero_title')}
          </h1>
          <p className="text-2xl text-nature-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('affiliate.hero_description')}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-nature-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
            onClick={scrollToForm}
          >
            {t('affiliate.start_earning')}
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('affiliate.why_partner_title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('affiliate.benefits_description')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('affiliate.how_it_works')}</h2>
            <p className="text-xl text-gray-600">{t('affiliate.steps_description')}</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('affiliate.join_program')}</h2>
              <p className="text-xl text-gray-600">{t('affiliate.join_description')}</p>
            </div>
            
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      {t('affiliate.your_name')} *
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
                      {t('affiliate.email_address')} *
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
                      {t('affiliate.promote_where')} *
                    </label>
                    <select 
                      className={`w-full p-4 h-12 text-lg border rounded-md ${errors.marketingChannel ? 'border-red-500' : 'border-green-300'}`}
                      value={formData.marketingChannel}
                      onChange={(e) => handleInputChange('marketingChannel', e.target.value)}
                    >
                      <option value="">{t('affiliate.choose_platform')}</option>
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
                      {t('affiliate.agree_terms')} *
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
                        {t('affiliate.submitting')}
                      </>
                    ) : (
                      t('affiliate.submit_application')
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('affiliate.quick_questions')}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('affiliate.how_much_earn'),
                answer: t('affiliate.how_much_earn_answer')
              },
              {
                question: t('affiliate.when_paid'),
                answer: t('affiliate.when_paid_answer')
              },
              {
                question: t('affiliate.really_free'),
                answer: t('affiliate.really_free_answer')
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
