import useAppStore from "@/store/store";
import Image from "next/image";
import React from "react";

const InfoCard = ({ bgImage, title, des, parentClassName }) => {
  const textColor = useAppStore((state) => state.iconcolor);

  return (
    <div
      className={`w-full h-full flex flex-col relative items-center overflow-hidden rounded-br-lg rounded-bl-lg transition-all duration-300 ease-in-out ${parentClassName}`}
    >
      <div className="flex flex-col rounded-lg w-full h-full p-4 justify-end relative overflow-hidden border-white border-[1px] border-solid">
        <Image
          src={bgImage}
          width={0}
          height={0}
          className="w-full h-full z-0 object-cover object-center rounded-lg"
        />
        <div className="w-full flex flex-col items-start gap-y-2 z-10 absolute px-4 pb-4 text-sm">
          <p
            style={{ color: textColor, borderColor: textColor }}
            className="font-medium bg-black rounded-lg p-2 border-[1px]"
          >
            {title}
          </p>
          <p className="w-5/6 font-medium line-clamp-1">{des}</p>
        </div>
      </div>
      <div className="w-full h-2/6 bg-gradient-to-t from-black absolute bottom-0" />
    </div>
  );
};

export default InfoCard;