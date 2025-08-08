import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_IV_vii = ({ style }) => {
  return (
    <section className={`theme_IV_item ${style.section}`}>
      <ContainerBg
        src={"/project-photography/theme-item-bg.webp"}
        alt={"theme_III背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full brightness-60 blur-[2px] "
        }
      />
      <ContainerBg
        src={"/project-photography/theme_IV_vii-item-text.webp"}
        alt={"theme_III背景"}
        className={"theme_IV_item-text"}
      />
      <span
        id="theme_IV_vii"
        className="absolute top-0 left-0 -translate-y-0"
      ></span>

      {/* （Auto） */}
      <div className={`theme_iv_text ${style.div1}`}>
        <h3>
          Auto<span className="h3-span">（自動模式）</span>
        </h3>
        <div className={style.div2}>
          <p>
            相機自動決定所有設定（快門、光圈、ISO、白平衡…），
            <br />
            用戶只需構圖與按快門。
          </p>
          <div>
            <ul>
              <li>方便初學者快速拍攝</li>
              <li>但曝光、色調風格較不受控</li>
              <li>通常不支援 RAW 格式拍攝</li>
            </ul>
          </div>

          <div>
            <p>應用場景：手練習、隨手拍、應急場景</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_IV_vii;
