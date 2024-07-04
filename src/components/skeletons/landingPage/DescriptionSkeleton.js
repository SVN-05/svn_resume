import React from "react";
import { Container, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { skeletonLineHeight } from "@/utils/constants/constants";

const DescriptionSkeleton = () => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-y-10">
      <SkeletonCircle width={256} height={256} />
      <Container className="flex flex-col gap-y-4">
        <SkeletonText
          maxWidth={"150px"}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
        <SkeletonText
          maxWidth={"150px"}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
        <SkeletonText lineHeight={skeletonLineHeight} noOfLines={5} />
        <SkeletonText
          maxWidth={"200px"}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
      </Container>
    </div>
  );
};

export default DescriptionSkeleton;
