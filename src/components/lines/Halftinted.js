import useAppStore from "@/store/store";
import React from "react";
import { theme } from "../../../tailwind.config";
import { colors } from "@/utils/constants/constants";

const Halftinted = ({ width = 100, height = 2, classname = "" }) => {
  const isDarkMode = useAppStore((select) => select.isDarkMode);
  const halfWidth = width / 2;
  const bg1 = isDarkMode ? colors.white : colors.grey2;
  const bg2 = isDarkMode ? colors.blue3 : colors.primary;

  return (
    <div
      style={{ width: width, height: height, background: bg1 }}
      className={`${classname}`}
    >
      <div style={{ width: halfWidth, height: height, background: bg2 }} />
    </div>
  );
};

export default Halftinted;
