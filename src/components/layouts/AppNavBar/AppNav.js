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

const AppNav = () => {
  const initial = getFirstletter(userDetails?.firstName);
  const isToggled = useAppStore((state) => state.isDarkMode);
  const changeAppTheme = useAppStore((state) => state.changeAppTheme);
  const [bgColour, setBgColour] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const navBarHeight = "64px";

  useEffect(() => {
    function handleScroll() {
      if (window !== undefined && window.pageYOffset > 50) {
        if (bgColour !== colors.white) {
          setBgColour(isToggled ? colors.grey4 : colors.white);
        }
      } else {
        if (bgColour !== "transparent") {
          setBgColour("transparent");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgColour, isToggled]);

  return (
    <div
      style={{
        backgroundColor: bgColour,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 0px 0px",
      }}
      className="flex flex-wrap items-center justify-between py-5 sticky top-0 px-5 xl:px-0"
    >
      <div className="flex items-center gap-x-3 text-xl">
        <p className={`bg-primary py-1 px-3 rounded-full font-bold text-white`}>
          {initial}
        </p>
        <span className="font-semibold">{userDetails?.firstName}</span>{" "}
        {userDetails?.lastName}
      </div>
      <div className="flex items-center gap-x-5 text-sm tracking-normal md:gap-x-14">
        {navBarOptions?.map((item) => {
          return (
            <a
              key={item?.text}
              href={item?.link}
              className="hidden cursor-pointer hover:underline underline-offset-8 md:flex"
            >
              {item?.text}
            </a>
          );
        })}
        <ThemeSwitch isToggled={isToggled} handleToggle={changeAppTheme} />
        <AiOutlineMenu
          size={20}
          className="md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div
        className={`fixed top-20 right-0 bg-white transition-transform flex flex-col items-start pl-6 pt-4 gap-y-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "200px",
          height: `calc(100vh - ${navBarHeight})`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {navBarOptions?.map((item2) => {
          return (
            <a key={item2?.text} href={item2?.link} className="flex flex-col">
              {item2?.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AppNav;
