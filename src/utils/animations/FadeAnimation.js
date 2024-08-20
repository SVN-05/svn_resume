import React from "react";
import { motion } from "framer-motion";

const FadeAnimation = ({
  children,
  className,
  animDuration = 0.5,
  isVisible = false,
}) => {
  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInOutVariants}
      transition={{ duration: animDuration }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
