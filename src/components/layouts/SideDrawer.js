"use client";
import React from "react";
import { colors, navBarOptions } from "@/utils/constants/constants";
import useAppStore from "@/store/store";
import { usePathname } from "next/navigation";
import { HiUserCircle } from "react-icons/hi";

const SideDrawer = ({
  isToggled,
  appBg,
  isOpen,
  setIsOpen,
  showOverlay,
  setShowOverlay,
  handleDrawer = () => {},
}) => {
  const pathName = usePathname();
  const navBarHeight = "64px";
  const iconcolor = useAppStore((state) => state.iconcolor);
  const index = 1;
  const newObjects = [
    { text: "About Me 2", link: "/aboutme2", icon: HiUserCircle },
  ];
  const modifiedNavOptions = [
    ...navBarOptions.slice(0, index),
    ...newObjects,
    ...navBarOptions.slice(index),
  ];

  return (
    <div
      className={`w-full fixed top-[77px] right-0 transition-transform flex flex-col items-startgap-y-5 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        height: `calc(100vh - ${navBarHeight})`,
        transition: "transform 0.4s ease-in-out",
      }}
    >
      {showOverlay && (
        <div
          className="z-10 w-full bg-black absolute top-0 right-0 bottom-0 left-0 opacity-50"
          onClick={handleDrawer}
        />
      )}
      <div
        style={{
          boxShadow: isToggled
            ? "rgba(34,34,34, 0.2) 0px 8px 24px"
            : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: appBg,
        }}
        className="flex flex-col z-20 gap-y-5 text-lg max-w-2/6 h-full self-end px-6 pt-6 rounded-tl-xl"
      >
        {modifiedNavOptions?.map((item2) => {
          const currentTab = pathName === item2?.link;
          const Icon = item2?.icon;
          const bg = currentTab
            ? isToggled
              ? colors.lightBlue3
              : colors.lightGreen2
            : "transparent";
          const iconColor = currentTab ? iconcolor : colors.grey15;

          return (
            <div
              key={item2?.text}
              style={{
                transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                opacity: isOpen ? 1 : 0,
                filter: isOpen ? "blur(0px)" : "blur(10px)",
                transitionDuration: isOpen ? "0.7s" : "0.4s",
                backgroundColor: bg,
                fontWeight: currentTab ? "800" : "400",
                color: isToggled
                  ? colors.white
                  : currentTab
                  ? colors.white
                  : colors.black,
              }}
              className="flex gap-x-5 items-center capitalize text-white justify-start ease-linear px-4 py-2 rounded-md font-semibold"
            >
              <Icon color={iconColor} size={25} />
              <a
                href={item2?.link}
                onClick={() => {
                  setShowOverlay(!showOverlay);
                  setIsOpen(!isOpen);
                }}
              >
                {item2?.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideDrawer;
