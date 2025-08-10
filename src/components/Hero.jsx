import React, { useEffect } from "react";
import hero from "/project-photography/hero-1280.webp";

const Hero = () => {
  return (
    <img
      src={hero}
      srcSet="/project-photography/hero-640.webp 640w, /project-photography/hero-1280.webp 1280w ,/project-photography/hero-1920.webp 1920w"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
      alt="hero.webp"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="hero object-cover w-full h-full transition duration-600 "
    />
  );
};

export default Hero;
