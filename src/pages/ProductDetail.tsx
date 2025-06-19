import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Award,
  ChevronLeft,
  Plus,
  Minus
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  // Get product data based on ID
  const getProductData = (productId: string) => {
    if (productId === "17") {
      return {
        id: 17,
        name: "Helmina — Intestinal Detox, Toxin Cleanse & Skin Tag Removal Support",
        price: "$28",
        originalPrice: "$33",
        images: [
          "/lovable-uploads/5b11406a-c72a-4900-af98-f63e310c5f46.png",
          "/lovable-uploads/6310a0be-3128-4547-84bf-26eeba049c4c.png",
          "/lovable-uploads/afe2a7cd-26f3-48cd-8974-ed715e646678.png"
        ],
        rating: 4.9,
        reviews: 187,
        badge: "🌟 New",
        inStock: true,
        description: "Helmina is a detox supplement that helps eliminate toxins and waste from the body. It prevents the formation of skin tags, supports the growth of beneficial gut bacteria, balances the digestive system, and improves bowel movements for better overall gut health.",
        benefits: [
          "Removes toxins and waste from the body",
          "Increases beneficial gut flora",
          "Balances digestion and promotes regular bowel movements",
          "Relieves bloating, flatulence, and constipation",
          "Helps prevent skin tags and warts",
          "Stimulates immune system function"
        ],
        ingredients: "Turmeric Powder, Grapefruit Powder, Sage Powder, Ginger Extract, Garlic Extract, Black Pepper Extract",
        dosage: "Take 2 capsules daily before bedtime",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "15 capsules per box",
        registration: "FDA Thailand Registration No.: 1-106353-5-0003",
        idealFor: [
          "Individuals with skin tags or warts",
          "Those who consume raw or improperly cooked foods",
          "People suffering from constipation, hard stools, or low fiber intake",
          "Those with bloating, indigestion, or intestinal inflammation",
          "Individuals with poor diet and unhealthy eating habits",
          "People exposed to unhygienic environments or who work outdoors"
        ]
      };
    }
    
    if (productId === "16") {
      return {
        id: 16,
        name: "Geralox — Hemorrhoid Relief & Digestive Health Support",
        price: "$26",
        originalPrice: "$31",
        images: [
          "/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png",
          "/lovable-uploads/867d3781-6d51-456d-9009-b009290b631f.png",
          "/lovable-uploads/47530b00-b88e-4875-8a3e-6f0bb93c0acf.png"
        ],
        rating: 4.8,
        reviews: 156,
        badge: "🌟 New",
        inStock: true,
        description: "Geralox helps relieve all types of hemorrhoids, prevents complications in the digestive and excretory systems, and addresses constipation and rectal bleeding. Strengthens blood vessels around the rectum, reduces inflammation, and helps relieve pain caused by hemorrhoids.",
        benefits: [
          "Strengthens blood vessels in the rectal area and reduces inflammation",
          "Alleviates the severity of hemorrhoids — reduces swelling, redness, and irritation",
          "Restores digestive system function and relieves chronic constipation",
          "Stimulates bowel movement and softens stool for easier passage",
          "Relieves bloating, flatulence, abdominal discomfort, and gas"
        ],
        ingredients: "Bilberry Extract, Gotu Kola Extract, Grapefruit Extract, Ginger Extract, Grape Seed Extract, Black Pepper Extract",
        dosage: "Take 2 capsules daily: 1 capsule with breakfast and 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "10 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-06353-5-0022",
        idealFor: [
          "Individuals with bowel movement issues or frequent constipation",
          "People suffering from internal or external hemorrhoids",
          "Those who strain or take a long time to defecate",
          "People with anal itching or blood in the stool",
          "Those who consume little fiber, fruits, vegetables, or drink little water"
        ]
      };
    }
    
    if (productId === "15") {
      return {
        id: 15,
        name: "Genesis Caps — Hearing Restoration & Ear Health Support",
        price: "$38",
        originalPrice: "$45",
        images: [
          "/lovable-uploads/a4aea223-69b4-4f7a-b244-3c5d71392fe0.png",
          "/lovable-uploads/430db4bb-4acf-4d04-94ac-038596a91158.png",
          "/lovable-uploads/cb11c722-9375-41f5-9a6a-ffc51ab226a5.png"
        ],
        rating: 4.7,
        reviews: 164,
        badge: "🌟 New",
        inStock: true,
        description: "Genesis Caps help relieve hearing problems and reduce the risk of hearing nerve damage. They support the restoration of outer, middle, and inner ear function, improve hearing clarity, and relieve symptoms such as ear fullness, ear pain, ringing or noise in the ears, and inner ear fluid imbalance.",
        benefits: [
          "Restores hearing and nourishes auditory nerves",
          "Slows hearing nerve degeneration",
          "Reduces future risk of hearing loss",
          "Relieves ear fullness, ear pain, hearing loss, and ringing sounds",
          "Helps prevent earwax buildup and ear infections"
        ],
        ingredients: "L-Arginine, Cordyceps Powder, Ginkgo Biloba Extract, Siberian Ginseng Extract, Zinc Amino Acid Chelate, Hawthorn Powder, Korean Ginseng Extract, Taurine, Oyster Extract, Vitamin C, Selenium Yeast (2000 ppm)",
        dosage: "Take 2 capsules daily with breakfast",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "15 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-06353-1-0239",
        idealFor: [
          "Individuals experiencing reduced hearing (near or far)",
          "People who struggle to follow conversations or unconsciously speak louder",
          "Those with ear fullness, pain, ringing, or buzzing",
          "Frequent headphone users or those working in noisy environments"
        ]
      };
    }
    
    if (productId === "14") {
      return {
        id: 14,
        name: "Turbine — Prostate & Sexual Health Support",
        price: "$42",
        originalPrice: "$49",
        images: [
          "/lovable-uploads/7e5ab9ec-c4af-456d-b2da-f7a95ed6efa5.png",
          "/lovable-uploads/3fa6070e-dced-481a-a89b-b1169d829599.png",
          "/lovable-uploads/48778494-8bf5-4dc3-acce-eae6989bb523.png"
        ],
        rating: 4.8,
        reviews: 142,
        badge: "🌟 New",
        inStock: true,
        description: "Turbine helps reduce prostate inflammation, improves blood flow to the male genital area and pelvic region, and restores normal urinary function. It supports reproductive system strength, balances male hormone levels, and enhances overall male health.",
        benefits: [
          "Improves blood circulation in the pelvic and genital area",
          "Restores prostate function and reduces prostate enlargement",
          "Prevents urinary tract infections and eases urination problems",
          "Strengthens the male reproductive system",
          "Helps balance testosterone levels",
          "Promotes overall male health"
        ],
        ingredients: "L-Arginine, Cordyceps Powder, Ginkgo Biloba Extract, Siberian Ginseng Extract, Korean Ginseng Extract, Taurine, Zinc Amino Acid Chelate, Oyster Extract, Ascorbic Acid (Vitamin C), Selenium-Enriched Yeast, Niacin, Pyridoxine Hydrochloride (Vitamin B6)",
        dosage: "Take 2 capsules daily: 1 capsule with breakfast and 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "10 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-06353-1-0312",
        idealFor: [
          "Men with enlarged prostate",
          "Individuals with urination problems (slow stream, burning, incomplete emptying)",
          "Men with erectile dysfunction",
          "Men seeking hormone balance and vitality"
        ]
      };
    }
    
    if (productId === "13") {
      return {
        id: 13,
        name: "Elsie — Skin Restoration & Fungal Infection Support",
        price: "$35",
        originalPrice: "$42",
        images: [
          "/lovable-uploads/f4d1f76d-a661-4428-a1b3-04a1f64eee34.png",
          "/lovable-uploads/eb38b4fc-a654-4d1b-9403-76464303b1fe.png",
          "/lovable-uploads/240b1da8-88bc-44c9-b6aa-7549438e7b17.png"
        ],
        rating: 4.9,
        reviews: 198,
        badge: "🌟 New",
        inStock: true,
        description: "Elsie helps repair skin cells damaged by various skin conditions such as eczema, psoriasis, nail fungus, rashes, and tinea. Provides anti-inflammatory effects and strengthens immune function to prevent the spread of skin bacteria and fungi.",
        benefits: [
          "Inhibits the growth of skin fungi and bacteria",
          "Restores skin structure, reduces inflammation, and promotes healing",
          "Alleviates skin inflammation, burning, itching, and pain",
          "Boosts immunity and resistance to skin diseases"
        ],
        ingredients: "L-Cysteine, L-Glutamine, Bitter Orange Extract, L-Glutathione, Bilberry Extract, Grape Seed Extract, Zinc Amino Acid Chelate (15%), Glycine, Vitamin C, Grape Seed Extract, Pine Bark Extract, Selenium-Enriched Yeast, Natural Vitamin E, Pyridoxine Hydrochloride (Vitamin B6), Vitamin B12, Vitamin D3, Thiamine Monohydrate, Riboflavin",
        dosage: "Take 1 capsule with breakfast and 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "15 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-18157-1-0001",
        idealFor: [
          "Individuals with various skin problems",
          "Dry, flaky, peeling skin",
          "Red, itchy, inflamed skin",
          "Discoloration or deformity of fingernails or toenails"
        ]
      };
    }
    
    if (productId === "12") {
      return {
        id: 12,
        name: "Andicellix — Hearing Support & Ear Nerve Protection",
        price: "$40",
        originalPrice: "$47",
        images: [
          "/lovable-uploads/1d68a6b5-de0a-4b8b-8fcc-4faebf7de5d3.png",
          "/lovable-uploads/76d935e5-5b80-4180-a9d3-943a9ec07118.png",
          "/lovable-uploads/51976c1c-7378-45d1-ba3d-6f2260a4664d.png"
        ],
        rating: 4.8,
        reviews: 127,
        badge: "🌟 New",
        inStock: true,
        description: "Andicellix helps stimulate hearing ability and improves auditory nerve function. Effectively relieves symptoms related to ear conditions such as tinnitus, hearing loss, ear fullness, ear pressure, and age-related hearing decline. Also supports balance and helps reduce dizziness and vertigo caused by inner ear imbalances.",
        benefits: [
          "Naturally restores and improves hearing",
          "Stimulates auditory nerves and slows hearing deterioration",
          "Reduces symptoms of tinnitus, ear fullness, blocked ears, and ringing sounds",
          "Eases dizziness, vertigo, and balance issues caused by inner ear fluid imbalance"
        ],
        ingredients: "Astragalus Powder, Dong Quai Extract, Beta-Glucan from Oats, Reishi Mushroom Extract, Ho Shou Wu (Fo-Ti) Powder, Grape Seed Extract, Zinc Amino Acid Chelate (15%), L-Cysteine, Taurine, Broccoli Powder, Licorice Extract, Cordyceps Powder, Korean Ginseng Extract, Goji Berry Extract, Green Tea Extract, Pomegranate Seed Extract, Shiitake Mushroom Extract, Turmeric Powder, Vitamin C, Fish Oil Powder, Alpha Lipoic Acid, Garlic Extract, Ginger Extract, Kelp Extract, Blueberry Extract, Selenium-Enriched Yeast, Coenzyme Q10, Natural Vitamin E, Copper Gluconate, Pyridoxine Hydrochloride (Vitamin B6), Vitamin B12, Vitamin D3, Chromium Picolinate, Folic Acid",
        dosage: "Take 2 capsules daily with breakfast",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "10 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-18157-1-0077",
        idealFor: [
          "Individuals experiencing reduced hearing (near or far)",
          "People who struggle with conversation clarity or unconsciously speak louder",
          "Those with ear fullness, pain, ringing, or buzzing sounds",
          "Frequent headphone users or those exposed to loud environments",
          "People with a history of head, brain, or ear injuries",
          "Individuals with family history of hearing loss"
        ]
      };
    }
    
    if (productId === "11") {
      return {
        id: 11,
        name: "Black Rhino — Male Performance & Testosterone Booster",
        price: "$48",
        originalPrice: "$55",
        images: [
          "/lovable-uploads/30a54550-b6ae-4591-b827-2d061f202b88.png",
          "/lovable-uploads/e58f4d37-0777-4368-a630-dd1811a0d807.png",
          "/lovable-uploads/5a345917-fccc-4229-bd59-9eb9e83485d0.png"
        ],
        rating: 4.8,
        reviews: 89,
        badge: "🌟 New",
        inStock: true,
        description: "Black Rhino helps naturally increase testosterone levels in men, boosting libido, enhancing sexual desire, and improving overall sexual performance. Supports longer, stronger erections, delays ejaculation, and improves stamina. Also promotes overall vitality, energy, and well-being.",
        benefits: [
          "Enhances sexual performance and desire",
          "Boosts libido and sexual arousal",
          "Reduces symptoms of prostatitis and prostate enlargement",
          "Balances male hormones",
          "Increases energy, strength, and endurance"
        ],
        ingredients: "L-Arginine, Cordyceps Powder, Siberian Ginseng Extract, Ginkgo Biloba Extract, Korean Ginseng Extract, Oyster Extract, Zinc Amino Acid Chelate, Hawthorn Powder, Selenium-Enriched Yeast",
        dosage: "Take 1 capsule with breakfast and 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "10 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-06353-1-01328",
        idealFor: [
          "Men with sexual performance issues",
          "Men struggling with premature ejaculation",
          "Older men with declining testosterone levels",
          "Anyone wanting to improve blood flow to the genital area"
        ]
      };
    }
    
    if (productId === "10") {
      return {
        id: 10,
        name: "BackPro — Prostate Health & Urinary Function Support",
        price: "$45",
        originalPrice: "$52",
        images: [
          "/lovable-uploads/b99a13ac-aec8-45e4-975b-d6e1c5618f9b.png",
          "/lovable-uploads/6ae232f3-638c-4b31-a162-81726200c6b8.png",
          "/lovable-uploads/cd55ad2c-2744-4f3f-bb08-aeaa1a47bcee.png"
        ],
        rating: 4.7,
        reviews: 173,
        badge: "🔥 New",
        inStock: true,
        description: "BackPro helps slow the enlargement of prostate cells and improves blood circulation in the male reproductive system. It restores normal urinary function, reduces painful or difficult urination, and supports overall prostate health — helping to lower the risk of future prostatitis.",
        benefits: [
          "Prevents prostate enlargement and prostatitis",
          "Promotes smooth and easy urination",
          "Relieves burning, weak stream, incomplete emptying, or frequent urination",
          "Reduces bladder inflammation",
          "Helps prevent urinary tract infections",
          "Anti-inflammatory effect on the prostate",
          "Reduces pelvic and testicular pain or discomfort",
          "Improves blood flow in the pelvic region"
        ],
        ingredients: "L-Arginine, Cordyceps Powder, Ginkgo Biloba Extract, Zinc Gluconate, Siberian Ginseng Extract, Hawthorn Powder, Korean Ginseng Extract, Oyster Extract, Soy Lecithin, Goji Berry Extract, Ascorbic Acid (Vitamin C), Reishi Mushroom Extract, Black Galingale (Kaempferia parviflora) Powder, Niacin, Selenium Yeast (2000 ppm), Pyridoxine Hydrochloride (Vitamin B6)",
        dosage: "Take 1 capsule with breakfast and 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "15 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-06353-1-0142",
        idealFor: [
          "Men aged 40 and above",
          "Individuals with blood in urine or painful urination",
          "Men with urinary difficulties or weak flow",
          "People experiencing painful or strained urination",
          "Men with frequent nighttime urination"
        ]
      };
    }
    
    if (productId === "9") {
      return {
        id: 9,
        name: "Carthisin — Bone & Joint Health Support",
        price: "$38",
        originalPrice: "$45",
        images: [
          "/lovable-uploads/7cc33d76-2c30-4d3c-a0a1-6b69aead89ea.png",
          "/lovable-uploads/6142098d-8427-4f9a-845e-21570660ab73.png",
          "/lovable-uploads/2836d04a-02d7-488b-9476-c6b3965d2063.png"
        ],
        rating: 4.8,
        reviews: 142,
        badge: "🦴 Joint Health",
        inStock: true,
        description: "Carthisin helps repair and regenerate bones, tendons, and joints throughout the body. Increases essential calcium for joints, promotes the production of synovial fluid, and relieves chronic pain, swelling, and inflammation caused by various bone and joint disorders.",
        benefits: [
          "Increases bone density, helping reduce the risk of osteoporosis",
          "Protects joint cartilage and boosts synovial fluid production",
          "Strengthens and improves joint flexibility",
          "Reduces friction and impact stress on joints",
          "Eases inflammation, pain, swelling, or burning caused by bone and joint diseases"
        ],
        ingredients: "New Zealand Green-Lipped Mussel Powder, Magnesium Oxide, Zinc Gluconate, L-Carnitine L-Tartrate, L-Cysteine, Astragalus Powder, L-Arginine, L-Proline, Beta-Glucan from Oats, Peppermint Powder, Reishi Mushroom Extract, Schisandra Powder, Fish Oil Powder, Vitamin C, Ginkgo Biloba Extract, Grape Seed Extract, Taurine, Alpha Lipoic Acid, Alfalfa Powder, Licorice Root Powder, Dong Quai Extract, Rosehip Extract, Siberian Ginseng Extract, Black Currant Extract, Gotu Kola Powder, Selenium-Enriched Yeast, Coenzyme Q10, Niacin, Natural Vitamin E (D-alpha tocopheryl acetate) 6.8 IU, Pine Bark Extract, Copper Gluconate, Calcium D-Pantothenate, Pyridoxine Hydrochloride (Vitamin B6), Vitamin B12 (0.1%), Vitamin D3 (100 IU per mg)",
        dosage: "Take 2 capsules daily with breakfast",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "10 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-18157-1-0126",
        idealFor: [
          "Individuals with spinal curvature or displaced bones",
          "People with trigger finger or office syndrome",
          "Those experiencing joint and bone pain, swelling, or inflammation",
          "Individuals with chronic musculoskeletal pain from repetitive strain (heavy lifting, prolonged sitting/standing, poor posture, etc.)"
        ]
      };
    }
    
    if (productId === "8") {
      return {
        id: 8,
        name: "Diacard — Blood Pressure & Blood Sugar Support",
        price: "$42",
        originalPrice: "$48",
        images: [
          "/lovable-uploads/eb417a32-9a3f-479a-8427-bd90fc6aa3fe.png",
          "/lovable-uploads/9b2eb6c3-28af-48cf-8349-aaf12a98e55f.png",
          "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png"
        ],
        rating: 4.9,
        reviews: 189,
        badge: "🔥 Hot",
        inStock: true,
        description: "Diacard helps stimulate pancreatic function to naturally regulate blood sugar levels. It improves blood circulation, strengthens blood vessels, and helps cleanse arteries of excess cholesterol. Supports balanced blood pressure and reduces the risk of future heart disease.",
        benefits: [
          "Balances blood sugar levels",
          "Increases insulin sensitivity and reduces insulin resistance",
          "Normalizes blood pressure", 
          "Lowers the risk of heart disease",
          "Reduces excess cholesterol in blood vessels",
          "Enhances circulation and vascular health"
        ],
        ingredients: "L-Cysteine, Magnesium Oxide, L-Arginine, L-Carnitine L-Tartrate, L-Lysine Hydrochloride, L-Methionine, Bitter Melon Powder, Artichoke Powder, Astragalus Powder, Cordyceps Powder, Fenugreek Powder, Grape Seed Extract, Zinc Amino Acid Chelate (15%), Taurine, Fish Oil Powder, Korean Ginseng Extract, Black Currant Extract, Rosehip Extract, Vitamin C, Dandelion Powder, Broccoli Powder, Dong Quai Extract, Garcinia Cambogia Extract, Goji Berry Extract, Tomato Extract, Alpha Lipoic Acid, Selenium Yeast, Coenzyme Q10, Niacin, D-Biotin, Vitamin E, Copper Gluconate, Calcium D-Pantothenate, Pyridoxine Hydrochloride (Vitamin B6), Vitamin B12, Vitamin D3, Manganese, Chromium Picolinate, Folic Acid",
        dosage: "Take 1 capsule with breakfast, lunch, and dinner (3 capsules daily)",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "15 capsules per box",
        registration: "FDA Thailand Registration No.: 11-1-18157-1-0143",
        idealFor: [
          "Diabetics or those with high sugar intake",
          "Individuals with high cholesterol or blood lipids", 
          "People with high or unstable blood pressure",
          "Overweight individuals",
          "Those with a family history of heart disease, diabetes, or hypertension"
        ]
      };
    }
    
    if (productId === "7") {
      return {
        id: 7,
        name: "TChrome — Weight Loss & Detox Capsules",
        price: "$35",
        originalPrice: "$42",
        images: [
          "/lovable-uploads/aacbb27e-cd19-495a-865d-a1dbbe6d2e3b.png",
          "/lovable-uploads/48b88798-0d32-4b8b-a25f-4d87e1a60f83.png",
          "/lovable-uploads/35bcbd8d-63a2-4bc6-949f-fbb3ee34a09c.png"
        ],
        rating: 4.9,
        reviews: 256,
        badge: "🌟 New",
        inStock: true,
        description: "TChrome is an innovative dietary supplement for weight management. It helps burn fat, detoxify the body, restore healthy digestion, and reduce appetite. Effectively blocks the accumulation of new fat and supports a lean physique.",
        benefits: [
          "Boosts fat burning",
          "Blocks fat absorption", 
          "Improves bowel movement",
          "Controls appetite",
          "Stimulates metabolism"
        ],
        ingredients: "Garcinia Cambogia Extract, Green Tea Extract, Calcium Pyruvate, White Kidney Bean Extract, Chitosan, Kelp Extract, Black Pepper Powder, Ginger Extract, Chromium Picolinate",
        dosage: "Take 2 capsules daily: 1 capsule with breakfast, 1 capsule with dinner",
        warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
        size: "60 capsules per bottle",
        registration: "FDA Thailand Registration No.: 11-106353-1-0137",
        idealFor: [
          "Individuals with excess weight",
          "People with poor digestion or constipation", 
          "Those with slow metabolism",
          "Anyone looking to lose 5 kg or more"
        ]
      };
    }
    
    // Default fallback - redirect to product 7 if invalid ID
    return {
      id: 7,
      name: "TChrome — Weight Loss & Detox Capsules",
      price: "$35",
      originalPrice: "$42",
      images: [
        "/lovable-uploads/aacbb27e-cd19-495a-865d-a1dbbe6d2e3b.png",
        "/lovable-uploads/48b88798-0d32-4b8b-a25f-4d87e1a60f83.png",
        "/lovable-uploads/35bcbd8d-63a2-4bc6-949f-fbb3ee34a09c.png"
      ],
      rating: 4.9,
      reviews: 256,
      badge: "🌟 New",
      inStock: true,
      description: "TChrome is an innovative dietary supplement for weight management. It helps burn fat, detoxify the body, restore healthy digestion, and reduce appetite. Effectively blocks the accumulation of new fat and supports a lean physique.",
      benefits: [
        "Boosts fat burning",
        "Blocks fat absorption", 
        "Improves bowel movement",
        "Controls appetite",
        "Stimulates metabolism"
      ],
      ingredients: "Garcinia Cambogia Extract, Green Tea Extract, Calcium Pyruvate, White Kidney Bean Extract, Chitosan, Kelp Extract, Black Pepper Powder, Ginger Extract, Chromium Picolinate",
      dosage: "Take 2 capsules daily: 1 capsule with breakfast, 1 capsule with dinner",
      warnings: "Consult your healthcare provider before use. Not recommended for pregnant or nursing women. Do not exceed recommended dosage.",
      size: "60 capsules per bottle",
      registration: "FDA Thailand Registration No.: 11-106353-1-0137",
      idealFor: [
        "Individuals with excess weight",
        "People with poor digestion or constipation", 
        "Those with slow metabolism",
        "Anyone looking to lose 5 kg or more"
      ]
    };
  };

  const product = getProductData(id || "7");

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        originalPrice: product.originalPrice,
      });
    }
    setQuantity(1);
  };

  const relatedProducts = [
    {
      id: 17,
      name: "Helmina — Intestinal Detox, Toxin Cleanse & Skin Tag Removal Support",
      price: "$28",
      image: "/lovable-uploads/5b11406a-c72a-4900-af98-f63e310c5f46.png",
      rating: 4.9
    },
    {
      id: 8,
      name: "Diacard — Blood Pressure & Blood Sugar Support",
      price: "$42",
      image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
      rating: 4.9
    },
    {
      id: 9,
      name: "Carthisin — Bone & Joint Health Support", 
      price: "$38",
      image: "/lovable-uploads/2836d04a-02d7-488b-9476-c6b3965d2063.png",
      rating: 4.8
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "December 15, 2024",
      comment: id === "17" ? "Helmina has been amazing for my digestive health! After 4 weeks of use, my bloating has significantly reduced and my bowel movements are much more regular. The skin tags I had are also starting to fade!" : id === "16" ? "Geralox has been amazing for my hemorrhoid issues! After 4 weeks of use, the pain and swelling have significantly reduced and my digestion has improved dramatically. No more constipation issues!" : id === "15" ? "Genesis Caps has been amazing for my hearing! After 5 weeks of use, the constant ringing in my ears has significantly reduced and I can follow conversations much better now. Highly recommend!" : id === "14" ? "Turbine has been amazing for my prostate health! After 4 weeks of use, my urination flow has improved significantly and the nighttime trips to the bathroom have reduced dramatically. Highly recommend!" : id === "13" ? "Elsie has been amazing for my skin issues! After 6 weeks of use, my eczema has significantly improved and the itching has almost completely stopped. My skin looks healthier than it has in years!" : id === "12" ? "Andicellix has been amazing for my hearing! After 6 weeks of use, the constant ringing in my ears has significantly reduced and I can hear conversations much clearer now. Highly recommend!" : id === "11" ? "Amazing results! Black Rhino has significantly improved my partner's performance and energy levels. We're both very satisfied with the results after just 3 weeks of use!" : id === "10" ? "BackPro has been a lifesaver! After just 4 weeks of use, my urinary problems have significantly improved and I no longer wake up multiple times at night. Highly recommend for men over 40!" : id === "9" ? "Excellent results! After 6 weeks of using Carthisin, my joint pain has significantly reduced and I feel much more mobile. Great product for bone health!" : id === "8" ? "Outstanding results! My blood sugar levels have stabilized significantly since using Diacard. My doctor is impressed with the improvement in my overall cardiovascular health." : "Amazing results! Lost 8 kg in 2 months with TChrome. My digestion improved significantly and I feel more energetic."
    },
    {
      name: "Mike Chen", 
      rating: 5,
      date: "December 10, 2024",
      comment: id === "17" ? "Great product for digestive detox! My gut health has improved dramatically and the uncomfortable skin tags I had are almost gone. Very satisfied with the results after 5 weeks." : id === "16" ? "Great product for digestive health! My hemorrhoid symptoms have reduced dramatically and I no longer struggle with bowel movements. Very satisfied with the results after 5 weeks." : id === "15" ? "Great product for hearing health! My ear fullness has reduced dramatically and I don't need to ask people to repeat themselves as often. Very satisfied with the results after 4 weeks." : id === "14" ? "Great product for prostate health! My pelvic discomfort has reduced dramatically and my overall energy levels have improved. Very satisfied with the results after 5 weeks." : id === "13" ? "Great product for skin health! My psoriasis patches have reduced dramatically and the inflammation has calmed down significantly. Very satisfied with the results after 5 weeks." : id === "12" ? "Great product for hearing health! My tinnitus has improved dramatically and the dizzy spells I used to get have almost completely stopped. Very satisfied with the results." : id === "11" ? "Great product for men's health! My stamina and overall vitality have improved remarkably. Definitely helps with testosterone levels and overall well-being." : id === "10" ? "Great product for prostate health! My urination flow has improved dramatically and the pelvic discomfort I used to experience is almost gone. Very satisfied with the results." : id === "9" ? "Carthisin has been a game-changer for my office syndrome! My back pain and joint stiffness have improved remarkably after just 4 weeks of use." : id === "8" ? "Diacard has been a game-changer for managing my blood pressure. I feel more energetic and my cholesterol levels have improved remarkably!" : "TChrome really works! My appetite is much better controlled and I'm losing weight steadily. Great product!"
    },
    {
      name: "Lisa Wilson",
      rating: 4,
      date: "December 5, 2024", 
      comment: id === "17" ? "Good quality supplement for detox. Noticed improvements in my digestion and less bloating after 3 weeks of consistent use. The skin tags are slowly getting smaller too." : id === "16" ? "Good quality supplement for digestive health. Noticed improvements in my bowel movements and less abdominal discomfort after 3 weeks of consistent use. The bloating has reduced significantly." : id === "15" ? "Good quality supplement for hearing health. Noticed improvements in conversation clarity and less ear buzzing after 3 weeks of consistent use." : id === "14" ? "Good quality supplement for prostate health. Noticed improvements in bladder function and reduced burning sensation after 3 weeks of consistent use." : id === "13" ? "Good quality supplement for skin health. Noticed improvements in my nail fungus and overall skin texture after 4 weeks of consistent use. The burning sensation has reduced significantly." : id === "12" ? "Good quality supplement for hearing health. Noticed improvements in my ability to follow conversations and less ear fullness after 4 weeks of consistent use." : id === "11" ? "Good quality supplement for men's health. Noticed improvements in energy levels and overall performance after 4 weeks of consistent use." : id === "10" ? "Good quality supplement for men's health. Noticed improvements in bladder function and reduced nighttime trips to the bathroom after 3 weeks of consistent use." : id === "9" ? "Good quality supplement for joint health. Noticed improvements in flexibility and reduced morning stiffness after 3 weeks of consistent use." : id === "8" ? "Great supplement for heart health. Noticed improvements in circulation and overall energy levels after 4 weeks of consistent use." : "Good quality supplement. Noticed changes in my metabolism after 3 weeks. Will continue using."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-nature-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-nature-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 rounded-lg object-contain bg-white p-4"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-nature-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-nature-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt="" 
                    className="w-full h-full object-contain bg-white p-1" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-semibold">{product.rating}</span>
                <span className="ml-1 text-gray-600">({product.reviews} reviews)</span>
              </div>
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-nature-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge className="bg-red-100 text-red-800">
                  Save ${parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))}
                </Badge>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Benefits:</h3>
              <ul className="space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-nature-500 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {product.idealFor && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Ideal For:</h3>
                <ul className="space-y-1">
                  {product.idealFor.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-nature-600 hover:bg-nature-700"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Quality Guarantee</p>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 mx-auto text-nature-600 mb-1" />
                <p className="text-xs text-gray-600">Certified Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dosage Instructions:</h3>
                  <p className="text-gray-700">{product.dosage}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Package Size:</h3>
                  <p className="text-gray-700">{product.size}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warnings:</h3>
                  <p className="text-gray-700">{product.warnings}</p>
                </div>
                {product.registration && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Registration:</h3>
                    <p className="text-gray-700">{product.registration}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="p-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Active Ingredients:</h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-white p-2 rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-nature-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-3" variant="outline">
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
