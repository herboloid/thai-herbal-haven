import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, Send, User } from "lucide-react";
import { allProducts, getProductsByKeywords, getComboRecommendations, Product } from "@/utils/productData";
import ChatProductCard from "./ChatProductCard";
import SmartHotButtons from "./SmartHotButtons";
import { useNavigate } from "react-router-dom";
import { getCategoryColors } from "@/utils/categoryColors";
import { getSmartButtons, HotButton } from "@/utils/hotButtonScenarios";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  products?: Product[];
  followUpQuestions?: string[];
  showCombo?: boolean;
  category?: string;
  stage?: string;
}

const AISupplementChat = () => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: t('ai.initial_message'),
      timestamp: new Date(),
      stage: 'initial'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState<{
    age?: string, 
    budget?: string, 
    symptoms: string[], 
    stage: string,
    hasProducts?: boolean,
    productCount?: number,
    language: string
  }>({
    symptoms: [],
    stage: 'initial',
    language: language
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Update initial message when language changes
  useEffect(() => {
    setMessages(prev => prev.map((msg, index) => 
      index === 0 ? { ...msg, content: t('ai.initial_message') } : msg
    ));
    setUserContext(prev => ({ ...prev, language }));
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCategoryFromQuery = (query: string): string => {
    const queryLower = query.toLowerCase();
    if (queryLower.includes("vision") || queryLower.includes("eyes") || queryLower.includes("sight")) return "vision";
    if (queryLower.includes("weight") || queryLower.includes("lose") || queryLower.includes("diet")) return "weight";
    if (queryLower.includes("skin") || queryLower.includes("beauty") || queryLower.includes("anti-aging")) return "beauty";
    if (queryLower.includes("detox") || queryLower.includes("cleanse") || queryLower.includes("toxins")) return "detox";
    if (queryLower.includes("heart") || queryLower.includes("pressure") || queryLower.includes("cardiovascular")) return "heart";
    if (queryLower.includes("energy") || queryLower.includes("fatigue") || queryLower.includes("tired")) return "energy";
    if (queryLower.includes("immune") || queryLower.includes("immunity") || queryLower.includes("cold")) return "immunity";
    if (queryLower.includes("brain") || queryLower.includes("memory") || queryLower.includes("focus")) return "brain";
    return "";
  };

  const callOpenAI = async (message: string, context: any): Promise<string> => {
    try {
      const { data, error } = await supabase.functions.invoke('ai-supplement-chat', {
        body: { message, context }
      });

      if (error) {
        console.error('Supabase function error:', error);
        return language === 'th' ? 'ขออภัย เกิดขึ้นผิดพลาด กรุณาลองใหม่อีกครั้ง' : 'Sorry, an error occurred. Please try again.';
      }

      return data?.response || (language === 'th' ? 'ขออภัย ไม่สามารถรับคำตอบได้' : 'Sorry, could not get a response.');
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      return language === 'th' ? 'ขออภัย เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI' : 'Sorry, there was an error connecting to AI.';
    }
  };

  const getPersonalizedResponse = (query: string, products: Product[], category: string, buttonId?: string): string => {
    const queryLower = query.toLowerCase();
    
    // Handle specific button actions
    if (buttonId) {
      switch (buttonId) {
        case 'budget-low':
          return language === 'th' ? "สมบูรณ์แบบ! ฉันจะเน้นตัวเลือกที่ราคาไม่แพงภายใต้ ฿500 ให้ฉันค้นหาอาหารเสริมที่ดีที่สุดสำหรับความต้องการของคุณ" : "Perfect! I'll focus on affordable options under ฿500. Let me find the best value supplements for your needs.";
        case 'budget-mid':
          return language === 'th' ? "ช่วงงบประมาณที่ดี! ฉันสามารถแนะนำอาหารเสริมระดับกลางที่มีคุณภาพดีในราคาที่เหมาะสม" : "Great budget range! I can recommend some excellent mid-tier supplements with good quality-price ratio.";
        case 'budget-high':
          return language === 'th' ? "ยอดเยี่ยม! ด้วยงบประมาณนี้ ฉันสามารถแสดงให้คุณเห็นอาหารเสริมพรีเมียมที่มีส่วนผสมและประสิทธิภาพที่ดีที่สุด" : "Excellent! With this budget, I can show you premium supplements with the best ingredients and effectiveness.";
        case 'budget-premium':
          return language === 'th' ? "สมบูรณ์แบบ! ฉันจะแนะนำเฉพาะอาหารเสริมคุณภาพสูงสุดและมีประสิทธิภาพมากที่สุดโดยไม่คำนึงถึงราคา" : "Perfect! I'll recommend only the highest quality, most effective supplements regardless of price.";
        case 'compare':
          return language === 'th' ? "นี่คือการเปรียบเทียบรายละเอียดของสินค้าของคุณ ฉันจะชี้แจงความแตกต่างที่สำคัญ:" : "Here's a detailed comparison of your options. Let me highlight the key differences:";
        case 'cheapest':
          return language === 'th' ? "นี่คือสินค้าที่ถูกที่สุดที่ยังคงสอดคล้องกับคุณภาพของคุณ:" : "Here's the most affordable option that still meets your quality standards:";
        case 'highest-rated':
          return language === 'th' ? "นี่คือสินค้าที่ได้รับการให้คะแนนสูงที่สุดสำหรับความต้องการของคุณ:" : "This is our highest-rated product for your needs:";
        case 'add-cart':
          return language === 'th' ? "ตัวเลือกที่ยอดเยี่ยม! ฉันจะเพิ่มสินค้านี้ไปในตะกร้าของคุณ. ต้องการที่จะดูสินค้าอื่นหรือสินค้าที่คล้ายกัน?" : "Great choice! I'll add this to your cart. Would you like to see complementary products?";
      }
    }
    
    if (products.length === 0) {
      if (queryLower.includes("heart") || queryLower.includes("pressure") || queryLower.includes("cardiovascular")) {
        return language === 'th' ? " unfortunately, เราไม่มีอาหารเสริมเฉพาะสำหรับโรคหัวใจที่สามารถใช้ได้ในขณะนี้. ฉันขอแนะนำให้คุณปรึกษาแพทย์. ขณะนี้, ฉันสามารถแนะนำอาหารเสริมสำหรับการล้างพิษร่างกายเพื่อการดูแลสุขภาพทั่วไป." : "Unfortunately, we don't have specialized heart supplements available right now. I recommend consulting with a doctor. Meanwhile, I can suggest detox supplements for overall health improvement.";
      }
      return language === 'th' ? "กรุณาบอกฉันเพิ่มเติมเกี่ยวกับความต้องการเฉพาะของคุณ ฉันอาจสามารถแนะนำสิ่งที่เหมาะสมจากผลิตภัณฑ์ของเรา" : "Please tell me more about your specific needs. I might be able to suggest something suitable from our range.";
    }

    if (products.length === 1) {
      const product = products[0];
      return language === 'th' ? 
        `ตัวเลือกที่ยอดเยี่ยม! ${product.name} คือสิ่งที่คุณต้องการ ผลิตภัณฑ์นี้มีคะแนน ${product.rating} ดาว พร้อมรีวิวเชิงบวก ${product.reviews} รายการ ${product.inStock <= 5 ? `⚠️ ความสนใจ: เหลือเพียง ${product.inStock} หน่วยในสต็อก!` : ''}` :
        `Excellent choice! ${product.name} is exactly what you need. This product has a ${product.rating} star rating with ${product.reviews} positive reviews. ${product.inStock <= 5 ? `⚠️ Attention: only ${product.inStock} units left in stock!` : ''}`;
    }

    if (products.length === 2) {
      return language === 'th' ? "ฉันมี 2 ตัวเลือกที่ยอดเยี่ยมสำหรับคุณ อันไหนเหมาะกับงบประมาณและความต้องการของคุณมากกว่า?" : "I have 2 excellent options for you. Which one better fits your budget and needs?";
    }

    return language === 'th' ? 
      `ฉันพบ ${products.length} ผลิตภัณฑ์ที่เหมาะสม มาเลือกที่เหมาะสมที่สุดสำหรับคุณ:` :
      `I found ${products.length} suitable products. Let's choose the most appropriate one for you:`;
  };

  const determineNextStage = (currentStage: string, userInput: string, buttonId?: string): string => {
    if (buttonId) {
      if (buttonId.startsWith('budget-')) return 'products';
      if (['add-cart', 'checkout'].includes(buttonId)) return 'final';
      if (['compare', 'cheapest', 'highest-rated'].includes(buttonId)) return 'products';
    }

    switch (currentStage) {
      case 'initial':
        return userContext.symptoms.length > 0 ? 'clarifying' : 'initial';
      case 'clarifying':
        return 'budget';
      case 'budget':
        return 'products';
      case 'products':
        return 'final';
      default:
        return currentStage;
    }
  };

  const handleSendMessage = async (messageText?: string, buttonId?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Update user context
    const newSymptoms = [...userContext.symptoms];
    if (!newSymptoms.includes(text.toLowerCase())) {
      newSymptoms.push(text.toLowerCase());
    }

    // Update budget if button indicates budget selection
    let newBudget = userContext.budget;
    if (buttonId?.startsWith('budget-')) {
      newBudget = buttonId;
    }

    const currentStage = userContext.stage;
    const nextStage = determineNextStage(currentStage, text, buttonId);

    const updatedContext = { 
      ...userContext, 
      symptoms: newSymptoms,
      budget: newBudget,
      stage: nextStage,
      language: language
    };
    setUserContext(updatedContext);

    try {
      // Get AI response
      const aiResponse = await callOpenAI(text, updatedContext);
      
      // Get recommended products based on query
      const category = getCategoryFromQuery(text);
      const recommendedProducts = getProductsByKeywords(text).slice(0, 3);

      // Check for combo offer request
      const isComboRequest = text.includes("combo") || text.includes("discount") || text.includes("offer");
      let showCombo = false;
      let comboProducts: Product[] = [];

      if (isComboRequest && recommendedProducts.length > 0) {
        comboProducts = getComboRecommendations(recommendedProducts[0].id);
        showCombo = true;
      }

      // Update context with product information
      const finalContext = {
        ...updatedContext,
        hasProducts: recommendedProducts.length > 0,
        productCount: recommendedProducts.length
      };
      setUserContext(finalContext);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        products: showCombo ? [...recommendedProducts, ...comboProducts] : recommendedProducts,
        showCombo,
        category,
        stage: nextStage
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: language === 'th' ? 'ขออภัย เกิดข้อผิดพลาด กรุณาลองอีกครั้ง' : 'Sorry, an error occurred. Please try again.',
        timestamp: new Date(),
        stage: nextStage
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAddToCart = (productId: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      const successMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: language === 'th' ? 
          `✅ ${product.name} เพิ่มในตะกร้าแล้ว! ต้องการไปที่หน้าชำระเงินหรือเพิ่มสินค้าอื่น?` :
          `✅ ${product.name} added to cart! Want to go to checkout or add something else?`,
        timestamp: new Date(),
        followUpQuestions: language === 'th' ? 
          ["ไปที่หน้าชำระเงิน", "ดูสินค้าที่คล้ายกัน", "ช้อปต่อ"] :
          ["Go to checkout", "View similar products", "Continue shopping"]
      };
      
      setMessages(prev => [...prev, successMessage]);
    }
  };

  const handleFollowUpClick = (question: string, buttonId?: string) => {
    if (question === "Go to checkout" || question === "ไปที่หน้าชำระเงิน" || buttonId === "checkout") {
      navigate('/cart');
      return;
    }
    
    handleSendMessage(question, buttonId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getContextualButtons = (): HotButton[] => {
    return getSmartButtons(userContext);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-nature-200">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-sm">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{t('ai.consultant_name')}</h3>
            <p className="text-sm text-nature-600">{t('ai.consultant_subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50 mb-4">
        <CardContent className="p-6">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message) => {
              const colors = message.category ? getCategoryColors(message.category) : null;
              
              return (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-sm ${message.type === 'user' ? 'bg-gradient-to-br from-gray-600 to-gray-700' : colors ? `bg-gradient-to-br from-${colors.bg.replace('bg-', '')} to-${colors.icon.replace('text-', '')}` : 'bg-gradient-to-br from-nature-500 to-nature-600'}`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`rounded-2xl px-4 py-3 shadow-sm ${message.type === 'user' ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-white' : colors ? `${colors.bg} ${colors.text} border ${colors.border}` : 'bg-gray-50 text-gray-800 border border-gray-200'}`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      
                      {/* Smart Hot Buttons */}
                      {message.type === 'ai' && (
                        <SmartHotButtons
                          buttons={getContextualButtons()}
                          onButtonClick={handleFollowUpClick}
                          disabled={isTyping}
                        />
                      )}
                      
                      {/* Product Cards */}
                      {message.products && message.products.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.products.map((product, index) => (
                            <ChatProductCard
                              key={product.id}
                              product={product}
                              reason={
                                product.keywords.some(k => ["vision", "eyes"].includes(k)) ? 
                                (language === 'th' ? "เฉพาะสำหรับสุขภาพดวงตา" : "Specifically for eye health") :
                                product.keywords.some(k => ["weight loss", "weight"].includes(k)) ? 
                                (language === 'th' ? "การเผาผลาญไขมันที่มีประสิทธิภาพ" : "Effective fat burning") :
                                product.keywords.some(k => ["anti-aging", "skin"].includes(k)) ? 
                                (language === 'th' ? "การดูแลต้านริ้วรอยและความงามของผิว" : "Anti-aging care and skin beauty") :
                                product.keywords.includes("detox") ? 
                                (language === 'th' ? "การล้างพิษร่างกายอย่างลึกซึ้ง" : "Deep body detox") : 
                                (language === 'th' ? "แนะนำสำหรับความต้องการของคุณ" : "Recommended for your needs")
                              }
                              onAddToCart={handleAddToCart}
                              showCombo={message.showCombo && index > 0}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-sm">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-nature-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-nature-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-nature-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>

      {/* Chat Input */}
      <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50">
        <Input
          placeholder={t('ai.input_placeholder')}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400"
        />
        <Button
          onClick={() => handleSendMessage()}
          size="icon"
          className="h-10 w-10 rounded-full bg-gradient-to-br from-nature-500 to-nature-600 hover:from-nature-600 hover:to-nature-700 shadow-sm transition-all hover:scale-105"
          disabled={!inputValue.trim() || isTyping}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AISupplementChat;
