import React from "react";

const Theme_III_iv = () => {
  return (
    <section className="theme_III_item">
      {/* CAF-A */}
      <h3>自動切換對焦（AF-A / AI Focus）</h3>
      <p>
        相機會判斷主體是否靜止或移動，自動在「單次對焦」與「連續對焦」間切換。
      </p>
      <div>
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
    </section>
  );
};

export default Theme_III_iv;
