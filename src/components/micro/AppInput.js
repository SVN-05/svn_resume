import React from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const AppInput = ({
  placeholder = "",
  type = "text",
  height = 45,
  maxWidth = 400,
  name = "",
  errors,
  inputClassName = "",
}) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const lineStrokeColor = isDarkMode ? colors.grey20 : colors.grey21;
  const error = errors?.[name];

  return (
    <div
      style={{
        maxWidth: maxWidth,
      }}
      className="w-full flex flex-col items-start gap-y-2 relative"
    >
      {type === "textarea" ? (
        <textarea
          name={name}
          style={{
            height: height,
            borderColor: error ? colors.red : lineStrokeColor,
            borderWidth: 2,
            color: lineStrokeColor,
          }}
          className={`w-full border-2 rounded bg-transparent text-sm pl-3 pt-3 ${inputClassName}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          name={name}
          style={{
            height: height,
            borderColor: error ? colors.red : lineStrokeColor,
            borderWidth: 2,
            color: lineStrokeColor,
          }}
          className={`w-full border-2 rounded bg-transparent text-sm pl-3 ${inputClassName}`}
          placeholder={placeholder}
          type={type}
        />
      )}
      <p className="text-red text-sm font-normal">{error}</p>
    </div>
  );
};

export default AppInput;
