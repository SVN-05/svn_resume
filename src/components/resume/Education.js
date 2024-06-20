import React from "react";
import Title from "../micro/Title";
import { education } from "@/utils/constants/constants";
import BlockComponent from "./BlockComponent";

const Education = () => {
  return (
    <div className="w-[45%] flex flex-col items-start">
      <Title text="Education" />
      <div className="flex flex-col mt-6">
        {education?.reverse()?.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Education;
