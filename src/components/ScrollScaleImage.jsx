import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ScrollScaleImage = (src, alt, className) => {
  const ref = useRef();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([enter]) => {
        setInView(enter.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1.1 });
    } else {
      controls.start({ scale: 1 });
    }
  }, [inView]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial={{ scale: 1 }}
      animate={controls}
    />
  );
};
export default ScrollScaleImage;
