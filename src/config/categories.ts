import { Activity, Sparkles, Scale, Eye, Leaf, Heart, Ear, Users, Shield, LucideIcon } from "lucide-react";

export interface Category {
  value: string;
  label: string;
  icon: LucideIcon;
  count: number;
}

export const CATEGORIES: Category[] = [
  { value: "all", label: "All Categories", icon: Activity, count: 0 },
  { value: "beauty-supplement", label: "Beauty & Anti-Aging", icon: Sparkles, count: 0 },
  { value: "weight-loss", label: "Weight Control", icon: Scale, count: 0 },
  { value: "eye-health", label: "Eye Health", icon: Eye, count: 0 },
  { value: "detox-health", label: "Detox & Cleanse", icon: Leaf, count: 0 },
  { value: "digestive-health", label: "Digestive Health", icon: Heart, count: 0 },
  { value: "skin-health", label: "Skin Health", icon: Sparkles, count: 0 },
  { value: "hearing-health", label: "Hearing Health", icon: Ear, count: 0 },
  { value: "mens-health", label: "Men's Health", icon: Users, count: 0 },
  { value: "prostate-health", label: "Prostate Health", icon: Shield, count: 0 },
  { value: "bone-joint", label: "Bone & Joint", icon: Activity, count: 0 },
  { value: "heart-health", label: "Heart Health", icon: Heart, count: 0 }
];
