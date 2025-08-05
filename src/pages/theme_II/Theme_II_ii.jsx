import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_ii = ({ isToggle, setIsToggle, handleToggle }) => {
  console.log(isToggle.theme_II_ii);
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
      {/* <ContainerBg
        src={"/project-photography/theme_II_ii.webp"}
        alt={"theme_II背景"}
        className={
          " transition duration-500 -translate-y-0 brightness-100 hover:opacity-10 "
        }
      /> */}
      <div className="flex flex-col gap-4">
        <h3>什麼是白平衡？</h3>

        <ul
          className={`${
            isToggle.theme_II_ii
              ? "opacity-100 h-auto text-[1.25rem]"
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
