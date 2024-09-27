"use client";
import React, { useContext } from "react";
import { MdDeveloperMode } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import Title from "../micro/Title";
import { PageContext } from "@/context/context.provider";
import WhatIDoSkeleton from "../skeletons/landingPage/WhatIDoSkeleton";
import { useTheme } from "next-themes";

const What_i_do = () => {
  const { resolvedTheme } = useTheme();
  const { isLandingLoaded } = useContext(PageContext);
  const isDarkMode = resolvedTheme === "dark";

  const content = [
    {
      icon: MdDeveloperMode,
      title: "Mobile App Developer",
      des: "I use the javascript and typescript programming languages to create mobile apps with react native. Throughout my career, I have worked on five projects. One is my student project called 'Smart Metre', while the others are in my office, including 'VoxGuru, SiteScribe, HOTI (Humans of the Internet), and Truliv.'",
    },
    {
      icon: RiNextjsFill,
      title: "Web App Developer",
      des: "I utilise the Javascript programming language to construct web applications with Next Js. Throughout my career, I've worked on two projects. One is my student project called 'E-Commerce', while the others are in my office, including 'Truliv'.",
    },
  ];

  return (
    <div className="w-full flex flex-col self-start mt-20">
      <Title text="What I Do" />
      <div className="w-full flex flex-wrap mt-5 gap-x-16 gap-y-5">
        {isLandingLoaded
          ? content.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item?.des}
                  style={{
                    boxShadow: isDarkMode
                      ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  className="custom-card-bg flex items-start mt-5 rounded-xl px-3 py-5 lg:flex-1"
                >
                  <div width={50} height={50} className="mr-5">
                    <Icon size={40} className="theme-color" />
                  </div>
                  <div className="flex flex-col items-start align-top">
                    <p
                      noOfLines={1}
                      height={5}
                      className="font-semibold text-base custom-title-color"
                    >
                      {item?.title}
                    </p>
                    <p
                      noOfLines={5}
                      className="text-sm font-light mt-2 custom-title-color"
                    >
                      {item?.des}
                    </p>
                  </div>
                </div>
              );
            })
          : [1, 2]?.map((item2) => {
              return <WhatIDoSkeleton key={item2} />;
            })}
      </div>
    </div>
  );
};

export default What_i_do;
