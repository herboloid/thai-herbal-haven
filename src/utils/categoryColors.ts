export interface CategoryColorScheme {
  bg: string;
  text: string;
  border: string;
  hover: string;
  icon: string;
}

export const getCategoryColors = (categoryId: string): CategoryColorScheme => {
  const colorMap: Record<string, CategoryColorScheme> = {
    'weight-loss': {
      bg: 'bg-weight-50',
      text: 'text-weight-700',
      border: 'border-weight-200',
      hover: 'hover:bg-weight-100',
      icon: 'text-weight-600'
    },
    'eye-health': {
      bg: 'bg-vision-50',
      text: 'text-vision-700',
      border: 'border-vision-200',
      hover: 'hover:bg-vision-100',
      icon: 'text-vision-600'
    },
    'heart-health': {
      bg: 'bg-heart-50',
      text: 'text-heart-700',
      border: 'border-heart-200',
      hover: 'hover:bg-heart-100',
      icon: 'text-heart-600'
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
    },
    'psoriasis': {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-200',
      hover: 'hover:bg-rose-100',
      icon: 'text-rose-600'
    },
    'hemorrhoids': {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      hover: 'hover:bg-purple-100',
      icon: 'text-purple-600'
    },
    'parasites': {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      hover: 'hover:bg-teal-100',
      icon: 'text-teal-600'
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
