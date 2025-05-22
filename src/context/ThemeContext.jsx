import { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Apply theme class to the document element
  useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    // Add the current theme class
    document.documentElement.classList.add(theme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
