-- Add new columns to products table for detailed information
ALTER TABLE products
ADD COLUMN IF NOT EXISTS quantity INTEGER,
ADD COLUMN IF NOT EXISTS fda_number TEXT,
ADD COLUMN IF NOT EXISTS weight TEXT,
ADD COLUMN IF NOT EXISTS package_size TEXT,
ADD COLUMN IF NOT EXISTS shelf_life TEXT,
ADD COLUMN IF NOT EXISTS ingredients JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS directions_en TEXT,
ADD COLUMN IF NOT EXISTS directions_th TEXT,
ADD COLUMN IF NOT EXISTS detailed_description_en TEXT,
ADD COLUMN IF NOT EXISTS detailed_description_th TEXT;

-- Update product 1: Tchrome
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-06353-1-0137',
  weight = '17.1 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Garcinia cambogia extract – 300 mg", "Green tea leaf extract – 200 mg", "Calcium pyruvate – 150 mg", "White kidney bean extract – 100 mg", "Chitosan – 75 mg", "Kelp extract – 50 mg", "Black pepper powder – 25 mg", "Ginger extract – 25 mg", "Chromium picolinate – 0.5 mg"]'::jsonb,
  directions_en = 'Take 1 capsule twice a day before meals (morning & evening). For adults only. Avoid use if pregnant or allergic to any ingredient.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 2 ครั้ง ก่อนอาหารเช้าและเย็น เหมาะสำหรับผู้ใหญ่ที่ต้องการควบคุมน้ำหนัก หลีกเลี่ยงในสตรีมีครรภ์หรือผู้ที่แพ้ส่วนประกอบ',
  detailed_description_en = 'Natural supplement for safe and effective weight control. Tchrome is a powerful blend of 9 natural extracts designed to support healthy weight management, improve digestion, and accelerate metabolism — all without stress or side effects.',
  detailed_description_th = 'อาหารเสริมจากธรรมชาติ เพื่อการลดน้ำหนักอย่างปลอดภัยและได้ผลจริง Tchrome คือสูตรสมดุลจากสารสกัดธรรมชาติ 9 ชนิด ที่ช่วย ควบคุมน้ำหนักอย่างปลอดภัย เผาผลาญไขมัน และปรับสมดุลการย่อยอาหารโดยไม่ทำร้ายร่างกาย'
WHERE id = 1;

-- Update product 2: DIACARD
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-18157-1-0143',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["L-Cysteine – 75 mg", "Magnesium – 50 mg", "L-Arginine – 50 mg", "L-Carnitine L-Tartrate – 50 mg", "L-Lysine Hydrochloride – 50 mg", "L-Methionine – 50 mg", "Bitter cucumber powder – 40 mg", "Artichoke powder – 30 mg", "Astragalus powder – 3 mg", "Cordyceps powder – 30 mg", "Fenugreek powder – 30 mg", "Grape skin extract – 30 mg", "Zinc amino acid chelate – 30 mg", "Taurine – 30 mg", "Dry fish oil powder – 30 mg"]'::jsonb,
  directions_en = 'Take 1 capsule twice daily after meals. Recommended for adults and elderly individuals. Avoid use in case of ingredient intolerance or allergy.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 2 ครั้ง หลังอาหารเช้าและเย็น เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ หลีกเลี่ยงในผู้ที่แพ้ส่วนประกอบ',
  detailed_description_en = 'Advanced amino acid and herbal complex for cardiovascular balance and healthy blood pressure. DIACARD is a comprehensive formula of 16 active ingredients that naturally support cardiovascular health. It promotes heart strength, stabilizes blood pressure, and improves circulation.',
  detailed_description_th = 'สูตรผสมกรดอะมิโน แมกนีเซียม และสมุนไพรธรรมชาติ เพื่อสุขภาพหัวใจและหลอดเลือด DIACARD คือสูตรรวมสารอาหาร 16 ชนิดที่ช่วยดูแลหัวใจและหลอดเลือดอย่างครบวงจร ช่วยให้หัวใจแข็งแรง ความดันคงที่ และระบบไหลเวียนเลือดดีขึ้นอย่างเป็นธรรมชาติ'
WHERE id = 2;

