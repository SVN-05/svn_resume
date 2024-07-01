import React from "react";
import AppContainer from "@/components/container/AppContainer";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import { portfolio_nav_options } from "@/utils/constants/constants";
import PortfolioNavBar from "@/components/micro/PortfolioNavBar";
import PortfolioListContainer from "@/components/micro/PortfolioListContainer";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-start">
      <InPageNavBar title="Portfolio" />
      <AppContainer className={"flex flex-col pb-20 px-5 2xl:px-0"}>
        <PortfolioNavBar data={portfolio_nav_options} />
        <PortfolioListContainer />
      </AppContainer>
    </div>
  );
};

export default Portfolio;
