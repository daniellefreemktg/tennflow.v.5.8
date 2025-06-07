import React, { useState } from 'react';
import { Save, Key } from 'lucide-react';
import { GeminiConfig } from '../types';

interface ApiKeyFormProps {
  currentConfig: GeminiConfig;
  onSave: (config: GeminiConfig) => void;
}

const ApiKeyForm: React.FC<ApiKeyFormProps> = ({ currentConfig, onSave }) => {
  const [apiKey, setApiKey] = useState(currentConfig.apiKey || '');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate saving with a short delay
    setTimeout(() => {
      onSave({
        apiKey,
        isConfigured: apiKey.trim().length > 0
      });
      setIsSaving(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 600);
  };

  return (
    <div className="bg-cream rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Key size={24} className="text-gold mr-3" />
        <h2 className="text-2xl font-cursive text-navy">Google Gemini API Configuration</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="apiKey" className="block text-navy font-medium mb-2">
            API Key
          </label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Enter your Google Gemini API key"
          />
          <p className="mt-2 text-sm text-navy/60">
            Get your API key from the{" "}
            <a
              href="https://ai.google.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Google AI Developer Portal
            </a>
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSaving}
            className="bg-gold hover:bg-gold/80 text-navy px-4 py-2 rounded-lg flex items-center transition-colors disabled:opacity-70"
          >
            {isSaving ? (
              <>
                <div className="w-5 h-5 border-t-2 border-navy border-solid rounded-full animate-spin mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Save size={18} className="mr-2" />
                Save API Key
              </>
            )}
          </button>
          
          {showSuccess && (
            <div className="text-green-600 ml-4">
              API key saved successfully!
            </div>
          )}
        </div>
      </form>
      
      <div className="mt-8 bg-navy/5 p-4 rounded-lg">
        <h3 className="font-medium text-navy mb-2">How it works</h3>
        <p className="text-navy/70 text-sm">
          Your API key is stored locally in your browser and never sent to our servers. 
          It's used to power the AI-based business matching through direct calls to 
          Google's Gemini API from your browser.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyForm;