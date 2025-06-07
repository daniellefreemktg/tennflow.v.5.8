import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream/50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="font-cursive text-6xl text-navy mb-6">404</h1>
        <p className="text-xl text-navy/80 mb-8">Oops! Looks like you've wandered off the Tennessee trail.</p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-gold hover:bg-gold/80 text-navy px-6 py-3 rounded-full font-medium transition-colors"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;