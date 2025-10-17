export interface CategoryGradientColors {
  primary: string[];
  secondary: string[];
  accent: string[];
}

export const getCategoryGradientColors = (category: string): CategoryGradientColors => {
  const gradients: Record<string, CategoryGradientColors> = {
    'all': {
      primary: ['rgb(250, 250, 255)', 'rgb(245, 248, 255)', 'rgb(238, 242, 255)'],
      secondary: ['rgb(252, 250, 255)', 'rgb(247, 245, 255)', 'rgb(240, 238, 255)'],
      accent: ['rgb(255, 250, 245)', 'rgb(255, 245, 240)', 'rgb(255, 240, 235)']
    },
    'beauty-supplement': {
      primary: ['rgb(255, 250, 252)', 'rgb(254, 245, 250)', 'rgb(253, 240, 248)'],
      secondary: ['rgb(254, 248, 255)', 'rgb(252, 243, 255)', 'rgb(250, 238, 255)'],
      accent: ['rgb(255, 245, 250)', 'rgb(254, 235, 245)', 'rgb(253, 228, 242)']
    },
    'weight-loss': {
      primary: ['rgb(255, 252, 245)', 'rgb(255, 248, 235)', 'rgb(254, 245, 225)'],
      secondary: ['rgb(255, 250, 240)', 'rgb(254, 245, 230)', 'rgb(253, 240, 220)'],
      accent: ['rgb(255, 245, 235)', 'rgb(254, 238, 220)', 'rgb(253, 232, 210)']
    },
    'eye-health': {
      primary: ['rgb(248, 252, 255)', 'rgb(240, 248, 255)', 'rgb(232, 245, 255)'],
      secondary: ['rgb(245, 250, 255)', 'rgb(235, 245, 255)', 'rgb(225, 240, 255)'],
      accent: ['rgb(240, 248, 255)', 'rgb(230, 243, 255)', 'rgb(220, 238, 255)']
    },
    'detox-health': {
      primary: ['rgb(248, 254, 250)', 'rgb(240, 253, 245)', 'rgb(232, 252, 240)'],
      secondary: ['rgb(245, 254, 248)', 'rgb(235, 252, 243)', 'rgb(225, 250, 238)'],
      accent: ['rgb(240, 253, 245)', 'rgb(230, 251, 240)', 'rgb(220, 249, 235)']
    },
    'digestive-health': {
      primary: ['rgb(245, 254, 252)', 'rgb(235, 252, 248)', 'rgb(225, 250, 245)'],
      secondary: ['rgb(240, 253, 250)', 'rgb(230, 251, 246)', 'rgb(220, 249, 242)'],
      accent: ['rgb(235, 252, 248)', 'rgb(225, 250, 244)', 'rgb(215, 248, 240)']
    },
    'skin-health': {
      primary: ['rgb(255, 250, 248)', 'rgb(255, 245, 243)', 'rgb(254, 240, 238)'],
      secondary: ['rgb(255, 248, 245)', 'rgb(254, 243, 240)', 'rgb(253, 238, 235)'],
      accent: ['rgb(255, 245, 242)', 'rgb(254, 238, 235)', 'rgb(253, 232, 228)']
    },
    'hearing-health': {
      primary: ['rgb(245, 253, 255)', 'rgb(235, 251, 255)', 'rgb(225, 249, 255)'],
      secondary: ['rgb(240, 252, 255)', 'rgb(230, 250, 255)', 'rgb(220, 248, 255)'],
      accent: ['rgb(235, 251, 255)', 'rgb(225, 249, 254)', 'rgb(215, 247, 253)']
    },
    'mens-health': {
      primary: ['rgb(250, 250, 255)', 'rgb(245, 245, 255)', 'rgb(240, 242, 255)'],
      secondary: ['rgb(248, 248, 255)', 'rgb(243, 243, 255)', 'rgb(238, 240, 255)'],
      accent: ['rgb(245, 245, 255)', 'rgb(238, 240, 255)', 'rgb(232, 235, 255)']
    },
    'prostate-health': {
      primary: ['rgb(248, 250, 255)', 'rgb(240, 245, 255)', 'rgb(232, 242, 255)'],
      secondary: ['rgb(245, 248, 255)', 'rgb(235, 243, 255)', 'rgb(228, 240, 255)'],
      accent: ['rgb(240, 245, 255)', 'rgb(230, 240, 255)', 'rgb(222, 235, 255)']
    },
    'bone-joint': {
      primary: ['rgb(255, 253, 245)', 'rgb(255, 250, 235)', 'rgb(254, 248, 228)'],
      secondary: ['rgb(255, 252, 240)', 'rgb(254, 249, 230)', 'rgb(253, 246, 222)'],
      accent: ['rgb(255, 250, 238)', 'rgb(254, 247, 228)', 'rgb(253, 244, 220)']
    },
    'heart-health': {
      primary: ['rgb(255, 250, 250)', 'rgb(255, 245, 246)', 'rgb(254, 240, 242)'],
      secondary: ['rgb(255, 248, 248)', 'rgb(254, 243, 244)', 'rgb(253, 238, 240)'],
      accent: ['rgb(255, 245, 246)', 'rgb(254, 238, 241)', 'rgb(253, 232, 237)']
    }
  };

  return gradients[category] || gradients['all'];
};

