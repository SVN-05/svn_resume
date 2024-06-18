"use client";
import React from "react";
import Halftinted from "../lines/Halftinted";
import useAppStore from "@/store/store";
import { project_content } from "@/utils/constants/constants";
import Slider1 from "../slider/Slider1";

const Projects = () => {
  const titlecolor = useAppStore((state) => state.titlecolor);

  return (
    <div className="flex flex-col items-start mt-20">
      <p
        style={{ color: titlecolor }}
        className="text-xl text-start font-semibold"
      >
        Projects Worked On
      </p>
      <Halftinted width={200} classname="mt-1" />
      <Slider1 data={project_content} />
    </div>
  );
};

export default Projects;
