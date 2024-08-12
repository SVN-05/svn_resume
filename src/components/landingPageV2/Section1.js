import React from "react";
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
  thirdParty,
} from "@/utils/ImageIndex";
import { LandingPageIconSection } from "@/utils/constants/constants";
import { Flex } from "@chakra-ui/react";

const Section1 = () => {
  const data = [
    {
      top: LandingPageIconSection?.box1,
      bottom: nextjsImage,
      className: "-skew-y-2",
    },
    { top: [], bottom: mobileDev, className: "" },
    {
      top: LandingPageIconSection?.box2,
      bottom: thirdParty,
      className: "skew-y-2",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center absolute top-24 z-0">
        <p className="text-3xl font-semibold leading-normal bg-gradient-to-b from-white to-grey1 bg-clip-text text-transparent lg:text-[48px]">
          Nagaraj S V
        </p>
        <p className="text-xl font-normal text-grey7 lg:text-2xl">
          Front-End Developer, Node Js
        </p>
      </div>
      {/* <div className="flex flex-col gap-y-4 absolute items-center mt-[180px] z-20 flex-1">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex items-start gap-x-10">
            {data?.map((item, index) => {
              return (
                <div className="flex flex-col gap-y-4 items-start">
                  {item?.top?.length > 0 && (
                    <div
                      key={index}
                      className={`${item?.className} w-full p-2 bg-black shadow-md rounded-md flex items-center justify-center gap-x-4 transform-all duration-300 hover:scale-110`}
                    >
                      {item?.top?.map((item2, index2) => {
                        const bg = item2?.bg ?? "transparent";
                        const Icon = item2?.src;
                        const className = item2?.bg ? "rounded p-[1px]" : "";
                        return item2?.isImage ? (
                          <Image
                            key={index2}
                            width={0}
                            height={0}
                            src={item2?.src}
                            className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px]"
                          />
                        ) : (
                          <Icon
                            key={index2}
                            size={0}
                            color={item2?.color}
                            className={`w-[10px] h-[10px] lg:w-[30px] lg:h-[30px] ${className}`}
                            style={{ backgroundColor: bg }}
                          />
                        );
                      })}
                    </div>
                  )}
                  <div
                    className={`${item?.className} w-24 h-14 px-3 pb-3 pt-7 rounded-md bg-black shadow-md transform-all duration-300 lg:w-52 lg:h-36 hover:scale-110`}
                  >
                    <Image
                      width={0}
                      height={0}
                      className="w-full h-full rounded"
                      src={item?.bottom}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex items-end justify-between gap-x-3 pt-6">
            <div className="flex flex-col items-center">
              <Image
                width={0}
                height={0}
                className="w-40 h-40 transform-all duration-300 scale-105 hover:scale-110"
                src={monitor}
              />
              <Image
                width={0}
                height={0}
                className="w-10 -mt-[186px] lg:w-72 lg:h-72"
                src={table}
              />
            </div>
            <Image
              width={0}
              height={0}
              src={avatar}
              className="w-auto lg:hidden"
            />
            <Flex alignItems={"baseline"} className="gap-x-7">
              <Image
                width={0}
                height={0}
                src={ball}
                className="w-4 transform-all duration-300 lg:w-16 hover:scale-110"
              />
              <Image
                width={0}
                height={0}
                src={miniTable}
                className="w-10 lg:w-auto"
              />
            </Flex>
          </div>
        </div>
      </div> */}
      <div className="w-full flex flex-col gap-y-4 items-center max-w-[900px] px-2 lg:px-0">
        <div className="flex items-start justify-between gap-x-5 lg:gap-x-4">
          {data?.map((item, index) => {
            const parentClassName =
              "bg-black shadow-md rounded-md transform-all duration-300 hover:scale-110";
            return (
              <div key={index} className="flex-1 flex flex-col gap-y-2">
                {index !== 1 && (
                  <div
                    className={`flex p-2 items-center justify-evenly gap-x-3 ${parentClassName} ${item?.className}`}
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
                    className="rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-end justify-between">
          <div className="flex-1 flex flex-col items-center">
            <Image
              width={0}
              height={0}
              src={monitor}
              className="w-full h-[50px]"
            />
            <Image
              width={0}
              height={0}
              src={table}
              className="w-full h-[50px]"
            />
          </div>
          <Image width={0} height={0} src={avatar} className="" />
          <div className="flex items-end justify-evenly gap-x-3">
            <Image width={0} height={0} src={ball} className="" />
            <Image width={0} height={0} src={miniTable} className="" />
          </div>
        </div>
      </div>
      <Spline
        className="hidden lg:flex z-10"
        scene="https://prod.spline.design/vx4ytD5cO0ESrtUp/scene.splinecode" //https://prod.spline.design/7neZ-0D-VL4sEaQH/scene.splinecode
      />
    </div>
  );
};

export default Section1;
