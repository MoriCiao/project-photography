import React from "react";

const Theme_III_ii = () => {
  return (
    <section className="theme_III_item">
      {/* Single AF */}
      <h3>單次自動對焦（Single AF / One-Shot AF）</h3>
      <p>按下快門半按時，相機只會對焦一次。適合靜止主體。</p>
      <div>
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
    </section>
  );
};

export default Theme_III_ii;
