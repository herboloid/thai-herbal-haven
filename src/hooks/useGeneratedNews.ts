
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';

export interface GeneratedNews {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  language: string;
  image_url: string | null;
  published_at: string;
  created_at: string;
}

export const useGeneratedNews = () => {
  const { i18n } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: news, isLoading, error, refetch } = useQuery({
    queryKey: ['generated-news', i18n.language],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_generated_news')
        .select('*')
        .eq('language', i18n.language)
        .order('published_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      return data as GeneratedNews[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const generateNews = async () => {
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-health-news', {
        body: { language: i18n.language }
      });

      if (error) throw error;
      
      // Refetch news after generation
      await refetch();
      
      return data;
    } catch (error) {
      console.error('Error generating news:', error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    news: news || [],
    isLoading,
    error,
    isGenerating,
    generateNews,
    refetch
  };
};
