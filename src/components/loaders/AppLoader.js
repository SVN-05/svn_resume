"use client";
import React from "react";
import useAppStore from "@/store/store";
import { darkLoader, lightLoader } from "@/utils/LottieIndex";
import dynamic from "next/dynamic";

const AppLoader = ({ text = "Loading..." }) => {
  const LottieAnimation = dynamic(() => import("../lottie/LottieAnimation"), {
    ssr: false,
  });
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
