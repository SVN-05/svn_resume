"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitch from "@/components/toggleButtons/ThemeSwitch";
import {
  colors,
  navBarOptions,
  userDetails,
} from "@/utils/constants/constants";
import { getFirstletter } from "@/utils/helpers/methods";
import useAppStore from "@/store/store";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import SideDrawer from "../SideDrawer";

const AppNav = () => {
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const initial = getFirstletter(userDetails?.firstName);
  const isToggled = useAppStore((state) => state.isDarkMode);
  const appBg = useAppStore((state) => state.appBg);
  const changeAppTheme = useAppStore((state) => state.changeAppTheme);
  const applyLightTheme = useAppStore((state) => state.applyLightTheme);
  const applyDarkTheme = useAppStore((state) => state.applyDarkTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAppTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    changeAppTheme();
  };

  const getAppTheme = () => {
    if (resolvedTheme === "light") {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
  };

  useEffect(() => {
    getAppTheme();
    setMounted(true);
  }, [resolvedTheme]);

  const handleDrawer = () => {
    if (isOpen) {
      setShowOverlay(!showOverlay);
    }
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setTimeout(() => {
        setShowOverlay(!showOverlay);
      }, 400);
    }
  };

  return (
    <div
      style={{
        backgroundColor: isToggled ? colors.grey4 : colors.white,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 0px 0px",
        zIndex: 99,
      }}
      className="flex flex-wrap items-center justify-between py-5 sticky top-0 px-5 lg:px-16"
    >
      <div className="flex items-center gap-x-3 text-xl">
        <p className={`bg-primary py-1 px-3 rounded-full font-bold text-white`}>
          {initial}
        </p>
        <span className="font-semibold">{userDetails?.firstName}</span>{" "}
        {userDetails?.lastName}
      </div>
      <div className="flex items-center gap-x-5 tracking-normal transform-all duration-500 md:gap-x-14">
        {navBarOptions?.map((item) => {
          const currentTab = pathName === item?.link;

          return (
            <a
              key={item?.text}
              href={item?.link}
              className={`hidden cursor-pointer capitalize underline-offset-8 md:flex ${
                currentTab
                  ? "font-bold text-[15px]"
                  : "font-normal text-[13px] hover:underline"
              }`}
            >
              {item?.text}
            </a>
          );
        })}
        {mounted && (
          <ThemeSwitch isToggled={isToggled} handleToggle={handleAppTheme} />
        )}
        <AiOutlineClose
          size={20}
          style={{
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            opacity: isOpen ? 1 : 0,
            filter: isOpen ? "blur(0px)" : "blur(10px)",
            transitionDuration: "0.4s",
          }}
          className="ease-linear absolute right-5 md:hidden"
          onClick={handleDrawer}
        />
        <AiOutlineMenu
          size={20}
          style={{
            transform: isOpen ? "scaleY(0)" : "scaleY(1)",
            opacity: isOpen ? 0 : 1,
            filter: isOpen ? "blur(10px)" : "blur(0px)",
            transitionDuration: isOpen ? "0.5s" : "0.3s",
          }}
          className="ease-linear md:hidden"
          onClick={handleDrawer}
        />
      </div>
      <SideDrawer
        isToggled={isToggled}
        appBg={appBg}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        handleDrawer={handleDrawer}
      />
    </div>
  );
};

export default AppNav;
