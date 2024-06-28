"use client";
import React from "react";
import { motion } from "framer-motion";

const AppContainer = ({ children, className }) => {
  return (
    <motion.div
      initial={{ x: "-120%" }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={`w-full mx-auto ${className} lg:max-w-[1360px]`}
    >
      {children}
    </motion.div>
  );
};

export default AppContainer;
