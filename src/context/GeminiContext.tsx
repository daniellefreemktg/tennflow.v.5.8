import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { GeminiConfig } from '../types';

interface GeminiContextType {
  geminiConfig: GeminiConfig;
  updateConfig: (config: GeminiConfig) => void;
}

const defaultConfig: GeminiConfig = {
  apiKey: '',
  isConfigured: false
};

const GeminiContext = createContext<GeminiContextType>({
  geminiConfig: defaultConfig,
  updateConfig: () => {}
});

export const useGemini = () => useContext(GeminiContext);

interface GeminiProviderProps {
  children: ReactNode;
}

export const GeminiProvider: React.FC<GeminiProviderProps> = ({ children }) => {
  const [geminiConfig, setGeminiConfig] = useState<GeminiConfig>(defaultConfig);
  
  useEffect(() => {
    // Load API key from localStorage on initial load
    const savedConfig = localStorage.getItem('geminiConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setGeminiConfig(parsedConfig);
      } catch (error) {
        console.error('Failed to parse stored Gemini config', error);
      }
    }
  }, []);
  
  const updateConfig = (newConfig: GeminiConfig) => {
    setGeminiConfig(newConfig);
    
    // Save to localStorage
    localStorage.setItem('geminiConfig', JSON.stringify(newConfig));
  };
  
  return (
    <GeminiContext.Provider value={{ geminiConfig, updateConfig }}>
      {children}
    </GeminiContext.Provider>
  );
};