import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_i = ({ isToggle }) => {
  return (
    <section
      id=""
      className="theme_II_item w-full flex flex-col gap-4 bg-black"
    >
      {/* <ContainerBg
        src={"/project-photography/theme_II_i.webp"}
        alt={"theme_II背景"}
        className={"transition duration-500 -translate-y-10"}
      /> */}
      <div className="theme_context w-full flex flex-col gap-4">
        <h1>
          White Balance <span className="text-[1.25rem]">（白平衡）</span>
        </h1>
        <span className="">
          白平衡是攝影中用來調整色溫，讓影像呈現自然色彩的關鍵設定。
          <br />
          不同光源會讓照片偏黃、偏藍，而白平衡能幫助你「讓白的東西看起來是白的」。
        </span>

        <nav className={`theme_II-nav`}>
          <ul className="flex flex-col gap-4 text-[1.5rem]">
            <li>
              <a href="#Theme_II_ii">什麼是白平衡？</a>
            </li>
            <li>
              <a href="#Theme_II_iii">常見白平衡模式</a>
            </li>
            <li>
              <a href="#Theme_II_iv">色溫與畫面氛圍的關係</a>
            </li>
            <li>
              <a href="#Theme_II_iv">RAW 拍攝與後製白平衡</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Theme_II_i;
