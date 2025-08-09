import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_iv = ({ isToggle, setIsToggle }) => {
  return (
    <section
      className={`${
        isToggle.name === "iso" && isToggle.iso === true
          ? "toggle -translate-x-150"
          : "not-toggle "
      } iso h-full p-8 text-start flex flex-col gap-2 items-center justify-center overflow-hidden bg-gradient-to-br  from-[#232526] to-[#414345] border-4 border-yellow-500/50 rounded-2xl text-white`}
      onClick={() =>
        setIsToggle({
          name: "iso",
          iso: !isToggle.iso,
        })
      }
    >
      {/* # 滑動 spot */}
      <div className="absolute -top-20 left-0 text-white border w-200">
        <span id="iso"></span>
      </div>

      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.iso
            ? " left-0 top-0 scale-200 -translate-x-100"
            : "left-0 top-0 "
        } absolute object-cover w-full h-full opacity-20`}
      />
      <div
        className={`grid  w-full h-full ${
          isToggle.iso ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div
          className={`${
            isToggle.iso ? "theme_I_open" : "theme_I_close"
          } transtion drutiona-1000 flex flex-col gap-4`}
        >
          <h3 className="">ISO 感光度</h3>
          <p>控制感光元件對光線的敏感程度，類似數位時代的「底片速度」。</p>
          <ul>
            <li>數值範圍：ISO 100 ~ 6400 或更高（依相機而異）</li>
            <li>ISO 越低 → 畫質乾淨，但亮度低</li>
            <li>ISO 越高 → 亮度提升，但容易產生噪點</li>
          </ul>
          <div className="">
            <p>💡小技巧：</p>
            <ul>
              <li>優先保持 ISO 低，除非快門和光圈都無法再調整。</li>
              <li>使用三腳架可在不拉高 ISO 下提升亮度。</li>
            </ul>
          </div>
        </div>

        {/* ISO 圖片 */}
        <span
          className={`${
            isToggle.iso ? "opacity-100" : "opacity-0"
          } m-auto max-w-120 flex transition duration-1000 bg-white border-4 border-white/50 rounded-xl overflow-hidden `}
        >
          <img src="/project-photography/theme_I_iv.webp" alt="iso" />
        </span>
      </div>
    </section>
  );
};

export default Theme_I_iv;
