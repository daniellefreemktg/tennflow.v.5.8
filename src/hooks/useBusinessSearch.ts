import { useState, useCallback } from 'react';
import { Business, SearchResult } from '../types';
import { useGeminiApi } from './useGeminiApi';

export const useBusinessSearch = (allBusinesses: Business[]) => {
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const { generateResponse, isLoading, error } = useGeminiApi();
  
  const searchBusinesses = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    
    const searchTerms = query.toLowerCase().split(' ');
    
    // Calculate relevance score for each business
    const scoredBusinesses = allBusinesses.map(business => {
      let score = 0;
      
      // Check name match (highest weight)
      if (business.name.toLowerCase().includes(query.toLowerCase())) {
        score += 10;
      }
      
      // Check category match
      if (business.category.toLowerCase().includes(query.toLowerCase())) {
        score += 8;
      }
      
      // Check description match
      const description = business.description.toLowerCase();
      searchTerms.forEach(term => {
        if (description.includes(term)) {
          score += 5;
        }
      });
      
      // Check tags match
      business.tags.forEach(tag => {
        if (searchTerms.some(term => tag.toLowerCase().includes(term))) {
          score += 3;
        }
      });
      
      return { business, score };
    });
    
    // Sort by relevance score and filter out zero scores
    const relevantBusinesses = scoredBusinesses
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.business);
    
    // Get AI response
    const businessesForAi = relevantBusinesses.length > 0 
      ? relevantBusinesses 
      : allBusinesses;
    const aiResponse = await generateResponse(query, businessesForAi);
    
    setSearchResults({
      businesses: relevantBusinesses,
      searchQuery: query,
      aiResponse
    });
  }, [allBusinesses, generateResponse]);
  
  return { searchBusinesses, searchResults, isLoading, error };
};