"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import useAppStore from "@/store/store";

const ElevateCard = ({ no, title, subTitle, des, image, icons }) => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      ref={scrollRef}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="w-full relative overflow-hidden rounded-lg flex flex-col bg-black items-start transition-all ease-in-out hover:shadow-lg hover:scale-115 pt-5 lg:pt-7 gap-y-10"
    >
      <div className="w-full flex items-center justify-between px-5 lg:px-10">
        <p className="font-medium text-sm lg:text-lg">
          {no} | {title}
        </p>
        <div className="flex items-center gap-x-3">
          {icons?.map((item, index) => {
            const Icon = item;
            return <Icon key={index} color={iconcolor} size={20} />;
          })}
        </div>
      </div>
      <div className="w-full flex items-start justify-between lg:gap-x-14">
        <div className="w-[45%] lg:w-2/6">
          <Image
            width={"100%"}
            height={0}
            src={image}
            className="h-[160px] object-top object-cover rounded-tr-xl lg:h-[300px]"
          />
        </div>
        <div className="w-[45%] flex flex-col items-start pr-3 lg:gap-y-2 lg:pr-0 lg:w-1/2">
          <p className="font-bold text-xl lg:text-4xl">{subTitle}</p>
          <p className="text-sm font-semibold line-clamp-5 lg:text-lg lg:line-clamp-none">
            {des}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ElevateCard;
