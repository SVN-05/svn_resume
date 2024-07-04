import React from "react";
import { skeletonLineHeight } from "@/utils/constants/constants";
import { Box, Container, Skeleton } from "@chakra-ui/react";

const SkeletonDeterminate = () => {
  return (
    <Container ml={-4} className="w-full flex flex-col gap-y-2">
      <Box display="flex" justifyContent="space-between">
        <Skeleton height={skeletonLineHeight} width="36px" />
        <Skeleton height={skeletonLineHeight} width="36px" />
      </Box>
      <Skeleton height={skeletonLineHeight} />
    </Container>
  );
};

export default SkeletonDeterminate;
