import React, { createContext, useContext, useState, useEffect } from 'react';
import { GlobalTheme } from '@carbon/react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  // Carbon themes: 'white' (light), 'g10' (light grey), 'g90' (dark grey), 'g100' (dark)
  // We'll use 'white' for light mode and 'g100' for dark mode
  const [theme, setTheme] = useState(() => {
    // Try to load from localStorage
    const saved = localStorage.getItem('insureco-theme');
    return saved || 'white';
  });

  const isDark = theme === 'g90' || theme === 'g100';

  useEffect(() => {
    // Save to localStorage when theme changes
    localStorage.setItem('insureco-theme', theme);
    
    // Update the data attribute on the root element
    document.documentElement.setAttribute('data-carbon-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => current === 'white' ? 'g100' : 'white');
  };

  const setLightTheme = () => setTheme('white');
  const setDarkTheme = () => setTheme('g100');

  const value = {
    theme,
    isDark,
    toggleTheme,
    setTheme,
    setLightTheme,
    setDarkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <GlobalTheme theme={theme}>
        {children}
      </GlobalTheme>
    </ThemeContext.Provider>
  );
}
