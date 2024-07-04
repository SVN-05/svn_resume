"use client";
import React, { useContext } from "react";
import useAppStore from "@/store/store";
import { array3, colors, ide_content } from "@/utils/constants/constants";
import Title from "../micro/Title";
import { PageContext } from "@/context/context.provider";
import SkeletonLandingCard from "../skeletons/cards/SkeletonLandingCard";

const Ide = () => {
  const { isLandingLoaded } = useContext(PageContext);
  const iconColor = useAppStore((state) => state.iconcolor);
  const cardTextColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey1;

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <Title text="IDEs I worked with" width={180} />
      <div className="w-full flex flex-wrap gap-5 items-center mt-5">
        {isLandingLoaded
          ? ide_content.map((item) => {
              const Icon = item?.icon;
              return (
                <div
                  key={item}
                  className="w-full border border-2 border-solid border-grey9 rounded-md p-5 lg:flex-1"
                >
                  <div className="flex flex-col items-center transition-all duration-600 hover:scale-105">
                    <Icon size={45} color={iconColor} />
                    <p
                      style={{ color: cardTextColor }}
                      className="text-xs mt-3 font-semibold"
                    >
                      {item?.title}
                    </p>
                  </div>
                </div>
              );
            })
          : array3?.map((item2) => {
              return <SkeletonLandingCard key={item2} />;
            })}
      </div>
    </div>
  );
};

export default Ide;
