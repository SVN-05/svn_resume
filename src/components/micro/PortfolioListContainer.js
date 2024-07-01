"use client";
import React, { useEffect, useState } from "react";
import PortfolioCard from "../cards/PortfolioCard";
import { projects } from "@/utils/constants/constants";
import useAppStore from "@/store/store";

const PortfolioListContainer = () => {
  const data = projects?.reverse();
  const [filteredData, setFilteredData] = useState(data);
  const portfolioFilter = useAppStore((state) => state.portfolioFilter);

  useEffect(() => {
    const fd =
      portfolioFilter === "All"
        ? data
        : data?.filter(
            (item) =>
              String(item?.filter)?.toLocaleLowerCase() ===
              String(portfolioFilter)?.toLocaleLowerCase()
          );
    setFilteredData(fd);
  }, [portfolioFilter]);

  return (
    <div className="w-full grid grid-cols-1 gap-10 mt-5 md:mt-0 md:grid-cols-2">
      {filteredData?.map((item, index) => {
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
