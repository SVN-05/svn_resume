"use client";
import React, { useContext, useEffect } from "react";
import Description from "./Description";
import What_i_do from "./What_i_do";
import Skills from "./Skills";
import Ide from "./Ide";
import Projects from "./Projects";
import { PageContext } from "@/context/context.provider";
import ThirdParty from "./ThirdParty";
import ContactMeCard from "./ContactMeCard";
import { defaultPageLoadDuration } from "@/utils/constants/constants";

const LandingPage = () => {
  const { isLandingLoaded, setIsLandingLoaded } = useContext(PageContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLandingLoaded(!isLandingLoaded);
    }, defaultPageLoadDuration);
  }, []);

  return (
    <main className="flex flex-col items-center p-10 items-center overflow-hidden lg:items-start pb-32">
      <Description />
      <What_i_do />
      <Skills />
      <Ide />
      <Projects />
      <ThirdParty />
      <ContactMeCard />
    </main>
  );
};

export default LandingPage;
