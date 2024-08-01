"use client";
import React, { useContext } from "react";
import { PageContext } from "@/context/context.provider";
import DescriptionSkeleton from "../skeletons/landingPage/DescriptionSkeleton";
import DescriptionSub from "./DescriptionSub";

const Description = () => {
  const { isLandingLoaded } = useContext(PageContext);

  return isLandingLoaded ? <DescriptionSub /> : <DescriptionSkeleton />;
};

export default Description;
