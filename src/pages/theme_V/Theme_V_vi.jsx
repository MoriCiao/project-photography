import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_vi = ({ isToggle, setIsToggle, handleToggle, openAnimation }) => {
  const animate = openAnimation("theme_V_vi", "md:h-50 h-auto");

  return (
    <section
      className={`theme_V_item flex border items-start justify-start gap-8 `}
      onClick={() => handleToggle("theme_V_vi")}
    >
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute -z-0 top-0 left-0 w-full h-[100%] object-cover brightness-60 blur-[2px] "
        }
      />

      <div className={`theme_V-text theme_context flex flex-col gap-4`}>
        <h3>總結</h3>
        <div className={animate}>
          <ul className="flex flex-col gap-4">
            <li>選對焦段，看見不同世界</li>
            <li>不同的焦段不只是改變「拍多遠」，更是塑造照片風格的關鍵因素</li>
            <li>
              廣角營造空間感，望遠強調主體；微距挖掘細節，標準焦段最貼近日常
            </li>
            <li>學會運用焦段，就是學會用鏡頭說故事。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_V_vi;
