import React from "react";
import AppNav from "./AppNavBar/AppNav";
import AppContainer from "../container/AppContainer";

const AppLayout = ({ children }) => {
  return (
    <AppContainer>
      <AppNav />
      {children}
    </AppContainer>
  );
};

export default AppLayout;
