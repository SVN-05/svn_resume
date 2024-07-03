"use client";
import React from "react";
import useAppStore from "@/store/store";
import { contact_left_content } from "@/utils/constants/constants";

const ContactleftContent = () => {
  const iconColor = useAppStore((state) => state.iconcolor);

  return (
    <div className="flex-1 flex flex-col items-start gap-y-4">
      {contact_left_content?.map((item, index) => {
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
