import React from "react";

const Theme_V_ii = () => {
  return (
    <section className="theme_V_item">
      {/* （Focal Length） */}
      <h3>什麼是焦段？（Focal Length）</h3>
      <ul>
        <li>焦段以 毫米（mm） 為單位，代表鏡頭的放大倍率與視角範圍</li>
        <li>
          通常以數值越小，視角越廣（可容納更多畫面）；數值越大，視角越窄（可放大遠方主體）
        </li>
        <li>全幅等效 焦段來對照說明</li>
      </ul>
      <div>
        <h4> 小知識</h4>

        <ul>
          <li>「定焦鏡」焦段固定，如 35mm、50mm，畫質好、光圈大。</li>
          <li>「變焦鏡」可調焦段，如 24-70mm，彈性高但光圈較小。</li>
        </ul>
      </div>
    </section>
  );
};

export default Theme_V_ii;
