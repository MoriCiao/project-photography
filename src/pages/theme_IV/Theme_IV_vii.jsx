import React from "react";

const Theme_IV_vii = () => {
  return (
    <section className="theme_IV_item">
      <span
        id="theme_IV_vii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      {/* （Auto） */}
      <h3>自動模式（Auto）</h3>
      <p>
        相機自動決定所有設定（快門、光圈、ISO、白平衡…），用戶只需構圖與按快門。
      </p>
      <div>
        <ul>
          <li>方便初學者快速拍攝</li>
          <li>但曝光、色調風格較不受控</li>
          <li>通常不支援 RAW 格式拍攝</li>
        </ul>
        <h4>應用場景</h4>
        <p>手練習、隨手拍、應急場景</p>
      </div>
    </section>
  );
};

export default Theme_IV_vii;
