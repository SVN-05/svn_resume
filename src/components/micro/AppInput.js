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
  height = 45,
  label = "",
  name = "",
  placeholder = "",
  type = "text",
  values,
  errors,
  inputClassName = "",
  containerClassName = "",
  isRequired = false,
  isReadOnly = false,

  handleInputChange = () => {},
}) => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const titlecolor = useAppStore((state) => state.titlecolor);
  const lineStrokeColor = isDarkMode ? colors.grey20 : colors.grey21;
  const value = values?.[name];
  const error = errors?.[name];

  return (
    <FormControl
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isInvalid={error}
      className={`flex flex-col items-start relative transition-all duration-500 ${containerClassName}`}
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
            color: titlecolor,
          }}
          className={`border-2 rounded bg-transparent text-sm pl-3 pt-3 ${inputClassName}`}
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
            color: titlecolor,
          }}
          className={`border-2 rounded bg-transparent text-sm pl-3 ${inputClassName}`}
          onChange={handleInputChange}
        />
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default AppInput;
