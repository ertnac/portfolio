// ./hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialValue = saved === 'true' || (!saved && systemPrefersDark);
      console.log('Initial theme detection:', { saved, systemPrefersDark, initialValue }); // Debugging: Initial state
      return initialValue;
    }
    return false; // Default for SSR
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
    console.log('Theme applied:', isDarkMode ? 'dark mode (class added to <html>)' : 'light mode (class removed from <html>)'); // Debugging: Theme change
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggling theme... Current state before toggle:', isDarkMode); // Debugging: Toggle action
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleTheme };
};
