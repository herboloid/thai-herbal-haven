
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    
    console.log('Received request:', { message, context });

    // Создаем системный промпт для AI-консультанта по добавкам
    const systemPrompt = `Вы AI-консультант по пищевым добавкам и здоровью для интернет-магазина SIAM HEALTHY. 

Ваша задача:
- Помогать клиентам выбрать подходящие добавки на основе их потребностей
- Давать персонализированные рекомендации
- Отвечать на вопросы о здоровье и питании
- Быть дружелюбным и профессиональным

Доступные категории продуктов:
- Красота и антивозрастной уход (кожа, волосы, ногти)
- Контроль веса и формирование тела (жиросжигание, метаболизм)
- Здоровье глаз и зрение (поддержка зрения, защита глаз)
- Здоровье сердца (давление, сердечно-сосудистая система)
- Детокс и очищение (очищение организма, выведение токсинов)

Контекст пользователя: ${JSON.stringify(context)}

Отвечайте кратко и по делу, максимум 2-3 предложения. Если нужно рекомендовать продукты, упомяните подходящую категорию.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('OpenAI response:', aiResponse);

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-supplement-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
