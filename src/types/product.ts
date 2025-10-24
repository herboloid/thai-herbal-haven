export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  keywords: string[];
  category: string;
  benefits: string[];
  inStock: number;
  badge?: string;
  lineUrl?: string;
  quantity?: number;
  fdaNumber?: string;
  weight?: string;
  packageSize?: string;
  shelfLife?: string;
  ingredients?: string[];
  directionsEn?: string;
  directionsTh?: string;
  detailedDescriptionEn?: string;
  detailedDescriptionTh?: string;
}
