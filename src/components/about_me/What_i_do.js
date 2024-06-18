"use client";
import React from "react";
import Halftinted from "../lines/Halftinted";
import useAppStore from "@/store/store";
import { MdDeveloperMode } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";

const What_i_do = () => {
  const titlecolor = useAppStore((state) => state.titlecolor);
  const iconcolor = useAppStore((state) => state.iconcolor);

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
    <div className="flex flex-col items-start mt-20">
      <p
        style={{ color: titlecolor }}
        className="text-xl text-start font-semibold"
      >
        What I Do
      </p>
      <Halftinted classname="mt-1" />
      <div className="flex flex-wrap mt-5 gap-10">
        {content.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item?.des} className="table mt-5 w-full md:w-[45%]">
              <Icon size={40} color={iconcolor} className="table-cell mr-5" />
              <div className="flex flex-col items-start table-cell gap-y-2 align-top">
                <p
                  style={{ color: titlecolor }}
                  className="font-semibold text-base"
                >
                  {item?.title}
                </p>
                <p style={{ color: titlecolor }} className="text-sm font-light">
                  {item?.des}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default What_i_do;
