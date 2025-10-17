export interface CategoryGradientColors {
  primary: string[];
  secondary: string[];
  accent: string[];
}

export const getCategoryGradientColors = (category: string): CategoryGradientColors => {
  const gradients: Record<string, CategoryGradientColors> = {
    'all': {
      primary: ['rgb(240, 249, 255)', 'rgb(224, 242, 254)', 'rgb(186, 230, 253)'],
      secondary: ['rgb(240, 253, 244)', 'rgb(220, 252, 231)', 'rgb(187, 247, 208)'],
      accent: ['rgb(254, 243, 199)', 'rgb(253, 230, 138)', 'rgb(252, 211, 77)']
    },
    'beauty-supplement': {
      primary: ['rgb(253, 242, 248)', 'rgb(252, 231, 243)', 'rgb(251, 207, 232)'],
      secondary: ['rgb(243, 232, 255)', 'rgb(233, 213, 255)', 'rgb(216, 180, 254)'],
      accent: ['rgb(252, 231, 243)', 'rgb(249, 168, 212)', 'rgb(244, 114, 182)']
    },
    'weight-loss': {
      primary: ['rgb(255, 247, 237)', 'rgb(254, 237, 213)', 'rgb(253, 224, 175)'],
      secondary: ['rgb(254, 243, 199)', 'rgb(253, 230, 138)', 'rgb(252, 211, 77)'],
      accent: ['rgb(254, 215, 170)', 'rgb(253, 186, 116)', 'rgb(251, 146, 60)']
    },
    'eye-health': {
      primary: ['rgb(240, 249, 255)', 'rgb(224, 242, 254)', 'rgb(186, 230, 253)'],
      secondary: ['rgb(224, 242, 254)', 'rgb(186, 230, 253)', 'rgb(125, 211, 252)'],
      accent: ['rgb(186, 230, 253)', 'rgb(125, 211, 252)', 'rgb(56, 189, 248)']
    },
    'detox-health': {
      primary: ['rgb(240, 253, 244)', 'rgb(220, 252, 231)', 'rgb(187, 247, 208)'],
      secondary: ['rgb(220, 252, 231)', 'rgb(187, 247, 208)', 'rgb(134, 239, 172)'],
      accent: ['rgb(187, 247, 208)', 'rgb(134, 239, 172)', 'rgb(74, 222, 128)']
    },
    'digestive-health': {
      primary: ['rgb(236, 253, 245)', 'rgb(209, 250, 229)', 'rgb(167, 243, 208)'],
      secondary: ['rgb(209, 250, 229)', 'rgb(167, 243, 208)', 'rgb(110, 231, 183)'],
      accent: ['rgb(167, 243, 208)', 'rgb(110, 231, 183)', 'rgb(52, 211, 153)']
    },
    'skin-health': {
      primary: ['rgb(254, 242, 242)', 'rgb(254, 226, 226)', 'rgb(254, 202, 202)'],
      secondary: ['rgb(254, 226, 226)', 'rgb(254, 202, 202)', 'rgb(252, 165, 165)'],
      accent: ['rgb(254, 202, 202)', 'rgb(252, 165, 165)', 'rgb(248, 113, 113)']
    },
    'hearing-health': {
      primary: ['rgb(236, 254, 255)', 'rgb(207, 250, 254)', 'rgb(165, 243, 252)'],
      secondary: ['rgb(207, 250, 254)', 'rgb(165, 243, 252)', 'rgb(103, 232, 249)'],
      accent: ['rgb(165, 243, 252)', 'rgb(103, 232, 249)', 'rgb(34, 211, 238)']
    },
    'mens-health': {
      primary: ['rgb(238, 242, 255)', 'rgb(224, 231, 255)', 'rgb(199, 210, 254)'],
      secondary: ['rgb(224, 231, 255)', 'rgb(199, 210, 254)', 'rgb(165, 180, 252)'],
      accent: ['rgb(199, 210, 254)', 'rgb(165, 180, 252)', 'rgb(129, 140, 248)']
    },
    'prostate-health': {
      primary: ['rgb(239, 246, 255)', 'rgb(219, 234, 254)', 'rgb(191, 219, 254)'],
      secondary: ['rgb(219, 234, 254)', 'rgb(191, 219, 254)', 'rgb(147, 197, 253)'],
      accent: ['rgb(191, 219, 254)', 'rgb(147, 197, 253)', 'rgb(96, 165, 250)']
    },
    'bone-joint': {
      primary: ['rgb(254, 252, 232)', 'rgb(254, 249, 195)', 'rgb(254, 240, 138)'],
      secondary: ['rgb(254, 249, 195)', 'rgb(254, 240, 138)', 'rgb(253, 224, 71)'],
      accent: ['rgb(254, 240, 138)', 'rgb(253, 224, 71)', 'rgb(250, 204, 21)']
    },
    'heart-health': {
      primary: ['rgb(255, 241, 242)', 'rgb(255, 228, 230)', 'rgb(254, 205, 211)'],
      secondary: ['rgb(255, 228, 230)', 'rgb(254, 205, 211)', 'rgb(252, 165, 178)'],
      accent: ['rgb(254, 205, 211)', 'rgb(252, 165, 178)', 'rgb(251, 113, 133)']
    }
  };

  return gradients[category] || gradients['all'];
};

