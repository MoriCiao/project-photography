import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_v = ({ isToggle, setIsToggle, handleToggle, openAnimation }) => {
  const animate = openAnimation("theme_V_v", "xl:h-80 h-auto");

  return (
    <section className="theme_V_item" onClick={() => handleToggle("theme_V_v")}>
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute top-0 left-0 -z-0 h-[100%] w-full object-cover blur-[2px] brightness-60"
        }
      />

      <span
        id="theme_V_v"
        className="absolute -top-8 left-0 -translate-y-0"
      ></span>

      {/* 構圖與焦段的關係 */}
      <div className="flex h-full w-full flex-col gap-4 border xl:grid xl:grid-cols-3">
        <div className="theme_V-text theme_context col-span-1 col-start-1 flex max-w-150 flex-col gap-4">
          <h3>構圖與焦段的關係</h3>

          <div className={animate}>
            <p>焦段會直接影響你怎麼「安排畫面空間」：</p>
            <ul className="mt-4 flex flex-col gap-4">
              <li>廣角鏡頭 適合強調空間與前景（如一條延伸出去的道路）</li>
              <li>望遠鏡頭 強調主體與背景壓縮（如模糊的遠山背景）</li>
              <li>標準鏡頭 保持自然視角，適合人文、紀實攝影</li>
              <li>微距鏡頭 用於拍攝極小細節，如水珠、植物紋理</li>
            </ul>
          </div>
        </div>

        {/*  */}
        <div
          className={`relative z-2 my-auto grid w-full grid-cols-2 justify-between gap-4 transition-all duration-800 sm:grid-cols-4 xl:col-span-2 xl:col-start-2 ${
            isToggle.theme_V_v ? "h-auto opacity-100 sm:h-80" : "h-0 opacity-0"
          }`}
        >
          <div className="group mx-auto h-full overflow-hidden rounded-tr-4xl rounded-bl-4xl border-2 border-white/50 xl:w-50">
            <img
              src="/project-photography/theme_V_vii-p1.webp"
              alt="theme_V_vii-p1"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="group mx-auto h-80 overflow-hidden rounded-tr-4xl rounded-bl-4xl border-2 border-white/50 xl:w-50">
            <img
              src="/project-photography/theme_V_vii-p2.webp"
              alt="theme_V_vii-p2"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="group mx-auto h-80 overflow-hidden rounded-tr-4xl rounded-bl-4xl border-2 border-white/50 xl:w-50">
            <img
              src="/project-photography/theme_V_vii-p3.webp"
              alt="theme_V_vii-p3"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="group mx-auto h-80 overflow-hidden rounded-tr-4xl rounded-bl-4xl border-2 border-white/50 xl:w-50">
            <img
              src="/project-photography/theme_V_vii-p4.webp"
              alt="theme_V_vii-p4"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_v;
