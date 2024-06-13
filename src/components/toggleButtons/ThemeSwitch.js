import { colors } from "@/utils/constants/constants";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitch = ({ isToggled, handleToggle = () => {} }) => {
  const iconSize = 15;

  return (
    <button
      onClick={handleToggle}
      className={`${
        isToggled ? "bg-blue1" : "bg-yellow1"
      } w-16 h-7 relative inline-flex items-center rounded-full`}
    >
      <span
        className={`${
          isToggled ? "translate-x-9 bg-blue2" : "translate-x-0 bg-yellow2"
        } inline-block w-7 h-full flex items-center justify-center transform rounded-full transition-transform duration-200 ease-in-out`}
      >
        {isToggled ? (
          <FiMoon size={iconSize} color={colors.white} />
        ) : (
          <FiSun size={iconSize} color={colors.white} />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitch;
