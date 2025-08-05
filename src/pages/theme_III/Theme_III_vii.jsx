import React from "react";

const Theme_III_vii = () => {
  return (
    <section className="theme_III_item">
      <div>
        <h3>總結</h3>
        <ol>
          <li>選對對焦模式，能讓你準確捕捉畫面的重點與情感</li>
          <li>靜態主體適合單次對焦，動態主體則需連續追焦</li>
          <li>透過手動對焦或眼控對焦，達成更高的精準度</li>
          <li>熟悉各種對焦模式，讓每一次按下快門都更有信心</li>
        </ol>
      </div>
      <div>
        {/* （適合做成 Tips 小提示框） */}
        <h3>💡小技巧：</h3>
        <ul>
          <li>「靜的用單次，動的用連續，特寫靠手動，人物選眼控。」</li>
          <li>拍風景、商品 ➜ 用 單次對焦（AF-S）</li>
          <li>拍小孩、動物、街頭動態 ➜ 用 連續對焦（AF-C）</li>
          <li>拍微距細節 ➜ 用 手動對焦（MF） 更精準</li>
          <li>拍人像 ➜ 開啟 眼控對焦（Eye AF），對焦更聰明！</li>
        </ul>
      </div>
    </section>
  );
};

export default Theme_III_vii;
