"use client";
import React from "react";
import Slider2 from "../slider/Slider2";
import useAppStore from "@/store/store";
import { colors, projects } from "@/utils/constants/constants";
import { FaChevronRight } from "react-icons/fa";

const PortfolioLeftContent = ({ project_name = "", images = [], id = 0 }) => {
  const data = projects?.find((item) => item?.id === id);
  const paraColor = useAppStore((state) => state.isDarkMode)
    ? colors.grey9
    : colors.grey7;

  return (
    <div className={`max-w-[690px] relative overflow-hidden`}>
      <a
        href="/portfolio"
        className="custom-title-color text-3xl font-semibold mb-7 flex items-center gap-x-2 cursor-pointer"
      >
        Portfolio <FaChevronRight size={25} /> {data?.project_name}
      </a>
      <Slider2 data={images} />
      <div
        style={{ color: paraColor }}
        className="flex flex-col items-start gap-y-4 mt-5 text-md font-normal"
      >
        {data?.para?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default PortfolioLeftContent;
