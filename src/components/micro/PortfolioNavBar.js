"use client";
import React, { useState } from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const PortfolioNavBar = ({ data = [] }) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;
  const optionColor = isDarkMode ? colors.grey2 : colors.grey4;
  const [selected, setSelected] = useState("All");

  const NavText = ({ text = "" }) => {
    const isSelected = [text?.toLowerCase()]?.includes(
      selected?.toLocaleLowerCase()
    );

    return (
      <p
        style={{ color: optionColor }}
        className={`text-xs cursor-pointer lg:hover:underline hover:underline-offset-4 ${
          isSelected ? "underline underline-offset-4" : "opacity-60"
        }`}
        onClick={() => {
          setSelected(text);
        }}
      >
        {text}
      </p>
    );
  };

  return (
    <div
      style={{ borderColor: lineStrokeColor }}
      className="sticky flex items-center gap-x-10 px-8 border-b-2 py-4 lg:pt-10 lg:border-0 lg:px-0 lg:w-[21%] lg:self-end"
    >
      {data?.map((item) => {
        return <NavText key={item} text={item} />;
      })}
    </div>
  );
};

export default PortfolioNavBar;
