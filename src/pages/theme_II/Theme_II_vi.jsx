import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_vi = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_vi"
      className={`theme_II_vi theme_II_item `}
      onClick={() => handleToggle("theme_II_vi")}
    >
      <ContainerBg
        src={"/project-photography/items-bg.webp"}
        alt={"theme_II背景"}
        className={`absolute top-0 left-0  w-full h-full object-cover transition-all duration-1000 -translate-y-0 ${
          isToggle.theme_II_vi ? "brightness-30 " : "brightness-60 "
        } opacity-100 `}
      />
      <div className="theme_context flex flex-col gap-4">
        <h3>總結</h3>
        <div
          className={` ${
            isToggle.theme_II_vi
              ? "opacity-100 w-full text-[1rem]"
              : "opacity-0 h-30 w-0"
          } transition-all duration-500`}
        >
          <ul>
            <li>調整不同光源下的色溫，讓影像呈現出自然真實的色彩</li>
            <li>使用 RAW 格式拍攝，更可在後期靈活微調。</li>
            <li>
              掌握白平衡，不只能提升影像品質，也能讓你的作品更具情緒與故事感。
            </li>
            <li>「掌握色溫，讓照片說真話。」</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_II_vi;
