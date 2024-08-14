"use client";
import React, { useContext } from "react";
import { ide_content_new } from "@/utils/constants/constants";
import InfoCard from "@/components/cards/InfoCard";
import { LandingContext } from "../LandingPageV2";
import HorizontalScrollWrapper from "@/utils/scrollAnim/HorizontalScrollWrapper";
import VerticalScrollComponent from "./VerticalScrollComponent";

const HorizontalCardScroll = () => {
  const { scrollRef } = useContext(LandingContext);

  return (
    <div className="flex flex-col">
      <HorizontalScrollWrapper
        direction={-1000}
        scrollRef={scrollRef}
        className={"hidden w-full lg:h-[25rem] lg:flex"}
      >
        <div className="grid grid-cols-4 h-full gap-[4rem] pl-[20rem]">
          {ide_content_new?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                title={item?.title}
                bgImage={item?.bg}
                des={item?.des}
              />
            );
          })}
        </div>
      </HorizontalScrollWrapper>
      <VerticalScrollComponent items={ide_content_new} />
    </div>
  );
};

export default HorizontalCardScroll;
