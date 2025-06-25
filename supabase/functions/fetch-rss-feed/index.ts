
import { serve } from 'https://deno.land/std@0.208.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

// Helper function to extract text between XML tags
function extractXmlValue(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : null;
}

// Helper function to extract all items from XML
function extractXmlItems(xml: string): string[] {
  const items: string[] = [];
  const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
  let match;
  
  while ((match = itemRegex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  
  return items;
}

// Helper function to clean HTML from text
function cleanHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Helper function to extract image URL from HTML content
function extractImageUrl(html: string): string {
  const imgMatch = html.match(/<img[^>]+src="([^"]+)"/i);
  return imgMatch ? imgMatch[1] : '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png';
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

    // Extract items using regex
    const itemsXml = extractXmlItems(rssText);
    console.log('Found items:', itemsXml.length);

    const blogPosts: BlogPost[] = itemsXml.slice(0, 20).map((itemXml, index) => {
      const title = extractXmlValue(itemXml, 'title') || 'Без названия';
      const link = extractXmlValue(itemXml, 'link') || '';
      const description = extractXmlValue(itemXml, 'description') || '';
      const pubDate = extractXmlValue(itemXml, 'pubDate') || new Date().toISOString();
      const category = extractXmlValue(itemXml, 'category') || 'Здоровье';
      const guid = extractXmlValue(itemXml, 'guid') || `rss-${index}`;

      // Extract image from description if available
      const image = extractImageUrl(description);

      // Clean description from HTML
      const cleanDescription = cleanHtml(description).substring(0, 200);

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
