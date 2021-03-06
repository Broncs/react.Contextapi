import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
};

export const ThemeContextProvider = ({ children }) => {
  const [changeTheme, setChangeTheme] = useState(initialState);

  const toggleTheme = () => {
    setChangeTheme((prevState) => ({
      ...prevState,
      isLightTheme: !prevState.isLightTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ ...changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
