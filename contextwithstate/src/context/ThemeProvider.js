import ThemeContext from "../context/ThemeContext";
import { React, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("Current Theme is : " + theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Even the simple braces matter a lot in the below code the inner flower braces were replaced with round brackets and everything stopped working with no errors displayed.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
