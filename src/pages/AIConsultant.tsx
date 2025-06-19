
import InteractiveBackground from "@/components/InteractiveBackground";
import AISupplementChat from "@/components/AISupplementChat";

const AIConsultant = () => {
  return (
    <div className="min-h-screen">
      <InteractiveBackground />
      
      <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6 leading-tight">
              AI Supplement<br />
              <span className="font-normal text-gray-700">Consultant</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized supplement recommendations based on your health goals and needs. 
              Our AI consultant will help you find the perfect products for your wellness journey.
            </p>
            
            <AISupplementChat />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultant;
