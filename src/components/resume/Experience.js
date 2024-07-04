import React, { useContext } from "react";
import Title from "../micro/Title";
import BlockComponent from "./BlockComponent";
import { array3, experience } from "@/utils/constants/constants";
import { PageContext } from "@/context/context.provider";
import SkeletonBlock from "../skeletons/resume/SkeletonBlock";

const Experience = () => {
  const { isResumeLoaded } = useContext(PageContext);

  return (
    <div className="w-full flex flex-col items-start lg:flex-1">
      <Title text="Experience" width={110} />
      <div className="w-full flex flex-col mt-6">
        {isResumeLoaded
          ? experience?.reverse()?.map((item, index) => {
              const isLastIndex = experience?.length - 1 === index;

              return (
                <BlockComponent
                  key={item}
                  startYear={item?.startYear}
                  endYear={item.endYear}
                  studiedAt={item?.company_name}
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

export default Experience;
