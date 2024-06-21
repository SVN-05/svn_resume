import React from "react";
import NotFound from "@/app/not-found";
import { images_array, projects } from "@/utils/constants/constants";
import AppContainer from "@/components/container/AppContainer";
import PortfolioLeftContent from "@/components/portfolio/PortfolioLeftContent";
import PortfolioRightContent from "@/components/portfolio/PortfolioRightContent";

const page = (props) => {
  const id = Number(props?.params?.id);
  const checkPageExists = projects?.some((item) => item?.id === id);

  return checkPageExists ? (
    <AppContainer className="flex flex-col items-start py-10">
      <div className="w-full flex flex-wrap gap-x-16 gap-y-8">
        <PortfolioLeftContent images={images_array} id={id} />
        <PortfolioRightContent id={id} />
      </div>
    </AppContainer>
  ) : (
    <NotFound />
  );
};

export default page;
