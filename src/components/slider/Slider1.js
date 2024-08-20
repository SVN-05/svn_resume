import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider1 = ({ data = [], perView = 3, spacing = 15 }) => {
  const activeDotColor = useAppStore((state) => state.iconcolor);
  const inactiveDotColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey8;
  const cardTextColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey1;

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderProp, setSliderProp] = useState({
    initial: 0,
    loop: true,
    slides: {
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [sliderRef, instanceRef] = useKeenSlider(sliderProp);

  const iconProps = {
    iconSize: 20,
    iconColor: colors.grey18,
    className:
      "bg-grey11 flex flex-col items-center p-3 cursor-pointer transition-all ease-in-out duration-300",
  };

  const updateSliderProps = () => {
    if (window.innerWidth < 640) {
      // sm
      setSliderProp({
        initial: 0,
        loop: true,
        slides: {
          spacing: 15,
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
        },
      });
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      // md
      setSliderProp({
        slides: {
          perView: perView,
          spacing: spacing,
        },
      });
    } else if (window.innerWidth >= 768) {
      // lg
      setSliderProp({
        slides: {
          perView: perView,
          spacing: spacing,
        },
      });
    }
  };

  useEffect(() => {
    updateSliderProps();
  }, []);

  return (
    <div className="w-full parent-div relative flex flex-col items-center justify-center gap-y-3 mt-5 overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {data?.map((item) => {
          return (
            <div
              key={item}
              className="w-full keen-slider__slide cursor-pointer border border-2 border-solid border-grey9 rounded-md py-5"
            >
              <div className="flex flex-col items-center transition-all duration-600 hover:scale-105">
                <div className="flex items-center gap-2">
                  {item?.image ? (
                    <Image
                      width={0}
                      height={0}
                      className="w-[200px] h-20"
                      src={item?.icon?.[0]}
                      alt="Icon"
                    />
                  ) : (
                    item?.icon?.map((item2) => {
                      const Icon = item2;
                      return (
                        <Icon key={item2} size={45} className="theme-color" />
                      );
                    })
                  )}
                </div>

                <p
                  style={{ color: cardTextColor }}
                  className="text-xs mt-3 font-semibold"
                >
                  {item?.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden lg:flex w-full items-center justify-between absolute">
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
        <div className="flex px-3 gap-1 justify-center lg:hidden">
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
                className={"w-8 h-1 rounded"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider1;
