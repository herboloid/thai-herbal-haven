
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Since we're now using external RSS links, redirect to blog
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

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-nature-500 to-nature-600 rounded-full shadow-lg">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Статьи теперь открываются на источнике
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Все статьи нашего блога теперь ведут на оригинальные источники для получения наиболее актуальной информации.
            </p>
            <Button asChild>
              <Link to="/blog">Вернуться к блогу</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
