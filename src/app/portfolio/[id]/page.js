import React from "react";
import NotFound from "@/app/not-found";
import { projects } from "@/utils/constants/constants";

const page = (props) => {
  const id = props?.params?.id;
  const checkPageExists = projects?.some((item) => item?.id === id);
  const data = projects?.find((item) => item?.id === id);

  return checkPageExists ? <div>page</div> : <NotFound />;
};

export default page;
