import React, { useState } from "react";
import Hero from "./Hero";
import Headroom from "@webappsconception/react-headroom";
import { Slide } from "react-awesome-reveal";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section
      id="header-top"
      className="header text-white relative h-screen overflow-hidden "
    >
      <Headroom>
        <h3 className="text-center text-xl py-4 bg-black/50 sm:font-thin font-[800] relative">
          攝影基礎入門
          <button
            className="sm:hidden absolute top-1/2 -translate-y-1/2 left-0  w-15 h-full flex flex-col gap-2 items-center justify-center cursor-pointer"
            onClick={handleOpen}
          >
            <hr className="h-[4px] w-[60%] border border-white/50 bg-white/50" />
            <hr className="h-[4px] w-[60%] border border-white/50 bg-white/50" />
            <hr className="h-[4px] w-[60%] border border-white/50 bg-white/50" />
          </button>
        </h3>
      </Headroom>
      <Slide>
        <nav
          className={`nav sm:px-24 py-8 flex items-center xl:justify-start md:justify-center sm:bg-transparent bg-black/50 sm:opacity-100 sm:translate-x-0 transition duration-500  ${
            isOpen ? "opacity-100  translate-x-0" : "opacity-0 -translate-x-100"
          }`}
        >
          <ul className="flex sm:flex-row flex-col sm:w-auto w-full gap-8 text-lg ">
            <li className="sm:text-start flex justify-center ">
              <a href="#theme_I">曝光三元素</a>
            </li>
            <li className="sm:text-start flex justify-center ">
              <a href="#theme_II">白平衡</a>
            </li>
            <li className="sm:text-start flex justify-center ">
              <a href="#theme_III">對焦模式</a>
            </li>
            <li className="sm:text-start flex justify-center ">
              <a href="#theme_IV">拍攝模式</a>
            </li>
            <li className="sm:text-start flex justify-center ">
              <a href="#theme_V">焦段與鏡頭視角</a>
            </li>
          </ul>
        </nav>
      </Slide>
      <div className="absolute top-0 left-0  -z-1 w-full h-full">
        <Hero />
        <blockquote className="m-auto sm:w-auto w-full  flex flex-col  justify-center text-center xl:text-[2.5rem]  md:text-[1.5rem] text-[1rem] font-thin absolute z-1 sm:top-1/2 bottom-50 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className=""> “A picture is worth a thousand words.” </p>
          <div></div>
          <p className=" text-lg sm:text-end text-center sm:pr-0 pr-10">
            一張照片勝過千言萬語。
          </p>
          <footer className="text-lg  sm:text-end text-center sm:pr-0 pr-10">
            —<cite>Fred R. Barnard</cite>{" "}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Header;
