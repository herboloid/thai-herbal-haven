import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { getCategoryColors } from "@/utils/categoryColors";
import { Category } from "@/config/categories";
import { useTranslation } from "react-i18next";

interface CategoriesNavigationProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  isGradientBackground: boolean;
}

export const CategoriesNavigation = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  isGradientBackground 
}: CategoriesNavigationProps) => {
  const { t } = useTranslation();
  
  return (
    <section 
      className={`${isGradientBackground ? 'bg-white/70' : 'bg-white/90'} backdrop-blur-sm border-b relative z-10 transition-colors duration-500`}
      role="navigation"
      aria-label="Product categories"
    >
      <div className="container mx-auto px-4 py-4">
        <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent p-0 h-auto">
            {categories.map((category) => {
              const colors = getCategoryColors(category.value);
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${colors.bg} ${colors.text} ${colors.border} ${colors.hover}
                    data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-50
                    data-[state=active]:shadow-md data-[state=active]:border-2
                    border whitespace-nowrap
                  `}
                  onClick={() => {
                    // Google Analytics tracking
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'category_click', {
                        category_id: category.value,
                        category_name: t(category.labelKey)
                      });
                    }
                  }}
                  aria-label={`${t(category.labelKey)} - ${category.count} products`}
                >
                  <Icon className={`h-4 w-4 ${colors.icon}`} aria-hidden="true" />
                  <span>{t(category.labelKey)}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};
