import React, { useState } from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const DropdownMenu = ({ title = "", options = [], titleClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const bgColor = isDarkMode ? colors.grey1 : colors.black;

  return (
    <div className="flex flex-col">
      <p
        onMouseOver={() => {
          setIsOpen(true);
        }}
        onMouseOut={() => setIsOpen(false)}
        className={titleClassName}
      >
        {title}
      </p>
      {isOpen && (
        <div
          onMouseOver={() => {
            setIsOpen(true);
          }}
          onMouseOut={() => setIsOpen(false)}
          style={{ zIndex: 100, backgroundColor: bgColor }}
          className="absolute top-12 shadow-lg rounded-md flex flex-col items-start max-w-32 px-4 py-2 gap-y-2"
        >
          {options?.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className="font-medium transition-all duration-300 ease-in-out hover:font-bold"
            >
              {item?.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
