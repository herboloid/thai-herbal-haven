
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, Send, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  products?: ProductRecommendation[];
}

interface ProductRecommendation {
  id: number;
  name: string;
  price: string;
  image: string;
  reason: string;
}

const AISupplementChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я помощник по подбору БАДов. Расскажите о ваших потребностях или проблемах со здоровьем, и я подберу подходящие добавки.',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Проблемы со зрением",
    "Хочу похудеть", 
    "Здоровье сердца",
    "Омоложение кожи",
    "Детокс организма"
  ];

  const products = [
    {
      id: 22,
      name: "Extera — Intestinal Detox & Skin Tag Removal Support Capsules",
      price: "฿970",
      image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
      keywords: ["детокс", "очищение", "кишечник", "токсины"]
    },
    {
      id: 21,
      name: "S-Complex — Anti-Aging, Brightening & Skin Firming Capsules",
      price: "฿999",
      image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
      keywords: ["омоложение", "кожа", "антиэйдж", "красота", "упругость"]
    },
    {
      id: 20,
      name: "Philola — Eye Health & Vision Support Capsules",
      price: "฿1,190",
      image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
      keywords: ["зрение", "глаза", "здоровье глаз"]
    },
    {
      id: 19,
      name: "Onix — Weight Control, Fat Burning & Body Shaping Capsules",
      price: "฿890",
      image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
      keywords: ["похудение", "вес", "жиросжигание", "фигура", "метаболизм"]
    },
    {
      id: 18,
      name: "Oclarizin — Eye Health & Vision Support Capsules",
      price: "฿930",
      image: "/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png",
      keywords: ["зрение", "глаза", "здоровье глаз"]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRecommendations = (query: string): ProductRecommendation[] => {
    const queryLower = query.toLowerCase();
    const recommendations: ProductRecommendation[] = [];

    products.forEach(product => {
      const hasMatch = product.keywords.some(keyword => 
        queryLower.includes(keyword) || keyword.includes(queryLower)
      );

      if (hasMatch) {
        let reason = "";
        if (product.keywords.some(k => ["зрение", "глаза"].includes(k))) {
          reason = "Специально разработан для поддержки здоровья глаз и улучшения зрения";
        } else if (product.keywords.some(k => ["похудение", "вес", "жиросжигание"].includes(k))) {
          reason = "Помогает контролировать вес и ускоряет метаболизм";
        } else if (product.keywords.some(k => ["омоложение", "кожа", "антиэйдж"].includes(k))) {
          reason = "Способствует омоложению кожи и повышению её упругости";
        } else if (product.keywords.includes("детокс")) {
          reason = "Эффективно очищает организм от токсинов";
        }

        recommendations.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          reason
        });
      }
    });

    return recommendations.slice(0, 3);
  };

  const getAIResponse = (query: string): string => {
    const queryLower = query.toLowerCase();
    
    if (queryLower.includes("зрение") || queryLower.includes("глаза")) {
      return "Для поддержки здоровья глаз рекомендую следующие БАДы:";
    } else if (queryLower.includes("похуд") || queryLower.includes("вес")) {
      return "Для контроля веса и жиросжигания подойдут эти добавки:";
    } else if (queryLower.includes("кожа") || queryLower.includes("омолож") || queryLower.includes("антиэйдж")) {
      return "Для омоложения и здоровья кожи рекомендую:";
    } else if (queryLower.includes("детокс") || queryLower.includes("очищ") || queryLower.includes("токсин")) {
      return "Для детоксикации и очищения организма:";
    } else if (queryLower.includes("сердц")) {
      return "К сожалению, в данный момент у нас нет специализированных БАДов для сердца в наличии. Рекомендую обратиться к врачу за консультацией.";
    } else {
      return "Расскажите подробнее о ваших потребностях. Какие проблемы со здоровьем вас беспокоят?";
    }
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

    // Simulate AI thinking delay
    setTimeout(() => {
      const recommendations = getRecommendations(text);
      const aiResponse = getAIResponse(text);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        products: recommendations
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
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
            <h3 className="font-semibold text-gray-800">AI Помощник</h3>
            <p className="text-sm text-gray-600">Подбор БАДов</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {quickQuestions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleSendMessage(question)}
            className="rounded-full bg-white/80 hover:bg-green-50 text-gray-700 border-gray-300"
          >
            {question}
          </Button>
        ))}
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
                  <div>
                    <div className={`rounded-2xl px-4 py-2 ${message.type === 'user' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.products && message.products.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.products.map((product) => (
                          <Card key={product.id} className="border border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-3">
                              <div className="flex items-center space-x-3">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-12 h-12 object-contain bg-white rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h4>
                                  <p className="text-xs text-gray-600 mt-1">{product.reason}</p>
                                  <p className="text-sm font-semibold text-green-600 mt-1">{product.price}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
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
          placeholder="Опишите ваши потребности в БАДах..."
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
