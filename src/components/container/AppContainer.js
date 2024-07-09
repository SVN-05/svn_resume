"use client";
import React from "react";
import { motion } from "framer-motion";

const AppContainer = ({
  children,
  className,
  initialX = "-120%",
  animateX = 0,
  transitionEase = "easeOut",
  transitionDuration = 1,
  customInitial = {},
  customAnimate = {},
  customTransition = {},
}) => {
  const hasInitial = Object.keys(customInitial).length > 0;
  const hasAnimate = Object.keys(customAnimate).length > 0;
  const hasTransition = Object.keys(customTransition).length > 0;

  const initial = hasInitial ? customInitial : { x: initialX };
  const animate = hasAnimate ? customAnimate : { x: animateX };
  const transition = hasTransition
    ? customTransition
    : { ease: transitionEase, duration: transitionDuration };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`w-full mx-auto ${className} lg:max-w-[1360px]`}
    >
      {children}
    </motion.div>
  );
};

export default AppContainer;
