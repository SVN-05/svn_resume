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
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import SideDrawer from "../SideDrawer";

const AppNav = () => {
  const pathName = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
    getAppTheme();
  }, []);

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
              style={{
                fontWeight: currentTab ? "bold" : 400,
                fontSize: currentTab ? 15 : 14,
              }}
              className="hidden cursor-pointer hover:underline underline-offset-8 md:flex"
            >
              {item?.text}
            </a>
          );
        })}
        {mounted && (
          <ThemeSwitch isToggled={isToggled} handleToggle={handleAppTheme} />
        )}
        <AiOutlineMenu
          size={20}
          className="md:hidden"
          onClick={() => {
            if (isOpen) {
              setShowOverlay(!showOverlay);
            }
            setIsOpen(!isOpen);
            if (isOpen === false) {
              setTimeout(() => {
                setShowOverlay(!showOverlay);
              }, 400);
            }
          }}
        />
      </div>
      <SideDrawer
        isToggled={isToggled}
        appBg={appBg}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};

export default AppNav;
