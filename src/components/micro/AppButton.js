"use client";
import React, { useState } from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import { Button } from "@chakra-ui/react";

const AppButton = ({
  text = "",
  className,
  isLoading = false,
  onClick = () => {},
}) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const iconColor = useAppStore((state) => state.iconcolor);
  const bg = isDarkMode ? colors.white : colors.grey7;
  const bg2 = isDarkMode ? colors.grey7 : colors.white;
  const [btnBg, setBtnBg] = useState(bg);

  return (
    <Button
      variant={"outline"}
      isLoading={isLoading}
      style={{
        backgroundColor: btnBg,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className={`custom-border w-fit border-2 rounded-2xl py-2 px-5 transition-all duration-300 text-sm ${className}`}
      onMouseOver={() => {
        setBtnBg(iconColor);
      }}
      onMouseOut={() => {
        setBtnBg(bg2);
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AppButton;
