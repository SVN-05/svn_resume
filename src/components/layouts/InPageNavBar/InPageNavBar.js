import React from "react";

const InPageNavBar = ({ title = "", rightSideText = "" }) => {
  return (
    <div className="in-app-nav-bar w-full flex flex-col items-start justify-between border-y-2 py-7 px-10 lg:py-14 lg:px-16 lg:flex-row">
      <p className="custom-title-color text-4xl text-grey1 font-semibold xl:text-5xl">
        {title}
      </p>
      <p className="text-grey12 text-md font-light lg:-mt-11">
        {rightSideText}
      </p>
    </div>
  );
};

export default InPageNavBar;
