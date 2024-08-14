"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollWrapper = ({
  children,
  direction,
  scrollRef,
  className,
}) => {
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <motion.div
      style={{
        zIndex: 6,
        position: "relative",
        translateX: xTransform,
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default HorizontalScrollWrapper;
