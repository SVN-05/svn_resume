"use client";
import React from "react";
import { cometChat, thirdParty } from "@/utils/ImageIndex";
import Image from "next/image";
import Title from "../micro/Title";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAppStoreIos, FaAws } from "react-icons/fa";
import useAppStore from "@/store/store";

const ThirdParty = () => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const keyPoints = [
    { icon: cometChat, title: "Cometchat UI Kit V4", isImage: true },
    { icon: FaAppStoreIos, title: "Appstore Server Notification V2" },
    { icon: IoLogoFirebase, title: "Firebase Cloud Functions" },
    { icon: FaAws, title: "AWS S3 Bucket" },
  ];
  const iconSize = 35;

  return (
    <div className="w-full flex flex-wrap items-start gap-x-16 gap-y-4 mt-20 pl-5 lg:justify-center">
      <div className="border-2 h-52 w-full rounded-tl-2xl rounded-br-2xl mt-10 lg:h-80 lg:w-[45%]">
        <Image
          width={0}
          height={0}
          src={thirdParty}
          className="w-[98%] h-[99%] rounded-tl-2xl rounded-br-2xl -ml-5 -mt-7"
        />
      </div>
      <div className="mt-4 lg:mt-0 lg:pt-8">
        <Title text="Integrated Services" width={180} />
        <div className="flex flex-col items-start gap-y-5 mt-5">
          {keyPoints?.map((item, index) => {
            const Icon = !item?.isImage && item?.icon;
            return (
              <div key={index} className="flex items-center capitalize gap-x-4">
                {item?.isImage ? (
                  <Image width={iconSize} height={iconSize} src={item?.icon} />
                ) : (
                  <Icon size={iconSize} color={iconcolor} />
                )}
                <p>{item?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdParty;
