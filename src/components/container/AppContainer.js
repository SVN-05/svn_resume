"use client";
import React from "react";
import useAppStore from "@/store/store";

const AppContainer = ({ children, className }) => {
  const background = useAppStore((state) => state.appBg);
  const textcolor = useAppStore((state) => state.textcolor);

  return (
    <div style={{ backgroundColor: background, color: textcolor }}>
      <div className={`w-full max-w-[1360px] mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
