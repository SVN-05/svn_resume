"use client";
import React from "react";
import PortfolioCard from "../cards/PortfolioCard";
import { projects } from "@/utils/constants/constants";

const PortfolioListContainer = () => {
  const data = projects?.reverse();

  return (
    <div className="w-full grid grid-cols-2 gap-10">
      {data?.map((item, index) => {
        return (
          <PortfolioCard
            key={index}
            id={item?.id}
            imageName={item?.image_name}
            project_name={item?.project_name}
            language_used={item?.language_used}
            icons={item?.icons}
          />
        );
      })}
    </div>
  );
};

export default PortfolioListContainer;
