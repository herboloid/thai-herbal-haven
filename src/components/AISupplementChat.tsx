
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, Send, User } from "lucide-react";
import { allProducts, getProductsByKeywords, getComboRecommendations, Product } from "@/utils/productData";
import ChatProductCard from "./ChatProductCard";
import { useNavigate } from "react-router-dom";
import { getCategoryColors } from "@/utils/categoryColors";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  products?: Product[];
  followUpQuestions?: string[];
  showCombo?: boolean;
  category?: string;
}

const AISupplementChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я помогу вам найти идеальные добавки для ваших потребностей. Расскажите мне, какие у вас проблемы со здоровьем или какие цели вы хотите достичь?',
      timestamp: new Date(),
      followUpQuestions: [
        "Проблемы со зрением",
        "Хочу похудеть", 
        "Здоровье кожи и красота",
        "Детокс организма"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState<{age?: string, budget?: string, symptoms: string[]}>({
    symptoms: []
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCategoryFromQuery = (query: string): string => {
    const queryLower = query.toLowerCase();
    if (queryLower.includes("зрение") || queryLower.includes("глаза")) return "vision";
    if (queryLower.includes("вес") || queryLower.includes("похудеть")) return "weight";
    if (queryLower.includes("кожа") || queryLower.includes("красота")) return "beauty";
    if (queryLower.includes("детокс") || queryLower.includes("очищение")) return "detox";
    if (queryLower.includes("сердце") || queryLower.includes("давление")) return "heart";
    if (queryLower.includes("энергия") || queryLower.includes("усталость")) return "energy";
    if (queryLower.includes("иммунитет") || queryLower.includes("простуда")) return "immunity";
    if (queryLower.includes("мозг") || queryLower.includes("память")) return "brain";
    return "";
  };

  const getPersonalizedResponse = (query: string, products: Product[], category: string): string => {
    const queryLower = query.toLowerCase();
    
    if (products.length === 0) {
      if (queryLower.includes("сердце") || queryLower.includes("давление")) {
        return "К сожалению, у нас сейчас нет специализированных добавок для сердца. Рекомендую проконсультироваться с врачом. А пока могу предложить детокс для общего оздоровления организма.";
      }
      return "Расскажите подробнее о ваших конкретных потребностях. Возможно, я смогу предложить что-то подходящее из нашего ассортимента.";
    }

    if (products.length === 1) {
      const product = products[0];
      return `Отличный выбор! ${product.name} - это именно то, что вам нужно. У этого продукта рейтинг ${product.rating} звезд и ${product.reviews} положительных отзывов. ${product.inStock <= 5 ? `⚠️ Внимание: осталось всего ${product.inStock} единиц на складе!` : ''}`;
    }

    if (products.length === 2) {
      return "У меня есть 2 отличных варианта для вас. Какой лучше подходит под ваш бюджет и потребности?";
    }

    return `Я нашел ${products.length} подходящих продуктов. Давайте выберем наиболее подходящий именно для вас:`;
  };

  const getFollowUpQuestions = (query: string, products: Product[]): string[] => {
    const queryLower = query.toLowerCase();
    
    if (products.length > 1) {
      return [
        "Какой у вас предпочтительный бюджет?",
        "Есть ли у вас хронические заболевания?",
        "Принимаете ли другие лекарства?"
      ];
    }
    
    if (products.length === 1) {
      const combos = getComboRecommendations(products[0].id);
      if (combos.length > 0) {
        return ["Показать комбо-предложение со скидкой"];
      }
      return ["Добавить в корзину", "Узнать больше о составе"];
    }
    
    return [];
  };

  const handleSendMessage = async (messageText?: string) => {
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
    setUserContext(prev => ({ ...prev, symptoms: newSymptoms }));

    setTimeout(() => {
      const category = getCategoryFromQuery(text);
      const recommendedProducts = getProductsByKeywords(text).slice(0, 3);
      const aiResponse = getPersonalizedResponse(text, recommendedProducts, category);
      const followUp = getFollowUpQuestions(text, recommendedProducts);

      // Check for combo offer request
      const isComboRequest = text.includes("комбо") || text.includes("скидка");
      let showCombo = false;
      let comboProducts: Product[] = [];

      if (isComboRequest && recommendedProducts.length > 0) {
        comboProducts = getComboRecommendations(recommendedProducts[0].id);
        showCombo = true;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        products: showCombo ? [...recommendedProducts, ...comboProducts] : recommendedProducts,
        followUpQuestions: followUp,
        showCombo,
        category
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleAddToCart = (productId: number) => {
    // Simulate adding to cart
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      const successMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: `✅ ${product.name} добавлен в корзину! Хотите оформить заказ или добавить что-то еще?`,
        timestamp: new Date(),
        followUpQuestions: ["Перейти к оформлению", "Посмотреть похожие товары", "Продолжить покупки"]
      };
      
      setMessages(prev => [...prev, successMessage]);
    }
  };

  const handleFollowUpClick = (question: string) => {
    if (question === "Перейти к оформлению") {
      navigate('/cart');
      return;
    }
    
    if (question.includes("комбо") || question.includes("скидка")) {
      handleSendMessage("Показать комбо-предложение со скидкой");
      return;
    }
    
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-sm">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">AI Консультант</h3>
            <p className="text-sm text-green-600">Персональный подбор БАДов</p>
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
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-sm ${message.type === 'user' ? 'bg-gradient-to-br from-gray-600 to-gray-700' : colors ? `bg-gradient-to-br from-${colors.bg.replace('bg-', '')} to-${colors.icon.replace('text-', '')}` : 'bg-gradient-to-br from-green-500 to-green-600'}`}>
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
                      
                      {/* Follow-up Questions */}
                      {message.followUpQuestions && message.followUpQuestions.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {message.followUpQuestions.map((question, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleFollowUpClick(question)}
                              className={`text-xs h-6 transition-all hover:scale-105 ${colors ? `${colors.bg} hover:${colors.hover} ${colors.text} ${colors.border}` : 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200'}`}
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
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
                                "Специально для здоровья глаз" :
                                product.keywords.some(k => ["weight loss", "weight"].includes(k)) ? 
                                "Эффективное жиросжигание" :
                                product.keywords.some(k => ["anti-aging", "skin"].includes(k)) ? 
                                "Антивозрастной уход и красота кожи" :
                                product.keywords.includes("detox") ? 
                                "Глубокое очищение организма" : 
                                "Рекомендовано для ваших потребностей"
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
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-sm">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
          placeholder="Опишите ваши потребности..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400"
        />
        <Button
          onClick={() => handleSendMessage()}
          size="icon"
          className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-sm transition-all hover:scale-105"
          disabled={!inputValue.trim() || isTyping}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AISupplementChat;
