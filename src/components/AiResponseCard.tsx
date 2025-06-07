import React from 'react';
import { MessageSquare } from 'lucide-react';
import { AiRecommendation } from '../types';
import BusinessCard from './BusinessCard';

interface AiResponseCardProps {
  response: AiRecommendation;
  searchQuery: string;
}

const AiResponseCard: React.FC<AiResponseCardProps> = ({ response, searchQuery }) => {
  return (
    <div className="space-y-8 mb-12">
      <div className="bg-navy/5 rounded-lg p-6 border-l-4 border-gold">
        <div className="flex items-start space-x-4">
          <div className="bg-gold rounded-full p-2 flex-shrink-0">
            <MessageSquare size={24} className="text-navy" />
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-2">Perfect Match Found!</h3>
            <p className="text-navy/70 italic mb-4">Based on your search: "{searchQuery}"</p>
            <div className="prose prose-sm max-w-none text-navy">
              <p className="mb-4">{response.mainRecommendation.reason}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-cursive text-2xl text-navy mb-4">Best Match for You</h3>
          <BusinessCard business={response.mainRecommendation.business} />
        </div>

        <div>
          <h3 className="font-cursive text-2xl text-navy mb-4">You Might Also Like</h3>
          <div className="space-y-6">
            {response.complementaryOptions.map((option, index) => (
              <div key={option.business.id} className="bg-white rounded-lg p-4 shadow-md">
                <BusinessCard business={option.business} />
                <p className="mt-4 text-navy/80 italic">{option.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiResponseCard;