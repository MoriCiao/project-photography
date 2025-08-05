import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_i = ({ isToggle, setIsToggle }) => {
  return (
    <section className="theme_one_i w-full flex flex-col gap-4 text-white">
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-to-r from-black via-black/50 to-black/10"></div>
      <ContainerBg
        src={"/project-photography/theme_I_i.webp"}
        alt={"theme_I背景"}
        className={"theme_I-bg top-0 left-0 opacity-50 transition duration-500"}
      />
      <h1>
        The Exposure Triangle
        <span className="text-[1.25rem]">（曝光三元素）</span>
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
