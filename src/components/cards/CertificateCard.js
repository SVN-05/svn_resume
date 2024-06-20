"use client";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import React from "react";

const CertificateCard = ({
  image = "",
  title = "",
  conducted_by = "",
  project_name = "",
  date = "",
}) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const titleColor = useAppStore((state) => state.titlecolor);
  const textColor = isDarkMode ? colors.grey3 : colors.grey15;
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;
  const logoBg = isDarkMode ? colors.grey5 : colors.grey2;

  return (
    <div
      style={{ borderColor: lineStrokeColor }}
      className="relative flex items-center border-2 rounded-lg overflow-hidden transition-all duration-600 hover:scale-105"
    >
      <div
        style={{ backgroundColor: logoBg }}
        className="w-1/6 h-full flex flex-col items-center justify-center py-5"
      >
        Logo
      </div>
      <div
        style={{ color: textColor }}
        className="flex flex-col items-start py-5 ml-7 text-xs"
      >
        <p style={{ color: titleColor }} className="text-lg">
          Title <span className="text-xs opacity-70">Conducted By</span>
        </p>
        <p>Project Name</p>
        <p className="opacity-70">Date</p>
      </div>
    </div>
  );
};

export default CertificateCard;
