import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_iv = ({ isToggle, setIsToggle }) => {
  return (
    <section
      className={`${
        isToggle.name === "iso" && isToggle.iso === true
          ? "toggle lg:-translate-x-90 xl:-translate-x-150"
          : "not-toggle"
      } iso flex h-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-4 border-yellow-500/50 bg-gradient-to-br from-[#232526] to-[#414345] p-8 text-start text-white`}
      onClick={() =>
        setIsToggle({
          name: "iso",
          iso: !isToggle.iso,
        })
      }
    >
      {/* # 滑動 spot */}
      <div className="absolute -top-20 left-0 w-200 border text-white">
        <span id="iso"></span>
      </div>

      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.iso
            ? "top-0 left-0 sm:-translate-x-100 sm:scale-200"
            : "top-0 left-0"
        } absolute h-full w-full object-cover opacity-20`}
      />
      <div
        className={`grid h-full w-full ${
          isToggle.iso
            ? "grid-cols-1 gap-8 overflow-y-auto lg:grid-cols-2 lg:gap-0 xl:overflow-hidden"
            : "grid-cols-1"
        }`}
      >
        <div
          className={`${
            isToggle.iso ? "lg:theme_I_open" : "lg:theme_I_close"
          } transtion drutiona-1000 flex flex-col gap-4`}
        >
          <h3 className="">ISO 感光度</h3>
          <p>控制感光元件對光線的敏感程度，類似數位時代的「底片速度」。</p>
          <ul>
            <li>數值範圍：ISO 100 ~ 6400 或更高（依相機而異）</li>
            <li>ISO 越低 → 畫質乾淨，但亮度低</li>
            <li>ISO 越高 → 亮度提升，但容易產生噪點</li>
          </ul>
          <div
            className={`${
              isToggle.aperture
                ? "opacity-100 sm:opacity-100"
                : "opacity-0 sm:opacity-100"
            } transition duration-800`}
          >
            <p>💡小技巧：</p>
            <ul>
              <li>優先保持 ISO 低，除非快門和光圈都無法再調整。</li>
              <li>使用三腳架可在不拉高 ISO 下提升亮度。</li>
            </ul>
          </div>
        </div>

        {/* ISO 圖片 */}
        <div
          className={`${
            isToggle.iso ? "opacity-100" : "opacity-0"
          } flex rounded-xl transition duration-1000 lg:h-full lg:w-full lg:overflow-hidden`}
        >
          <img
            src="/project-photography/theme_I_iv.webp"
            alt="iso"
            className="object-fit m-auto rounded-xl bg-white/80 p-2 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Theme_I_iv;
