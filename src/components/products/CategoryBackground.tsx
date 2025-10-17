import { useEffect, useState } from "react";
import { getCategoryGradientColors } from "@/utils/categoryBackgrounds";
import InteractiveBackground from "@/components/InteractiveBackground";

interface CategoryBackgroundProps {
  category: string;
}

export const CategoryBackground = ({ category }: CategoryBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const colors = getCategoryGradientColors(category);

  useEffect(() => {
    setIsLoaded(false);
    // Simulate loading for smooth transition
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [category]);

  // Create gradient strings for each layer
  const gradientLayer1 = `linear-gradient(135deg, ${colors.primary.join(', ')})`;
  const gradientLayer2 = `linear-gradient(225deg, ${colors.secondary.join(', ')})`;
  const gradientLayer3 = `radial-gradient(ellipse at top, ${colors.accent.join(', ')})`;

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base gradient layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: gradientLayer1,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Animated gradient layer 1 */}
      <div 
        className={`absolute inset-0 animate-gradient-shift transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-70' : 'opacity-0'}`}
        style={{
          background: gradientLayer2,
          backgroundSize: '200% 200%',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Animated gradient layer 2 */}
      <div 
        className={`absolute inset-0 animate-gradient-rotate transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-50' : 'opacity-0'}`}
        style={{
          background: gradientLayer3,
          backgroundSize: '150% 150%',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Pulse glow overlay */}
      <div 
        className={`absolute inset-0 animate-pulse-glow transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.primary[0]} 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Interactive particles for 'all' category */}
      {category === 'all' && (
        <div className="absolute inset-0 z-0">
          <InteractiveBackground />
        </div>
      )}

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
};
