import React, { useContext } from "react";
import Title from "../micro/Title";
import { array3, education } from "@/utils/constants/constants";
import BlockComponent from "./BlockComponent";
import { PageContext } from "@/context/context.provider";
import SkeletonBlock from "../skeletons/resume/SkeletonBlock";

const Education = () => {
  const { isResumeLoaded } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col items-start lg:flex-1">
      <Title text="Education" />
      <div className="w-full flex flex-col mt-6">
        {isResumeLoaded
          ? education?.reverse()?.map((item, index) => {
              const isLastIndex = education?.length - 1 === index;

              return (
                <BlockComponent
                  key={item}
                  startYear={item?.startYear}
                  endYear={item.endYear}
                  studiedAt={item?.studiedAt}
                  title={item?.title}
                  des={item?.des}
                  isLastIndex={isLastIndex}
                />
              );
            })
          : array3?.map((item2, index2) => {
              const isLastIndex = array3?.length - 1 === index2;
              return <SkeletonBlock key={item2} isLastIndex={isLastIndex} />;
            })}
      </div>
    </div>
  );
};

export default Education;
