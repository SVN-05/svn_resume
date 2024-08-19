"use client";
import useAppStore from "@/store/store";
import { darkLoader, lightLoader } from "@/utils/LottieIndex";
import React from "react";
import LottieAnimation from "../lottie/LottieAnimation";

const AppLoader = ({ text = "Loading..." }) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const loadingAnimFile = isDarkMode ? darkLoader : lightLoader;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LottieAnimation animationFile={loadingAnimFile} />
      <p className="absolute text-md font-medium">{text}</p>
    </div>
  );
};

export default AppLoader;
