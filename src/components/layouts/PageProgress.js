import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import useAppStore from "@/store/store";

const PageProgress = () => {
  const iconcolor = useAppStore((state) => state.iconcolor);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        scaleX,
        background: iconcolor,
      }}
      className="absolute left-0 top-0 right-0 origin-left h-[5px]"
    />
  );
};

export default PageProgress;
