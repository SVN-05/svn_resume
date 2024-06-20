import React from "react";
import AppContainer from "@/components/container/AppContainer";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Certificates from "@/components/resume/Certificates";

const Resume = () => {
  return (
    <div className="relative flex flex-col items-start">
      <InPageNavBar title="Resume" rightSideText="2 Years of Experience" />
      <AppContainer className={"mt-16 pb-10"}>
        <div className="w-full flex flex-wrap items-start gap-x-20">
          <Education />
          <Experience />
        </div>
        <Certificates />
      </AppContainer>
    </div>
  );
};

export default Resume;
