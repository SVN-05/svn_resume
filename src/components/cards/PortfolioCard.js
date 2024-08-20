"use client";
import React from "react";

const PortfolioCard = ({
  imageName = "",
  project_name = "",
  language_used = "",
  icons = [],
  id = Number,
}) => {
  return (
    <a
      href={`/portfolio/${id}`}
      className="portfolio-card-parent-div shadow-md cursor-pointer overflow-hidden flex flex-col items-start justify-between rounded-lg h-60 px-4 py-5 lg:px-7 lg:h-80"
    >
      <div
        style={{ backgroundImage: `url(/${imageName})` }}
        className="w-full h-full bg-center bg-cover bg-no-repeat rounded-lg absolute top-0 -left-4 right-0 bottom-0 z-0 transition-all duration-300 translate-x-4 hover:scale-110"
      />
      <p className="custom-bg text-sm font-semibold py-2 px-4 rounded-lg z-10 shadow-md">
        {project_name}
      </p>
      <div className="w-full portfolio-card-child-div flex justify-between items-center z-10">
        <p className="custom-bg rounded-md py-2 px-4 text-xs font-normal shadow-md">
          {language_used}
        </p>
        <div className="custom-bg rounded-md flex items-center gap-x-2 py-2 px-4 shadow-md">
          {icons?.map((item, index) => {
            const Icon = item;
            return <Icon key={index} size={30} className="theme-color" />;
          })}
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
