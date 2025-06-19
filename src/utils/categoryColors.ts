export interface CategoryColorScheme {
  bg: string;
  text: string;
  border: string;
  hover: string;
  icon: string;
}

export const getCategoryColors = (categoryId: string): CategoryColorScheme => {
  const colorMap: Record<string, CategoryColorScheme> = {
    beauty: {
      bg: 'bg-beauty-50',
      text: 'text-beauty-700',
      border: 'border-beauty-200',
      hover: 'hover:bg-beauty-100',
      icon: 'text-beauty-600'
    },
    'beauty-supplement': {
      bg: 'bg-beauty-50',
      text: 'text-beauty-700',
      border: 'border-beauty-200',
      hover: 'hover:bg-beauty-100',
      icon: 'text-beauty-600'
    },
    weight: {
      bg: 'bg-weight-50',
      text: 'text-weight-700',
      border: 'border-weight-200',
      hover: 'hover:bg-weight-100',
      icon: 'text-weight-600'
    },
    'weight-loss': {
      bg: 'bg-weight-50',
      text: 'text-weight-700',
      border: 'border-weight-200',
      hover: 'hover:bg-weight-100',
      icon: 'text-weight-600'
    },
    vision: {
      bg: 'bg-vision-50',
      text: 'text-vision-700',
      border: 'border-vision-200',
      hover: 'hover:bg-vision-100',
      icon: 'text-vision-600'
    },
    'eye-health': {
      bg: 'bg-vision-50',
      text: 'text-vision-700',
      border: 'border-vision-200',
      hover: 'hover:bg-vision-100',
      icon: 'text-vision-600'
    },
    heart: {
      bg: 'bg-heart-50',
      text: 'text-heart-700',
      border: 'border-heart-200',
      hover: 'hover:bg-heart-100',
      icon: 'text-heart-600'
    },
    'heart-health': {
      bg: 'bg-heart-50',
      text: 'text-heart-700',
      border: 'border-heart-200',
      hover: 'hover:bg-heart-100',
      icon: 'text-heart-600'
    },
    detox: {
      bg: 'bg-detox-50',
      text: 'text-detox-700',
      border: 'border-detox-200',
      hover: 'hover:bg-detox-100',
      icon: 'text-detox-600'
    },
    'detox-health': {
      bg: 'bg-detox-50',
      text: 'text-detox-700',
      border: 'border-detox-200',
      hover: 'hover:bg-detox-100',
      icon: 'text-detox-600'
    },
    energy: {
      bg: 'bg-energy-50',
      text: 'text-energy-700',
      border: 'border-energy-200',
      hover: 'hover:bg-energy-100',
      icon: 'text-energy-600'
    },
    immunity: {
      bg: 'bg-immunity-50',
      text: 'text-immunity-700',
      border: 'border-immunity-200',
      hover: 'hover:bg-immunity-100',
      icon: 'text-immunity-600'
    },
    brain: {
      bg: 'bg-brain-50',
      text: 'text-brain-700',
      border: 'border-brain-200',
      hover: 'hover:bg-brain-100',
      icon: 'text-brain-600'
    },
    'digestive-health': {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      hover: 'hover:bg-green-100',
      icon: 'text-green-600'
    },
    'skin-health': {
      bg: 'bg-pink-50',
      text: 'text-pink-700',
      border: 'border-pink-200',
      hover: 'hover:bg-pink-100',
      icon: 'text-pink-600'
    },
    'hearing-health': {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      hover: 'hover:bg-cyan-100',
      icon: 'text-cyan-600'
    },
    'mens-health': {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      hover: 'hover:bg-indigo-100',
      icon: 'text-indigo-600'
    },
    'prostate-health': {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      icon: 'text-blue-600'
    },
    'bone-joint': {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      icon: 'text-amber-600'
    }
  };

  return colorMap[categoryId] || {
    bg: 'bg-gray-50',
    text: 'text-gray-700',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-100',
    icon: 'text-gray-600'
  };
};

export const getStatusColor = (status: string): string => {
  const statusMap: Record<string, string> = {
    'in-stock': 'status-in-stock',
    'low-stock': 'status-low-stock',
    'out-of-stock': 'status-out-of-stock',
    'new': 'status-new',
    'sale': 'status-sale',
    'popular': 'status-popular'
  };

  return statusMap[status] || 'bg-gray-100 text-gray-800';
};
