import React from "react";
import useAppStore from "@/store/store";
import { colors, skeletonLineHeight } from "@/utils/constants/constants";
import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCertificateCard = () => {
  const isDarkMode = useAppStore((state) => state.isDarkMode);
  const lineStrokeColor = isDarkMode ? colors.grey1 : colors.grey14;

  return (
    <div
      style={{ borderColor: lineStrokeColor }}
      className="relative flex items-center border-2 rounded-lg overflow-hidden transition-all duration-600 hover:scale-105"
    >
      <Skeleton className="w-1/6 h-full py-10" />
      <Container className="flex flex-col py-5 ml-7 gap-y-3">
        <SkeletonText
          maxWidth={400}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
        <SkeletonText
          maxWidth={150}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
        <SkeletonText
          maxWidth={150}
          noOfLines={1}
          lineHeight={skeletonLineHeight}
        />
      </Container>
    </div>
  );
};

export default SkeletonCertificateCard;
