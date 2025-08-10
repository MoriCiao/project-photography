import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_vii = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_vii"
      className={`theme_II_vii theme_II_item `}
      onClick={() => handleToggle("theme_II_vii")}
    >
      <ContainerBg
        src={"/project-photography/items-bg.webp"}
        alt={"theme_II背景"}
        className={`absolute top-0 left-0  w-full h-full object-cover transition-all duration-1000 -translate-y-0 ${
          isToggle.theme_II_vii ? "brightness-30 " : "brightness-60 "
        } opacity-100 `}
      />
      <div className="theme_context flex flex-col sm:gap-4">
        {/* （適合做成 Tips 小提示框） */}
        <h3>💡小技巧：</h3>
        <div
          className={` ${
            isToggle.theme_II_vii
              ? "opacity-100 w-full text-[1rem] sm:h-auto h-50 md:p-0"
              : "opacity-0 h-30 w-full "
          } transition-all duration-500 `}
        >
          <ul className="flex flex-col !gap-2 h-auto">
            <li>室內拍攝容易偏黃，建議調整為「白熾燈」或「手動設定」白平衡</li>
            <li>想要溫暖氛圍可故意用「陰天」或「Cloudy」模式</li>
            <li>
              如果用手機拍照，很多手機也提供色溫調整功能（可搭配 App 編輯）
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_II_vii;
