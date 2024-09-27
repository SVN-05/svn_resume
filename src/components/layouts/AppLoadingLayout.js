import React from "react";
import AppLoader from "../loaders/AppLoader";

const AppLoadingLayout = ({ children, comp = AppLoader, isLoading }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {isLoading ? comp : children}
    </div>
  );
};

export default AppLoadingLayout;
