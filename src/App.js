import React, { useState, useContext } from "react";

// Create a context for the theme

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Function component for the app
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightStyles = {
    backgroundColor: "#ffffff",
    color: "#333333",
  };
  const darkStyles = {
    backgroundColor: "#333333",
    color: "#ffffff",
  };
  const currentThemeStyles = theme === "light" ? lightStyles : darkStyles;
  return (
    <div className="app" style={currentThemeStyles}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <p style={currentThemeStyles}>current theme is {theme}</p>
    </div>
  );
};

export default App;
