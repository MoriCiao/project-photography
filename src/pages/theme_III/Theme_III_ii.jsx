import React from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_ii = ({ items_style }) => {
  return (
    <section className={`theme_III_item group ${items_style.group_style}`}>
      {/* Single AF */}

      <ContainerBg
        src={"/project-photography/theme_III_ii.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />

      <span
        id="theme_III_ii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      <div className="theme_III_text theme_context">
        <h3 className="flex 2xl:flex-row flex-col 2xl:items-end">
          Single AF / One-Shot AF{" "}
          <span className="h3-span">（單次自動對焦）</span>
        </h3>
        <div className="flex flex-col gap-4">
          <p>按下快門半按時，相機只會對焦一次。適合靜止主體。</p>
          <div className="flex flex-col gap-4">
            <h4>特點</h4>

            <ul>
              <li>對焦後鎖定，不會自動追蹤</li>
              <li>如果主體移動，焦點就會失準</li>
            </ul>
            <h4>應用場景</h4>
            <ul>
              <li>人像攝影（靜止）</li>
              <li>商品攝影</li>
              <li>建築、風景</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_ii;
