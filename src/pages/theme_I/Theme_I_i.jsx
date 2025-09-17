import React, { useEffect } from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_i = ({ isToggle, setIsToggle }) => {
  return (
    <section className="theme_I_i flex w-full flex-col gap-4 !p-4 text-white sm:!p-16">
      <div className="absolute top-0 left-0 z-1 h-full w-full bg-gradient-to-r from-black/80 to-black/10 sm:from-black sm:via-black/50"></div>
      <ContainerBg
        src={"/project-photography/theme_I_i.webp"}
        alt={"theme_I背景"}
        className={
          "theme-bg absolute top-0 left-0 h-full -translate-x-0 object-cover opacity-70 transition duration-500 sm:w-full"
        }
      />
      <blockquote className="absolute right-60 bottom-40 z-1 hidden scale-110 sm:block">
        <p> “Your first 10,000 photographs are your worst.”</p>
        <p className="text-end">你最初的一萬張照片，都是最糟的。</p>
        <footer className="text-end">
          {" "}
          — <cite>Henri Cartier-Bresson</cite>
        </footer>
      </blockquote>
      <h1 className="!text-[2rem]">
        The Exposure Triangle <br className="sm:hidden" />
        <span className="!text-[1rem] sm:text-[1.25rem]">（曝光三元素）</span>
      </h1>
      <span>
        曝光三元素由以下三個變數構成，每一項都會影響照片的亮度，同時也會影響照片的風格與畫質：
      </span>
      <nav className="theme_I-nav">
        <ul className="flex flex-col gap-4 text-[1.25rem]">
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
