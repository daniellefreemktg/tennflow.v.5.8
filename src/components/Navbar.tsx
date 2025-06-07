import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-navy shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-cursive text-3xl text-gold">TennFlow</h1>
        </Link>
        <div className="flex space-x-6">
          <Link to="/about" className="text-cream hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/businesses" className="text-cream hover:text-gold transition-colors">
            Businesses
          </Link>
          <Link to="/blog" className="text-cream hover:text-gold transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;