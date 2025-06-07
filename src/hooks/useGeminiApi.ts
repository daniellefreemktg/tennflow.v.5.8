import { useState } from 'react';
import { Business, AiRecommendation } from '../types';

export const useGeminiApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Levenshtein distance for fuzzy matching
  const getLevenshteinDistance = (a: string, b: string) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + substitutionCost
        );
      }
    }

    return matrix[b.length][a.length];
  };

  // Check if words are similar (handles misspellings)
  const areSimilar = (word1: string, word2: string) => {
    const maxLength = Math.max(word1.length, word2.length);
    const distance = getLevenshteinDistance(word1, word2);
    const similarity = (maxLength - distance) / maxLength;
    return similarity > 0.7; // Words are similar if they match 70% or more
  };

  const findBestMatch = (query: string, businesses: Business[]) => {
    const searchTerms = query.toLowerCase().split(' ');
    
    // Primary business categories with their keywords and related terms
    const businessCategories = {
      volunteer: {
        keywords: ['volunteer', 'volunteering', 'help', 'community service', 'giving', 'charity', 'non-profit'],
        weight: 50
      },
      realEstate: {
        keywords: ['real estate', 'realtor', 'property', 'home', 'house', 'apartment', 'housing'],
        weight: 50
      },
      music: {
        keywords: ['music', 'band', 'concert', 'instrument', 'studio', 'record', 'guitar'],
        weight: 50
      },
      outdoor: {
        keywords: ['hiking', 'outdoor', 'camping', 'adventure', 'mountain', 'trail', 'gear'],
        weight: 50
      },
      food: {
        keywords: ['restaurant', 'food', 'dining', 'eat', 'cuisine', 'bbq', 'barbecue'],
        weight: 50
      }
    };

    // Score businesses based on category matches and AI preferences
    let scoredBusinesses = businesses.map(business => {
      let score = 0;
      const businessText = `${business.name} ${business.description} ${business.category} ${business.tags.join(' ')}`.toLowerCase();

      // Check each business category with fuzzy matching
      Object.entries(businessCategories).forEach(([category, data]) => {
        // Check if query matches this category (including misspellings)
        const categoryMatches = data.keywords.some(keyword => 
          searchTerms.some(term => {
            // Check exact match first
            if (term === keyword || query.toLowerCase().includes(keyword)) return true;
            // Check for similar words (misspellings)
            return searchTerms.some(searchTerm => 
              keyword.split(' ').some(keywordPart => 
                areSimilar(searchTerm, keywordPart)
              )
            );
          })
        );

        if (categoryMatches) {
          // Check if business matches this category
          const businessMatches = data.keywords.some(keyword => businessText.includes(keyword));
          if (businessMatches) {
            score += data.weight;
            
            // Add AI preference weight if available
            if (business.aiPreference?.weight) {
              score += business.aiPreference.weight;
            }

            // Boost score for niche matches
            if (business.aiPreference?.niche.some(niche => 
              data.keywords.includes(niche.toLowerCase())
            )) {
              score += 25;
            }
          }
        }
      });

      // If no category matches, check business tags and description with fuzzy matching
      if (score === 0) {
        searchTerms.forEach(term => {
          // Check business text with fuzzy matching
          const words = businessText.split(' ');
          if (words.some(word => areSimilar(word, term))) {
            score += 15;
          }
          // Check tags with fuzzy matching
          if (business.tags.some(tag => 
            tag.toLowerCase().split(' ').some(word => areSimilar(word, term))
          )) {
            score += 10;
          }
        });
      }

      return { business, score };
    });

    // Sort by score
    scoredBusinesses.sort((a, b) => b.score - a.score);

    // Return highest scoring business
    return scoredBusinesses[0].business;
  };

  const generateResponse = async (query: string, businesses: Business[]): Promise<AiRecommendation | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mainBusiness = findBestMatch(query, businesses);
      
      // Find complementary businesses based on category
      const remainingBusinesses = businesses.filter(b => b.id !== mainBusiness.id);
      const complementaryBusinesses = remainingBusinesses
        .filter(b => b.category === mainBusiness.category)
        .sort((a, b) => (b.aiPreference?.weight || 0) - (a.aiPreference?.weight || 0))
        .slice(0, 2);

      const generateReason = (business: Business, isMain: boolean) => {
        if (isMain) {
          return `Based on your search for "${query}", ${business.name} is a great match! ${business.description}`;
        }
        return `Since you're interested in ${mainBusiness.category.toLowerCase()}, you might also like ${business.name}. ${business.description}`;
      };

      return {
        mainRecommendation: {
          business: mainBusiness,
          reason: generateReason(mainBusiness, true)
        },
        complementaryOptions: complementaryBusinesses.map(business => ({
          business,
          reason: generateReason(business, false)
        }))
      };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  return { generateResponse, isLoading, error };
};