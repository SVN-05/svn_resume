"use client";
import useAppStore from "@/store/store";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactleftContent = () => {
  const iconColor = useAppStore((state) => state.iconcolor);
  const contact = [
    {
      icon: CiMobile3,
      title: "+91 9999999999",
      des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
    },
    {
      icon: FaMapLocationDot,
      title: "India",
      des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
    },
    {
      icon: IoIosMail,
      title: "hello@example.com",
      des: "Contact me at this number if you have any questions or require assistance in creating your mobile or online application.",
    },
  ];

  return (
    <div className="w-[36%] flex flex-col items-start gap-y-4">
      {contact?.map((item, index) => {
        const Icon = item?.icon;
        return (
          <div key={index} className="flex items-start gap-x-5">
            <Icon size={35} color={iconColor} className="w-20" />
            <div className="flex flex-col items-start gap-y-2 text-xs">
              <p className="text-lg font-semibold">{item?.title}</p>
              <p>{item?.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactleftContent;
