import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_iii = ({ isToggle, setIsToggle, handleToggle }) => {
  return (
    <section
      id="Theme_II_iii"
      className={`theme_II_item theme_II_iii`}
      onClick={() => handleToggle("theme_II_iii")}
    >
      <ContainerBg
        src={"/project-photography/items-bg.webp"}
        alt={"theme_II背景"}
        className={`absolute top-0 left-0  w-full h-full object-cover transition-all duration-1000 -translate-y-0 ${
          isToggle.theme_II_iii ? "brightness-30 " : "brightness-60 "
        } opacity-100 `}
      />
      {/*  常見白平衡模式 */}
      <div className="theme_context">
        <h3>常見白平衡模式</h3>

        <div
          className={`${
            isToggle.theme_II_iii
              ? "delay-300 opacity-100  -translate-x-0 text-[1rem] "
              : "opacity-0  w-0 h-30 -translate-x-10"
          } transition-all duration-1000 overflow-hidden flex flex-col items-center h-100  py-8 overflow-y-auto`}
        >
          <table>
            <thead>
              <tr className="border-b">
                <th>模式名稱</th>
                <th>色溫範圍</th>
                <th>適用情境</th>
                <th>色彩偏向</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>自動白平衡（AWB）</td>
                <td> 相機自動判斷</td>
                <td>多數情境</td>
                <td>中性</td>
              </tr>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>日光（Daylight）</td>
                <td>約 5200K</td>
                <td>室外晴天</td>
                <td>微暖色</td>
              </tr>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>陰天（Cloudy） </td>
                <td>約 6000–6500K</td>
                <td>陰天、黃昏</td>
                <td>增加暖色</td>
              </tr>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>白熾燈（Tungsten）</td>
                <td>約 3000K</td>
                <td>室內燈泡光源</td>
                <td>去除黃光偏色</td>
              </tr>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>
                  螢光燈 <span>（Fluorescent）</span>{" "}
                </td>
                <td>約 4000K</td>
                <td>辦公室燈光</td>
                <td>補藍色調</td>
              </tr>
              <tr className="odd:bg-black/50 even:bg-gray-700/80 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>閃光燈（Flash）</td>
                <td>約 5500K</td>
                <td>使用閃燈拍攝時</td>
                <td>自然白光</td>
              </tr>
              <tr className="odd:bg-black/50even:bg-gray-500/500 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>自訂（Custom） </td>
                <td>使用灰卡設定</td>
                <td>專業色彩還原</td>
                <td>完全精準</td>
              </tr>
            </tbody>
          </table>
          <div className=" mt-6 w-[80%]">
            <p className="w-full flex items-center justify-between">
              <span>Warm</span> <span>Neutral</span> <span>Cool</span>
            </p>
            <img
              src="/project-photography/color-t.webp"
              alt="色溫圖"
              className="w-full my-4 h-20"
            />
            <p className="w-full flex items-center justify-between">
              <span>0</span> <span>5000</span> <span>10000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme_II_iii;
