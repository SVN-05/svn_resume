"use client";
import React, { useState } from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const Button = ({ text = "", className, onClick = () => {} }) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const iconColor = useAppStore((state) => state.iconcolor);
  const bg = isDarkMode ? colors.white : colors.grey7;
  const [btnBg, setBtnBg] = useState(bg);

  return (
    <button
      style={{
        backgroundColor: btnBg,
        borderColor: iconColor,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className={`w-fit border-2 rounded-2xl py-2 px-5 transition-all duration-300 ${className}`}
      onMouseOver={() => {
        setBtnBg(iconColor);
      }}
      onMouseOut={() => {
        setBtnBg(bg);
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
