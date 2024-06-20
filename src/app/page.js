import React from "react";
import Description from "@/components/about_me/Description";
import What_i_do from "@/components/about_me/What_i_do";
import Skills from "@/components/about_me/Skills";
import Projects from "@/components/about_me/Projects";
import Ide from "@/components/about_me/Ide";
import AppContainer from "@/components/container/AppContainer";

export default function Home() {
  return (
    <AppContainer>
      <main className="flex flex-col items-center p-10 items-center overflow-hidden lg:items-start pb-32">
        <Description />
        <What_i_do />
        <Skills />
        <Ide />
        <Projects />
      </main>
    </AppContainer>
  );
}
