"use client";
import React, { useContext } from "react";
import { array3, project_content } from "@/utils/constants/constants";
import Slider1 from "../slider/Slider1";
import Title from "../micro/Title";
import { PageContext } from "@/context/context.provider";
import SkeletonLandingCard from "../skeletons/cards/SkeletonLandingCard";

const Projects = () => {
  const { isLandingLoaded } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <Title text="Projects Worked On" width={200} />
      {isLandingLoaded ? (
        <Slider1 data={project_content} />
      ) : (
        <div className="w-full flex items-center gap-x-5 gap-y-3 mt-5">
          {array3?.map((item) => {
            return <SkeletonLandingCard key={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
