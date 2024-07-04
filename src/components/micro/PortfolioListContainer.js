"use client";
import React, { useContext, useEffect, useState } from "react";
import PortfolioCard from "../cards/PortfolioCard";
import { projects } from "@/utils/constants/constants";
import useAppStore from "@/store/store";
import { PageContext } from "@/context/context.provider";
import SkeletonPortfolioCard from "../skeletons/cards/SkeletonPortfolioCard";

const PortfolioListContainer = () => {
  const { isPortfolioLoaded, setIsPortfolioLoaded } = useContext(PageContext);
  const data = projects?.reverse();
  const [filteredData, setFilteredData] = useState(data);
  const portfolioFilter = useAppStore((state) => state.portfolioFilter);

  useEffect(() => {
    setTimeout(() => {
      setIsPortfolioLoaded(!isPortfolioLoaded);
    }, 2000);
  }, []);

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
      {isPortfolioLoaded
        ? filteredData?.map((item, index) => {
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
          })
        : [1, 2, 3, 4, 5, 6]?.map((item2) => {
            return <SkeletonPortfolioCard key={item2} />;
          })}
    </div>
  );
};

export default PortfolioListContainer;
