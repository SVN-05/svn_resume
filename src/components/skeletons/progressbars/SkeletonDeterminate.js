import React from "react";
import { skeletonLineHeight } from "@/utils/constants/constants";
import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonDeterminate = () => {
  return (
    <Container ml={-4} className="w-full flex flex-col gap-y-2">
      <SkeletonText
        maxWidth={70}
        noOfLines={1}
        lineHeight={skeletonLineHeight}
      />
      <Skeleton height={skeletonLineHeight} />
    </Container>
  );
};

export default SkeletonDeterminate;
