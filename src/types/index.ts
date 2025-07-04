export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  website: string;
  image: string;
  tags: string[];
  aiPreference?: {
    niche: string[];
    weight: number;
  };
}

export interface SearchResult {
  businesses: Business[];
  searchQuery: string;
  aiResponse?: AiRecommendation;
}

export interface GeminiConfig {
  apiKey: string;
  isConfigured: boolean;
}

export interface AiRecommendation {
  mainRecommendation: {
    business: Business;
    reason: string;
  };
  complementaryOptions: {
    business: Business;
    reason: string;
  }[];
}
