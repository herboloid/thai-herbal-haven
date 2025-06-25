
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { useRSSFeed } from "@/hooks/useRSSFeed";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: blogPosts = [], isLoading } = useRSSFeed();
  
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = blogPosts
    .filter(p => p.id !== post?.id)
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
          <p className="text-gray-600 mb-8">Запрашиваемая статья не существует.</p>
          <Button asChild>
            <Link to="/blog">Вернуться к блогу</Link>
          </Button>
        </div>
      </div>
    );
  }

  // If it's an external post, redirect to the original source
  if (post.isExternal && post.externalUrl) {
    return (
      <div className="min-h-screen bg-nature-50">
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Назад к блогу</span>
              </Link>
            </Button>
          </div>
        </section>

        <div className="py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <ExternalLink className="h-16 w-16 text-nature-600 mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Переход к внешней статье
              </h1>
              <p className="text-gray-600 mb-6">
                Эта статья размещена на внешнем ресурсе. Нажмите кнопку ниже, чтобы прочитать полную версию.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full">
                  <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                    Читать на источнике
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="/blog">Вернуться к блогу</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-nature-50">
      {/* Header */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Назад к блогу</span>
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
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png';
                }}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-nature-600 text-white text-sm px-4 py-2 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b">
                <div className="flex items-center space-x-6 text-gray-600 mb-4 lg:mb-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime} мин чтения
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-600">{post.author.title}</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Похожие статьи</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png';
                      }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full rounded-full">
                      {relatedPost.isExternal && relatedPost.externalUrl ? (
                        <a href={relatedPost.externalUrl} target="_blank" rel="noopener noreferrer">
                          Читать
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        <Link to={`/blog/${relatedPost.slug}`}>Читать далее</Link>
                      )}
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
