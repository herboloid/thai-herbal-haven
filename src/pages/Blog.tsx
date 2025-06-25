
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, BookOpen, ExternalLink } from "lucide-react";
import { useRSSFeed } from "@/hooks/useRSSFeed";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { data: blogPosts = [], isLoading, error } = useRSSFeed();
  
  // Extract unique categories from RSS posts
  const categories = ["all", ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка новостей...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-nature-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ошибка загрузки</h1>
          <p className="text-gray-600 mb-4">Не удалось загрузить RSS ленту</p>
          <Button onClick={() => window.location.reload()}>
            Попробовать снова
          </Button>
        </div>
      </div>
    );
  }

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
              Блог о Здоровье
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Последние новости и статьи о здоровье, традиционной медицине и здоровом образе жизни
            </p>
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
                {category === "all" ? "все" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Статьи не найдены</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-nature-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    {post.isExternal && (
                      <div className="absolute top-4 right-4">
                        <ExternalLink className="h-4 w-4 text-white bg-black bg-opacity-50 rounded p-1" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-nature-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} мин чтения
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.title}</p>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        {post.isExternal && post.externalUrl ? (
                          <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                            Читать полностью
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        ) : (
                          <Link to={`/blog/${post.slug}`}>Читать далее</Link>
                        )}
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
