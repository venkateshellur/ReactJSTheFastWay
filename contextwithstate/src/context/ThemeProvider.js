import ThemeContext from "./context/ThemeContext";
import { Children, React, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      {{ children }}
    </ThemeContext.Provider>
  );
};
