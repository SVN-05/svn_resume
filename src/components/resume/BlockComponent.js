"use client";
import React from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const BlockComponent = ({
  startYear = "",
  endYear = "",
  studiedAt = "",
  title = "",
  des = "",
  containerClassName = "",
  isLastIndex = false,
}) => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const durationColor = isDarkMode ? colors.white : colors.grey7;
  const studiedAtColor = isDarkMode ? colors.grey12 : colors.grey7;
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;

  return (
    <div className={`flex flex-col items-start ${containerClassName}`}>
      <div className="flex items-center gap-2 text-xs">
        <p
          style={{ borderColor: iconcolor, color: durationColor }}
          className="flex items-center font-medium border-2 rounded-2xl px-3 py-2"
        >
          {startYear} {endYear && `- ${endYear}`}
        </p>
        <p style={{ color: studiedAtColor }} className="font-normal opacity-70">
          {studiedAt}
        </p>
      </div>
      <div
        style={{ borderColor: lineStrokeColor }}
        className={`w-full flex flex-col items-start pt-2 pl-10 border-l-[1px] ml-5 gap-y-2 ${
          isLastIndex === false && "border-b-[1px] pb-4"
        }`}
      >
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-justify">{des}</p>
      </div>
      {isLastIndex === false && (
        <div
          style={{ backgroundColor: lineStrokeColor }}
          className="w-[1px] h-10 ml-5"
        />
      )}
    </div>
  );
};

export default BlockComponent;
