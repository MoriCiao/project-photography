import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_V_iv = ({
  isToggle,
  setIsToggle,
  handleToggle,
  openAnimation,
  style,
}) => {
  const animate = openAnimation("theme_V_iv", "xl:h-120 h-auto");
  return (
    <section
      className="theme_V_item"
      onClick={() => handleToggle("theme_V_iv")}
    >
      <ContainerBg
        src={"/project-photography/theme_V-item-bg.webp"}
        alt={"theme_V背景"}
        className={
          "absolute top-0 left-0 -z-0 h-[100%] w-full object-cover blur-[2px] brightness-60"
        }
      />
      <div className="flex h-auto w-full flex-col gap-4 xl:grid xl:h-full xl:grid-cols-2">
        <div className="theme_V-text theme_context flex w-full flex-col gap-4">
          <h3>焦段與「視角變化」</h3>
          <div className={`${animate} flex flex-col gap-12`}>
            <p>
              不同焦段除了改變拍攝距離，還會影響視覺上的「透視感」與背景表現：
            </p>
            <div>
              <table className={`${style.table} h- w-full`}>
                <thead>
                  <tr className={style.tr1}>
                    <th>焦段</th>
                    <th>視覺效果</th>
                    <th>主體與背景的關係</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={style.tr2}>
                    <td>16mm（超廣角）</td>
                    <td>畫面誇張變形、景深深</td>
                    <td>主體小，背景占據大部分</td>
                  </tr>
                  <tr className={style.tr2}>
                    <td>35mm（廣角）</td>
                    <td>場景完整、有空間感</td>
                    <td>適合街拍、日常</td>
                  </tr>
                  <tr className={style.tr2}>
                    <td>50mm（標準）</td>
                    <td>接近人眼視角</td>
                    <td>主體自然、適中背景</td>
                  </tr>
                  <tr className={style.tr2}>
                    <td>85mm（中望遠）</td>
                    <td>壓縮感強、背景虛化好看 </td>
                    <td>常見於人像攝影</td>
                  </tr>
                  <tr className={style.tr2}>
                    <td>200mm+（望遠）</td>
                    <td>強烈壓縮、遠距離捕捉</td>
                    <td>讓遠方主體更近、背景更近似</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className={`ralative z-2 flex flex-col gap-4 p-8 transition-all duration-800 ${
            isToggle.theme_V_iv
              ? "h-auto opacity-100 xl:h-100"
              : "h-0 opacity-0"
          }`}
        >
          <p>視角變化影響的景深：</p>
          <div className="grid grid-cols-2 items-center justify-center gap-15">
            <div className="group mx-auto h-70 w-40 overflow-hidden border-2 border-white/50 transition-all duration-500 hover:rounded-tr-4xl hover:rounded-bl-4xl lg:h-120 lg:w-70">
              <img
                src="/project-photography/theme_V_iv-p5.webp"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="group mx-auto h-70 w-40 overflow-hidden border-2 border-white/50 transition-all duration-500 hover:rounded-tr-4xl hover:rounded-bl-4xl lg:h-120 lg:w-70">
              <img
                src="/project-photography/theme_V_iv-p6.webp"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <span
        id="theme_V_iv"
        className="absolute -top-8 left-0 -translate-y-0"
      ></span>

      {/* 焦段與「視角變化」 */}
    </section>
  );
};

export default Theme_V_iv;
