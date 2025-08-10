import React from "react";

const GoTop = () => {
  return (
    <>
      <a
        href="#header-top"
        className="fixed sm:bottom-8 bottom-4 sm:right-12 right-4 z-1000 border-2 sm:text-[1.25rem] text-small text-red-500 block sm:w-15 w-10 sm:h-15 h-10 flex items-center justify-center rounded-full hover:bg-red-500  hover:text-white transition duration-500"
      >
        Top
      </a>
    </>
  );
};

export default GoTop;
