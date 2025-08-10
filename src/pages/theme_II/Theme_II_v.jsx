import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_v = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_v"
      className={`theme_II_item theme_II_v`}
      onClick={() => handleToggle("theme_II_v")}
    >
      <ContainerBg
        src={"/project-photography/items-bg.webp"}
        alt={"theme_II背景"}
        className={`absolute top-0 left-0  w-full h-full object-cover transition-all duration-1000 -translate-y-0 ${
          isToggle.theme_II_v ? "brightness-30 " : "brightness-60 "
        } opacity-100 `}
      />
      {/* RAW 拍攝與後製白平衡 */}
      <div className="theme_context flex flex-col sm:gap-4">
        <h3>RAW 拍攝與後製白平衡</h3>
        <div
          className={` ${
            isToggle.theme_II_v
              ? "opacity-100 w-full h-auto text-[1rem] md:p-0 p-4"
              : "opacity-0 h-30 w-full"
          } transition-all duration-500`}
        >
          <ul>
            <li>拍攝 RAW 檔 可在後製中無損調整白平衡</li>
            <li>拍攝 JPEG 檔 則是固定寫入色溫，調整空間較小</li>
            <li>建議有需求時使用灰卡拍攝自訂白平衡</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_II_v;
