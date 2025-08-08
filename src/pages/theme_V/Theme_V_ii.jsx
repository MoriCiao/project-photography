import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_ii = ({ isToggle, setIsToggle, handleToggle, openAnimation }) => {
  const animate = openAnimation("theme_V_ii", "h-50");

  return (
    <section
      className="theme_V_item transition-all duration-1000"
      onClick={() => handleToggle("theme_V_ii")}
    >
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-[100%] object-cover brightness-60 blur-[2px] "
        }
      />
      <div
        className={`absolute z-1 top-1/2 -translate-y-1/2 transition-all duration-800  ${
          isToggle.theme_V_ii
            ? "opacity-100 right-30 w-150"
            : "opacity-0 right-70 w-0"
        }`}
      >
        <ContainerBg
          src={"/project-photography/theme_V_ii.webp"}
          alt={"theme_V背景"}
          className={``}
        />
      </div>
      <span
        id="theme_V_ii"
        className="absolute -top-8 left-0 -translate-y-0"
      ></span>
      {/* （Focal Length） */}
      <div className={`theme_V-text flex flex-col gap-4`}>
        <h3>什麼是焦段？（Focal Length）</h3>

        <div className={animate}>
          <ul className={`flex flex-col gap-4`}>
            <li>焦段以 毫米（mm） 為單位，代表鏡頭的放大倍率與視角範圍</li>
            <li>
              通常以數值越小，視角越廣（可容納更多畫面）；數值越大，視角越窄（可放大遠方主體）
            </li>
            <li>全幅等效 焦段來對照說明</li>
          </ul>
          <br />
          <div>
            <h4 className="text-[1.25rem]"> 小知識</h4>
            <ul className={`flex flex-col gap-4`}>
              <li>「定焦鏡」焦段固定，如 35mm、50mm，畫質好、光圈大。</li>
              <li>「變焦鏡」可調焦段，如 24-70mm，彈性高但光圈較小。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_ii;