-- Update product 3: CARTIREX
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-18157-1-0027',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Calcium (from Calcium Carbonate) – 250 mg", "Magnesium (from Magnesium Oxide) – 100 mg", "Zinc (from Zinc Gluconate) – 15 mg", "L-Carnitine L-Tartrate – 25 mg", "Soy Protein Isolate – 20 mg", "Astragalus Extract – 15 mg", "Beta-Glucan (from Oat) – 15 mg", "Reishi Extract – 15 mg", "Schisandra Extract – 15 mg", "Vitamin C – 30 mg"]'::jsonb,
  directions_en = 'Take 1–2 capsules daily after meals. Recommended for adults and elderly individuals. Avoid use in case of ingredient intolerance or allergy.',
  directions_th = 'รับประทานครั้งละ 1–2 แคปซูล หลังอาหารเช้าและเย็น เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ หลีกเลี่ยงในผู้ที่แพ้ส่วนประกอบ',
  detailed_description_en = 'Complete mineral and herbal formula for strong bones, flexible joints, and healthy connective tissues. CARTIREX is a next-generation multi-nutrient formula combining minerals, amino acids, and herbal extracts to protect and rebuild bones, joints, and connective tissues.',
  detailed_description_th = 'สูตรแร่ธาตุและสมุนไพรธรรมชาติ เพื่อเสริมความแข็งแรงของกระดูกและข้อต่อ CARTIREX คือสูตรผสมสารอาหารครบถ้วน ทั้งแร่ธาตุ กรดอะมิโน และสมุนไพรธรรมชาติ ช่วยบำรุงกระดูก ข้อต่อ และเนื้อเยื่อเกี่ยวพันให้แข็งแรง'
WHERE id = 3;

-- Update product 4: BackPro
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-06353-1-0142',
  weight = '8.97 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["L-Arginine – 150 mg", "Cordyceps powder – 50 mg", "Ginkgo biloba extract – 40 mg", "Zinc gluconate – 35 mg", "Eleuthero extract – 25 mg", "Hawthorn powder – 25 mg", "Panax ginseng extract – 25 mg", "Oyster extract – 25 mg", "Soy lecithin – 25 mg", "Wolfberry (Goji) extract – 20 mg"]'::jsonb,
  directions_en = 'Take 1 capsule once or twice daily after meals. Recommended course: at least 1 month for best results. For adult men, especially those over 30.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 1–2 ครั้ง หลังอาหาร รับประทานต่อเนื่องอย่างน้อย 1 เดือน เพื่อผลลัพธ์ที่ชัดเจน เหมาะสำหรับผู้ชายอายุ 30 ปีขึ้นไป',
  detailed_description_en = 'Natural supplement for prostate health, fertility, and male energy. BackPro is a powerful men''s health complex with 10 natural ingredients that support prostate health, hormonal balance, and energy.',
  detailed_description_th = 'สูตรธรรมชาติสำหรับสุขภาพต่อมลูกหมาก ความแข็งแรง และสมรรถภาพทางเพศของผู้ชาย BackPro คือสูตรรวมสารสกัดธรรมชาติ 10 ชนิด ที่ช่วยบำรุงสุขภาพผู้ชายทั้งระบบ'
WHERE id = 4;

-- Update product 5: Black Rhino
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-06353-1-0328',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Saw Palmetto Extract", "Panax Ginseng", "Oyster Extract", "Zinc", "L-Arginine", "Cordyceps", "Ginkgo Biloba", "Maca Root", "Tribulus Terrestris", "Vitamin E"]'::jsonb,
  directions_en = 'Take 1 capsule once or twice daily after meals. Recommended course: at least 30 days for best results. For adult men, especially those aged 30+.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 1–2 ครั้ง หลังอาหาร ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดีที่สุด เหมาะสำหรับผู้ชายอายุ 30 ปีขึ้นไป',
  detailed_description_en = 'Natural supplement for prostate health, urinary comfort, and male performance. Black Rhino is a comprehensive men''s formula designed for those experiencing prostate discomfort, frequent urination, or decreased libido.',
  detailed_description_th = 'สูตรธรรมชาติสำหรับสุขภาพต่อมลูกหมาก ระบบทางเดินปัสสาวะ และสมรรถภาพทางเพศของผู้ชาย Black Rhino คือสูตรบำรุงสุขภาพชายที่พัฒนาเพื่อผู้ที่มีปัญหาเรื่องต่อมลูกหมาก ปัสสาวะถี่ หรือลดความต้องการทางเพศ'
WHERE id = 5;

