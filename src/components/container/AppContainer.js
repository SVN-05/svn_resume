"use client";
import React from "react";
import useAppStore from "@/store/store";

const AppContainer = ({ children, className }) => {
  const background = useAppStore((state) => state.appBg);
  const textcolor = useAppStore((state) => state.textcolor);

  return (
    <div style={{ backgroundColor: background, color: textcolor }}>
      <div className={`w-full mx-auto ${className} lg:max-w-[1360px]`}>
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
