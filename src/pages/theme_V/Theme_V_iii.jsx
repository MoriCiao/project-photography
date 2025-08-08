import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_iii = ({
  isToggle,
  setIsToggle,
  handleToggle,
  openAnimation,
  style,
}) => {
  const animate = openAnimation("theme_V_iii", "h-120");

  return (
    <section
      className="theme_V_item"
      onClick={() => handleToggle("theme_V_iii")}
    >
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-[100%] object-cover brightness-60 blur-[2px] "
        }
      />

      <div
        className={` absolute top-5 right-40 grid grid-cols-2 gap-15 transition-all duration-800 ${
          isToggle.theme_V_iii ? "h-100 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="rounded-full w-60 h-60 border-2 border-white/50 shadow-[10px_10px_10px_black] overflow-hidden">
          <img src="/project-photography/theme_V_iv-p1.webp" alt="" />
        </div>

        <div className="rounded-full w-60 h-60 border-2 border-white/50 shadow-[10px_10px_10px_black] overflow-hidden translate-y-20">
          <img src="/project-photography/theme_V_iv-p2.webp" alt="" />
        </div>
        <div className="rounded-full w-60 h-60 border-2 border-white/50 shadow-[10px_10px_10px_black] overflow-hidden">
          <img src="/project-photography/theme_V_iv-p3.webp" alt="" />
        </div>
        <div className="rounded-full w-60 h-60 border-2 border-white/50 shadow-[10px_10px_10px_black] overflow-hidden translate-y-20">
          <img src="/project-photography/theme_V_iv-p4.webp" alt="" />
        </div>
      </div>

      <span
        id="theme_V_iii"
        className="absolute -top-8 left-0 -translate-y-0"
      ></span>
      {/* 常見焦段分類與特色 */}
      <div className="theme_V-text flex flex-col gap-4">
        <h3>常見焦段分類與特色</h3>
        <div className={`${animate} p-8`}>
          <table className={style.table}>
            <thead>
              <tr className={style.tr1}>
                <th>類型</th>
                <th>焦段範圍</th>
                <th>視角特性</th>
                <th>適合拍攝</th>
              </tr>
            </thead>
            <tbody>
              <tr className={style.tr2}>
                <td>廣角</td>
                <td>14–24mm</td>
                <td>誇張透視、大畫面</td>
                <td>建築、風景、星空</td>
              </tr>
              <tr className={style.tr2}>
                <td>廣角</td>
                <td>24–35mm </td>
                <td>空間感強、背景多</td>
                <td>街拍、環境人像</td>
              </tr>
              <tr className={style.tr2}>
                <td>標準</td>
                <td>35–70mm</td>
                <td>自然視角、接近人眼</td>
                <td>人像、日常拍攝</td>
              </tr>
              <tr className={style.tr2}>
                <td>中望遠 </td>
                <td>70–135mm</td>
                <td>壓縮感強、主體突出</td>
                <td>特寫、人像、美食</td>
              </tr>
              <tr className={style.tr2}>
                <td>望遠 / 超望遠</td>
                <td>135mm</td>
                <td>拉近遠方細節以上</td>
                <td>運動、野生動物、月亮</td>
              </tr>
              <tr className={style.tr2}>
                <td>微距鏡</td>
                <td>特殊設計</td>
                <td>極近距離拍攝放大細節</td>
                <td>花卉、昆蟲、商品細節</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_iii;
