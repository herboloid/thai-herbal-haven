import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;

      // Transform database format to app format
      return data.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.original_price || undefined,
        image: p.image_url,
        rating: Number(p.rating),
        reviews: p.reviews_count,
        description: p.description,
        keywords: p.keywords as string[],
        category: p.category,
        benefits: p.benefits as string[],
        inStock: p.in_stock,
        badge: p.badge || undefined,
        lineUrl: p.line_url || undefined,
        quantity: p.quantity || undefined,
        fdaNumber: p.fda_number || undefined,
        weight: p.weight || undefined,
        packageSize: p.package_size || undefined,
        shelfLife: p.shelf_life || undefined,
        ingredients: (p.ingredients as string[]) || undefined,
        directionsEn: p.directions_en || undefined,
        directionsTh: p.directions_th || undefined,
        detailedDescriptionEn: p.detailed_description_en || undefined,
        detailedDescriptionTh: p.detailed_description_th || undefined,
      })) as Product[];
    },
  });
};

export const useProductsByCategory = (category?: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;
      if (error) throw error;

      return data.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.original_price || undefined,
        image: p.image_url,
        rating: Number(p.rating),
        reviews: p.reviews_count,
        description: p.description,
        keywords: p.keywords as string[],
        category: p.category,
        benefits: p.benefits as string[],
        inStock: p.in_stock,
        badge: p.badge || undefined,
        lineUrl: p.line_url || undefined,
        quantity: p.quantity || undefined,
        fdaNumber: p.fda_number || undefined,
        weight: p.weight || undefined,
        packageSize: p.package_size || undefined,
        shelfLife: p.shelf_life || undefined,
        ingredients: (p.ingredients as string[]) || undefined,
        directionsEn: p.directions_en || undefined,
        directionsTh: p.directions_th || undefined,
        detailedDescriptionEn: p.detailed_description_en || undefined,
        detailedDescriptionTh: p.detailed_description_th || undefined,
      })) as Product[];
    },
    enabled: category !== undefined,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) throw error;

      return {
        id: data.id,
        name: data.name,
        price: data.price,
        originalPrice: data.original_price || undefined,
        image: data.image_url,
        rating: Number(data.rating),
        reviews: data.reviews_count,
        description: data.description,
        keywords: data.keywords as string[],
        category: data.category,
        benefits: data.benefits as string[],
        inStock: data.in_stock,
        badge: data.badge || undefined,
        lineUrl: data.line_url || undefined,
        quantity: data.quantity || undefined,
        fdaNumber: data.fda_number || undefined,
        weight: data.weight || undefined,
        packageSize: data.package_size || undefined,
        shelfLife: data.shelf_life || undefined,
        ingredients: (data.ingredients as string[]) || undefined,
        directionsEn: data.directions_en || undefined,
        directionsTh: data.directions_th || undefined,
        detailedDescriptionEn: data.detailed_description_en || undefined,
        detailedDescriptionTh: data.detailed_description_th || undefined,
      } as Product;
    },
  });
};
