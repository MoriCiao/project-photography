import React, { useState } from "react";
import ContainerBg from "../../components/containerBg";
const Theme_III_vii = ({ items_style }) => {
  const [isToggle, setIsToggle] = useState("");
  const handleToggle = (name) => {
    setIsToggle(name);
  };

  const card =
    "flex flex-col gap-1 border border-white/20 p-8 bg-gradient-to-br from-white/10 via-black/20 to-black/50 rounded-md transition duration-1000 max-h-100 min-h-20";

  return (
    <section
      className={`theme_III_item group flex flex-col gap-4 !p-4 ${items_style.group_style}`}
    >
      <ContainerBg
        src={"/project-photography/theme_III_vii.webp"}
        alt={"theme_III背景"}
        className={items_style.s1}
      />
      <ContainerBg
        src={"/project-photography/items-bg2.webp"}
        alt={"theme_III背景"}
        className={items_style.s2}
      />
      <div className="theme_III_text flex flex-col gap-4">
        <div className={card} onClick={() => handleToggle("result")}>
          <h3>總結</h3>

          <ul
            className={`flex flex-col gap-2 transition duration-500 ${
              isToggle === "result"
                ? "opacity-100 w-150 max-h-50 "
                : "opacity-0  delay-500 h-0"
            }`}
          >
            <li
              className={`transition duration-500 ${
                isToggle === "result"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              選對對焦模式，能讓你準確捕捉畫面的重點與情感
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "result"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              靜態主體適合單次對焦，動態主體則需連續追焦
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "result"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              透過手動對焦或眼控對焦，達成更高的精準度
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "result"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              熟悉各種對焦模式，讓每一次按下快門都更有信心
            </li>
          </ul>
        </div>
        <div className={card} onClick={() => handleToggle("tips")}>
          {/* （適合做成 Tips 小提示框） */}
          <h3>💡小技巧：</h3>
          <ul
            className={`flex flex-col gap-2 transition duration-500 ${
              isToggle === "tips"
                ? "opacity-100 w-150 max-h-50"
                : "opacity-0  h-0"
            }`}
          >
            <li
              className={`transition duration-500 ${
                isToggle === "tips"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              「靜的用單次，動的用連續，特寫靠手動，人物選眼控。」
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "tips"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              拍風景、商品 ➜ 用 單次對焦（AF-S）
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "tips"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              拍小孩、動物、街頭動態 ➜ 用 連續對焦（AF-C）
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "tips"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              拍微距細節 ➜ 用 手動對焦（MF） 更精準
            </li>
            <li
              className={`transition duration-500 ${
                isToggle === "tips"
                  ? "opacity-100 w-150 max-h-50 "
                  : "opacity-0  h-0"
              }`}
            >
              拍人像 ➜ 開啟 眼控對焦（Eye AF），對焦更聰明！
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_III_vii;