-- Update product 6: Andicellix
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-18157-1-0077',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Ginkgo Biloba Extract", "Vitamin B Complex", "Magnesium", "Zinc", "Coenzyme Q10", "Alpha Lipoic Acid", "NAC (N-Acetyl Cysteine)", "Vinpocetine", "Huperzine A", "Phosphatidylserine"]'::jsonb,
  directions_en = 'Take 2 capsules daily after meals. Recommended course: at least 30 days for best results. Suitable for adults and elderly individuals.',
  directions_th = 'รับประทานครั้งละ 2 แคปซูล หลังอาหาร วันละ 1 ครั้ง ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดีที่สุด เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ',
  detailed_description_en = 'Innovative supplement for hearing recovery, tinnitus relief, and auditory nerve health. Andicellix is an advanced nutraceutical designed to support hearing, ear nerves, and balance function.',
  detailed_description_th = 'นวัตกรรมอาหารเสริมเพื่อฟื้นฟูการได้ยิน ลดอาการหูอื้อ และบำรุงประสาทการได้ยิน Andicellix เป็นอาหารเสริมสูตรเฉพาะเพื่อช่วยบำรุงการได้ยินและระบบประสาทหู'
WHERE id = 6;

-- Update product 7: Elsie
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-18157-1-0001',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["L-Cysteine – 250 mg", "L-Glutamine – 175 mg", "Bitter orange extract – 140 mg", "L-Glutathione – 125 mg", "Bilberry extract – 50 mg", "Grape skin extract – 50 mg", "Zinc amino acid chelate (15%) – 50 mg", "Glycine – 50 mg", "Vitamin C – 30 mg", "Grape seed extract – 15 mg", "Pine bark extract – 15 mg"]'::jsonb,
  directions_en = 'Take 1 capsule once or twice daily after meals. Recommended course: at least 30 days for visible results. Suitable for adults and elderly individuals.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 1–2 ครั้ง หลังอาหาร ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ชัดเจน เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ',
  detailed_description_en = 'Natural antioxidant complex for skin restoration, itch relief, and nail health. Elsie is a carefully balanced formula combining amino acids, zinc, vitamins, and herbal extracts that work together to heal, protect, and rejuvenate the skin from within.',
  detailed_description_th = 'สูตรธรรมชาติสำหรับฟื้นฟูผิว ลดอาการคัน แดง และช่วยให้เล็บแข็งแรง Elsie คือสูตรผสมกรดอะมิโน วิตามิน ซี ซิงก์ และสารสกัดจากธรรมชาติ ที่ช่วยฟื้นฟูและบำรุงผิวจากภายใน'
WHERE id = 7;

-- Update product 8: Turbine
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-06353-1-0312',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Tongkat Ali Extract", "Tribulus Terrestris", "Maca Root", "Horny Goat Weed", "L-Arginine", "Zinc", "Vitamin B Complex", "Ginseng Extract", "Fenugreek", "Ashwagandha"]'::jsonb,
  directions_en = 'Take 1 capsule daily after meals, or 30 minutes before activity for best results. Recommended continuous use: at least 1 month. Suitable for adult men.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล หลังอาหาร หรือก่อนทำกิจกรรม 30 นาที ควรรับประทานต่อเนื่องอย่างน้อย 1 เดือน เพื่อผลลัพธ์ที่ดีที่สุด เหมาะสำหรับผู้ชายทุกวัย',
  detailed_description_en = '100% natural supplement for men''s energy, performance, and reproductive health. Turbine is a premium natural supplement designed to support men''s vitality, hormonal balance, and stamina.',
  detailed_description_th = 'สูตรธรรมชาติ 100% เพื่อเสริมความแข็งแรง ความมั่นใจ และสมดุลฮอร์โมนของผู้ชาย Turbine คือสูตรบำรุงสุขภาพชายอย่างครบวงจร ช่วยเพิ่มพลัง ฟื้นฟูสมดุล และเสริมความมั่นใจในทุกด้านของชีวิต'
WHERE id = 8;

-- Update product 9: Genesis Caps
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-06353-1-0239',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Ginkgo Biloba", "Bacopa Monnieri", "Lion''s Mane Mushroom", "Vitamin B Complex", "Magnesium", "Zinc", "Phosphatidylserine", "L-Theanine", "Rhodiola Rosea", "CoQ10"]'::jsonb,
  directions_en = 'Take 2 capsules daily after meals — morning and evening recommended. Use continuously for at least 30 days for noticeable results. Suitable for adults and elderly individuals.',
  directions_th = 'รับประทานครั้งละ 2 แคปซูล หลังอาหารเช้าและเย็น ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ชัดเจน เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ',
  detailed_description_en = 'Natural supplement for hearing improvement, brain support, and nerve health. Genesis Caps is a multifunctional natural supplement designed to improve hearing, reduce ear inflammation, and support nerve and brain health.',
  detailed_description_th = 'สูตรธรรมชาติสำหรับฟื้นฟูการได้ยิน บำรุงระบบประสาท และเสริมความจำ Genesis Caps เป็นอาหารเสริมสูตรครบวงจร ที่ช่วย ฟื้นฟูการได้ยิน บำรุงประสาทหู และเสริมการทำงานของสมอง'
