import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_vi = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_vi"
      className={`theme_II_vi theme_II_item `}
      onClick={() => handleToggle("theme_II_vi")}
    >
      <div className="flex flex-col gap-4">
        {/* （適合做成 Tips 小提示框） */}
        <h3>💡小技巧：</h3>
        <div
          className={` ${
            isToggle.theme_II_vi ? "opacity-100 w-full" : "opacity-0 h-30 w-0"
          } transition-all duration-500`}
        >
          <ul>
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

export default Theme_II_vi;
