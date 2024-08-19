"use client";
import React, { createContext, useRef, useState } from "react";
import Section1 from "../landingPageV2/Section1";
import HorizontalCardScroll from "./newDesign/HorizontalCardScroll";
import VerticalCardScroll from "./newDesign/VerticalCardScroll";
import ContactMeCard from "./ContactMeCard";
import AppLoader from "../loaders/AppLoader";
import FadeAnimation from "@/utils/animations/FadeAnimation";

export const LandingContext = createContext();

const LandingPageV2 = () => {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const values = {
    scrollRef,
    isLoading,
    setIsLoading,
    isSplineLoaded,
    setIsSplineLoaded,
  };

  return (
    <main ref={scrollRef} className="flex flex-col px-4 pb-32 lg:px-0">
      <LandingContext.Provider value={values}>
        <FadeAnimation
          className={isSplineLoaded ? "flex flex-col" : "hidden"}
          isVisible={isSplineLoaded}
        >
          <Section1 />
          <HorizontalCardScroll />
          <VerticalCardScroll />
          <ContactMeCard />
        </FadeAnimation>
      </LandingContext.Provider>
      {!isSplineLoaded && <AppLoader />}
    </main>
  );
};

export default LandingPageV2;
