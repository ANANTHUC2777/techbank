// Context/ImgContext.js
import React, { createContext } from "react";
import { assets } from "../assets/images";

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const ImgContext = createContext({});

// Provider component
export const ImgProvider = ({ children }) => {
  return (
    <ImgContext.Provider value={assets}>
      {children}
    </ImgContext.Provider>
  );
};
