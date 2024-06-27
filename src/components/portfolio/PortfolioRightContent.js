"use client";
import React, { useState } from "react";
import { colors, projects } from "@/utils/constants/constants";
import useAppStore from "@/store/store";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const PortfolioRightContent = ({ id = 0 }) => {
  const data = projects?.find((item) => item?.id === id);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const titleColor = useAppStore((state) => state.titlecolor);
  const iconColor = useAppStore((state) => state.iconcolor);

  const bg = isDarkMode ? colors.grey1 : colors.grey6;
  const shareIconBg = isDarkMode ? colors.grey19 : colors.white;
  const shareIconUnmountColor = isDarkMode ? colors.white : colors.grey18;
  const borderColor = isDarkMode ? colors.grey17 : colors.grey11;
  const textColor = isDarkMode ? colors.grey9 : colors.grey7;

  const iconSize = 20;

  const content = [
    { icon: PiBuildingOfficeFill, text: data?.company_name },
    { icon: BsCalendarDateFill, text: `${data?.startYear} - ${data?.endYear}` },
  ];
  const share_icons = [
    { icon: FaLinkedinIn, link: "" },
    { icon: FaXTwitter, link: "" },
    { icon: FaFacebookF, link: "" },
    { icon: SiGmail, link: "" },
  ];

  const [hoverColors, setHoverColors] = useState({
    icon: shareIconUnmountColor,
    borderColor: "transparent",
    index: 4,
  });

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
      className={`w-full h-fit flex flex-col items-start px-5 py-6 border-2 rounded-lg gap-y-5 text-sm lg:max-w-[360px] lg:sticky lg:top-24`}
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
      <div className="flex flex-wrap items-start justify-between gap-2">
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
      <Title text="Share" />
      <div className="flex items-center gap-x-5">
        {share_icons?.map((item3, index3) => {
          const Icon = item3?.icon;
          return (
            <a
              key={index3}
              style={{
                backgroundColor: shareIconBg,
                color:
                  index3 === hoverColors.index
                    ? hoverColors.icon
                    : shareIconUnmountColor,
                borderColor:
                  index3 === hoverColors.index
                    ? hoverColors.borderColor
                    : "transparent",
              }}
              className="cursor-pointer p-2 rounded transition transition-opacity transition-colors duration-150 ease-in-out border-2"
              onMouseOver={() => {
                setHoverColors((prev) => ({
                  ...prev,
                  icon: iconColor,
                  borderColor: isDarkMode ? iconColor : "transparent",
                  index: index3,
                }));
              }}
              onMouseOut={() => {
                setHoverColors((prev) => ({
                  ...prev,
                  icon: shareIconUnmountColor,
                  borderColor: "transparent",
                  index: 4,
                }));
              }}
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioRightContent;
