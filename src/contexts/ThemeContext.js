import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
};

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(initialState);

  return (
    <ThemeContext.Provider value={{ ...isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
