import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowLeft, Plus } from "lucide-react";
import { CATEGORIES } from "@/config/categories";

export default function AdminProducts() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    originalPrice: "",
    imageUrl: "",
    rating: "4.5",
    reviewsCount: "0",
    description: "",
    keywords: "",
    category: "",
    benefits: "",
    inStock: "0",
    badge: "",
    lineUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from('products').insert({
        id: parseInt(formData.id),
        name: formData.name,
        price: formData.price,
        original_price: formData.originalPrice || null,
        image_url: formData.imageUrl,
        rating: parseFloat(formData.rating),
        reviews_count: parseInt(formData.reviewsCount),
        description: formData.description,
        keywords: formData.keywords.split(',').map(k => k.trim()),
        category: formData.category,
        benefits: formData.benefits.split(',').map(b => b.trim()),
        in_stock: parseInt(formData.inStock),
        badge: formData.badge || null,
        line_url: formData.lineUrl || null,
        is_active: true,
      });

      if (error) throw error;

      toast.success("Product added successfully!");
      setFormData({
        id: "",
        name: "",
        price: "",
        originalPrice: "",
        imageUrl: "",
        rating: "4.5",
        reviewsCount: "0",
        description: "",
        keywords: "",
        category: "",
        benefits: "",
        inStock: "0",
        badge: "",
        lineUrl: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Product
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="id">Product ID *</Label>
                  <Input
                    id="id"
                    type="number"
                    required
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    required
                    placeholder="฿970"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="originalPrice">Original Price</Label>
                  <Input
                    id="originalPrice"
                    placeholder="฿1,190"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="imageUrl">Image URL *</Label>
                <Input
                  id="imageUrl"
                  required
                  placeholder="/lovable-uploads/..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="reviewsCount">Reviews Count</Label>
                  <Input
                    id="reviewsCount"
                    type="number"
                    value={formData.reviewsCount}
                    onChange={(e) => setFormData({ ...formData, reviewsCount: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="inStock">In Stock</Label>
                  <Input
                    id="inStock"
                    type="number"
                    value={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="keywords">Keywords (comma separated) *</Label>
                <Input
                  id="keywords"
                  required
                  placeholder="detox, cleanse, intestinal"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="benefits">Benefits (comma separated) *</Label>
                <Textarea
                  id="benefits"
                  required
                  placeholder="Cleanses toxins, Improves digestion"
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="badge">Badge</Label>
                  <Input
                    id="badge"
                    placeholder="🌟 New"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="lineUrl">Line URL</Label>
                  <Input
                    id="lineUrl"
                    placeholder="https://lin.ee/..."
                    value={formData.lineUrl}
                    onChange={(e) => setFormData({ ...formData, lineUrl: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
