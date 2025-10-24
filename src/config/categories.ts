import { Activity, Scale, Heart, Bone, Target, Ear, Droplets, UserCircle, Bug, Eye, Star, Zap, LucideIcon } from "lucide-react";

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
  { value: "all", labelKey: "productCategories.all", icon: Activity, count: 0 },
  { value: "weight-loss", labelKey: "productCategories.weight-loss", icon: Scale, count: 0 },
  { value: "heart-health", labelKey: "productCategories.heart-health", icon: Heart, count: 0 },
  { value: "bone-joint", labelKey: "productCategories.bone-joint", icon: Bone, count: 0 },
  { value: "prostate-health", labelKey: "productCategories.prostate-health", icon: Target, count: 0 },
  { value: "hearing-health", labelKey: "productCategories.hearing-health", icon: Ear, count: 0 },
  { value: "psoriasis", labelKey: "productCategories.psoriasis", icon: Droplets, count: 0 },
  { value: "mens-health", labelKey: "productCategories.mens-health", icon: UserCircle, count: 0 },
  { value: "hemorrhoids", labelKey: "productCategories.hemorrhoids", icon: Zap, count: 0 },
  { value: "parasites", labelKey: "productCategories.parasites", icon: Bug, count: 0 },
  { value: "eye-health", labelKey: "productCategories.eye-health", icon: Eye, count: 0 },
  { value: "skin-health", labelKey: "productCategories.skin-health", icon: Star, count: 0 }
];
