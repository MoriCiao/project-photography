import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_III_i = () => {
  return (
    <section className="theme_III_item theme_III_i">
      <div className="absolute z-0 rounded-3xl top-1/2 right-0 -translate-x-60 -translate-y-1/2 overflow-hidden">
        <ContainerBg
          src={"/project-photography/theme_III_i.webp"}
          alt={"theme_II背景"}
          className={"theme-bg w-[100%] rounded-3xl "}
        />
      </div>
      <blockquote className="absolute z-1 right-60 bottom-40 scale-110">
        <p>“When words become unclear, I shall focus with photographs.”</p>
        <p className="text-end">當言語變得模糊時，我將用照片對焦。</p>
        <footer className="text-end">
          {" "}
          — <cite> Ansel Adams</cite>
        </footer>
      </blockquote>

      <div className=" relative z-1 flex flex-col gap-4">
        <h1>
          Focus Modes <span className="text-[1.25rem]">（對焦模式）</span>
        </h1>
        <p className="flex flex-col space-y-4">
          <span>
            在攝影中，對焦決定了哪個區域會清晰呈現，是構圖與表現主體的關鍵。{" "}
          </span>

          <span>
            選擇合適的對焦模式，能讓你快速又精準地捕捉畫面中最重要的元素。
          </span>
        </p>

        <nav>
          <ul className="flex flex-col gap-4 text-[1.25rem]">
            <li>
              <a href="#theme_III_ii">單次自動對焦 </a>
            </li>
            <li>
              <a href="#theme_III_iii">連續自動對焦</a>
            </li>
            <li>
              <a href="#theme_III_iv">自動切換對焦</a>
            </li>
            <li>
              <a href="#theme_III_v">手動對焦</a>
            </li>
            <li>
              <a href="#theme_III_vi">臉部 / 眼控對焦</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Theme_III_i;
