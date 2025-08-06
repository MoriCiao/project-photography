import React, { useEffect } from "react";
import hero from "../assets/hero.webp";
const Hero = () => {
  useEffect(() => {
    const image = document.querySelectorAll(".hero");

    const observer = new IntersectionObserver(
      (entries) => {
        // console.log(entries);
        entries.forEach((enter) => {
          if (enter.isIntersecting) {
            enter.target.classList.add("scale-110");
          } else {
            enter.target.classList.remove("scale-110");
          }
        });
      },
      { threshold: 0.5 }
    );

    image.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={hero}
      alt="hero.webp"
      className="hero object-cover w-full transition duration-600"
    />
  );
};

export default Hero;
