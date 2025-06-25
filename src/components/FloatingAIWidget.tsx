
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Bot, X } from "lucide-react";
import AISupplementChat from "./AISupplementChat";

const FloatingAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-nature-500 to-nature-600 hover:from-nature-600 hover:to-nature-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-4 border-white/20"
            >
              <Bot className="h-6 w-6 text-white" />
            </Button>
          </DialogTrigger>
          
          {/* Chat Modal */}
          <DialogContent className="max-w-4xl max-h-[80vh] p-0 overflow-hidden bg-gradient-to-br from-nature-50 via-nature-100 to-nature-200">
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm border-b border-nature-200">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-sm">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">AI Консультант</h3>
                    <p className="text-sm text-nature-600">Персонализированный подбор добавок</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Chat Content */}
              <div className="p-6 max-h-[calc(80vh-80px)] overflow-auto">
                <AISupplementChat />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Pulsing indicator when closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="absolute inset-0 rounded-full bg-nature-400 animate-ping opacity-20"></div>
          <div className="absolute inset-2 rounded-full bg-nature-300 animate-ping opacity-30 animation-delay-75"></div>
        </div>
      )}
    </>
  );
};

export default FloatingAIWidget;
