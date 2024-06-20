"use client";
import React from "react";
import useAppStore from "@/store/store";
import Halftinted from "../lines/Halftinted";
import { skills_content } from "@/utils/constants/constants";
import Slider1 from "../slider/Slider1";
import Title from "../micro/Title";

const Skills = () => {
  const titlecolor = useAppStore((state) => state.titlecolor);

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <Title text="Skills" />
      <Slider1 data={skills_content} />
    </div>
  );
};

export default Skills;
