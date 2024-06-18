"use client";
import React from "react";
import useAppStore from "@/store/store";
import Halftinted from "../lines/Halftinted";
import { colors, ide_content } from "@/utils/constants/constants";

const Ide = () => {
  const titlecolor = useAppStore((state) => state.titlecolor);
  const iconColor = useAppStore((state) => state.iconcolor);
  const cardTextColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey6;

  return (
    <div className="w-full flex flex-col items-start mt-20">
      <p
        style={{ color: titlecolor }}
        className="text-xl text-start font-semibold"
      >
        IDEs I worked with
      </p>
      <Halftinted width={180} classname="mt-1" />
      <div className="w-full flex flex-wrap gap-5 items-center mt-5">
        {ide_content.map((item) => {
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
        })}
      </div>
    </div>
  );
};

export default Ide;
