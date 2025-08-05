import React from "react";

const ContainerBg = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`theme-bg ${className}`}
      loading="lazy"
      draggable="false"
    />
  );
};

export default ContainerBg;
