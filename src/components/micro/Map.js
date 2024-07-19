import React from "react";

const Map = ({ url = "", height = 100 }) => {
  return (
    <iframe
      width={0}
      height={height}
      src={url}
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      className="w-full rounded-md"
    />
  );
};

export default Map;
