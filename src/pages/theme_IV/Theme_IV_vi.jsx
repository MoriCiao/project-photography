import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_IV_vi = ({ style }) => {
  return (
    <section className={`theme_IV_item ${style.section}`}>
      <ContainerBg
        src={"/project-photography/theme-item-bg.webp"}
        alt={"theme_IV背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full brightness-60 blur-[2px] "
        }
      />

      <ContainerBg
        src={"/project-photography/theme_IV_vi-item-text.webp"}
        alt={"theme_IV背景"}
        className={"theme_IV_item-text md:block hidden"}
      />
      {/* （P – Program Mode） */}

      <span
        id="theme_IV_vi"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className={`theme_iv_text theme_context ${style.div1}`}>
        <h3>
          P – Program Mode<span className="h3-span">（程式自動模式）</span>
        </h3>
        <div className={style.div2}>
          <p>快門與光圈由相機搭配，但你仍可調整 ISO、白平衡等其他參數。</p>
          <div>
            <ul>
              <li>半自動模式，適合快速拍攝又想保留部分控制權的情況</li>
              <li>可做「程式轉盤微調（Program Shift）」</li>
            </ul>
          </div>
          <div>
            <p>應用場景：運外拍照、旅遊街拍、親友聚會</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_vi;
