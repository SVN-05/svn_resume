"use client";
import React from "react";
import Halftinted from "../lines/Halftinted";
import useAppStore from "@/store/store";

const Title = ({
  text = "",
  width = 100,
  titleContainer = "",
  className = "",
}) => {
  const titlecolor = useAppStore((state) => state.titlecolor);

  return (
    <div className={`flex flex-col items-start ${titleContainer}`}>
      <p
        style={{ color: titlecolor }}
        className="text-xl text-start font-semibold"
      >
        {text}
      </p>
      <Halftinted width={width} classname={`mt-1 ${className}`} />
    </div>
  );
};

export default Title;
