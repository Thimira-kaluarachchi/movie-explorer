import { createContext, useState } from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const theme = {
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};