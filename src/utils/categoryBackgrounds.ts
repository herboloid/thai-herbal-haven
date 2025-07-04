

export const getCategoryBackground = (category: string): string => {
  const backgrounds: Record<string, string> = {
    'heart-health': '/lovable-uploads/c5188663-7bff-4949-8cb4-4120057bc552.png',
    'beauty-supplement': '/lovable-uploads/5763807c-0502-4b5a-9e3d-13dff779cc79.png',
    'weight-loss': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
    'eye-health': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80',
    'detox-health': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80',
    'digestive-health': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
    'skin-health': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80',
    'hearing-health': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80',
    'mens-health': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
    'prostate-health': 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1920&q=80',
    'bone-joint': 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80',
    'all': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #f0fdf4 50%, #fef3c7 75%, #fce7f3 100%)'
  };

  return backgrounds[category] || backgrounds['all'];
};

