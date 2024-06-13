"use client";
import React from "react";
import ThemeSwitch from "@/components/toggleButtons/ThemeSwitch";
import { navBarOptions, userDetails } from "@/utils/constants/constants";
import { getFirstletter } from "@/utils/helpers/methods";
import useAppStore from "@/store/store";

const AppNav = () => {
  const initial = getFirstletter(userDetails?.firstName);
  const isToggled = useAppStore((state) => state.isDarkMode);
  const changeAppTheme = useAppStore((state) => state.changeAppTheme);

  return (
    <div className="flex flex-wrap items-center justify-between py-5 sticky top-0">
      <div className="flex items-center gap-x-3 text-xl">
        <p className={`bg-primary py-1 px-3 rounded-full font-bold text-white`}>
          {initial}
        </p>
        <span className="font-semibold">{userDetails?.firstName}</span>{" "}
        {userDetails?.lastName}
      </div>
      <div className="flex items-center gap-x-14 text-sm tracking-normal">
        {navBarOptions?.map((item) => {
          return (
            <a
              key={item?.text}
              href={item?.link}
              className="cursor-pointer hover:underline underline-offset-8"
            >
              {item?.text}
            </a>
          );
        })}
        <ThemeSwitch isToggled={isToggled} handleToggle={changeAppTheme} />
      </div>
    </div>
  );
};

export default AppNav;
