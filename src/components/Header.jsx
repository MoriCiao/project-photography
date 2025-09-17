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
      className="header relative h-screen overflow-hidden text-white"
    >
      <Headroom>
        <h3 className="relative bg-black/50 py-4 text-center text-xl font-[800] sm:font-thin">
          攝影基礎入門
          <button
            className="absolute top-1/2 left-0 flex h-full w-15 -translate-y-1/2 cursor-pointer flex-col items-center justify-center gap-2 sm:hidden"
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
          className={`nav flex items-center bg-black/50 py-8 transition duration-500 sm:translate-x-0 sm:bg-transparent sm:px-24 sm:opacity-100 md:justify-center xl:justify-start ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-0"
          }`}
        >
          <ul className="flex w-full flex-col gap-8 text-lg sm:w-auto sm:flex-row">
            <li className="flex justify-center sm:text-start">
              <a href="#theme_I">曝光三元素</a>
            </li>
            <li className="flex justify-center sm:text-start">
              <a href="#theme_II">白平衡</a>
            </li>
            <li className="flex justify-center sm:text-start">
              <a href="#theme_III">對焦模式</a>
            </li>
            <li className="flex justify-center sm:text-start">
              <a href="#theme_IV">拍攝模式</a>
            </li>
            <li className="flex justify-center sm:text-start">
              <a href="#theme_V">焦段與鏡頭視角</a>
            </li>
          </ul>
        </nav>
      </Slide>
      <div className="absolute top-0 left-0 -z-1 h-full w-full">
        <Hero />
        <blockquote className="absolute bottom-50 left-1/2 z-1 m-auto flex w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center text-center text-[1rem] font-thin sm:top-1/2 sm:w-auto md:text-[1.5rem] xl:text-[2.5rem]">
          <p className=""> “A picture is worth a thousand words.” </p>
          <div></div>
          <p className="pr-10 text-center text-lg sm:pr-0 sm:text-end">
            一張照片勝過千言萬語。
          </p>
          <footer className="pr-10 text-center text-lg sm:pr-0 sm:text-end">
            —<cite>Fred R. Barnard</cite>{" "}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Header;
