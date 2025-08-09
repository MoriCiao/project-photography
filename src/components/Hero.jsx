import React, { useEffect } from "react";
import hero from "../assets/hero.webp";
const Hero = () => {
  return (
    <img
      src={hero}
      alt="hero.webp"
      className="hero object-cover w-full transition duration-600 "
    />
  );
};

export default Hero;
