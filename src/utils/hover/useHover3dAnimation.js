"use client";
import { useEffect, useState } from "react";

const useHover3dAnimation = (ref, { x = 0, y = 0, z = 0 }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    const handleMouseMove = (e) => {
      // const { offsetWidth: width, offsetHeight: height } = current;
      // const { clientX, clientY } = e;

      // const x = (clientX - width / 2) / width;
      // const y = (clientY - height / 2) / height;

      // setCoords({ x, y });

      const { left, top, width, height } = current.getBoundingClientRect();
      const { clientX, clientY } = e;

      const x = ((clientY - top) / height - 0.5) * 2;
      const y = ((clientX - left) / width - 0.5) * 2;

      setCoords({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    current?.addEventListener("mousemove", handleMouseMove);
    current?.addEventListener("mouseenter", handleMouseEnter);
    current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current?.removeEventListener("mousemove", handleMouseMove);
      current?.removeEventListener("mouseenter", handleMouseEnter);
      current?.removeEventListener("mouseeleave", handleMouseLeave);
    };
  }, [ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? -xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "all 0.1s ease-in-out" : "";

  return { transform, transition };
};

export default useHover3dAnimation;
