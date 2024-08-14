"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import useAppStore from "@/store/store";

const ElevateCard = ({ no, title, subTitle, des, image, icons, linkId }) => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const cardBg = isDarkMode ? "bg-black" : "bg-grey1";
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.a
      href={`/portfolio/${linkId}`}
      ref={scrollRef}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className={`card-parent w-full text-white relative overflow-hidden rounded-lg flex flex-col items-start transition-all ease-in-out hover:shadow-lg pt-5 lg:pt-7 gap-y-10 ${cardBg}`}
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
        <div className="w-[45%] flex flex-col items-start pr-3 lg:gap-y-2 lg:pr-5 lg:w-4/6">
          <p className="font-bold text-xl lg:text-4xl">{subTitle}</p>
          <p className="text-sm font-semibold line-clamp-5 lg:text-lg lg:line-clamp-none">
            {des}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default ElevateCard;
