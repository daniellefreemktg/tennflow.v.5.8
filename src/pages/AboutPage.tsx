import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream/50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-cursive text-4xl text-navy text-center mb-12">About TennFlow</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg" 
              alt="Southeastern United States landscape" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h2 className="font-cursive text-2xl text-navy mb-4">Our Mission</h2>
            <p className="mb-6 text-navy/80">
              TennFlow was created to connect visitors and locals with the perfect businesses 
              across the Southeastern United States. Our AI-powered platform helps you discover 
              the best that the Southeast has to offer, from Nashville's music scene to Atlanta's 
              innovations, Charleston's cuisine to the Smoky Mountains' adventures.
            </p>
            
            <h2 className="font-cursive text-2xl text-navy mb-4">How It Works</h2>
            <p className="mb-6 text-navy/80">
              Our platform combines a comprehensive business directory with advanced AI to 
              understand exactly what you're looking for. Simply describe what you need in 
              natural language, and our AI will match you with the most relevant local 
              businesses across Tennessee, Virginia, Georgia, North Carolina, South Carolina, 
              Alabama, and Kentucky.
            </p>
            
            <h2 className="font-cursive text-2xl text-navy mb-4">Supporting Local</h2>
            <p className="text-navy/80">
              We're passionate about supporting the Southeastern United States' local business 
              ecosystem. By connecting customers with the right local businesses, we help 
              strengthen communities, preserve local character, and contribute to the Southeast's 
              vibrant economy. When local businesses thrive, we all benefit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;