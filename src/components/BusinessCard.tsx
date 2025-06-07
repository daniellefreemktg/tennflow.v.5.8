import React from 'react';
import { Business } from '../types';
import { MapPin, Phone, Globe } from 'lucide-react';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-cream rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={business.image} 
          alt={business.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-semibold bg-gold/20 text-navy px-2 py-1 rounded-full">
            {business.category}
          </span>
        </div>
        <h3 className="font-cursive text-2xl text-navy mb-2">{business.name}</h3>
        <p className="text-navy/80 mb-4 flex-grow">{business.description}</p>
        <div className="space-y-2 text-navy/80">
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
            <p>{business.address}, {business.city}, {business.state} {business.zip}</p>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 flex-shrink-0" />
            <p>{business.phone}</p>
          </div>
          <div className="flex items-center">
            <Globe size={16} className="mr-2 flex-shrink-0" />
            <a 
              href={`https://${business.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {business.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;