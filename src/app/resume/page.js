"use client";
import React, { useContext, useEffect } from "react";
import AppContainer from "@/components/container/AppContainer";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Certificates from "@/components/resume/Certificates";
import { PageContext } from "@/context/context.provider";
import { defaultPageLoadDuration } from "@/utils/constants/constants";

const Resume = () => {
  const { isResumeLoaded, setIsResumeLoaded } = useContext(PageContext);

  useEffect(() => {
    setTimeout(() => {
      setIsResumeLoaded(!isResumeLoaded);
    }, defaultPageLoadDuration);
  }, []);

  return (
    <div className="relative flex flex-col items-start">
      <InPageNavBar title="Resume" rightSideText="2 Years of Experience" />
      <AppContainer className={"mt-16 pb-10 px-5 xl:px-0"}>
        <div className="flex flex-wrap items-start gap-x-20 gap-y-10">
          <Education />
          <Experience />
        </div>
        <Certificates />
      </AppContainer>
    </div>
  );
};

export default Resume;
