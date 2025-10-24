-- Delete all existing products
DELETE FROM products;

-- Insert 16 new products from document
INSERT INTO products (
  id, name, description, price, original_price, category, 
  image_url, rating, reviews_count, keywords, benefits, 
  in_stock, badge, is_active, sort_order, line_url
) VALUES
-- 1. Tchrome (Weight Management)
(1, 'Tchrome — Natural Weight Management Capsules', 
'Natural supplement for safe and effective weight control', 
'฿970', '฿1,190', 'weight-loss', 
'/lovable-uploads/tchrome.png', 
4.8, 156, 
'["weight loss", "metabolism", "appetite control", "fat burning", "natural", "garcinia", "green tea"]'::jsonb,
'["Reduces appetite and controls cravings", "Boosts metabolism and fat burning", "Blocks carbohydrate absorption", "Balances blood sugar levels"]'::jsonb,
25, 'Popular', true, 1, 'https://lin.ee/gkFyIZ4'),

-- 2. DIACARD (Heart & Blood Pressure)
(2, 'DIACARD — Heart & Blood Pressure Support',
'Advanced amino acid complex for cardiovascular balance',
'฿1,100', '฿1,350', 'heart-health',
'/lovable-uploads/diacard.png',
4.9, 198,
'["heart health", "blood pressure", "cardiovascular", "circulation", "amino acids", "magnesium"]'::jsonb,
'["Maintains normal blood pressure", "Supports heart and vascular health", "Improves blood circulation", "Reduces stress"]'::jsonb,
30, 'New', true, 2, 'https://lin.ee/gGN1rXh'),

-- 3. CARTIREX (Bone & Joint)
(3, 'CARTIREX — Bone & Joint Support',
'Complete mineral formula for strong bones and flexible joints',
'฿990', '฿1,280', 'bone-joint',
'/lovable-uploads/cartirex.png',
4.8, 143,
'["bone health", "joint support", "calcium", "flexibility", "magnesium", "zinc", "collagen"]'::jsonb,
'["Strengthens bones and prevents osteoporosis", "Reduces inflammation and joint pain", "Promotes cartilage regeneration"]'::jsonb,
20, null, true, 3, 'https://lin.ee/ujbBjYd'),