WHERE id = 9;

-- Update product 10: Geralox
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-06353-5-0022',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Psyllium Husk", "Senna Leaf", "Cascara Sagrada", "Aloe Vera", "Ginger Root", "Fennel Seed", "Peppermint Leaf", "Licorice Root", "Triphala", "Probiotics"]'::jsonb,
  directions_en = 'Take 1 capsule twice daily after meals (morning and evening). Recommended continuous course: 30 days or more. For adults and elderly individuals.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 2 ครั้ง หลังอาหารเช้าและเย็น แนะนำให้รับประทานต่อเนื่องอย่างน้อย 30 วัน เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ',
  detailed_description_en = 'Herbal complex for digestive comfort, bowel balance, and vascular health. Geralox is a natural dietary supplement formulated to promote healthy digestion, bowel regularity, and vascular strength.',
  detailed_description_th = 'สูตรสมุนไพรธรรมชาติ เพื่อช่วยปรับสมดุลลำไส้และลดความไม่สบายในช่องท้อง Geralox คือสูตรผสมสมุนไพรที่ช่วยให้ระบบย่อยอาหารและการขับถ่ายทำงานได้ดีขึ้น'
WHERE id = 10;

-- Update product 11: Helmina
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-06353-5-0003',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Black Walnut Hull", "Wormwood", "Clove", "Garlic Extract", "Pumpkin Seed", "Oregano Oil", "Grapefruit Seed Extract", "Papaya Leaf", "Turmeric", "Probiotics"]'::jsonb,
  directions_en = 'Take 1–2 capsules daily after meals. Recommended course: 10–30 days, depending on your wellness goals. Suitable for adults and elderly individuals.',
  directions_th = 'รับประทานครั้งละ 1–2 แคปซูล หลังอาหาร ควรรับประทานต่อเนื่อง 10–30 วัน ตามความต้องการในการดีท็อกซ์ร่างกาย เหมาะสำหรับผู้ใหญ่และผู้สูงอายุ',
  detailed_description_en = 'Herbal formula for gut cleansing, digestive health, and body detox. Helmina is a next-generation herbal supplement designed to support intestinal balance, promote gentle cleansing, and restore gut microbiota.',
  detailed_description_th = 'สูตรสมุนไพรธรรมชาติ เพื่อช่วยขับของเสีย ปรับสมดุลลำไส้ และส่งเสริมสุขภาพการย่อยอาหาร Helmina เป็นสูตรสมุนไพรที่ช่วยให้ร่างกายขับของเสียได้อย่างอ่อนโยน'
WHERE id = 11;

-- Update product 12: Lylac Dew
UPDATE products SET
  quantity = 20,
  fda_number = '11-1-06353-5-0026',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["L-Glutathione (USA)", "L-Cysteine (China)", "Vitamin C (China)", "Vitamin E (China)", "Vitamin D3 (China)", "Zinc Citrate (China)", "Grape Seed Extract (GSE)", "Black Pepper Extract (India)", "Lecithin (USA)"]'::jsonb,
  directions_en = 'Take 1 capsule once or twice daily after meals. Recommended continuous use: at least 30 days for visible results.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 1–2 ครั้ง หลังอาหาร ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดีที่สุด',
  detailed_description_en = 'Glutathione, Vitamins & Plant Extracts for Clear, Radiant, and Healthy Skin. Lylac Dew is a premium beauty supplement that promotes clear, glowing, and youthful skin from within.',
  detailed_description_th = 'สูตรกลูต้าไธโอน วิตามิน และสารสกัดจากธรรมชาติ เพื่อผิวสวยสุขภาพดีจากภายใน Lylac Dew คืออาหารเสริมเพื่อความงามระดับพรีเมียม ที่ช่วยให้ผิวกระจ่างใส เรียบเนียน และชุ่มชื้นจากภายใน'
WHERE id = 12;

-- Update product 13: Oclarizin
UPDATE products SET
  quantity = 15,
  fda_number = '11-1-06353-5-0008',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Lutein", "Zeaxanthin", "Bilberry Extract", "Vitamin A", "Vitamin C", "Vitamin E", "Zinc", "Copper", "Omega-3 Fatty Acids", "Beta-Carotene"]'::jsonb,
  directions_en = 'Take 1 capsule once or twice daily after meals. Recommended course: at least 30 days for best results.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 1–2 ครั้ง หลังอาหาร แนะนำให้รับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดี',
  detailed_description_en = 'Natural supplement for eye protection, clear vision, and visual comfort. Oclarizin is a natural complex of vitamins, minerals, and plant extracts designed to support eye health, reduce fatigue, and protect vision from daily strain and aging.',
  detailed_description_th = 'สูตรธรรมชาติสำหรับช่วยลดอาการล้าตา บำรุงจอประสาทตา และปกป้องสายตา Oclarizin เป็นอาหารเสริมจากสารสกัดธรรมชาติที่ช่วย บำรุงดวงตา ลดอาการล้า และป้องกันความเสื่อมของการมองเห็น'
