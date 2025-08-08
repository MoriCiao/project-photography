import React from "react";

const GoTop = () => {
  return (
    <>
      <a
        href="#header-top"
        className="fixed bottom-8 right-12 z-1000 border-2 text-[1.25rem] text-red-500 block w-15 h-15 flex items-center justify-center rounded-full hover:bg-red-500  hover:text-white transition duration-500"
      >
        Top
      </a>
    </>
  );
};

export default GoTop;
