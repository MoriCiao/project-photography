import React, { useEffect } from "react";
import Theme_IV_ii from "./theme_IV_ii";
import ContainerBg from "../../components/containerBg";
const Theme_IV_i = () => {
  return (
    <section className="theme_IV_i theme_IV_item w-full !p-4 sm:h-full sm:!p-16">
      <div className="theme_IV_i-bg md:left-40xl:left-120 absolute right-0 -z-0 transition duration-1000 sm:right-20 md:w-100 lg:top-40 lg:left-60">
        <div className="relative z-1 h-full w-100 bg-radial"></div>
        <ContainerBg
          src={"/project-photography/theme_IV_i.webp"}
          alt={"theme_III背景"}
          className={"w-100 brightness-80"}
        />
      </div>

      <blockquote className="absolute top-150 left-0 z-1 h-20 w-full pr-0 text-center sm:top-100 sm:block sm:pr-10 sm:text-end md:right-0 md:left-auto md:w-120 md:pr-10 lg:top-150 lg:left-10 lg:block lg:scale-110 xl:left-40 2xl:left-60">
        <p>“The best camera is the one that’s with you.”</p>
        <p className="text-center sm:text-end">
          最好的相機，就是你當下擁有的那一台。
        </p>
        <footer className="text-center sm:text-end">
          {" "}
          — <cite>Chase Jarvis</cite>
        </footer>
      </blockquote>

      <div className="theme_IV_context relative z-3 grid h-auto w-full grid-cols-1 gap-4 sm:h-full lg:grid-cols-2">
        <div className="flex h-150 w-full flex-col gap-4 sm:h-full">
          <h1 className="flex flex-col sm:flex-row sm:items-end">
            Shooting Modes
            <span className="text-[1.25rem]">（拍攝模式）</span>{" "}
          </h1>
          <p className="flex flex-col space-y-4">
            <span>拍攝模式決定了你與相機之間的控制比例。</span>
            <span>
              根據場景與需求，你可以選擇全手動或半自動的拍攝方式，讓曝光更穩定、操作更直覺。
            </span>
          </p>
          <nav>
            <ul className="flex flex-col gap-4 text-[1.25rem]">
              <li>
                <a href="#theme_IV_iii">全手動模式</a>
              </li>
              <li>
                <a href="#theme_IV_iv">光圈先決模式</a>
              </li>
              <li>
                <a href="#theme_IV_v">快門先決模式</a>
              </li>
              <li>
                <a href="#theme_IV_vi">程式自動模式</a>
              </li>
              <li>
                <a href="#theme_IV_vii">自動模式</a>
              </li>
              <li>
                <a href="#theme_IV_viii">場景模式</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-15 w-full sm:mt-0 sm:h-full">
          <Theme_IV_ii />
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_i;
