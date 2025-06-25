
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface RSSPost {
  id: string;
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
  link: string;
  isExternal: true;
}

export const useRSSFeed = () => {
  return useQuery({
    queryKey: ['rss-feed'],
    queryFn: async (): Promise<RSSPost[]> => {
      console.log('Fetching RSS feed...');
      
      const { data, error } = await supabase.functions.invoke('fetch-rss-feed');
      
      if (error) {
        console.error('Error fetching RSS feed:', error);
        throw error;
      }
      
      if (!data || !data.items) {
        console.log('No RSS items found');
        return [];
      }
      
      return data.items.map((item: any, index: number) => ({
        id: `rss-${index}`,
        title: item.title,
        excerpt: item.description,
        content: item.description,
        image: item.enclosure?.url || "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
        author: {
          name: "Health Expert",
          title: "Wellness Specialist",
          avatar: "/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png"
        },
        category: item.category || "Health",
        publishedAt: item.pubDate,
        readTime: Math.ceil(item.description.length / 200),
        link: item.link,
        isExternal: true as const
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  });
};
