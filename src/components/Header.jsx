import React from "react";
import Hero from "./Hero";
import ScrollScaleImage from "./ScrollScaleImage";
import heroImg from "../assets/hero.webp";
const Header = () => {
  return (
    <section className="header text-white relative h-screen overflow-hidden ">
      <h3 id="header-top" className="text-center text-xl py-4 bg-black/50">
        攝影基礎入門
      </h3>
      <nav className="nav px-24 py-8">
        <ul className="flex gap-8 text-lg">
          <li>
            <a href="#theme_I">曝光三元素</a>
          </li>
          <li>
            <a href="#theme_II">白平衡</a>
          </li>
          <li>
            <a href="#theme_III">對焦模式</a>
          </li>
          <li>
            <a href="#theme_IV">拍攝模式</a>
          </li>
          <li>
            <a href="#theme_V">焦段與鏡頭視角</a>
          </li>
        </ul>
      </nav>
      <div className="absolute top-0 left-0 -z-1 w-full h-full">
        <Hero />
        <blockquote className="text-[2.5rem] font-thin absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <p className=""> “A picture is worth a thousand words.” </p>
          <p className="text-[1.5rem] text-end">一張照片勝過千言萬語。</p>
          <footer className="text-lg text-end">
            —<cite>Fred R. Barnard</cite>{" "}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Header;
