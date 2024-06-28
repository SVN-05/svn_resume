import React from "react";

const Map = ({ url = "", height = 100 }) => {
  return (
    <iframe width={0} height={height} src={url} className="w-full rounded-md" />
  );
};

export default Map;
