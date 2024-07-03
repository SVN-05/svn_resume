"use client";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const SimpleAccordian = ({
  data = [],
  disabledAccordians = [],
  defaultIndex = 0,
  allowMultiple = false,
  allowToggle = false,
  reduceMotion = false,
  containerClassName = "",
}) => {
  const iconColor = useAppStore((state) => state.iconcolor);

  return (
    <Accordion
      defaultIndex={[defaultIndex]}
      allowMultiple={allowMultiple}
      allowToggle={allowToggle}
      reduceMotion={reduceMotion}
      className={`w-full transition-all duration-500 ${containerClassName}`}
    >
      {data?.map((item, index) => {
        const isDisabled = disabledAccordians?.includes(index);
        const isLastindex = data?.length - 1 === index;
        return (
          <AccordionItem
            key={index}
            isDisabled={isDisabled}
            borderWidth={0}
            _expanded={{
              borderBottomWidth: 1,
              borderBottomColor: colors.white,
            }}
          >
            <AccordionButton
              _expanded={{
                backgroundColor: colors.grey17,
                borderBottomWidth: 0,
              }}
              className={`${!isLastindex && "border-b-[1px] border-white"}`}
            >
              <Box as="span" flex="1" textAlign="left">
                {item?.title}
              </Box>
              <AccordionIcon color={iconColor} />
            </AccordionButton>
            <AccordionPanel>{item?.des}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SimpleAccordian;
