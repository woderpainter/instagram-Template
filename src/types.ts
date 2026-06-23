export type PageView = 'home' | 'about' | 'blog' | 'contact' | 'privacy' | 'terms' | 'downloads';

export interface ProductPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  tagline: string;
  badge?: string;
  features: string[];
  isBestValue?: boolean;
}

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  handle: string;
  rating: number;
  comment: string;
  date: string;
  isVerified: boolean;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  image: string;
  content: string[];
}

export interface WishlistItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface PromptTemplate {
  id: string;
  niche: string;
  goal: string;
  hook: string;
  body: string;
  callToAction: string;
  hashtags: string;
}
