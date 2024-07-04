import React from "react";
import {
  Box,
  Container,
  Flex,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const WhatIDoSkeleton = () => {
  return (
    <div className="w-full flex items-start gap-x-5 lg:flex-1">
      <SkeletonCircle width={50} height={50} />
      <Container className="flex flex-col gap-y-4">
        <SkeletonText maxWidth={150} noOfLines={1} lineHeight={2} />
        <SkeletonText noOfLines={5} lineHeight={2} />
      </Container>
    </div>
  );
};

export default WhatIDoSkeleton;
