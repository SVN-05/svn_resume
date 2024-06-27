"use client";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import React, { useEffect, useState } from "react";

const Determinate = ({ title = "", percentage = 0 }) => {
  const titleColor = useAppStore((state) => state.titlecolor);
  const iconColor = useAppStore((state) => state.iconcolor);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const progresBorderColor = isDarkMode ? colors.grey17 : colors.grey8;
  const [animPercentage, setAnimPercentage] = useState(0);

  useEffect(() => {
    if (animPercentage <= percentage) {
      setTimeout(() => {
        setAnimPercentage(animPercentage + 1);
      }, 50);
    }
  }, [animPercentage]);

  return (
    <div className="w-full flex flex-col items-start gap-y-[3px]">
      <div className="w-full flex justify-between items-center">
        <p style={{ color: titleColor }} className="text-sm font-semibold">
          {title}
        </p>
        <p className="text-grey16 text-xs">{animPercentage}</p>
      </div>
      <div
        style={{ borderColor: progresBorderColor }}
        className="w-full relative rounded-md p-[3px] border-2"
      >
        <div
          style={{ width: `${animPercentage}%`, backgroundColor: iconColor }}
          className="h-[3px] rounded transition-all duration-100"
        />
      </div>
    </div>
  );
};

export default Determinate;
