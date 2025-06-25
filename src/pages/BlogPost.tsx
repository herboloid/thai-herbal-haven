
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useGeneratedNews, GeneratedNews } from "@/hooks/useGeneratedNews";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { news } = useGeneratedNews();
  
  // Check if this is an AI-generated article
  const isAIArticle = slug?.startsWith('ai-');
  const articleId = isAIArticle ? slug?.replace('ai-', '') : null;

  const { data: aiArticle, isLoading } = useQuery({
    queryKey: ['ai-article', articleId],
    queryFn: async () => {
      if (!articleId) return null;
      
      const { data, error } = await supabase
        .from('ai_generated_news')
        .select('*')
        .eq('id', articleId)
        .single();

      if (error) throw error;
      return data as GeneratedNews;
    },
    enabled: !!articleId,
  });

  const relatedArticles = news.filter(article => 
    article.id !== articleId && 
    article.category === aiArticle?.category
  ).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-nature-600 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลดบทความ...</p>
        </div>
      </div>
    );
  }

  if (!aiArticle && isAIArticle) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ไม่พบบทความ</h1>
          <p className="text-gray-600 mb-8">บทความที่คุณกำลังมองหาไม่มีอยู่</p>
          <Button asChild>
            <Link to="/blog">กลับไปหน้าบล็อก</Link>
          </Button>
        </div>
      </div>
    );
  }

  const article = aiArticle;
  if (!article) return null;

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Header */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>กลับไปหน้าบล็อก</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={article.image_url || '/placeholder.svg'}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-nature-600 text-white text-sm px-4 py-2 rounded-full font-medium">
                  {article.category}
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="bg-blue-500 text-white text-sm px-3 py-2 rounded-full font-medium">
                  <Sparkles className="h-4 w-4 inline mr-1" />
                  AI Generated
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b">
                <div className="flex items-center space-x-6 text-gray-600 mb-4 lg:mb-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.published_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    5 นาที
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-nature-500 to-nature-600 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI Health Writer</p>
                    <p className="text-sm text-gray-600">นักเขียนปัญญาประดิษฐ์</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">บทความที่เกี่ยวข้อง</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedArticle.image_url || '/placeholder.svg'}
                      alt={relatedArticle.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full rounded-full">
                      <Link to={`/blog/ai-${relatedArticle.id}`}>อ่านต่อ</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
