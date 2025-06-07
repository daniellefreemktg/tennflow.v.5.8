import React from 'react';
import { Business } from '../types';
import BusinessCard from './BusinessCard';

interface BusinessGridProps {
  businesses: Business[];
  title?: string;
}

const BusinessGrid: React.FC<BusinessGridProps> = ({ businesses, title }) => {
  if (businesses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-navy text-lg">No businesses found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {title && <h2 className="text-3xl font-cursive text-navy mb-8">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map(business => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessGrid;