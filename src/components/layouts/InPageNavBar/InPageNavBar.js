"use client";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import React from "react";

const InPageNavBar = ({ title = "", rightSideText = "" }) => {
  const titlecolor = useAppStore((state) => state.titlecolor);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? colors.grey13 : colors.grey10;
  const borderColor = isDarkMode ? colors.grey1 : colors.grey11;

  return (
    <div
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      className="w-full flex flex-col items-start justify-between border-y-2 py-7 px-10 lg:py-14 lg:px-16 lg:flex-row"
    >
      <p
        style={{ color: titlecolor }}
        className="text-4xl text-grey1 font-semibold xl:text-5xl"
      >
        {title}
      </p>
      <p className="text-grey12 text-md font-light lg:-mt-11">
        {rightSideText}
      </p>
    </div>
  );
};

export default InPageNavBar;
