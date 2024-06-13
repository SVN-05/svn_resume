import React from "react";
import Description from "@/components/about_me/Description";
import What_i_do from "@/components/about_me/What_i_do";
import Skills from "@/components/about_me/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 items-center lg:items-center">
      <Description />
      <What_i_do />
      <Skills />
    </main>
  );
}
