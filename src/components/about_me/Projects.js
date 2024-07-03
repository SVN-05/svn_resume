"use client";
import React, { useContext } from "react";
import { project_content } from "@/utils/constants/constants";
import Slider1 from "../slider/Slider1";
import Title from "../micro/Title";
import { PageContext } from "@/context/context.provider";

const Projects = () => {
  const { isLandingLoaded } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <Title text="Projects Worked On" width={200} />
      <Slider1 data={project_content} isLoaded={isLandingLoaded} />
    </div>
  );
};

export default Projects;
