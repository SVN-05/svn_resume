import React from "react";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SkeletonLandingCard = () => {
  return (
    <div className="flex flex-col flex-1 items-center gap-y-4 border border-2 border-solid border-grey9 rounded-md py-5">
      <SkeletonCircle width={50} height={50} />
      <SkeletonText minWidth={"75px"} lineHeight={"12px"} noOfLines={1} />
    </div>
  );
};

export default SkeletonLandingCard;
