
export interface HotButton {
  id: string;
  text: string;
  category: 'initial' | 'clarifying' | 'budget' | 'product' | 'combo' | 'final';
  context?: string[];
  priority?: number;
}

export interface ButtonScenario {
  stage: string;
  condition: (context: any) => boolean;
  buttons: HotButton[];
}

export const getInitialButtons = (): HotButton[] => [
  {
    id: 'vision',
    text: 'Vision problems',
    category: 'initial',
    context: ['vision', 'eyes']
  },
  {
    id: 'weight',
    text: 'I want to lose weight',
    category: 'initial',
    context: ['weight', 'diet']
  },
  {
    id: 'skin',
    text: 'Skin health and beauty',
    category: 'initial',
    context: ['skin', 'beauty']
  },
  {
    id: 'detox',
    text: 'Body detox',
    category: 'initial',
    context: ['detox', 'cleanse']
  },
  {
    id: 'energy',
    text: 'Energy and fatigue',
    category: 'initial',
    context: ['energy', 'fatigue']
  },
  {
    id: 'immunity',
    text: 'Immune support',
    category: 'initial',
    context: ['immunity', 'cold']
  }
];

export const getClarifyingButtons = (userContext: string[]): HotButton[] => {
  const buttons: HotButton[] = [
    {
      id: 'age',
      text: 'I\'m over 50',
      category: 'clarifying'
    },
    {
      id: 'age-young',
      text: 'I\'m under 30',
      category: 'clarifying'
    },
    {
      id: 'chronic',
      text: 'I have chronic conditions',
      category: 'clarifying'
    },
    {
      id: 'active',
      text: 'I exercise regularly',
      category: 'clarifying'
    }
  ];

  // Add context-specific clarifying questions
  if (userContext.some(ctx => ['weight', 'diet'].some(keyword => ctx.includes(keyword)))) {
    buttons.push({
      id: 'weight-goal',
      text: 'I want to lose 10+ kg',
      category: 'clarifying'
    });
  }

  if (userContext.some(ctx => ['vision', 'eyes'].some(keyword => ctx.includes(keyword)))) {
    buttons.push({
      id: 'vision-type',
      text: 'I work at computer all day',
      category: 'clarifying'
    });
  }

  return buttons.slice(0, 4); // Limit to 4 buttons
};

export const getBudgetButtons = (): HotButton[] => [
  {
    id: 'budget-low',
    text: 'Budget up to ฿500',
    category: 'budget'
  },
  {
    id: 'budget-mid',
    text: 'Budget ฿500-1000',
    category: 'budget'
  },
  {
    id: 'budget-high',
    text: 'Budget ฿1000+',
    category: 'budget'
  },
  {
    id: 'budget-premium',
    text: 'I want the best quality',
    category: 'budget'
  }
];

export const getProductButtons = (hasProducts: boolean, productCount: number): HotButton[] => {
  if (!hasProducts) return [];

  const buttons: HotButton[] = [];

  if (productCount === 1) {
    buttons.push(
      {
        id: 'add-cart',
        text: 'Add to cart',
        category: 'product',
        priority: 1
      },
      {
        id: 'learn-more',
        text: 'Learn more about ingredients',
        category: 'product'
      },
      {
        id: 'combo-offer',
        text: 'Show combo offer with discount',
        category: 'combo'
      }
    );
  } else if (productCount > 1) {
    buttons.push(
      {
        id: 'compare',
        text: 'Compare products',
        category: 'product'
      },
      {
        id: 'cheapest',
        text: 'Show cheapest option',
        category: 'product'
      },
      {
        id: 'highest-rated',
        text: 'Show highest rated',
        category: 'product'
      }
    );
  }

  return buttons;
};

export const getFinalButtons = (): HotButton[] => [
  {
    id: 'checkout',
    text: 'Go to checkout',
    category: 'final',
    priority: 1
  },
  {
    id: 'continue-shopping',
    text: 'Continue shopping',
    category: 'final'
  },
  {
    id: 'view-similar',
    text: 'View similar products',
    category: 'final'
  },
  {
    id: 'start-over',
    text: 'Start new consultation',
    category: 'final'
  }
];

export const getSmartButtons = (
  userContext: { symptoms: string[], budget?: string, hasProducts?: boolean, productCount?: number, stage: string }
): HotButton[] => {
  const { symptoms, budget, hasProducts, productCount, stage } = userContext;

  switch (stage) {
    case 'initial':
      return getInitialButtons();
    
    case 'clarifying':
      return getClarifyingButtons(symptoms);
    
    case 'budget':
      return getBudgetButtons();
    
    case 'products':
      return getProductButtons(hasProducts || false, productCount || 0);
    
    case 'final':
      return getFinalButtons();
    
    default:
      // Smart logic based on context
      if (!symptoms.length) {
        return getInitialButtons();
      }
      
      if (!budget && symptoms.length > 0) {
        return getBudgetButtons();
      }
      
      if (hasProducts && productCount) {
        return getProductButtons(hasProducts, productCount);
      }
      
      return getClarifyingButtons(symptoms);
  }
};

export const getCategoryColors = (category: HotButton['category']) => {
  switch (category) {
    case 'initial':
      return {
        bg: 'bg-blue-50 hover:bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-200'
      };
    case 'clarifying':
      return {
        bg: 'bg-green-50 hover:bg-green-100',
        text: 'text-green-700',
        border: 'border-green-200'
      };
    case 'budget':
      return {
        bg: 'bg-purple-50 hover:bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-200'
      };
    case 'product':
      return {
        bg: 'bg-orange-50 hover:bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-200'
      };
    case 'combo':
      return {
        bg: 'bg-red-50 hover:bg-red-100',
        text: 'text-red-700',
        border: 'border-red-200'
      };
    case 'final':
      return {
        bg: 'bg-gray-50 hover:bg-gray-100',
        text: 'text-gray-700',
        border: 'border-gray-200'
      };
    default:
      return {
        bg: 'bg-nature-50 hover:bg-nature-100',
        text: 'text-nature-700',
        border: 'border-nature-200'
      };
  }
};
