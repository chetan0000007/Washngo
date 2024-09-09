import React, { createContext, useState, ReactNode } from 'react';

// Define the theme context
interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
