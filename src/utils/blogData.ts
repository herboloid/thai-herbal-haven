
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  category: string;
  publishedAt: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "natural-detox-methods-spring-cleansing",
    title: "Natural Detox Methods for Spring Cleansing",
    excerpt: "Discover effective natural detoxification methods to rejuvenate your body and boost energy levels this spring season.",
    content: "Spring is the perfect time to reset your body's natural systems and eliminate accumulated toxins from winter months. Natural detoxification doesn't require extreme measures - simple, consistent practices can yield remarkable results...",
    image: "/lovable-uploads/8af81404-a41d-4ef0-b1be-13a5340f982e.png",
    author: {
      name: "Dr. Sarah Chen",
      title: "Licensed Naturopathic Doctor",
      avatar: "/lovable-uploads/415e9400-5489-46fc-bbc8-c87a13ee3748.png"
    },
    category: "Detox",
    publishedAt: "2024-03-15",
    readTime: 8
  },
  {
    id: 2,
    slug: "anti-aging-nutrition-secrets",
    title: "Anti-Aging Nutrition Secrets from Traditional Medicine",
    excerpt: "Learn how ancient wisdom combined with modern nutritional science can help slow the aging process naturally.",
    content: "The quest for youthful vitality has driven human curiosity for millennia. Traditional medicine offers profound insights into anti-aging nutrition that modern science is now validating...",
    image: "/lovable-uploads/e43ecb1e-a5af-4b23-83ba-91b3c9573afc.png",
    author: {
      name: "Maria Rodriguez",
      title: "Certified Nutritionist & Herbalist",
      avatar: "/lovable-uploads/48b88798-0d32-4b8b-a25f-4d87e1a60f83.png"
    },
    category: "Anti-Aging",
    publishedAt: "2024-03-12",
    readTime: 12
  },
  {
    id: 3,
    slug: "heart-healthy-diet-prevention",
    title: "Heart-Healthy Diet for Cardiovascular Disease Prevention",
    excerpt: "Essential dietary strategies and supplement recommendations for maintaining optimal heart health and preventing cardiovascular disease.",
    content: "Cardiovascular disease remains the leading cause of death globally, yet many cases are preventable through proper nutrition and lifestyle choices...",
    image: "/lovable-uploads/f6fa8d1d-7bf6-46c6-94ea-bc3956d83d8c.png",
    author: {
      name: "Dr. Michael Thompson",
      title: "Cardiologist & Functional Medicine Practitioner",
      avatar: "/lovable-uploads/45256388-cbcb-4570-af0b-2d887393c4fd.png"
    },
    category: "Heart Health",
    publishedAt: "2024-03-10",
    readTime: 10
  },
  {
    id: 4,
    slug: "eye-health-digital-age",
    title: "Protecting Your Vision in the Digital Age",
    excerpt: "Essential nutrients and lifestyle habits to maintain healthy vision and protect your eyes from digital strain and age-related decline.",
    content: "Our eyes face unprecedented challenges in the digital age. Extended screen time, blue light exposure, and environmental factors all contribute to vision problems...",
    image: "/lovable-uploads/2371fff1-dd6d-4854-8501-aac3f2a11a82.png",
    author: {
      name: "Dr. Lisa Park",
      title: "Ophthalmologist & Integrative Medicine Specialist",
      avatar: "/lovable-uploads/51976c1c-7378-45d1-ba3d-6f2260a4664d.png"
    },
    category: "Eye Health",
    publishedAt: "2024-03-08",
    readTime: 7
  },
  {
    id: 5,
    slug: "weight-management-holistic-approach",
    title: "Holistic Approach to Sustainable Weight Management",
    excerpt: "Beyond calorie counting: discover how hormonal balance, stress management, and proper supplementation support healthy weight loss.",
    content: "Sustainable weight management requires more than restrictive dieting. A holistic approach addresses the root causes of weight gain including hormonal imbalances, stress, and metabolic dysfunction...",
    image: "/lovable-uploads/8ce312af-10a2-43a6-a41d-16c4f9fa7d4b.png",
    author: {
      name: "Jennifer Williams",
      title: "Registered Dietitian & Wellness Coach",
      avatar: "/lovable-uploads/6ae232f3-638c-4b31-a162-81726200c6b8.png"
    },
    category: "Weight Management",
    publishedAt: "2024-03-05",
    readTime: 9
  },
  {
    id: 6,
    slug: "immune-system-boosting-strategies",
    title: "Natural Immune System Boosting Strategies",
    excerpt: "Evidence-based approaches to strengthening your immune system through nutrition, supplements, and lifestyle modifications.",
    content: "A robust immune system is your first line of defense against illness. While genetics play a role, lifestyle factors significantly influence immune function...",
    image: "/lovable-uploads/6c462123-78a1-4022-ab2e-9949900f8571.png",
    author: {
      name: "Dr. Robert Kim",
      title: "Immunologist & Traditional Medicine Practitioner",
      avatar: "/lovable-uploads/430db4bb-4acf-4d04-94ac-038596a91158.png"
    },
    category: "Immunity",
    publishedAt: "2024-03-02",
    readTime: 11
  },
  {
    id: 7,
    slug: "stress-management-adrenal-health",
    title: "Stress Management and Adrenal Health Support",
    excerpt: "Understanding the connection between chronic stress and adrenal fatigue, plus natural solutions for recovery and resilience.",
    content: "Chronic stress has become epidemic in modern society, leading to widespread adrenal dysfunction. Understanding this connection is crucial for optimal health...",
    image: "/lovable-uploads/79c7131b-160f-42de-ae83-6348662413d8.png",
    author: {
      name: "Dr. Amanda Foster",
      title: "Endocrinologist & Stress Management Specialist",
      avatar: "/lovable-uploads/867d3781-6d51-456d-9009-b009290b631f.png"
    },
    category: "Stress Management",
    publishedAt: "2024-02-28",
    readTime: 13
  },
  {
    id: 8,
    slug: "digestive-health-gut-microbiome",
    title: "Optimizing Digestive Health Through Gut Microbiome Balance",
    excerpt: "The crucial role of gut bacteria in overall health and practical strategies for maintaining a healthy microbiome.",
    content: "The gut microbiome has emerged as a key player in overall health, influencing everything from immune function to mental health...",
    image: "/lovable-uploads/7cc33d76-2c30-4d3c-a0a1-6b69aead89ea.png",
    author: {
      name: "Dr. James Wilson",
      title: "Gastroenterologist & Microbiome Researcher",
      avatar: "/lovable-uploads/9b2eb6c3-28af-48cf-8349-aaf12a98e55f.png"
    },
    category: "Digestive Health",
    publishedAt: "2024-02-25",
    readTime: 14
  }
];

export const getLatestPosts = (count: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
