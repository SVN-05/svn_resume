"use client";
import React, { useContext } from "react";
import { skills_content } from "@/utils/constants/constants";
import Slider1 from "../slider/Slider1";
import Title from "../micro/Title";
import { PageContext } from "@/context/context.provider";

const Skills = () => {
  const { isLandingLoaded } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <Title text="Skills" />
      <Slider1 data={skills_content} isLoaded={isLandingLoaded} />
    </div>
  );
};

export default Skills;
