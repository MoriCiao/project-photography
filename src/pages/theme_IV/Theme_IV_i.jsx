import React, { useEffect } from "react";
import Theme_IV_ii from "./theme_IV_ii";
import ContainerBg from "../../components/containerBg";
const Theme_IV_i = () => {
  useEffect(() => {
    const imgs = document.querySelectorAll(".theme_IV_i-bg");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((enter) => {
          if (enter.isIntersecting) {
            enter.target.classList.add("scale-120");
          } else {
            enter.target.classList.remove("scale-120");
          }
        });
      },
      { threshold: 0.75 }
    );

    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="theme_IV_i flex justify-between">
      <div className="theme_IV_i-bg absolute -z-0 bottom-20 left-120  w-100  transition duration-1000">
        <div className="bg-radial relative z-1 w-100 h-full"></div>
        <ContainerBg
          src={"/project-photography/theme_IV_i.webp"}
          alt={"theme_III背景"}
          className={" w-100 brightness-80"}
        />
      </div>

      <blockquote className="absolute z-1 left-40 bottom-40 scale-110">
        <p>“The best camera is the one that’s with you.”</p>
        <p className="text-end">最好的相機，就是你當下擁有的那一台。</p>
        <footer className="text-end">
          {" "}
          — <cite>Chase Jarvis</cite>
        </footer>
      </blockquote>

      <div className="flex flex-col gap-4 relative z-3">
        <h1>
          Shooting Modes<span className="text-[1.25rem]">（拍攝模式）</span>{" "}
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
      <div>
        <Theme_IV_ii />
      </div>
    </section>
  );
};

export default Theme_IV_i;
