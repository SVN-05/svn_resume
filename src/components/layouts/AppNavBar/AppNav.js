"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitch from "@/components/toggleButtons/ThemeSwitch";
import {
  aboutMeHoverOptions,
  navBarOptions,
  userDetails,
} from "@/utils/constants/constants";
import { formatDateTime, getFirstletter } from "@/utils/helpers/methods";
import useAppStore from "@/store/store";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import SideDrawer from "../SideDrawer";
import PageProgress from "../PageProgress";
import DropdownMenu from "@/components/dropdown/DropdownMenu";

const AppNav = () => {
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const initial = getFirstletter(userDetails?.firstName);
  const isToggled = resolvedTheme === "dark";
  const applyLightTheme = useAppStore((state) => state.applyLightTheme);
  const applyDarkTheme = useAppStore((state) => state.applyDarkTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [dateTime, setDateTime] = useState({});

  const handleAppTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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

  useEffect(() => {
    const updateDateTime = () => {
      const value = formatDateTime();
      setDateTime(value);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 5000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

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

  const ToggleButtons = ({ className = "" }) => {
    return (
      <div className={`items-center gap-x-5 ${className}`}>
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
    );
  };

  return (
    <main
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 0px 0px",
        zIndex: 99,
      }}
      className="w-full sticky top-0 flex flex-col items-start"
    >
      <PageProgress />
      <div className="w-full flex flex-wrap items-center justify-between py-5 px-5 lg:px-16">
        <div className="flex items-center gap-x-5 tracking-normal transition-all duration-500 md:gap-x-10">
          <p
            className={`bg-primary py-1 px-3 rounded-full font-bold text-white`}
          >
            {initial}
          </p>
          {navBarOptions?.map((item) => {
            const currentTab = pathName === item?.link;
            const isAbout = item?.text === "about me";

            return isAbout ? (
              <DropdownMenu
                title={item?.text}
                options={aboutMeHoverOptions}
                parentClassName="hidden lg:flex flex-col"
                titleClassName={`hidden capitalize md:flex ${
                  currentTab
                    ? "font-bold text-[15px]"
                    : "font-normal text-[13px]"
                }`}
              />
            ) : (
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
          <ToggleButtons className="hidden lg:flex" />
        </div>
        <SideDrawer
          isToggled={isToggled}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          handleDrawer={handleDrawer}
        />
        <ToggleButtons className="flex lg:hidden" />
        <p className="hidden lg:flex items-center gap-10 font-medium transition-all duration-300">
          {dateTime?.date} <span>{dateTime?.time}</span>
        </p>
      </div>
    </main>
  );
};

export default AppNav;
