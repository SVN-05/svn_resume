"use client";
import React, { useContext } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import {
  avatar,
  ball,
  miniTable,
  mobileDev,
  monitor,
  nextjsImage,
  table,
  thirdPartyImage,
} from "@/utils/ImageIndex";
import {
  LandingPageIconSection,
  defaultPageLoadDuration,
} from "@/utils/constants/constants";
import useAppStore from "@/store/store";
import { LandingContext } from "../about_me/LandingPageV2";

const Section1 = () => {
  const { setIsSplineLoaded, isSplineLoaded } = useContext(LandingContext);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const cardBg = isDarkMode ? "bg-black" : "bg-grey1";
  const data = [
    {
      top: LandingPageIconSection?.box1,
      bottom: nextjsImage,
      className: "-skew-y-2",
    },
    { top: [], bottom: mobileDev, className: "" },
    {
      top: LandingPageIconSection?.box2,
      bottom: thirdPartyImage,
      className: "skew-y-2",
    },
  ];

  function onLoad(spline) {
    if (spline) {
      setTimeout(() => {
        setIsSplineLoaded(true);
      }, defaultPageLoadDuration);
    }
  }

  function onError(error) {
    console.log("error occured for loading spline with exception:-", error);
  }

  return (
    <div
      style={{ opacity: isSplineLoaded ? 1 : 0 }}
      className="flex flex-col items-center pt-20 transition-all duration-300 ease-in-out lg:h-screen lg:pt-0 lg:justify-center"
    >
      <div className="flex flex-col items-center z-0 lg:absolute lg:top-24">
        <p
          className={`bg-gradient-to-b ${
            isDarkMode
              ? "from-white to-grey1"
              : " from-black via-grey7 to-grey7"
          } text-3xl font-semibold leading-normal bg-clip-text text-transparent lg:text-[48px]`}
        >
          Nagaraj S V
        </p>
        <p className="text-xl font-normal text-grey7 lg:text-2xl">
          Front-End Developer, Node Js
        </p>
      </div>
      <div className="w-full z-20 flex flex-col gap-y-4 items-center max-w-[900px] mt-11 lg:gap-y-10 lg:mt-24 lg:absolute">
        <div className="flex items-start justify-between gap-x-5 lg:gap-x-6">
          {data?.map((item, index) => {
            const parentClassName = `${cardBg} shadow-md rounded transition-all duration-300 hover:scale-110 lg:rounded-md`;
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-y-2 items-center lg:gap-y-4"
              >
                {index !== 1 && (
                  <div
                    className={`flex p-2 items-center justify-between gap-x-3 ${parentClassName} ${item?.className} lg:w-4/6 lg:p-3`}
                  >
                    {item?.top?.map((item2, index2) => {
                      const bg = item2?.bg ?? "transparent";
                      const Icon = item2?.src;
                      const className = item2?.bg ? "rounded p-[1px]" : "";
                      const commonClassName = `w-[15px] h-[15px] ${className} lg:w-[30px] lg:h-[30px]`;
                      return item2?.isImage ? (
                        <Image
                          key={index2}
                          width={0}
                          height={0}
                          src={item2?.src}
                          className={`${commonClassName}`}
                        />
                      ) : (
                        <Icon
                          key={index2}
                          color={item2?.color}
                          style={{ backgroundColor: bg }}
                          className={`${commonClassName}`}
                        />
                      );
                    })}
                  </div>
                )}
                <div
                  className={`px-2 pb-2 pt-5 ${parentClassName} ${item?.className} lg:px-3 lg:pb-3 lg:pt-7`}
                >
                  <Image
                    src={item?.bottom}
                    width={"100%"}
                    height={"100%"}
                    className="rounded lg:rounded-md lg:max-h-[140px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-end justify-between gap-x-3 lg:gap-x-20">
          <div className="flex-1 flex flex-col items-center relative">
            <Image
              width={0}
              height={0}
              src={monitor}
              className="w-[70%] absolute -top-3 transition-all duration-300 scale-105 hover:scale-110 lg:top-7 lg:max-w-40 lg:h-40"
            />
            <Image
              width={0}
              height={0}
              src={table}
              className="w-full lg:w-72 lg:h-72"
            />
          </div>
          <Image
            width={0}
            height={0}
            src={avatar}
            className="w-[100px] h-[140px] lg:opacity-0"
          />
          <div className="flex-1 flex items-end justify-evenly gap-x-3">
            <Image
              width={0}
              height={0}
              src={ball}
              className="w-[30px] h-[30px] transition-all duration-300 lg:w-16 lg:h-auto hover:scale-110"
            />
            <Image
              width={0}
              height={0}
              src={miniTable}
              className="flex-1 h-[50px] lg:w-auto lg:h-auto"
            />
          </div>
        </div>
      </div>
      <Spline
        className="hidden lg:flex z-10 transition-all duration-300 ease-in-out"
        onLoad={onLoad}
        onError={onError}
        scene="https://prod.spline.design/vx4ytD5cO0ESrtUp/scene.splinecode" //https://prod.spline.design/7neZ-0D-VL4sEaQH/scene.splinecode
      />
    </div>
  );
};

export default Section1;
