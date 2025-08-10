import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_ii = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_ii"
      className={`theme_II_item theme_II_ii ${
        isToggle.name === "theme_II_ii" && isToggle.theme_II_ii === true
          ? ""
          : ""
      }`}
      onClick={() => handleToggle("theme_II_ii")}
    >
      {/* 什麼是白平衡？ */}
      <ContainerBg
        src={"/project-photography/items-bg.webp"}
        alt={"theme_II背景"}
        className={`absolute top-0 left-0  w-full h-full object-cover transition-all duration-1000 -translate-y-0 ${
          isToggle.theme_II_ii ? "brightness-30" : "brightness-60 "
        } opacity-100 `}
      />
      <ContainerBg
        src={"/project-photography/theme_II_ii.webp"}
        alt={"theme_II背景"}
        className={`${
          isToggle.theme_II_ii
            ? "block p-4 xl:max-w-150 lg:max-w-120 sm:max-w-80 md:block hidden  "
            : "hidden p-0 w-[100%]"
        }   absolute lg:top-1/2 lg:right-0 md:bottom-0 md:right-1/2 md:translate-x-1/2 lg:translate-x-0 border border-black  transition-all duration-1000 lg:-translate-y-1/2`}
      />
      <div
        className={`${
          isToggle.theme_II_ii
            ? "bg-gradient-to-r from-black/20 via-black/50 to-black/0"
            : ""
        } absolute  top-0 right-0  w-[100%] h-[100%] transition duration-1500`}
      ></div>

      <div className="theme_context flex flex-col gap-4">
        <h3>什麼是白平衡？</h3>

        <ul
          className={`${
            isToggle.theme_II_ii
              ? "opacity-100 h-auto text-[1rem]"
              : "opacity-0 h-30"
          } flex flex-col gap-4 transition-all duration-500`}
        >
          <li>所有光源都有「色溫」，單位為 K（Kelvin）</li>
          <li>低色溫（2000K–4000K）：偏黃（暖色）</li>
          <li>高色溫（6000K–9000K）：偏藍（冷色）</li>
          <li>目的是：讓畫面在不同光源下依然呈現自然真實的色彩</li>
        </ul>
      </div>
    </section>
  );
};

export default Theme_II_ii;
