import React from "react";

const AppInput = ({ type = "text", height = 20 }) => {
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <input
        style={{ height: height }}
        className="w-full border-2 rounded"
        type={type}
      />
    </div>
  );
};

export default AppInput;
