
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

interface NewsArticle {
  title: string
  excerpt: string
  content: string
  category: string
  language: string
  image_url: string
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!)
    
    // Generate health news using OpenAI
    const newsArticles = await generateHealthNews()
    
    // Store unique articles in database
    const storedArticles = []
    
    for (const article of newsArticles) {
      const sourceHash = await generateHash(article.title + article.excerpt)
      
      // Check if article already exists
      const { data: existingArticle } = await supabase
        .from('ai_generated_news')
        .select('id')
        .eq('source_hash', sourceHash)
        .single()
      
      if (!existingArticle) {
        const { data, error } = await supabase
          .from('ai_generated_news')
          .insert([{ ...article, source_hash: sourceHash }])
          .select()
        
        if (!error && data) {
          storedArticles.push(data[0])
        }
      }
    }
    
    // Log generation result
    await supabase
      .from('news_generation_log')
      .insert([{
        generated_count: storedArticles.length,
        success: true
      }])
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        generated: storedArticles.length,
        articles: storedArticles 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
    
  } catch (error) {
    console.error('Error generating news:', error)
    
    // Log error
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey)
      await supabase
        .from('news_generation_log')
        .insert([{
          generated_count: 0,
          success: false,
          error_message: error.message
        }])
    }
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})

async function generateHealthNews(): Promise<NewsArticle[]> {
  const categories = [
    "detox", "anti-aging", "heart health", "eye health", 
    "weight management", "immunity", "stress management", "digestive health"
  ]
  
  const prompt = `
Generate 6 unique health and wellness news articles in Thai language. Each article should be:
- About natural supplements, traditional medicine, or health prevention
- Relevant to Thai health concerns and lifestyle
- Between 150-300 words
- Include practical tips or insights
- Avoid medical advice or specific health claims

Categories to use: ${categories.join(', ')}

Return ONLY a valid JSON array with this exact structure:
[
  {
    "title": "Thai title here",
    "excerpt": "Thai excerpt (2-3 sentences)",
    "content": "Full Thai article content",
    "category": "one of the categories above",
    "language": "th",
    "image_url": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
  }
]

Make sure each article has a different category and unique content.
`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openAIApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a health and wellness content generator. Generate high-quality, informative articles in Thai about natural health, supplements, and wellness.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 3000,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`)
  }

  const data = await response.json()
  const content = data.choices[0].message.content.trim()
  
  try {
    return JSON.parse(content)
  } catch (e) {
    console.error('Failed to parse OpenAI response:', content)
    throw new Error('Invalid JSON response from OpenAI')
  }
}

async function generateHash(text: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
