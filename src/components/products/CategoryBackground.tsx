import { useEffect, useState } from "react";
import { getCategoryBackground } from "@/utils/categoryBackgrounds";
import InteractiveBackground from "@/components/InteractiveBackground";

interface CategoryBackgroundProps {
  category: string;
}

export const CategoryBackground = ({ category }: CategoryBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundImage = getCategoryBackground(category);
  const isGradientBackground = backgroundImage.startsWith('linear-gradient');

  useEffect(() => {
    setIsLoaded(false);
    
    if (!isGradientBackground) {
      // Preload background image
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => {
        setTimeout(() => setIsLoaded(true), 50);
      };
    } else {
      setIsLoaded(true);
    }
  }, [backgroundImage, isGradientBackground]);

  return (
    <div 
      className={`fixed inset-0 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: isGradientBackground 
          ? backgroundImage
          : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: isGradientBackground ? 'auto' : 'cover',
        backgroundPosition: isGradientBackground ? 'center' : 'center',
        backgroundAttachment: isGradientBackground ? 'scroll' : 'fixed',
        filter: isLoaded ? 'none' : 'blur(10px)'
      }}
    >
      {category === 'all' && (
        <div className="absolute inset-0 z-0">
          <InteractiveBackground />
        </div>
      )}
    </div>
  );
};
