import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_vi = ({ items_style }) => {
  return (
    <section className={`theme_III_item group ${items_style.group_style}`}>
      {/* Face / Eye Detection AF */}
      <ContainerBg
        src={"/project-photography/theme_III_vi.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />
      <span
        id="theme_III_vi"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className="theme_III_text">
        <h3>
          Face / Eye Detection AF
          <span className="h3-span">（臉部 / 眼控對焦）</span>
        </h3>
        <div className="flex flex-col gap-4">
          <p>現代相機與手機支援的智慧對焦，會鎖定臉部或眼睛作為焦點。</p>
          <div className="flex flex-col gap-4">
            <h4>特點</h4>
            <ul>
              <li>特別適合人像拍攝</li>
              <li>可追蹤移動中的人臉</li>
              <li>提高成功率與表情捕捉精準度</li>
            </ul>
            <h4>應用場景</h4>
            <ul>
              <li>攝影棚人像、街拍 </li>
              <li>實況、Vlog、活動攝影</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_vi;
