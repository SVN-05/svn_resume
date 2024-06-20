import React from "react";
import Title from "../micro/Title";
import BlockComponent from "./BlockComponent";
import { experience } from "@/utils/constants/constants";

const Experience = () => {
  return (
    <div className="w-[45%] flex flex-col items-start">
      <Title text="Experience" width={110} />
      <div className="flex flex-col mt-6">
        {experience?.reverse()?.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Experience;
