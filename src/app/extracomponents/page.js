import React from "react";
import SimpleAccordian from "@/components/accordians/SimpleAccordian";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import SimpleTab from "@/components/tabs/SimpleTab";
import { accordian_data } from "@/utils/constants/constants";
import Title from "@/components/micro/Title";
import AppContainer from "@/components/container/AppContainer";

const ExtraComponents = () => {
  const titles = accordian_data.map((item) => item.title);
  const descriptions = accordian_data.map((item) => item.des);

  return (
    <div className="flex flex-col items-start">
      <InPageNavBar
        title="Extra"
        rightSideText="Few examples of additional UI Components"
      />
      <AppContainer className="flex flex-wrap gap-x-20 gap-y-10 pb-5 px-5 mt-5 xl:px-0">
        <div className="w-full flex flex-col items-start lg:flex-1">
          <Title text="Accordians" />
          <SimpleAccordian
            data={accordian_data}
            allowMultiple
            containerClassName="mt-5 border-[1px]"
          />
        </div>
        <div className="flex flex-col items-start lg:flex-1">
          <Title text="Tabs" />
          <SimpleTab
            tabTitles={titles}
            tabDatas={descriptions}
            showTabBarIndicator
            containerClassName="mt-5 border-[1px]"
          />
        </div>
      </AppContainer>
    </div>
  );
};

export default ExtraComponents;
