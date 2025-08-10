import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_IV_v = ({ style }) => {
  return (
    <section className={`theme_IV_item ${style.section}`}>
      <ContainerBg
        src={"/project-photography/theme-item-bg.webp"}
        alt={"theme_III背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-full object-cover brightness-60 blur-[2px] "
        }
      />
      <ContainerBg
        src={"/project-photography/theme_IV_v-item-text.webp"}
        alt={"theme_III背景"}
        className={"theme_IV_item-text sm:translate-x-10 md:block hidden"}
      />

      {/* （S / Tv – Shutter Priority） */}
      <span
        id="theme_IV_v"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className={`theme_iv_text theme_context ${style.div1}`}>
        <h3>
          S / Tv – Shutter Priority
          <span className="h3-span">（快門先決模式）</span>
        </h3>

        <div className={style.div2}>
          <p>你控制快門速度，相機自動配合光圈。</p>
          <div>
            <ul>
              <li>適合凍結動態或製造模糊效果</li>
              <li>用來捕捉瞬間、車軌、流水等效果</li>
              <li>留意光圈自動可能導致曝光不足</li>
            </ul>
          </div>
          <div>
            <p>應用場景：運動、街拍、長曝創作</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_v;
