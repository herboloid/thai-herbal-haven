
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category?: string;
  enclosure?: {
    url: string;
    type: string;
  };
}

interface RSSFeed {
  title: string;
  description: string;
  items: RSSItem[];
}

async function fetchRSSFeed(): Promise<RSSFeed> {
  const rssUrl = "https://www.inoreader.com/stream/user/1003983831/";
  
  try {
    console.log('Fetching RSS feed from:', rssUrl);
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    console.log('RSS feed fetched successfully');
    
    // Simple XML parsing for RSS
    const items: RSSItem[] = [];
    const itemMatches = xmlText.match(/<item[^>]*>[\s\S]*?<\/item>/gi) || [];
    
    for (const itemXml of itemMatches.slice(0, 20)) { // Limit to 20 items
      const title = extractXmlContent(itemXml, 'title') || 'Untitled';
      const description = extractXmlContent(itemXml, 'description') || '';
      const link = extractXmlContent(itemXml, 'link') || '';
      const pubDate = extractXmlContent(itemXml, 'pubDate') || new Date().toISOString();
      const category = extractXmlContent(itemXml, 'category') || 'General';
      
      // Extract image from enclosure or description
      const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"[^>]+type="image[^"]*"/i);
      const imgMatch = description.match(/<img[^>]+src="([^"]+)"/i);
      
      let imageUrl = '';
      if (enclosureMatch) {
        imageUrl = enclosureMatch[1];
      } else if (imgMatch) {
        imageUrl = imgMatch[1];
      } else {
        // Default health-related image
        imageUrl = "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png";
      }
      
      items.push({
        title: cleanHtml(title),
        description: cleanHtml(description).substring(0, 200) + '...',
        link,
        pubDate,
        category: cleanHtml(category),
        enclosure: imageUrl ? { url: imageUrl, type: 'image' } : undefined
      });
    }
    
    return {
      title: extractXmlContent(xmlText, 'title') || 'Health News',
      description: extractXmlContent(xmlText, 'description') || 'Latest health and wellness articles',
      items
    };
    
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
}

function extractXmlContent(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : null;
}

function cleanHtml(text: string): string {
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const feed = await fetchRSSFeed();
    
    return new Response(
      JSON.stringify(feed),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in RSS function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch RSS feed' }),
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
