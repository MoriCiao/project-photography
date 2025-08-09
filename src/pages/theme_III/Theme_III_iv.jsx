import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_iv = ({ items_style }) => {
  return (
    <section className={`theme_III_item group ${items_style.group_style}`}>
      {/* CAF-A */}
      <ContainerBg
        src={"/project-photography/theme_III_iv.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />
      <span
        id="theme_III_iv"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className="theme_III_text theme_context">
        <h3>
          AF-A / AI Focus
          <span className="h3-span">（自動切換對焦）</span>
        </h3>
        <div className="flex flex-col gap-4">
          <p>
            相機會判斷主體是否靜止或移動，自動在「單次對焦」與「連續對焦」間切換。
          </p>
          <div className="flex flex-col gap-4">
            <h4>特點</h4>
            <ul>
              <li>懶人模式，但有時準確性不如手動切換</li>
              <li>入門者可使用，但進階拍攝建議明確指定模式</li>
            </ul>
            <h4>應用場景</h4>
            <ul>
              <li>複雜場景（人群中移動的對象）</li>
              <li>小孩奔跑、街拍</li>
              <li>快速拍攝時沒時間判斷狀況</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_iv;
