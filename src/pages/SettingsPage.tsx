import React from 'react';
import ApiKeyForm from '../components/ApiKeyForm';
import { useGemini } from '../context/GeminiContext';

const SettingsPage: React.FC = () => {
  const { geminiConfig, updateConfig } = useGemini();

  return (
    <div className="min-h-screen bg-cream/50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-cursive text-4xl text-navy text-center mb-12">Settings</h1>
        
        <div className="max-w-2xl mx-auto">
          <ApiKeyForm 
            currentConfig={geminiConfig} 
            onSave={updateConfig} 
          />
          
          <div className="mt-12">
            <h2 className="font-cursive text-2xl text-navy mb-4">About AI Integration</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                TennFlow uses Google's Gemini AI to provide intelligent business recommendations 
                based on your specific needs and preferences.
              </p>
              <p className="mb-4">
                When you search for businesses, our AI analyzes your query to understand exactly 
                what you're looking for, then matches you with the most appropriate local 
                Tennessee businesses from our directory.
              </p>
              <p>
                To enable this feature, you'll need to provide your own Google Gemini API key. 
                This ensures you have complete control over your API usage and billing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;