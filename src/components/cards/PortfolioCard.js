"use client";
import React from "react";
import useAppStore from "@/store/store";

const PortfolioCard = ({
  imageName = "",
  project_name = "",
  language_used = "",
  icons = [],
  id = Number,
}) => {
  const bg = useAppStore((state) => state.appBg);
  const iconcolor = useAppStore((state) => state.iconcolor);

  return (
    <a
      href={`/portfolio/${id}`}
      className="portfolio-card-parent-div shadow-md cursor-pointer overflow-hidden flex flex-col items-start justify-between rounded-lg h-80 px-7 py-5"
    >
      <div
        style={{ backgroundImage: `url(/${imageName})` }}
        className="w-full h-full bg-center bg-cover rounded-lg absolute top-0 -left-4 right-0 bottom-0 z-0 transition-all duration-300 translate-x-4 hover:scale-110"
      />
      <p
        style={{ backgroundColor: bg }}
        className="text-sm font-semibold py-2 px-4 rounded-lg z-10 shadow-md"
      >
        {project_name}
      </p>
      <div className="w-full portfolio-card-child-div flex justify-between items-center z-10">
        <p
          style={{ backgroundColor: bg }}
          className="rounded-md py-2 px-4 text-xs font-normal shadow-md"
        >
          {language_used}
        </p>
        <div
          style={{ backgroundColor: bg }}
          className="rounded-md flex items-center gap-x-2 py-2 px-4 shadow-md"
        >
          {icons?.map((item, index) => {
            const Icon = item;
            return <Icon key={index} size={30} color={iconcolor} />;
          })}
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
