// This file is now deprecated as we're using RSS feed data
// Keeping for backward compatibility, but all data now comes from RSS

export interface BlogPost {
  id: number;
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
}

// Empty array as we now use RSS data
export const blogPosts: BlogPost[] = [];

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return [];
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return undefined;
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return [];
};
