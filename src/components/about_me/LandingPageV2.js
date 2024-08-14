"use client";
import React, { createContext, useRef } from "react";
import Section1 from "../landingPageV2/Section1";
import HorizontalCardScroll from "./newDesign/HorizontalCardScroll";
import VerticalCardScroll from "./newDesign/VerticalCardScroll";

export const LandingContext = createContext();

const LandingPageV2 = () => {
  const scrollRef = useRef(null);

  const values = { scrollRef };

  return (
    <main ref={scrollRef} className="flex flex-col px-4 lg:px-0">
      <LandingContext.Provider value={values}>
        <Section1 />
        <HorizontalCardScroll />
        <VerticalCardScroll />
      </LandingContext.Provider>
    </main>
  );
};

export default LandingPageV2;
