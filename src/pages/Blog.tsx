
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, BookOpen, RefreshCw, Sparkles } from "lucide-react";
import { useGeneratedNews } from "@/hooks/useGeneratedNews";
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { t } = useTranslation();
  const { news, isLoading, isGenerating, generateNews } = useGeneratedNews();
  const { toast } = useToast();
  
  const categories = [
    "all", 
    "detox", 
    "anti-aging", 
    "heart health", 
    "eye health", 
    "weight management", 
    "immunity", 
    "stress management", 
    "digestive health"
  ];
  
  const filteredNews = selectedCategory === "all" 
    ? news 
    : news.filter(article => article.category.toLowerCase() === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleGenerateNews = async () => {
    try {
      await generateNews();
      toast({
        title: "สำเร็จ!",
        description: "สร้างข่าวสารใหม่เรียบร้อยแล้ว",
      });
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถสร้างข่าวสารใหม่ได้",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nature-100 to-earth-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('blog.subtitle')}
            </p>
            
            {/* Generate News Button */}
            <div className="flex justify-center">
              <Button 
                onClick={handleGenerateNews}
                disabled={isGenerating}
                className="bg-gradient-to-r from-nature-500 to-nature-600 hover:from-nature-600 hover:to-nature-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    กำลังสร้างข่าว...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    สร้างข่าวใหม่
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full capitalize"
              >
                {t(`blog.categories.${category}`)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-nature-600" />
              <p className="text-gray-600">กำลังโหลดข่าวสาร...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-4">ยังไม่มีข่าวสารในหมวดหมู่นี้</p>
              <Button onClick={handleGenerateNews} variant="outline">
                <Sparkles className="h-4 w-4 mr-2" />
                สร้างข่าวใหม่
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image_url || '/placeholder.svg'}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-nature-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        <Sparkles className="h-3 w-3 inline mr-1" />
                        AI
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-nature-700 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(article.published_at)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          5 นาที
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-nature-500 to-nature-600 rounded-full flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">AI Health Writer</p>
                          <p className="text-xs text-gray-500">นักเขียนปัญญาประดิษฐ์</p>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <Link to={`/blog/ai-${article.id}`}>อ่านต่อ</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
