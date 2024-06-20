import React from "react";
import AppContainer from "@/components/container/AppContainer";
import InPageNavBar from "@/components/layouts/InPageNavBar/InPageNavBar";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";

const Resume = () => {
  return (
    <div className="relative flex flex-col items-start">
      <InPageNavBar title="Resume" rightSideText="2 Years of Experience" />
      <AppContainer className={"mt-16 pb-5"}>
        <div className="flex flex-wrap items-start gap-x-5">
          <Education />
          <Experience />
        </div>
      </AppContainer>
    </div>
  );
};

export default Resume;
