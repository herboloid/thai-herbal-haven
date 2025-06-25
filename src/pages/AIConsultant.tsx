
import InteractiveBackground from "@/components/InteractiveBackground";
import AISupplementChat from "@/components/AISupplementChat";
import { useLanguage } from "@/contexts/LanguageContext";

const AIConsultant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <InteractiveBackground />
      
      <section className="relative bg-gradient-to-br from-nature-50 via-nature-100 to-nature-200 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-300/20 to-nature-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {t('ai.title')}<br />
              <span className="font-bold text-gray-700">{t('ai.subtitle')}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('ai.description')}
            </p>
            
            <AISupplementChat />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultant;
