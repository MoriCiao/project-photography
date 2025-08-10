import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_IV_viii = ({ style }) => {
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
        src={"/project-photography/theme_IV_viii-item-text.webp"}
        alt={"theme_III背景"}
        className={"theme_IV_item-text md:block hidden"}
      />

      <span
        id="theme_IV_viii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      {/* （SCN / Scene） */}
      <div className={`theme_iv_text theme_context ${style.div1}`}>
        <h3>
          SCN / Scene<span className="h3-span">（場景模式）</span>
        </h3>
        <div div className={style.div2}>
          <p>
            相機根據場景自動套用合適的組合設定（如人像、夜景、運動、風景等）。
          </p>
          <div>
            <ul>
              <li>每台相機內建的場景模式略有不同</li>
              <li>實際上是設定好的「拍攝參數組合」</li>
            </ul>
          </div>
          <div>
            <p>應用場景：快速拍攝特殊題材、讓新手也能拍出特效照片</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_viii;
