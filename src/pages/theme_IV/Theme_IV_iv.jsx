import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_IV_iv = ({ style }) => {
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
        src={"/project-photography/theme_IV_iv-item-text.webp"}
        alt={"theme_III背景"}
        className={"theme_IV_item-text translate-x-10"}
      />
      <span
        id="theme_IV_iv"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      {/* （A / Av – Aperture Priority） */}
      <div className={`theme_iv_text ${style.div1}`}>
        <h3>
          A / Av – Aperture Priority
          <span className="h3-span">（光圈先決模式）</span>
        </h3>

        <div className={style.div2}>
          <p>你控制光圈，相機自動選擇適合的快門速度。</p>
          <div>
            <ul>
              <li>控制景深的最佳選擇 </li>
              <li>背景虛化、人像攝影常用</li>
              <li>留意快門太慢時需用腳架或提高 ISO</li>
            </ul>
          </div>
          <div>
            <p>應用場景：人像、美食、靜物</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_iv;
