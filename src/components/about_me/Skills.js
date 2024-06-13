"use client";
import React from "react";
import useAppStore from "@/store/store";
import Halftinted from "../lines/Halftinted";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const titlecolor = useAppStore((state) => state.titlecolor);

  const content = [
    { icon: "", title: "JavaScript", des: "" },
    { icon: "", title: "TypeScript", des: "" },
    { icon: "", title: "HTML", des: "" },
    { icon: "", title: "CSS", des: "" },
    { icon: "", title: "TailWindCSS", des: "" },
    { icon: "", title: "Java", des: "" },
    { icon: "", title: "RTK Query", des: "" },
  ];
  return (
    <div className="flex flex-col items-start mt-20">
      <p
        style={{ color: titlecolor }}
        className="text-xl text-start font-semibold"
      >
        Skills
      </p>
      <Halftinted classname="mt-1" />
    </div>
  );
};

export default Skills;
