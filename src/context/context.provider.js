"use client";
import { createContext, useState } from "react";

export const PageContext = createContext({
  isLandingLoaded: false,
  isResumeLoaded: false,
  setIsLandingLoaded: () => null,
  setIsResumeLoaded: () => null,
});

export const ContextProvider = ({ children }) => {
  const [isLandingLoaded, setIsLandingLoaded] = useState(false);
  const [isResumeLoaded, setIsResumeLoaded] = useState(false);

  const value = {
    isLandingLoaded,
    isResumeLoaded,
    setIsLandingLoaded,
    setIsResumeLoaded,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
