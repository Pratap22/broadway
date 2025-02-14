import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentColor, setColor] = useState("red");

  const toggleColor = () => {
    console.log('toggleColor');
    setColor(currentColor === "red" ? "green" : "red");
  };

  return (
    <ColorContext.Provider value={{ currentColor, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
