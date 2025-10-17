import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { CATEGORIES } from "@/config/categories";
import { allProducts } from "@/utils/productData";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";
import { CategoryBackground } from "@/components/products/CategoryBackground";
import { ProductFilters } from "@/components/products/ProductFilters";
import { CategoriesNavigation } from "@/components/products/CategoriesNavigation";
import { toast } from "@/hooks/use-toast";

const Products = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

  // Update search term and category when URL params change
  useEffect(() => {
    const searchFromUrl = searchParams.get("search") || "";
    const categoryFromUrl = searchParams.get("category") || "all";
    setSearchTerm(searchFromUrl);
    setFilterCategory(categoryFromUrl);
    
    // Simulate loading for skeleton
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    const newSearchParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newSearchParams.set("search", value);
    } else {
      newSearchParams.delete("search");
    }
    setSearchParams(newSearchParams);
  };

  const products = allProducts.map(p => ({
    ...p,
    category: p.category === "Beauty & Anti-Aging" ? "beauty-supplement" :
              p.category === "Weight Control & Body Shaping" ? "weight-loss" :
              p.category === "Eye Health & Vision" ? "eye-health" :
              p.category === "Detox & Cleanse" ? "detox-health" :
              p.category,
    badge: p.badge || "🌟 New"
  }));


  // Update category counts
  const categoriesWithCounts = CATEGORIES.map(category => ({
    ...category,
    count: category.value === "all" 
      ? products.length 
      : products.filter(product => product.category === category.value).length
  }));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case "price-high":
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return b.reviews - a.reviews; // popularity
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      originalPrice: product.originalPrice || undefined,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen relative">
      <CategoryBackground category={filterCategory} />

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b relative z-10 transition-colors duration-500">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {searchTerm ? `Search Results for "${searchTerm}"` : "Natural Dietary Supplements"}
          </h1>
          <p className="text-gray-600">High-quality natural dietary supplements for better health</p>
        </div>
      </header>

      <ProductFilters 
        searchTerm={searchTerm}
        sortBy={sortBy}
        onSearchChange={handleSearchChange}
        onSortChange={setSortBy}
        isGradientBackground={true}
      />

      <CategoriesNavigation 
        categories={categoriesWithCounts}
        activeCategory={filterCategory}
        onCategoryChange={(value) => {
          setFilterCategory(value);
          const newSearchParams = new URLSearchParams(searchParams);
          if (value !== "all") {
            newSearchParams.set("category", value);
          } else {
            newSearchParams.delete("category");
          }
          setSearchParams(newSearchParams);
        }}
        isGradientBackground={true}
      />

      {/* Products Grid */}
      <main className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-700 transition-colors duration-500">
              Showing {sortedProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
              // Skeleton loading
              Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            ) : (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))
            )}
          </div>

          {!isLoading && sortedProducts.length === 0 && (
            <div className="text-center py-12 col-span-full">
              <p className="text-gray-700 text-lg mb-4">
                {searchTerm 
                  ? `No products found for "${searchTerm}"`
                  : "No products found matching your filters"
                }
              </p>
              <Button 
                variant="outline" 
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
                  setSearchParams({});
                }}
              >
                {searchTerm ? "Clear Search" : "Show All Products"}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
