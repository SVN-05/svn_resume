"use client";
import React, { useEffect, useRef, useState } from "react";

const ContactMeCard = () => {
  const targetRef = useRef();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setOpacity(1);
          }, 300);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={targetRef}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        opacity: opacity,
      }}
      className="custom-card-bg flex flex-col items-center mx-auto py-14 px-4 rounded-xl mt-20 gap-y-7 lg:w-5/6 transition-all duration-500 ease-in-out"
    >
      <h2 className="font-semibold text-xl text-center">
        Do you have any projects in mind or an interest in employing me?
      </h2>
      <a
        href="/contact"
        className="custom-theme-bg text-md font-medium rounded-md px-3 py-2 text-white transition-all ease-in-out duration-300 hover:scale-110"
      >
        Contact me
      </a>
    </div>
  );
};

export default ContactMeCard;
