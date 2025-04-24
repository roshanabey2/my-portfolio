'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on client only
  useEffect(() => {
    const storedMode = localStorage.getItem('siteMode');
    if (storedMode) setMode(storedMode);
    setIsLoading(false);
  }, []);

  // Save to localStorage when mode changes
  useEffect(() => {
    if (mode) {
      localStorage.setItem('siteMode', mode);
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);

