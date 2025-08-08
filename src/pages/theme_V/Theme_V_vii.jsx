import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_vii = ({
  isToggle,
  setIsToggle,
  handleToggle,
  openAnimation,
}) => {
  const animate = openAnimation("theme_V_vii", "h-50");
  return (
    <section
      className="theme_V_item flex border items-start justify-start gap-8"
      onClick={() => handleToggle("theme_V_vii")}
    >
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-[100%] object-cover brightness-60 blur-[2px] "
        }
      />
      <div className={`theme_V-text flex flex-col gap-4`}>
        {/* （適合做成 Tips 小提示框） */}
        <h3>💡小技巧：</h3>
        <div className={animate}>
          <ul className="flex flex-col gap-4">
            <li>「風景看廣角、人像選中望、近拍用微距，紀實用 50。」</li>
            <li>16–35mm → 拍風景、建築，給你空間感</li>
            <li>85mm → 人像的黃金焦段，壓縮感強、背景漂亮</li>
            <li>100mm 微距 → 放大細節不變形</li>
            <li>50mm → 萬用好拍、自然紀實感十足！</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_vii;
