import React, { useRef } from "react";
import useAppStore from "@/store/store";
import {
  colors,
  hyperLinks,
  resume,
  userDetails,
} from "@/utils/constants/constants";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaUserSecret } from "react-icons/fa6";
import { gmail } from "@/utils/ImageIndex";
import useHover3dAnimation from "@/utils/hover/useHover3dAnimation";

const DescriptionSub = () => {
  const parentRef = useRef(null);

  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const circleBg = isDarkMode ? colors.grey5 : colors.white;
  const iconColor = useAppStore((state) => state.textColor);
  const titleColor = isDarkMode ? colors.white : colors.grey1;
  const despColor = isDarkMode ? colors.white : colors.grey7;

  const { transform } = useHover3dAnimation(parentRef, {
    x: 20,
    y: 20,
    z: 10,
  });

  return (
    <div
      ref={parentRef}
      className="flex items-center justify-center flex-wrap gap-x-24 gap-y-10 md:justify-start"
    >
      <div
        width={256}
        height={256}
        style={{ background: circleBg }}
        className="w-64 h-64 rounded-full flex flex-col items-center justify-center shadow-type1 xl:w-96 xl:h-96"
      >
        <FaUserSecret
          size={window?.innerWidth < 640 ? 150 : 190}
          color={iconColor}
          style={{ transform }}
        />
      </div>
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <p noOfLines={1} className="text-base text-grey3 font-light">
          {resume.jobRole}
        </p>
        <p noOfLines={1}>
          <h1 style={{ color: titleColor }} className="font-bold text-5xl mt-3">
            {userDetails.firstName} {userDetails.lastName}
          </h1>
        </p>
        <p style={{ color: despColor }} className="text-wrap text-m mt-5">
          {resume?.description}
        </p>
        <div className="flex gap-5 items-center mt-2">
          <a
            href={hyperLinks.linkedin}
            targeth="_blank"
            className="bg-white cursor-pointer"
          >
            <FaLinkedin size={30} color={colors.blue4} />
          </a>
          <a
            href={`/contact`}
            // target="_blank"
            className="cursor-pointer"
          >
            <Image
              className=""
              src={gmail}
              alt="Gmail"
              width={36}
              height={36}
            />
          </a>
          <a href="https://github.com/SVN-05" target="_blank">
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSub;
