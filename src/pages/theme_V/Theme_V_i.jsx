import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_i = () => {
  return (
    <section className="theme_V_i">
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/100 to-transparent"></div>
      <ContainerBg
        src={"/project-photography/theme_V_i.webp"}
        alt={"theme_V背景"}
        className={
          "theme-bg absolute -z-0 top-0 right-0 w-300 h-full object-cover brightness-60 blur-[0px] "
        }
      />

      <blockquote className="absolute z-1 left-150 bottom-40 scale-110">
        <p>“Seeing is not enough; you have to feel what you photograph.”</p>
        <p className="text-end">光看到還不夠，你必須感受到你所拍攝的東西。</p>
        <footer className="text-end">
          {" "}
          — <cite>André Kertész</cite>
        </footer>
      </blockquote>

      <div className="flex flex-col gap-4 relative z-3">
        <h1>焦段與鏡頭視角（Focal Length & Perspective）</h1>
        <p>
          焦段不僅決定畫面能「拍多遠」，更會改變照片的視覺效果與主體與背景之間的關係。選擇不同焦段，會讓一張照片的情緒與氛圍完全不同。
        </p>

        <nav>
          <ul className="flex flex-col gap-4  text-[1.25rem]">
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
