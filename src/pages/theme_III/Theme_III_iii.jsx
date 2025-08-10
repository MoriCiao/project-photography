import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_iii = ({ items_style }) => {
  return (
    <section className={`theme_III_item group ${items_style.group_style}`}>
      {/* Continuous AF */}
      <ContainerBg
        src={"/project-photography/theme_III_iii.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />

      <span
        id="theme_III_iii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className="theme_III_text theme_context">
        <h3 className="lg:!text-[1.5rem] flex md:flex-row flex-col md:items-end">
          Continuous AF / AI-Servo / AF-C
          <span className="h3-span">（連續自動對焦）</span>
        </h3>
        <div className="flex flex-col gap-4">
          <p>相機會持續偵測主體的距離並自動更新焦點。適合移動中的主體。</p>
          <div className="flex flex-col gap-4">
            <h4>特點</h4>

            <ul>
              <li>快門半按時持續追焦</li>
              <li>動態場景非常有用</li>
            </ul>
            <h4>應用場景</h4>
            <ul>
              <li>運動攝影</li>
              <li>小孩奔跑、街拍</li>
              <li>寵物移動中拍攝</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_iii;
