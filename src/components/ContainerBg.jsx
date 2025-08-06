import React from "react";

const ContainerBg = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`transition-transform duration-700 ${className} `}
      loading="lazy"
      draggable="false"
    />
  );
};

export default ContainerBg;
