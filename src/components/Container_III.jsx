import React from "react";

const Container_III = ({ children, w, h }) => {
  return (
    <div
      className={`container_III relative flex gap-8 items-center justify-center ${w} max-h-screen overflow-x-hidden`}
    >
      <div className={` ${h} py-8`}>{children[0]}</div>
      <div className={` ${h} py-8`}>{children[1]}</div>
      <div className={` ${h} py-8`}>{children[2]}</div>
    </div>
  );
};

export default Container_III;
