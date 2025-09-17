import React, { useEffect } from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_i = ({ isToggle }) => {
  return (
    <section
      id=""
      className="theme_II_item theme_II_i flex w-full flex-col gap-4 !p-4 sm:!p-16"
    >
      <div className="absolute top-1/2 right-20 z-1 hidden w-100 -translate-x-15 -translate-y-1/2 overflow-hidden rounded-3xl border-8 border-white/50 bg-white/70 lg:block xl:w-150 2xl:w-200">
        <ContainerBg
          src={"/project-photography/theme_II_i.webp"}
          alt={"theme_II背景"}
          className={"theme-bg object-fit w-full"}
        />
      </div>
      <ContainerBg
        src={"/project-photography/theme_II_i-1.webp"}
        alt={"theme_II背景"}
        className={
          "absolute top-0 left-0 z-0 h-full rounded-3xl object-cover blur-[3px] brightness-60 sm:h-full sm:w-full"
        }
      />
      <blockquote className="md:justity-end justity-center absolute bottom-30 left-0 z-1 flex w-full flex-col items-center text-center sm:text-start md:left-60 md:w-auto md:scale-110 md:items-end">
        <p>“To me, photography is an art of observation.”</p>
        <p className="text-end">對我來說，攝影是觀察的藝術。</p>
        <footer className="text-end">
          {" "}
          — <cite>Elliott Erwitt</cite>
        </footer>
      </blockquote>

      <div className="theme_context relative z-10 flex w-full flex-col gap-4">
        <h1>
          White Balance <span className="text-[1.25rem]">（白平衡）</span>
        </h1>
        <p className="hidden flex-col space-y-4 sm:flex">
          <span>
            白平衡是攝影中用來調整色溫，讓影像呈現自然色彩的關鍵設定。
          </span>

          <span>
            不同光源會讓照片偏黃、偏藍，而白平衡能幫助你「讓白的東西看起來是白的」。
          </span>
        </p>

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
