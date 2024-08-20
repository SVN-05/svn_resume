import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const PageProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="custom-theme-background absolute left-0 top-0 right-0 origin-left h-[5px]"
      style={{
        scaleX,
      }}
    />
  );
};

export default PageProgress;