-- 4. BackPro (Men's Prostate & Vitality)
(4, 'BackPro — Men''s Prostate & Vitality Support',
'Natural supplement for prostate health and male energy',
'฿1,050', '฿1,400', 'prostate-health',
'/lovable-uploads/backpro.png',
4.9, 167,
'["prostate health", "male vitality", "testosterone", "fertility", "l-arginine", "ginseng", "zinc"]'::jsonb,
'["Supports prostate and urinary tract health", "Boosts testosterone and libido", "Enhances fertility and energy", "Strengthens immunity"]'::jsonb,
18, 'Popular', true, 4, 'https://lin.ee/8OfKkNJ'),

-- 5. Black Rhino (Men's Performance)
(5, 'Black Rhino — Men''s Prostate & Performance',
'Natural supplement for prostate health and male performance',
'฿1,200', '฿1,500', 'mens-health',
'/lovable-uploads/black-rhino.png',
4.8, 175,
'["mens health", "prostate", "performance", "vitality", "saw palmetto", "oyster extract"]'::jsonb,
'["Relieves prostatitis symptoms", "Improves blood flow and performance", "Enhances testosterone levels", "Strengthens immunity"]'::jsonb,
15, null, true, 5, 'https://lin.ee/jK1TEb0'),

-- 6. Andicellix (Hearing & Ear Nerve)
(6, 'Andicellix — Hearing & Ear Nerve Support',
'Innovative supplement for hearing recovery and tinnitus relief',
'฿1,150', '฿1,450', 'hearing-health',
'/lovable-uploads/andicellix.png',
4.9, 134,
'["hearing health", "tinnitus", "ear nerve", "auditory", "balance", "ringing"]'::jsonb,
'["Supports hearing nerve health", "Reduces tinnitus and ear pressure", "Improves sound clarity", "Relieves dizziness"]'::jsonb,
22, 'New', true, 6, 'https://lin.ee/gkFyIZ4'),

-- 7. Elsie (Skin Repair & Anti-Inflammation)
(7, 'Elsie — Skin Repair & Anti-Inflammation',
'Natural antioxidant complex for skin restoration and nail health',
'฿980', '฿1,250', 'psoriasis',
'/lovable-uploads/elsie.png',
4.8, 149,
'["skin health", "anti-inflammation", "nail strength", "glutathione", "psoriasis", "dermatitis"]'::jsonb,
'["Restores damaged skin", "Reduces itching and redness", "Promotes cell regeneration", "Strengthens nails"]'::jsonb,
19, null, true, 7, 'https://lin.ee/gGN1rXh'),

-- 8. Turbine (Male Vitality & Stamina)
(8, 'Turbine — Male Vitality & Stamina Formula',
'100% natural supplement for men''s energy and performance',
'฿1,100', '฿1,400', 'mens-health',
'/lovable-uploads/turbine.png',
4.9, 188,
'["male vitality", "stamina", "energy", "performance", "testosterone", "endurance"]'::jsonb,
'["Enhances energy and endurance", "Supports healthy testosterone", "Promotes vitality", "Improves blood flow"]'::jsonb,
24, 'Popular', true, 8, 'https://lin.ee/ujbBjYd'),

-- 9. Genesis Caps (Hearing, Nerve & Memory)
(9, 'Genesis Caps — Hearing, Nerve & Memory Support',
'Natural supplement for hearing improvement and brain support',
'฿1,050', '฿1,350', 'hearing-health',
'/lovable-uploads/genesis-caps.png',
4.8, 156,
'["hearing", "nerve health", "memory", "cognitive", "tinnitus", "brain support"]'::jsonb,
'["Improves hearing and reduces tinnitus", "Supports auditory nerves", "Enhances memory and focus", "Reduces dizziness"]'::jsonb,
21, null, true, 9, 'https://lin.ee/8OfKkNJ'),

-- 10. Geralox (Digestive & Circulatory)
(10, 'Geralox — Digestive & Circulatory Support',
'Herbal complex for digestive comfort and vascular health',
'฿920', '฿1,200', 'hemorrhoids',
'/lovable-uploads/geralox.png',
4.7, 142,
'["digestive health", "circulation", "hemorrhoids", "bowel balance", "herbal"]'::jsonb,
'["Supports intestinal health", "Promotes natural bowel movement", "Strengthens blood vessels", "Soothes irritation"]'::jsonb,
17, null, true, 10, 'https://lin.ee/jK1TEb0'),

-- 11. Helmina (Natural Detox)
(11, 'Helmina — Natural Detox & Digestive Balance',
'Herbal formula for gut cleansing and body detox',
'฿950', '฿1,230', 'parasites',
'/lovable-uploads/helmina.png',
4.8, 163,
'["detox", "digestive balance", "gut cleansing", "parasites", "intestinal health"]'::jsonb,
'["Supports natural detox", "Promotes digestive health", "Maintains intestinal balance", "Boosts liver function"]'::jsonb,
20, null, true, 11, 'https://lin.ee/gkFyIZ4'),

-- 12. Lylac Dew (Skin Brightening)
(12, 'Lylac Dew — Skin Brightening & Antioxidant',
'Glutathione complex for clear, radiant, and healthy skin',
'฿1,250', '฿1,550', 'skin-health',
'/lovable-uploads/lylac-dew.png',
4.9, 201,
'["skin brightening", "glutathione", "antioxidant", "whitening", "vitamin C", "clear skin"]'::jsonb,
'["Brightens and evens skin tone", "Reduces pigmentation and dark spots", "Strengthens skin barrier", "Protects from UV stress"]'::jsonb,
28, 'Popular', true, 12, 'https://lin.ee/gGN1rXh'),

-- 13. Oclarizin (Eye Health)
(13, 'Oclarizin — Eye Health & Vision Support',
'Natural supplement for eye protection and clear vision',
'฿930', '฿1,330', 'eye-health',
'/lovable-uploads/oclarizin.png',
4.9, 143,
'["eye health", "vision support", "retina", "macular", "screen protection", "eye fatigue"]'::jsonb,
'["Supports retinal and macular health", "Reduces eye fatigue from screens", "Maintains clear vision", "Provides antioxidant protection"]'::jsonb,
26, null, true, 13, 'https://lin.ee/ujbBjYd'),

-- 14. ONIX (Weight Management & Detox)
(14, 'ONIX — Weight Management & Detox Support',
'Plant-based formula for appetite control and fat metabolism',
'฿890', '฿1,575', 'weight-loss',
'/lovable-uploads/onix.png',
4.8, 175,
'["weight loss", "detox", "appetite control", "metabolism", "fat burning", "konjac"]'::jsonb,
'["Controls appetite and reduces overeating", "Supports fat metabolism", "Promotes gentle detox", "Boosts energy"]'::jsonb,
16, 'Sale', true, 14, 'https://lin.ee/8OfKkNJ'),

-- 15. Philola (Eye Protection)
(15, 'Philola — Eye Protection & Vision Support',
'Advanced eye health supplement with vitamins and antioxidants',
'฿1,190', '฿1,400', 'eye-health',
'/lovable-uploads/philola.png',
4.9, 167,
'["eye protection", "vision support", "lutein", "zeaxanthin", "blue light", "digital eye strain"]'::jsonb,
'["Protects retina from digital stress", "Enhances night vision", "Filters harmful blue light", "Reduces eye fatigue"]'::jsonb,
23, 'Popular', true, 15, 'https://lin.ee/jK1TEb0'),

-- 16. S-Complex (Skin Rejuvenation)
(16, 'S-Complex — Skin Rejuvenation & Anti-Aging',
'Advanced beauty supplement for radiant, firm, and youthful skin',
'฿999', '฿1,470', 'skin-health',
'/lovable-uploads/s-complex.png',
4.9, 198,
'["anti-aging", "skin rejuvenation", "collagen", "wrinkles", "firmness", "brightening"]'::jsonb,
'["Reduces wrinkles and fine lines", "Brightens dull skin", "Improves elasticity", "Deeply hydrates"]'::jsonb,
27, 'New', true, 16, 'https://lin.ee/gkFyIZ4');