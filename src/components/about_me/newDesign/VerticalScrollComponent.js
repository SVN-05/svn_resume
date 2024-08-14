"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoCard from "@/components/cards/InfoCard";
import useAppStore from "@/store/store";

const VerticalScrollComponent = ({ items = [] }) => {
  const datas = [{ text: "IDE'S I have Worked With" }, ...items];
  const [scrollDirection, setScrollDirection] = useState("down");
  const appBg = useAppStore((state) => state.appBg);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full relative h-[200vh] flex flex-col lg:hidden">
      {datas?.map((item, index) => {
        const isText = index === 0;
        const isScrollDown = scrollDirection === "down";
        return (
          <motion.div
            key={index}
            className="sticky top-0 flex items-center justify-center h-screen"
            initial={{
              y: isScrollDown ? "100vh" : "-100vh",
            }}
            animate={{ y: 0 }}
            exit={{
              y: isScrollDown ? "-100vh" : "100vh",
            }}
            transition={{ duration: 0.8 }}
            style={{
              zIndex: index + 1,
            }}
          >
            {index === 0 ? (
              <p className="text-grey opacity-50 text-xl font-medium">
                {item?.text}
              </p>
            ) : (
              <div
                style={{ rotate: `${item?.rotate}deg` }}
                className={`w-full h-[150px] transform-gpu`}
              >
                <InfoCard
                  key={index}
                  title={item?.title}
                  bgImage={item?.bg}
                  des={item?.des}
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default VerticalScrollComponent;
