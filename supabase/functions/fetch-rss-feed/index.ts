
import { serve } from 'https://deno.land/std@0.208.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  author?: string;
  guid?: string;
}

interface BlogPost {
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
  isExternal: boolean;
  externalUrl?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rssUrl = 'https://www.inoreader.com/stream/user/1003983831/tag/Thai%20%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5';
    
    console.log('Fetching RSS from:', rssUrl);
    
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status} ${response.statusText}`);
    }

    const rssText = await response.text();
    console.log('RSS response received, length:', rssText.length);

    // Parse XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    console.log('Found items:', items.length);

    const blogPosts: BlogPost[] = Array.from(items).slice(0, 20).map((item, index) => {
      const title = item.querySelector('title')?.textContent || 'Без названия';
      const link = item.querySelector('link')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();
      const category = item.querySelector('category')?.textContent || 'Здоровье';
      const guid = item.querySelector('guid')?.textContent || `rss-${index}`;

      // Extract image from description if available
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch ? imgMatch[1] : '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png';

      // Clean description from HTML
      const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 200);

      return {
        id: guid,
        slug: `rss-${index}-${title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`,
        title,
        excerpt: cleanDescription + '...',
        content: description,
        image,
        author: {
          name: 'RSS Feed',
          title: 'Внешний источник',
          avatar: '/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png'
        },
        category,
        publishedAt: new Date(pubDate).toISOString().split('T')[0],
        readTime: Math.ceil(cleanDescription.length / 200),
        isExternal: true,
        externalUrl: link
      };
    });

    console.log('Processed blog posts:', blogPosts.length);

    return new Response(
      JSON.stringify({ posts: blogPosts }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error fetching RSS:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch RSS feed',
        details: error.message 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
