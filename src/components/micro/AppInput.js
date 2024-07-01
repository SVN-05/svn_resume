import React from "react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const AppInput = ({
  maxWidth = 400,
  height = 45,
  label = "",
  name = "",
  placeholder = "",
  type = "text",
  values,
  errors,
  inputClassName = "",
  isRequired = false,
  isReadOnly = false,

  handleInputChange = () => {},
}) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const lineStrokeColor = isDarkMode ? colors.grey20 : colors.grey21;
  const value = values?.[name];
  const error = errors?.[name];

  return (
    <FormControl
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isInvalid={error}
      style={{
        maxWidth: maxWidth,
      }}
      className="w-full flex flex-col items-start relative"
    >
      {label && <FormLabel>{label}</FormLabel>}
      {type === "textarea" ? (
        <Textarea
          name={name}
          placeholder={placeholder}
          value={value}
          style={{
            height: height,
            borderColor: error ? colors.red : lineStrokeColor,
            borderWidth: 2,
            color: lineStrokeColor,
          }}
          className={`w-full border-2 rounded bg-transparent text-sm pl-3 pt-3 ${inputClassName}`}
          onChange={handleInputChange}
        />
      ) : (
        <Input
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          style={{
            height: height,
            borderColor: error ? colors.red : lineStrokeColor,
            borderWidth: 2,
            color: lineStrokeColor,
          }}
          className={`w-full border-2 rounded bg-transparent text-sm pl-3 ${inputClassName}`}
          onChange={handleInputChange}
        />
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default AppInput;
