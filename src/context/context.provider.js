"use client";
import { createContext, useState } from "react";

export const PageContext = createContext({
  isLandingLoaded: false,
  isResumeLoaded: false,
  isPortfolioLoaded: false,
  setIsLandingLoaded: () => null,
  setIsResumeLoaded: () => null,
  setIsPortfolioLoaded: () => null,
});

export const ContextProvider = ({ children }) => {
  const [isLandingLoaded, setIsLandingLoaded] = useState(false);
  const [isResumeLoaded, setIsResumeLoaded] = useState(false);
  const [isPortfolioLoaded, setIsPortfolioLoaded] = useState(false);

  const value = {
    isLandingLoaded,
    isResumeLoaded,
    isPortfolioLoaded,
    setIsLandingLoaded,
    setIsResumeLoaded,
    setIsPortfolioLoaded,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
