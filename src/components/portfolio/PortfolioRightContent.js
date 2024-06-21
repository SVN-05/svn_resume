"use client";
import React from "react";
import { colors, projects } from "@/utils/constants/constants";
import useAppStore from "@/store/store";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";

const PortfolioRightContent = ({ id = 0 }) => {
  const data = projects?.find((item) => item?.id === id);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const titleColor = useAppStore((state) => state.titlecolor);
  const iconColor = useAppStore((state) => state.iconcolor);
  const bg = isDarkMode ? colors.grey1 : colors.grey6;
  const borderColor = isDarkMode ? colors.grey17 : colors.grey11;
  const textColor = isDarkMode ? colors.grey9 : colors.grey7;
  const iconSize = 20;
  const content = [
    { icon: PiBuildingOfficeFill, text: data?.company_name },
    { icon: BsCalendarDateFill, text: `${data?.startYear} - ${data?.endYear}` },
  ];

  return (
    <div
      style={{
        backgroundColor: bg,
        borderColor: borderColor,
        color: textColor,
      }}
      className={`w-[320px] flex flex-col items-start px-5 py-6 border-2 rounded-lg gap-y-5 text-sm`}
    >
      <p style={{ color: titleColor }} className="font-semoibold text-lg">
        Description
      </p>
      {content?.map((item, index) => {
        const Icon = item?.icon;
        return (
          <div key={index} className="flex gap-x-3">
            <Icon size={iconSize} color={iconColor} />
            <p>{item?.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioRightContent;
