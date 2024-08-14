"use client";
import React, { useContext, useEffect } from "react";
import Description from "./Description";
import What_i_do from "./What_i_do";
import Skills from "./Skills";
import Ide from "./Ide";
import Projects from "./Projects";
import { PageContext } from "@/context/context.provider";
import ThirdParty from "./ThirdParty";
import useAppStore from "@/store/store";
import LandingPageV2 from "./LandingPageV2";

const LandingPage = () => {
  const { isLandingLoaded, setIsLandingLoaded } = useContext(PageContext);
  const cardColor = useAppStore((state) => state.cardColor);
  const btnColor = useAppStore((state) => state.iconcolor);

  useEffect(() => {
    setTimeout(() => {
      setIsLandingLoaded(!isLandingLoaded);
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center p-10 items-center overflow-hidden lg:items-start pb-32">
      <Description />
      <What_i_do />
      <Skills />
      <Ide />
      <Projects />
      <ThirdParty />
      <div
        style={{
          backgroundColor: cardColor,
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
        className="flex flex-col items-center mx-auto py-14 px-4 rounded-xl mt-20 gap-y-7 lg:w-5/6"
      >
        <h2 className="font-semibold text-xl text-center">
          Do you have any projects in mind or an interest in employing me?
        </h2>
        <a
          href="/contact"
          style={{ backgroundColor: btnColor }}
          className="text-md font-medium rounded-md px-3 py-2 text-white"
        >
          Contact me
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
