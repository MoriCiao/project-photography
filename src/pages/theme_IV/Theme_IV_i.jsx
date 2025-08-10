import React, { useEffect } from "react";
import Theme_IV_ii from "./theme_IV_ii";
import ContainerBg from "../../components/containerBg";
const Theme_IV_i = () => {
  return (
    <section className="theme_IV_i theme_IV_item w-full sm:h-full  sm:!p-16 !p-4">
      <div className="theme_IV_i-bg absolute -z-0 lg:top-40 lg:left-60 md:left-40xl:left-120  md:w-100 sm:right-20 right-0 transition duration-1000">
        <div className="bg-radial relative z-1 w-100 h-full"></div>
        <ContainerBg
          src={"/project-photography/theme_IV_i.webp"}
          alt={"theme_III背景"}
          className={" w-100 brightness-80"}
        />
      </div>

      <blockquote className="absolute z-1 2xl:left-60 xl:left-40 lg:left-10  md:left-auto md:right-0 h-20 lg:top-150 md:pr-10 sm:pr-10 pr-0 left-0 sm:block lg:block text-center  sm:text-end  sm:top-100 top-150 md:w-120 w-full lg:scale-110">
        <p>“The best camera is the one that’s with you.”</p>
        <p className="sm:text-end text-center">
          最好的相機，就是你當下擁有的那一台。
        </p>
        <footer className="sm:text-end text-center">
          {" "}
          — <cite>Chase Jarvis</cite>
        </footer>
      </blockquote>

      <div className="theme_IV_context grid lg:grid-cols-2 grid-cols-1 gap-4 relative z-3 w-full sm:h-full h-auto">
        <div className="w-full sm:h-full h-150 flex flex-col gap-4">
          <h1 className="flex  sm:flex-row flex-col sm:items-end">
            Shooting Modes<span className="text-[1.25rem]">（拍攝模式）</span>{" "}
          </h1>
          <p className="flex flex-col space-y-4 ">
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
        <div className="w-full sm:h-full  sm:mt-0 mt-15">
          <Theme_IV_ii />
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_i;
