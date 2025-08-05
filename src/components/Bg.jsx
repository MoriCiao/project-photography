import React from "react";

const bg_image = {
  themeI: "",
  themeII: "",
  themeIII: "",
  themeIV: "",
  themeV: "",
};

const Bg = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Bg;
