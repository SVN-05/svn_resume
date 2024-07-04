import React from "react";
import { Box, Center, Skeleton, SkeletonText } from "@chakra-ui/react";
import useAppStore from "@/store/store";
import { colors, skeletonLineHeight } from "@/utils/constants/constants";

const SkeletonBlock = ({ isLastIndex = false }) => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;

  return (
    <div>
      <Box display="flex" alignItems={"center"} gap={5}>
        <Center
          style={{ borderColor: iconcolor }}
          className="border-2 rounded-2xl px-3 py-2"
        >
          <SkeletonText
            width={"100px"}
            noOfLines={1}
            lineHeight={skeletonLineHeight}
          />
        </Center>
        <Skeleton height={skeletonLineHeight} width="36px" />
      </Box>
      <div
        style={{ borderColor: lineStrokeColor }}
        className={`flex flex-col pt-2 pl-10 border-l-[1px] ml-5 gap-y-3 mt-2 ${
          isLastIndex === false && "border-b-[1px] pb-4"
        }`}
      >
        <SkeletonText
          maxWidth={100}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
        <SkeletonText noOfLines={5} lineHeight={skeletonLineHeight} />
      </div>
      {isLastIndex === false && (
        <div
          style={{ backgroundColor: lineStrokeColor }}
          className="w-[1px] h-10 ml-5"
        />
      )}
    </div>
  );
};

export default SkeletonBlock;
