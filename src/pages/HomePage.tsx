import React from 'react';
import SearchBar from '../components/SearchBar';
import BusinessGrid from '../components/BusinessGrid';
import AiResponseCard from '../components/AiResponseCard';
import { useBusinessSearch } from '../hooks/useBusinessSearch';
import { sampleBusinesses } from '../data/sampleBusinesses';

const HomePage: React.FC = () => {
  const { searchBusinesses, searchResults, isLoading, error } = useBusinessSearch(sampleBusinesses);

  const backgroundStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[70vh] flex flex-col justify-center items-center px-4" style={backgroundStyle}>
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center mb-8">
          <h1 className="font-cursive text-5xl md:text-7xl text-gold mb-4">TennFlow</h1>
          <p className="text-cream text-xl md:text-2xl max-w-2xl">
            Your AI-powered guide to the finest local businesses in the Southeast
          </p>
        </div>
        <div className="relative z-10 w-full max-w-3xl">
          <SearchBar onSearch={searchBusinesses} isLoading={isLoading} />
          
          {error && (
            <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow bg-cream/50 py-8">
        <div className="container mx-auto px-4">
          {searchResults ? (
            <div>
              {searchResults.aiResponse && (
                <AiResponseCard 
                  response={searchResults.aiResponse} 
                  searchQuery={searchResults.searchQuery} 
                />
              )}
            </div>
          ) : (
            <>
              <h2 className="font-cursive text-3xl text-navy text-center mb-12">Featured Southeast Businesses</h2>
              <BusinessGrid businesses={sampleBusinesses.slice(0, 3)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;