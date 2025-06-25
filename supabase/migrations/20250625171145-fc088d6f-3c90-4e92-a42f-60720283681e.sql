
-- Create table for AI generated news
CREATE TABLE public.ai_generated_news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'th',
  source_hash TEXT UNIQUE NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS for public access
ALTER TABLE public.ai_generated_news ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can read news" 
  ON public.ai_generated_news 
  FOR SELECT 
  USING (true);

-- Create index for better performance
CREATE INDEX idx_ai_news_language ON public.ai_generated_news(language);
CREATE INDEX idx_ai_news_category ON public.ai_generated_news(category);
CREATE INDEX idx_ai_news_published_at ON public.ai_generated_news(published_at DESC);

-- Enable pg_cron extension for scheduled tasks
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create table for tracking news generation
CREATE TABLE public.news_generation_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  generated_count INTEGER NOT NULL DEFAULT 0,
  success BOOLEAN NOT NULL DEFAULT true,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS for generation log
ALTER TABLE public.news_generation_log ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to logs
CREATE POLICY "Anyone can read generation logs" 
  ON public.news_generation_log 
  FOR SELECT 
  USING (true);
