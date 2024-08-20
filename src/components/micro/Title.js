"use client";
import React from "react";
import Halftinted from "../lines/Halftinted";

const Title = ({
  text = "",
  width = 100,
  titleContainer = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start ${titleContainer}`}>
      <p className="text-xl text-start font-semibold custom-title-color">
        {text}
      </p>
      <Halftinted width={width} classname={`mt-1 ${className}`} />
    </div>
  );
};

export default Title;
