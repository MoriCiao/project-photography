import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_v = ({ items_style }) => {
  return (
    <section className={`theme_III_item group ${items_style.group_style}`}>
      {/* Manual Focus */}
      <ContainerBg
        src={"/project-photography/theme_III_v.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />
      <span
        id="theme_III_v"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>
      <div className="theme_III_text">
        <h3>
          Manual Focus / MF
          <span className="h3-span">（手動對焦）</span>
        </h3>
        <div className="flex flex-col gap-4">
          <p>完全由使用者手動轉動對焦環決定焦點位置。</p>
          <div className="flex flex-col gap-4">
            <h4>特點</h4>
            <ul>
              <li>可針對特定區域微調，對焦精準</li>
              <li>不受自動對焦錯誤影響</li>
            </ul>
            <h4>應用場景</h4>
            <ul>
              <li>微距攝影（如昆蟲、花朵）</li>
              <li>星空、夜景</li>
              <li>拍攝穿玻璃、有干擾背景時</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_v;
