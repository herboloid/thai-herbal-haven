-- Drop old products table and recreate with proper structure
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  original_price TEXT,
  image_url TEXT NOT NULL,
  rating NUMERIC(2,1) DEFAULT 4.5,
  reviews_count INTEGER DEFAULT 0,
  description TEXT NOT NULL,
  keywords JSONB DEFAULT '[]'::jsonb,
  category TEXT NOT NULL,
  benefits JSONB DEFAULT '[]'::jsonb,
  in_stock INTEGER DEFAULT 0,
  badge TEXT,
  line_url TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read products
CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  USING (is_active = true);

-- Only authenticated users can manage products (for admin panel)
CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_keywords ON products USING GIN(keywords);
CREATE INDEX idx_products_active ON products(is_active);

-- Add trigger for updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert the 5 current products
INSERT INTO products (
  id, name, price, original_price, image_url, rating, reviews_count,
  description, keywords, category, benefits, in_stock, badge, line_url, sort_order
) VALUES
  (
    22,
    'Extera — Intestinal Detox & Skin Tag Removal Support Capsules',
    '฿970',
    '฿1,190',
    '/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png',
    4.9,
    156,
    'Effective formula for intestinal cleansing and detox support',
    '["detox", "cleanse", "intestinal", "toxins", "papillomas", "warts", "skin tags", "body cleanse", "digestive health"]'::jsonb,
    'detox-health',
    '["Cleanses toxins", "Improves digestion", "Supports skin health"]'::jsonb,
    12,
    NULL,
    'https://lin.ee/gkFyIZ4',
    1
  ),
  (
    21,
    'S-Complex — Anti-Aging, Brightening & Skin Firming Capsules',
    '฿999',
    '฿1,470',
    '/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png',
    4.9,
    198,
    'Complex for anti-aging, skin brightening and firming',
    '["anti-aging", "skin", "beauty", "firming", "wrinkles", "pigmentation", "brightening", "collagen", "youth"]'::jsonb,
    'beauty-supplement',
    '["Reduces wrinkles", "Improves skin firmness", "Brightens pigmentation"]'::jsonb,
    8,
    NULL,
    'https://lin.ee/gGN1rXh',
    2
  ),
  (
    20,
    'Philola — Eye Health & Vision Support Capsules',
    '฿1,190',
    '฿1,400',
    '/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png',
    4.9,
    167,
    'Comprehensive eye health and vision improvement support',
    '["vision", "eyes", "eye health", "eye strain", "myopia", "farsightedness", "sight", "visual", "eye protection"]'::jsonb,
    'eye-health',
    '["Improves visual acuity", "Reduces eye fatigue", "Protects from blue light"]'::jsonb,
    15,
    NULL,
    'https://lin.ee/ujbBjYd',
    3
  ),
  (
    19,
    'Onix — Weight Control, Fat Burning & Body Shaping Capsules',
    '฿890',
    '฿1,575',
    '/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png',
    4.8,
    175,
    'Effective complex for weight control and fat burning',
    '["weight loss", "weight", "fat burning", "body shaping", "metabolism", "appetite", "cellulite", "slimming", "diet"]'::jsonb,
    'weight-loss',
    '["Boosts metabolism", "Burns fat", "Suppresses appetite"]'::jsonb,
    6,
    NULL,
    'https://lin.ee/8OfKkNJ',
    4
  ),
  (
    18,
    'Oclarizin — Eye Health & Vision Support Capsules',
    '฿930',
    '฿1,330',
    '/lovable-uploads/f42f278d-a261-4c8f-8912-19074cdb641d.png',
    4.9,
    143,
    'Premium formula for vision support and eye health',
    '["vision", "eyes", "eye health", "cataract", "glaucoma", "retina", "sight", "visual health", "eye care"]'::jsonb,
    'eye-health',
    '["Protects retina", "Prevents cataracts", "Improves night vision"]'::jsonb,
    10,
    NULL,
    'https://lin.ee/jK1TEb0',
    5
  );