import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_v = ({ isToggle, setIsToggle, handleToggle, openAnimation }) => {
  const animate = openAnimation("theme_V_v", "h-50");

  return (
    <section className="theme_V_item" onClick={() => handleToggle("theme_V_v")}>
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-[100%] object-cover brightness-60 blur-[2px] "
        }
      />
      <div
        className={`absolute top-8 right-20 grid grid-cols-4 gap-10 transition duration-500  ${
          isToggle.theme_V_v ? "h-80 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden w-50 h-80` border-2 border-white/50 rounded-bl-4xl rounded-tr-4xl group">
          <img
            src="/project-photography/theme_V_vii-p1.webp"
            alt="theme_V_vii-p1"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-1000"
          />
        </div>
        <div className="overflow-hidden w-50 h-80 border-2 border-white/50 rounded-bl-4xl rounded-tr-4xl group">
          <img
            src="/project-photography/theme_V_vii-p2.webp"
            alt="theme_V_vii-p2"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-1000"
          />
        </div>
        <div className="overflow-hidden w-50 h-80 border-2 border-white/50 rounded-bl-4xl rounded-tr-4xl group">
          <img
            src="/project-photography/theme_V_vii-p3.webp"
            alt="theme_V_vii-p3"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-1000"
          />
        </div>
        <div className="overflow-hidden w-50 h-80 border-2 border-white/50 rounded-bl-4xl rounded-tr-4xl group">
          <img
            src="/project-photography/theme_V_vii-p4.webp"
            alt="theme_V_vii-p4"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
          />
        </div>
      </div>

      <span
        id="theme_V_v"
        className="absolute -top-8 left-0 -translate-y-0"
      ></span>
      {/* 構圖與焦段的關係 */}

      <div className="theme_V-text flex flex-col gap-4 max-w-150">
        <h3>構圖與焦段的關係</h3>

        <div className={animate}>
          <p>焦段會直接影響你怎麼「安排畫面空間」：</p>
          <ul className="flex flex-col gap-4 mt-4">
            <li>廣角鏡頭 適合強調空間與前景（如一條延伸出去的道路）</li>
            <li>望遠鏡頭 強調主體與背景壓縮（如模糊的遠山背景）</li>
            <li>標準鏡頭 保持自然視角，適合人文、紀實攝影</li>
            <li>微距鏡頭 用於拍攝極小細節，如水珠、植物紋理</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_v;
