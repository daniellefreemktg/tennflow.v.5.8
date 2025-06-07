import React, { useState, useMemo } from 'react';
import BusinessGrid from '../components/BusinessGrid';
import { sampleBusinesses } from '../data/sampleBusinesses';
import { Search } from 'lucide-react';

const categories = [...new Set(sampleBusinesses.map(business => business.category))];

const stateData = {
  'TN': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Franklin', 'Gatlinburg', 'Pigeon Forge', 'Murfreesboro', 'Clarksville', 'Jackson'],
  'VA': ['Richmond', 'Virginia Beach', 'Norfolk', 'Alexandria', 'Roanoke', 'Charlottesville', 'Lynchburg', 'Newport News', 'Hampton', 'Fredericksburg'],
  'GA': ['Atlanta', 'Savannah', 'Augusta', 'Athens', 'Macon', 'Columbus', 'Roswell', 'Albany', 'Marietta', 'Johns Creek'],
  'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Asheville', 'Wilmington', 'Chapel Hill', 'Cary', 'High Point'],
  'SC': ['Charleston', 'Columbia', 'Greenville', 'Myrtle Beach', 'Rock Hill', 'Mount Pleasant', 'Clemson', 'Aiken', 'Florence', 'Spartanburg'],
  'AL': ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa', 'Auburn', 'Dothan', 'Hoover', 'Decatur', 'Madison'],
  'KY': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence', 'Hopkinsville', 'Nicholasville']
};

const BusinessesPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<string | null>(null);
  const [filterCity, setFilterCity] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const availableCities = useMemo(() => {
    if (!filterState) return [];
    return stateData[filterState as keyof typeof stateData] || [];
  }, [filterState]);

  const filteredBusinesses = sampleBusinesses.filter(business => {
    const matchesCategory = !filterCategory || business.category === filterCategory;
    const matchesState = !filterState || business.state === filterState;
    const matchesCity = !filterCity || business.city === filterCity;
    const matchesSearch = !searchTerm || 
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesCategory && matchesState && matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream/50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-cursive text-4xl text-navy text-center mb-12">Southeast Business Directory</h1>
        
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search businesses..."
                  className="w-full px-4 py-2 pr-10 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/50" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={filterCategory || ''}
                  onChange={(e) => setFilterCategory(e.target.value || null)}
                  className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={filterState || ''}
                  onChange={(e) => {
                    setFilterState(e.target.value || null);
                    setFilterCity(null); // Reset city when state changes
                  }}
                  className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">All States</option>
                  {Object.keys(stateData).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>

                <select
                  value={filterCity || ''}
                  onChange={(e) => setFilterCity(e.target.value || null)}
                  disabled={!filterState}
                  className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"
                >
                  <option value="">All Cities</option>
                  {availableCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <BusinessGrid 
          businesses={filteredBusinesses} 
          title={filterCategory ? `${filterCategory} Businesses` : undefined} 
        />
      </div>
    </div>
  );
};

export default BusinessesPage