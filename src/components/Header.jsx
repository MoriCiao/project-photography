import React from "react";
import Hero from "./Hero";

const Header = () => {
  return (
    <section className="header text-white relative h-screen overflow-hidden ">
      <h3
        id="header-top"
        className="text-center text-xl py-4 bg-black/50 sm:font-thin font-[800]"
      >
        攝影基礎入門
      </h3>
      <nav className="nav sm:px-24 py-8 flex items-center xl:justify-start md:justify-center sm:bg-transparent bg-black/50">
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
      <div className="absolute top-0 left-0  -z-1 w-full h-full">
        <Hero />
        <blockquote className="m-auto sm:w-auto w-full  flex flex-col  justify-center text-center xl:text-[2.5rem]  md:text-[1.5rem] text-[1rem] font-thin absolute z-1 sm:top-1/2 bottom-50 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className=""> “A picture is worth a thousand words.” </p>
          <div></div>
          <p className=" text-lg text-end sm:pr-0 pr-10">
            一張照片勝過千言萬語。
          </p>
          <footer className="text-lg  text-end sm:pr-0 pr-10">
            —<cite>Fred R. Barnard</cite>{" "}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Header;
