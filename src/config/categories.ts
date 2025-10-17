import { Activity, Sparkles, Scale, Eye, Leaf, Heart, Ear, UserCircle, Target, Star, Bone, Wind, LucideIcon } from "lucide-react";

/**
 * Category Configuration
 * 
 * This file defines all product categories used throughout the application.
 * Each category has:
 * - value: unique identifier used in URLs and filtering
 * - labelKey: i18n translation key for the category name
 * - icon: Lucide React icon component (ensure each category has a unique, meaningful icon)
 * - count: number of products in this category (updated dynamically)
 * 
 * Icon Guidelines:
 * - Each category should have a unique icon that represents its purpose
 * - Icons should be semantically meaningful and easily recognizable
 * - Avoid duplicate icons across different categories
 */

export interface Category {
  value: string;
  labelKey: string;
  icon: LucideIcon;
  count: number;
}

export const CATEGORIES: Category[] = [
  { value: "all", labelKey: "productCategories.all", icon: Activity, count: 0 }, // General activity/all categories
  { value: "beauty-supplement", labelKey: "productCategories.beauty-supplement", icon: Sparkles, count: 0 }, // Beauty & sparkle
  { value: "weight-loss", labelKey: "productCategories.weight-loss", icon: Scale, count: 0 }, // Weight scale
  { value: "eye-health", labelKey: "productCategories.eye-health", icon: Eye, count: 0 }, // Eye health
  { value: "detox-health", labelKey: "productCategories.detox-health", icon: Leaf, count: 0 }, // Natural detox
  { value: "digestive-health", labelKey: "productCategories.digestive-health", icon: Wind, count: 0 }, // Wind represents digestive system movement
  { value: "skin-health", labelKey: "productCategories.skin-health", icon: Star, count: 0 }, // Star for radiant skin
  { value: "hearing-health", labelKey: "productCategories.hearing-health", icon: Ear, count: 0 }, // Ear health
  { value: "mens-health", labelKey: "productCategories.mens-health", icon: UserCircle, count: 0 }, // Men's health (user profile)
  { value: "prostate-health", labelKey: "productCategories.prostate-health", icon: Target, count: 0 }, // Target represents focused prostate health
  { value: "bone-joint", labelKey: "productCategories.bone-joint", icon: Bone, count: 0 }, // Bone structure
  { value: "heart-health", labelKey: "productCategories.heart-health", icon: Heart, count: 0 } // Heart health
];
