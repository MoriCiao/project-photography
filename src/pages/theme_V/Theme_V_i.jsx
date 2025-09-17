import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_i = () => {
  return (
    <section className="theme_V_i !p-4 sm:!p-16">
      <div className="absolute top-0 left-0 z-1 h-full w-full bg-gradient-to-r from-black to-transparent sm:via-black/100"></div>
      <ContainerBg
        src={"/project-photography/theme_V_i.webp"}
        alt={"theme_V背景"}
        className={
          "theme-bg absolute top-0 left-0 -z-0 h-full w-full object-cover object-right blur-[0px] brightness-30 sm:right-0 sm:w-300 sm:w-full sm:brightness-60"
        }
      />

      <blockquote className="absolute right-0 bottom-20 z-1 w-full text-center lg:right-80 lg:bottom-40 lg:w-auto lg:-translate-x-0 lg:scale-110 xl:right-150 xl:text-end">
        <p>
          “Seeing is not enough; <br className="sm:hidden" /> you have to feel
          what you photograph.”
        </p>
        <p className="text-center lg:text-end">
          光看到還不夠，你必須感受到你所拍攝的東西。
        </p>
        <footer className="text-center lg:text-end">
          {" "}
          — <cite>André Kertész</cite>
        </footer>
      </blockquote>

      <div className="relative z-3 flex flex-col gap-4">
        <h1>焦段與鏡頭視角（Focal Length & Perspective）</h1>
        <p>
          焦段不僅決定畫面能「拍多遠」，更會改變照片的視覺效果與主體與背景之間的關係。選擇不同焦段，會讓一張照片的情緒與氛圍完全不同。
        </p>

        <nav>
          <ul className="flex flex-col gap-4 text-[1.25rem]">
            <li>
              <a href="#theme_V_ii">什麼是焦段？</a>
            </li>
            <li>
              <a href="#theme_V_iii">常見焦段分類與特色</a>
            </li>
            <li>
              <a href="#theme_V_iv">焦段與「視角變化」</a>
            </li>
            <li>
              <a href="#theme_V_v">構圖與焦段的關係</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Theme_V_i;
