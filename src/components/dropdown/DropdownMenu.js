import React, { useState } from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const DropdownMenu = ({
  title = "",
  options = [],
  titleClassName,
  parentClassName = "flex flex-col",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateDeg, setRotateDeg] = useState("rotate-0");
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const textcolor = useAppStore((state) => state.textcolor);
  const bgColor = isDarkMode ? colors.grey1 : colors.black;

  function onMouseOver() {
    setIsOpen(true);
    setRotateDeg("-rotate-180");
  }

  function onMouseOut() {
    setIsOpen(false);
    setRotateDeg("rotate-0");
  }

  return (
    <div className={parentClassName}>
      <div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className="flex items-center gap-x-2"
      >
        <p className={titleClassName}>{title}</p>
        <IoIosArrowDown
          size={15}
          color={textcolor}
          className={`transition-all duration-500 ${rotateDeg}`}
        />
      </div>
      <motion.div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 50,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ zIndex: 100, backgroundColor: bgColor }}
        className="absolute top-12 shadow-lg rounded-md flex flex-col items-start w-32 px-4 py-2 gap-y-2"
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
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
