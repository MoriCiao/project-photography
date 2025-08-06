import React from "react";
import Theme_IV_ii from "./theme_IV_ii";

const Theme_IV_i = () => {
  return (
    <section className="theme_IV_item flex">
      <blockquote className="absolute z-1 left-60 bottom-20 scale-110">
        <p>“The best camera is the one that’s with you.”</p>
        <p className="text-end">最好的相機，就是你當下擁有的那一台。</p>
        <footer className="text-end">
          {" "}
          — <cite>Chase Jarvis</cite>
        </footer>
      </blockquote>

      <div className="flex flex-col gap-4">
        <h1>拍攝模式（Shooting Modes）</h1>
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
      <div>
        <Theme_IV_ii />
      </div>
    </section>
  );
};

export default Theme_IV_i;
