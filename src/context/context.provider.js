"use client";
import { createContext, useState } from "react";

export const PageContext = createContext({
  isLandingLoaded: false,
  setIsLandingLoaded: () => null,
});

export const ContextProvider = ({ children }) => {
  const [isLandingLoaded, setIsLandingLoaded] = useState(false);

  const value = {
    isLandingLoaded,
    setIsLandingLoaded,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
