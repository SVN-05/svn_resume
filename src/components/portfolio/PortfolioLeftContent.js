"use client";
import React from "react";
import Slider2 from "../slider/Slider2";
import useAppStore from "@/store/store";
import { projects } from "@/utils/constants/constants";

const PortfolioLeftContent = ({ project_name = "", images = [], id = 0 }) => {
  const data = projects?.find((item) => item?.id === id);
  const titleColor = useAppStore((state) => state.titlecolor);

  return (
    <div className={`w-[690px]`}>
      <p style={{ color: titleColor }} className="text-3xl font-semibold mb-7">
        {data?.project_name}
      </p>
      <Slider2 data={images} />
    </div>
  );
};

export default PortfolioLeftContent;
