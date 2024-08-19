// components/LottieAnimation.js
import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ animationFile }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationFile,
  };

  return (
    <div className={`w-full max-w-1/2 h-[300px] lg:max-w-[400px] lg:h-[400px]`}>
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default LottieAnimation;
