import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ isAuthenticated: false });

  const toggleAuth = () => {
    setIsAuth((prevValue) => ({
      ...prevValue,
      isAuthenticated: !prevValue.isAuthenticated,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
