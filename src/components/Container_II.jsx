import React from "react";

const Container_II = ({ children, w, h }) => {
  return (
    <div className={`container_II flex flex-col ${w} h-screen`}>
      <div
        className={`relative ${h} w-full overflow-hidden  bg-gradient-to-br from-black/50 via-black/100 to-black/50`}
      >
        {children[0]}
      </div>
      <div
        className={`relative ${h} w-full overflow-hidden  bg-gradient-to-br from-black/50 via-black/100 to-black/50`}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default Container_II;
