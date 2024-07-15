"use client";
import React from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const PortfolioNavBar = ({ data = [] }) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const appBg = useAppStore((state) => state.appBg);
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;
  const optionColor = isDarkMode ? colors.grey2 : colors.grey4;
  const portfolioFilter = useAppStore((state) => state.portfolioFilter);
  const setPortfolioFilter = useAppStore((state) => state.setPortfolioFilter);

  const NavText = ({ text = "" }) => {
    const isSelected = [text?.toLowerCase()]?.includes(
      portfolioFilter?.toLocaleLowerCase()
    );

    return (
      <p
        style={{ color: optionColor }}
        className={`text-xs cursor-pointer lg:hover:underline hover:underline-offset-4 ${
          isSelected ? "underline underline-offset-4" : "opacity-60"
        }`}
        onClick={() => {
          setPortfolioFilter(text);
        }}
      >
        {text}
      </p>
    );
  };

  return (
    <div
      style={{
        borderColor: lineStrokeColor,
        backgroundColor: appBg,
      }}
      className="sticky top-[78px] flex items-center gap-x-10 border-b-2 py-4 z-50 lg:z-0 lg:relative lg:top-0 lg:pt-10 lg:border-0 lg:self-end"
    >
      {data?.map((item) => {
        return <NavText key={item} text={item} />;
      })}
    </div>
  );
};

export default PortfolioNavBar;
