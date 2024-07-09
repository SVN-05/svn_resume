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
      <AppContainer
        customInitial={{ opacity: 0, scale: 0.5 }}
        customAnimate={{ opacity: 1, scale: 1 }}
        customTransition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={"flex flex-col pb-20 px-5 2xl:px-0"}
      >
        <PortfolioNavBar data={portfolio_nav_options} />
        <PortfolioListContainer />
      </AppContainer>
    </div>
  );
};

export default Portfolio;
