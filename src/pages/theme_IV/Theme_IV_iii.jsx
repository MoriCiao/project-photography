import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_IV_iii = ({ style }) => {
  return (
    <section className={`theme_IV_item ${style.section}`}>
      <ContainerBg
        src={"/project-photography/theme-item-bg.webp"}
        alt={"theme_III背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full brightness-60 blur-[2px] "
        }
      />
      <ContainerBg
        src={"/project-photography/theme_IV_iii-item-text.webp"}
        alt={"theme_III背景"}
        className={"theme_IV_item-text"}
      />

      {/* M – Manual） */}
      <span
        id="theme_IV_iii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>
      <div className={`theme_iv_text ${style.div1}`}>
        <h3>
          M – Manual <span className="h3-span">（全手動模式）</span>
        </h3>

        <div className={style.div2}>
          <p>完全由使用者控制快門與光圈，提供最高自由度。</p>
          <div>
            <ul>
              <li>適合進階使用者與創意拍攝</li>
              <li>搭配測光表、觀察直方圖調整曝光</li>
              <li>需要對曝光三元素有基本理解</li>
            </ul>
          </div>
          <div>
            <p>應用場景：長曝光、夜景、商品攝影、劇照</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_iii;
