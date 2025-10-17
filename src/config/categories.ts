import { Activity, Sparkles, Scale, Eye, Leaf, Heart, Ear, Users, Shield, LucideIcon } from "lucide-react";

export interface Category {
  value: string;
  labelKey: string;
  icon: LucideIcon;
  count: number;
}

export const CATEGORIES: Category[] = [
  { value: "all", labelKey: "productCategories.all", icon: Activity, count: 0 },
  { value: "beauty-supplement", labelKey: "productCategories.beauty-supplement", icon: Sparkles, count: 0 },
  { value: "weight-loss", labelKey: "productCategories.weight-loss", icon: Scale, count: 0 },
  { value: "eye-health", labelKey: "productCategories.eye-health", icon: Eye, count: 0 },
  { value: "detox-health", labelKey: "productCategories.detox-health", icon: Leaf, count: 0 },
  { value: "digestive-health", labelKey: "productCategories.digestive-health", icon: Heart, count: 0 },
  { value: "skin-health", labelKey: "productCategories.skin-health", icon: Sparkles, count: 0 },
  { value: "hearing-health", labelKey: "productCategories.hearing-health", icon: Ear, count: 0 },
  { value: "mens-health", labelKey: "productCategories.mens-health", icon: Users, count: 0 },
  { value: "prostate-health", labelKey: "productCategories.prostate-health", icon: Shield, count: 0 },
  { value: "bone-joint", labelKey: "productCategories.bone-joint", icon: Activity, count: 0 },
  { value: "heart-health", labelKey: "productCategories.heart-health", icon: Heart, count: 0 }
];
