"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import InfoCard from "@/components/cards/InfoCard";

const VerticalScrollComponent = ({ items = [] }) => {
  const datas = [{ text: "IDE'S I have Worked With" }, ...items];
  const [scrollDirection, setScrollDirection] = useState("down");
  const [opacityValues, setOpacityValues] = useState(datas.map(() => 0));
  const containerRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document?.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      const newOpacityValues = datas.map((item, index) => {
        const element = containerRef.current?.children[index];
        if (!element) return 0;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = rect.bottom + window.scrollY;

        // Calculate opacity based on how much of the element is visible
        const elementVisibleHeight =
          Math.min(elementBottom, scrollTop + viewportHeight) -
          Math.max(elementTop, scrollTop);
        const elementHeight = rect.height;

        // Otherwise, calculate the opacity as a percentage of visibility
        const opacity = Math.min(1, elementVisibleHeight / elementHeight);

        return opacity;
      });

      setOpacityValues(newOpacityValues);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [datas]);

  return (
    <div
      ref={containerRef}
      className="w-full relative h-[200vh] flex flex-col lg:hidden"
    >
      {datas?.map((item, index) => {
        const isText = index === 0;
        const isScrollDown = scrollDirection === "down";
        const opacity = opacityValues[index] || 0;
        return (
          <motion.div
            key={index}
            className="sticky top-0 flex items-center justify-center h-screen"
            initial={{
              y: isScrollDown ? "100vh" : "-100vh",
              opacity: isText ? 1 : 0,
            }}
            animate={{ y: 0, opacity: isText ? 1 : opacity }}
            exit={{
              y: isScrollDown ? "-100vh" : "100vh",
              opacity: isText ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              zIndex: index + 1,
            }}
          >
            {index === 0 ? (
              <div className="flex flex-col items-center">
                <p className="text-grey opacity-50 text-2xl font-medium">
                  {item?.text}
                </p>
                <p className="text-center text-lg text-grey7 font-normal">
                  I frequently use the following tools or editors:
                </p>
              </div>
            ) : (
              <div
                style={{ rotate: `${item?.rotate}deg` }}
                className={`w-full h-[150px]`}
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