WHERE id = 13;

-- Update product 14: ONIX
UPDATE products SET
  quantity = 10,
  fda_number = '11-0044-56-9003',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Konjac Fiber (Glucomannan)", "Green Tea Extract", "White Kidney Bean Extract", "Garcinia Cambogia", "Chitosan", "L-Carnitine", "Chromium Picolinate", "Reishi Mushroom", "Artichoke Extract", "Black Pepper Extract"]'::jsonb,
  directions_en = 'Take 1 capsule twice daily, 30 minutes before meals. Recommended course: at least 30 days for sustainable results.',
  directions_th = 'รับประทานครั้งละ 1 แคปซูล วันละ 2 ครั้ง ก่อนอาหาร 30 นาที ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ยั่งยืน',
  detailed_description_en = 'Plant-based formula for appetite control, fat metabolism, and gentle body cleansing. ONIX is a natural supplement designed to help you control appetite, support metabolism, and gently detox the body.',
  detailed_description_th = 'สูตรสมุนไพรจากธรรมชาติ เพื่อช่วยควบคุมความอยากอาหารและส่งเสริมระบบเผาผลาญไขมัน ONIX รวมพลังจากสารสกัดธรรมชาติ เช่น บุก ชาเขียว ถั่วขาว เห็ดหลินจือ และอาร์ติโช้ก'
WHERE id = 14;

-- Update product 15: Philola
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-06353-1-0385',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Lutein", "Zeaxanthin", "Astaxanthin", "Bilberry Extract", "Eyebright", "Vitamin A", "Vitamin C", "Vitamin E", "Zinc", "Omega-3 DHA"]'::jsonb,
  directions_en = 'Take 1–2 capsules daily after meals. Recommended continuous use: at least 30 days for best results.',
  directions_th = 'รับประทานครั้งละ 1–2 แคปซูล หลังอาหาร ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดีที่สุด',
  detailed_description_en = 'Advanced eye health supplement with vitamins, antioxidants, and carotenoids. Philola is an advanced dietary supplement formulated to support clear vision, retinal health, and protection from digital and age-related eye strain.',
  detailed_description_th = 'สูตรล้ำสมัย ผสมวิตามิน แอนติออกซิแดนท์ และแคโรทีนอยด์ เพื่อสุขภาพดวงตา Philola เป็นอาหารเสริมสูตรพิเศษที่ช่วย บำรุงสายตาและปกป้องดวงตาจากแสงสีฟ้าและความเมื่อยล้าระหว่างวัน'
WHERE id = 15;

-- Update product 16: S-Complex
UPDATE products SET
  quantity = 10,
  fda_number = '11-1-18157-1-0235',
  weight = '16.8 g',
  package_size = '2 × 11.5 × 9 cm',
  shelf_life = 'Until 2027',
  ingredients = '["Hyaluronic Acid", "Collagen Peptides", "Vitamin C", "Vitamin E", "Biotin", "Resveratrol", "CoQ10", "Grape Seed Extract", "Green Tea Extract", "Ceramides"]'::jsonb,
  directions_en = 'Take 1–2 capsules daily after meals. Recommended course: at least 30 days for visible results.',
  directions_th = 'รับประทานครั้งละ 1–2 แคปซูล หลังอาหาร ควรรับประทานต่อเนื่องอย่างน้อย 30 วัน เพื่อผลลัพธ์ที่ดีที่สุด',
  detailed_description_en = 'Anti-aging beauty supplement for radiant, firm, and youthful skin. S-Complex is an advanced nutraceutical for youthful, glowing, and elastic skin. It works from within to smooth wrinkles, even skin tone, and support collagen production.',
  detailed_description_th = 'อาหารเสริมบำรุงผิวระดับพรีเมียม เพื่อผิวดูเรียบเนียน เปล่งประกาย และกระชับจากภายใน S-Complex คืออาหารเสริมบำรุงผิวสูตรเข้มข้น ที่ช่วย ชะลอวัย เติมความชุ่มชื้น และเสริมความยืดหยุ่นของผิวจากภายใน'
WHERE id = 16;