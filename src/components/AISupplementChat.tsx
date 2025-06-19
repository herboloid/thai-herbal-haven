import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, Send, User } from "lucide-react";
import { allProducts, getProductsByKeywords, getComboRecommendations, Product } from "@/utils/productData";
import ChatProductCard from "./ChatProductCard";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  products?: Product[];
  followUpQuestions?: string[];
  showCombo?: boolean;
}

const AISupplementChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я помогу подобрать идеальные БАДы для ваших потребностей. Расскажите, что вас беспокоит или какую цель хотите достичь?',
      timestamp: new Date(),
      followUpQuestions: [
        "Проблемы со зрением",
        "Хочу похудеть", 
        "Здоровье и красота кожи",
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

  const getPersonalizedResponse = (query: string, products: Product[]): string => {
    const queryLower = query.toLowerCase();
    
    if (products.length === 0) {
      if (queryLower.includes("сердц") || queryLower.includes("давлен")) {
        return "К сожалению, специализированных БАДов для сердца сейчас нет в наличии. Рекомендую проконсультироваться с врачом. А пока могу предложить детокс для общего оздоровления организма.";
      }
      return "Расскажите подробнее о ваших потребностях. Возможно, я смогу предложить что-то подходящее из нашего ассортимента.";
    }

    if (products.length === 1) {
      const product = products[0];
      return `Отличный выбор! ${product.name} - это именно то, что вам нужно. Этот продукт имеет рейтинг ${product.rating} звезд и ${product.reviews} положительных отзывов. ${product.inStock <= 5 ? `⚠️ Внимание: осталось всего ${product.inStock} упаковок!` : ''}`;
    }

    if (products.length === 2) {
      return "У меня есть 2 отличных варианта для вас. Какой больше подходит по бюджету и потребностям?";
    }

    return `Нашел ${products.length} подходящих продукта. Давайте выберем наиболее подходящий именно для вас:`;
  };

  const getFollowUpQuestions = (query: string, products: Product[]): string[] => {
    const queryLower = query.toLowerCase();
    
    if (products.length > 1) {
      return [
        "Какой бюджет предпочтительнее?",
        "Есть ли хронические заболевания?",
        "Принимаете ли другие препараты?"
      ];
    }
    
    if (products.length === 1) {
      const combos = getComboRecommendations(products[0].id);
      if (combos.length > 0) {
        return ["Показать комплексное решение со скидкой"];
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

    // Обновляем контекст пользователя
    const newSymptoms = [...userContext.symptoms];
    if (!newSymptoms.includes(text.toLowerCase())) {
      newSymptoms.push(text.toLowerCase());
    }
    setUserContext(prev => ({ ...prev, symptoms: newSymptoms }));

    setTimeout(() => {
      const recommendedProducts = getProductsByKeywords(text).slice(0, 3);
      const aiResponse = getPersonalizedResponse(text, recommendedProducts);
      const followUp = getFollowUpQuestions(text, recommendedProducts);

      // Проверяем на комбо-предложение
      const isComboRequest = text.includes("комплекс") || text.includes("скидк");
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
        showCombo
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleAddToCart = (productId: number) => {
    // Имитация добавления в корзину
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      const successMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: `✅ ${product.name} добавлен в корзину! Хотите оформить заказ или добавить что-то еще?`,
        timestamp: new Date(),
        followUpQuestions: ["Перейти к оформлению", "Посмотреть сопутствующие товары", "Продолжить покупки"]
      };
      
      setMessages(prev => [...prev, successMessage]);
    }
  };

  const handleFollowUpClick = (question: string) => {
    if (question === "Перейти к оформлению") {
      navigate('/cart');
      return;
    }
    
    if (question.includes("комплекс") || question.includes("скидк")) {
      handleSendMessage("Показать комплексное решение со скидкой");
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
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">AI Консультант</h3>
            <p className="text-sm text-gray-600">Персональный подбор БАДов</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0 mb-4">
        <CardContent className="p-6">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${message.type === 'user' ? 'bg-gray-700' : 'bg-green-500'}`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-2xl px-4 py-2 ${message.type === 'user' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      <p className="text-sm">{message.content}</p>
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
                            className="text-xs h-6 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
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
                              product.keywords.some(k => ["зрение", "глаза"].includes(k)) ? 
                              "Специально для здоровья глаз" :
                              product.keywords.some(k => ["похудение", "вес"].includes(k)) ? 
                              "Эффективное жиросжигание" :
                              product.keywords.some(k => ["омоложение", "кожа"].includes(k)) ? 
                              "Омоложение и красота кожи" :
                              product.keywords.includes("детокс") ? 
                              "Глубокое очищение организма" : 
                              "Рекомендуется для ваших потребностей"
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
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
        <Input
          placeholder="Опишите ваши потребности..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          onClick={() => handleSendMessage()}
          size="icon"
          className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600"
          disabled={!inputValue.trim() || isTyping}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AISupplementChat;
