"use client";
import React from "react";
import { project_list } from "@/utils/constants/constants";
import ElevateCard from "@/components/cards/ElevateCard";

const VerticalCardScroll = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto gap-y-5 mt-32 lg:gap-y-10">
      <p className="text-grey opacity-50 text-xl font-medium lg:text-3xl">
        SELECTED PROJECTS
      </p>
      {project_list?.map((item, index) => {
        return (
          <ElevateCard
            key={index}
            no={index + 1}
            title={item?.title}
            subTitle={item?.subtitle}
            des={item?.des}
            image={item?.image}
            icons={item?.icons}
            linkId={item?.linkId}
          />
        );
      })}
    </div>
  );
};

export default VerticalCardScroll;
