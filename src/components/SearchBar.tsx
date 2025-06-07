import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for? (e.g., 'best barbecue in Memphis' or 'Nashville music studios')"
          className="w-full px-6 py-4 bg-cream/90 text-navy rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gold text-lg"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gold hover:bg-gold/80 transition-colors text-navy rounded-full p-3"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-t-2 border-navy border-solid rounded-full animate-spin"></div>
          ) : (
            <Search size={24} />
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;