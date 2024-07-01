"use client";
import React from "react";
import useAppStore from "@/store/store";
import AppNav from "./AppNavBar/AppNav";

const AppLayout = ({ children }) => {
  const background = useAppStore((state) => state.appBg);
  const textcolor = useAppStore((state) => state.textcolor);

  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: background, color: textcolor }}
    >
      <AppNav />
      {children}
    </div>
  );
};

export default AppLayout;
