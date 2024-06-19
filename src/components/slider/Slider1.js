import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useAppStore from "@/store/store";
import { colors } from "@/utils/constants/constants";

const Slider1 = ({ data = [], perView = 3, spacing = 15 }) => {
  const iconColor = useAppStore((state) => state.iconcolor);
  const activeDotColor = useAppStore((state) => state.iconcolor);
  const inactiveDotColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey8;
  const cardTextColor = useAppStore((state) => state.isDarkMode)
    ? colors.white
    : colors.grey6;

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderProp, setSliderProp] = useState({
    initial: 0,
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

  const updateSliderProps = () => {
    if (window.innerWidth < 640) {
      // sm
      setSliderProp({
        initial: 0,
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
    <div className="w-full relative flex flex-col items-center gap-y-2 mt-5">
      <div ref={sliderRef} className="keen-slider">
        {data?.map((item) => {
          return (
            <div
              key={item}
              className="w-full keen-slider__slide cursor-pointer border border-2 border-solid border-grey9 rounded-md py-5"
            >
              <div className="flex flex-col items-center transition-all duration-600 hover:scale-105">
                <div className="flex items-center gap-2">
                  {item?.icon?.map((item2) => {
                    const Icon = item2;
                    return <Icon key={item2} size={45} color={iconColor} />;
                  })}
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
      {loaded && instanceRef.current && (
        <div className="flex px-3 justify-center lg:hidden">
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
                className={"dot"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider1;
