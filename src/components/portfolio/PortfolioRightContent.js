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

  const Title = ({ text = "" }) => {
    return (
      <p style={{ color: titleColor }} className="font-bold text-lg">
        {text}
      </p>
    );
  };

  return (
    <div
      style={{
        backgroundColor: bg,
        borderColor: borderColor,
        color: textColor,
      }}
      className={`w-full flex flex-col items-start px-5 py-6 border-2 rounded-lg gap-y-5 text-sm lg:max-w-[360px]`}
    >
      <Title text="Description" />
      {content?.map((item, index) => {
        const Icon = item?.icon;
        return (
          <div key={index} className="flex gap-x-3">
            <Icon size={iconSize} color={iconColor} />
            <p>{item?.text}</p>
          </div>
        );
      })}
      <p className="tracking-wide">{data?.des}</p>
      <Title text="Technology" />
      <div className="flex flex-wrap items-start justify-between gap-y-2">
        {data?.tech?.map((item2, index2) => {
          return (
            <p
              key={index2}
              className="border-2 text-xs rounded-md px-2 py-[1px]"
            >
              {item2}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioRightContent;
