"use client";
import React from "react";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import useAppStore from "@/store/store";

const SimpleTab = ({
  tabTitles = [],
  tabDatas = [],
  disabledTabs = [],
  showTabBarIndicator = false,
  defaultIndex = 0,
  isFitted = false,
  isManual = false,
  isLazy = false,
  applySelect = false,
  align = "start",
  variant = "",
  colorScheme = "",
  containerClassName = "",
  size = "md",
}) => {
  // size:- "sm" | "md" | "lg", default: md
  // variant:- "line" | "enclosed" | "enclosed-colored" | "soft-rounded" | "solid-rounded" | "unstyled", default: blue
  // colorScheme:- "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink", default:line

  const iconcolor = useAppStore((state) => state.iconcolor);

  return (
    <Tabs
      className={`w-full ${containerClassName}`}
      defaultIndex={defaultIndex}
      size={size}
      colorScheme={colorScheme}
      align={align}
      variant={variant}
      isFitted={isFitted}
      isManual={isManual}
      isLazy={isLazy}
    >
      <TabList>
        {tabTitles?.map((item, index) => {
          const isDisabled = disabledTabs?.includes(item);
          return applySelect ? (
            <Tab key={index} isDisabled={isDisabled}>
              {item}
            </Tab>
          ) : (
            <Tab key={index} isDisabled={isDisabled}>
              {item}
            </Tab>
          );
        })}
      </TabList>
      {showTabBarIndicator && (
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg={iconcolor}
          borderRadius="1px"
        />
      )}
      <TabPanels>
        {tabDatas?.map((item2, index2) => {
          return <TabPanel key={index2}>{item2}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
};

export default SimpleTab;
