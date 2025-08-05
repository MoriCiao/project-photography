import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_II_iv = ({ isToggle, setIsToggle, handleToggle }) => {
  console.log(isToggle.Theme_II_iv);
  return (
    <section
      id="Theme_II_iv"
      className={`theme_II_item theme_II_iv`}
      onClick={() => handleToggle("theme_II_iv")}
    >
      {/* <ContainerBg
        src={"/project-photography/theme_II_iv.webp"}
        alt={"theme_II背景"}
        className={
          "transition duration-500 -translate-y-60 brightness-60 opacity-100 "
        }
      /> */}
      {/*  色溫與畫面氛圍的關係 */}
      <div className="theme_context flex flex-col gap-4">
        <h3>色溫與畫面氛圍的關係</h3>

        <div
          className={`${
            isToggle.theme_II_iv
              ? "opacity-100  w-full  h-50 -translate-x-0 "
              : "opacity-0  w-10 h-30 translate-x-100"
          }  transition-all duration-1000 flex items-center justify-center flex flex-col gap-4`}
        >
          <p className="text-start w-full mt-4">
            即使畫面曝光正確，如果白平衡錯誤，也會讓照片偏色。你可以「故意偏色」來創造特定氛圍：
          </p>
          <table className="border-b">
            <thead>
              <tr className="odd:bg-white/20 even:bg-gray-100/20 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <th>色溫效果</th>
                <th>感受</th>
                <th>範例</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white/20 even:bg-gray-100/20 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>偏藍（冷調）</td>
                <td>冷靜、科技感</td>
                <td>夜景、人像藝術風格</td>
              </tr>
              <tr className="odd:bg-white/20 even:bg-gray-100/20 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>偏黃（暖調）</td>
                <td>溫暖、復古感</td>
                <td>餐廳、室內、夕陽時分</td>
              </tr>
              <tr className="odd:bg-white/20 even:bg-gray-100/20 hover:odd:bg-blue-900/50  hover:even:bg-red-500/50 hover:text-white">
                <td>中性白</td>
                <td>真實、自然</td>
                <td>商業攝影、產品</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Theme_II_iv;
