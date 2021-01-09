import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <nav>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
