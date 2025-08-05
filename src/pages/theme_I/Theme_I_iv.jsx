import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_iv = ({ isToggle, setIsToggle }) => {
  return (
    <section
      id="iso"
      className={`${
        isToggle.name === "iso" && isToggle.iso === true
          ? "toggle -translate-x-150"
          : "not-toggle "
      } iso h-full p-8 text-start flex flex-col gap-2 items-center justify-center overflow-hidden bg-gradient-to-br from-[#6a11cb] to-[#2575fc] border-4 border-white/50 rounded-2xl text-white`}
      onClick={() =>
        setIsToggle({
          name: "iso",
          iso: !isToggle.iso,
        })
      }
    >
      <ContainerBg
        src={"/project-photography/theme_I_iv.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.iso
            ? "w-120 left-0 translate-x-250 bottom-1/2 translate-y-1/2 "
            : "w-70 left-0 translate-x-1/2 bottom-4"
        } objcet-cover p-4 bg-white rounded-xl `}
      />
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
    </section>
  );
};

export default Theme_I_iv;
