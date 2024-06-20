import React from "react";

const AppContainer = ({ children, className }) => {
  return (
    <div className={`w-full mx-auto ${className} lg:max-w-[1360px]`}>
      {children}
    </div>
  );
};

export default AppContainer;
