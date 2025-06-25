
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  category: string;
  publishedAt: string;
  readTime: number;
  isExternal?: boolean;
  externalUrl?: string;
}

// Локальные посты удалены - теперь используется RSS лента
export const blogPosts: BlogPost[] = [];

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
