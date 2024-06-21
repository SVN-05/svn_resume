"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider2 = ({ data = [] }) => {
  const activeDotColor = useAppStore((state) => state.iconcolor);
  const inactiveDotColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey8;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const iconProps = {
    iconSize: 20,
    iconColor: colors.grey18,
    className:
      "bg-grey11 flex flex-col items-center p-3 cursor-pointer transition-all ease-in-out duration-300",
  };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        spacing: 15,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          setLoaded(true);
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="parent-div w-full flex flex-col items-start justify-center rounded-lg overflow-hidden relative">
      <div ref={sliderRef} className="w-full keen-slider">
        {data?.map((item, index) => {
          return (
            <Image
              width={0}
              height={0}
              key={index}
              src={require(`../../../public/${item}`)}
              className="keen-slider__slide w-full object-cover"
            />
          );
        })}
      </div>
      <div className="flex w-full items-center justify-between absolute ">
        <div
          className={`child-div1 ${iconProps?.className} rounded-tr-lg rounded-br-lg`}
          onClick={() => {
            instanceRef.current?.prev();
          }}
        >
          <FaChevronLeft
            size={iconProps?.iconSize}
            color={iconProps?.iconColor}
          />
        </div>

        <div
          className={`child-div2 ${iconProps?.className} rounded-tl-lg rounded-bl-lg`}
          onClick={() => {
            instanceRef.current?.next();
          }}
        >
          <FaChevronRight
            size={iconProps?.iconSize}
            color={iconProps?.iconColor}
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex px-3 gap-1 items-center absolute bottom-3 right-3 z-10">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                style={{
                  backgroundColor:
                    currentSlide === idx ? activeDotColor : inactiveDotColor,
                }}
                className={"w-3 h-3 border-2 border-grey7 rounded-md"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider2;
