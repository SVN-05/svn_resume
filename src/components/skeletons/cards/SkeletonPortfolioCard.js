import React from "react";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { skeletonLineHeight } from "@/utils/constants/constants";

const SkeletonPortfolioCard = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding="6"
      rounded={"lg"}
      boxShadow="lg"
      bg="white"
      className="h-52 lg:h-72"
    >
      <SkeletonText
        maxWidth={100}
        noOfLines={1}
        lineHeight={skeletonLineHeight}
      />
      <Box display="flex" alignItems={"center"} justifyContent="space-between">
        <Skeleton height="20px" width="100px" />
        <Skeleton height="40px" width="100px" />
      </Box>
    </Box>
  );
};

export default SkeletonPortfolioCard;
