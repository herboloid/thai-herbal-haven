
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

export const useRSSFeed = () => {
  return useQuery({
    queryKey: ['rss-feed'],
    queryFn: async (): Promise<BlogPost[]> => {
      console.log('Fetching RSS feed...');
      
      const { data, error } = await supabase.functions.invoke('fetch-rss-feed');
      
      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Failed to fetch RSS feed: ${error.message}`);
      }
      
      if (!data || !data.posts) {
        console.error('Invalid response structure:', data);
        throw new Error('Invalid response from RSS feed');
      }
      
      console.log('RSS feed fetched successfully:', data.posts.length, 'posts');
      return data.posts;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};
