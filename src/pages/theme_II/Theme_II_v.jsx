import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_v = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_v"
      className={`theme_II_item theme_II_v `}
      onClick={() => handleToggle("theme_II_v")}
    >
      {/* <ContainerBg
        src={"/project-photography/theme_II_v.webp"}
        alt={"theme_II背景"}
        className={
          "transition duration-500 -translate-y-30 brightness-60 opacity-100"
        }
      /> */}
      {/* RAW 拍攝與後製白平衡 */}
      <div className="flex flex-col gap-4">
        <h3>RAW 拍攝與後製白平衡</h3>
        <div
          className={` ${
            isToggle.theme_II_v ? "opacity-100 w-full" : "opacity-0 h-30 w-0"
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
