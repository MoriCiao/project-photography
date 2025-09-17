import React from "react";

const GoTop = () => {
  return (
    <>
      <a
        href="#header-top"
        className="text-small fixed right-4 bottom-4 z-1000 block flex h-10 w-10 items-center justify-center rounded-full border-2 text-white transition duration-500 hover:bg-red-500 hover:text-white sm:right-12 sm:bottom-8 sm:h-15 sm:w-15 sm:text-[1.25rem]"
      >
        Top
      </a>
    </>
  );
};

export default GoTop;
