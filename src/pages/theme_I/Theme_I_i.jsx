import React, { useEffect } from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_i = ({ isToggle, setIsToggle }) => {
  return (
    <section className="theme_I_i w-full flex flex-col gap-4 text-white sm:!p-16 !p-4">
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-to-r sm:from-black from-black/80 sm:via-black/50 to-black/10"></div>
      <ContainerBg
        src={"/project-photography/theme_I_i.webp"}
        alt={"theme_I背景"}
        className={
          "theme-bg absolute top-0 left-0 opacity-70 transition duration-500 object-cover  sm:w-full h-full  -translate-x-0"
        }
      />
      <blockquote className="sm:block hidden absolute z-1 right-60 bottom-40 scale-110">
        <p> “Your first 10,000 photographs are your worst.”</p>
        <p className="text-end">你最初的一萬張照片，都是最糟的。</p>
        <footer className="text-end">
          {" "}
          — <cite>Henri Cartier-Bresson</cite>
        </footer>
      </blockquote>
      <h1 className="!text-[2rem]">
        The Exposure Triangle <br className="sm:hidden" />
        <span className="sm:text-[1.25rem] !text-[1rem]">（曝光三元素）</span>
      </h1>
      <span>
        曝光三元素由以下三個變數構成，每一項都會影響照片的亮度，同時也會影響照片的風格與畫質：
      </span>
      <nav className="theme_I-nav ">
        <ul className="text-[1.25rem] flex flex-col gap-4">
          <li>
            <a href="#shutter">Shutter Speed</a>
          </li>
          <li>
            <a href="#aperture">Aperture</a>
          </li>
          <li>
            <a href="#iso">ISO</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Theme_I_i;
