import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_ii = ({ isToggle, setIsToggle }) => {
  return (
    <section
      className={`${
        isToggle.name === "shutter" && isToggle.shutter === true
          ? "toggle translate-x-150 "
          : "not-toggle"
      } shutter h-full p-8 text-start text-black flex flex-col gap-2 items-center justify-center border overflow-hidden bg-gradient-to-br  from-[#232526] to-[#414345] border-4 border-yellow-500/50 rounded-2xl text-white`}
      onClick={() =>
        setIsToggle({ name: "shutter", shutter: !isToggle.shutter })
      }
    >
      <div className="absolute -top-20 left-0 text-white border w-200">
        <span id="shutter"></span>
      </div>
      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.shutter
            ? "absolute left-0 top-0 scale-200 -translate-x-100"
            : "absolute left-0 top-0 "
        } object-cover w-full h-full opacity-20`}
      />

      {/* 快門速度（Shutter Speed） */}
      <div
        className={`grid ${isToggle.shutter ? "grid-cols-2" : "grid-cols-1"}`}
      >
        <div
          className={`${
            isToggle.shutter ? "theme_I_open" : "theme_I_close"
          } transtion drutiona-1000 flex flex-col gap-4`}
        >
          <h3 className="">快門速度（Shutter Speed）</h3>
          <p>控制快門打開的時間長短，影響照片是否清晰或模糊。</p>
          <ul>
            <li>單位：秒或分數（如 1/1000、1/125、1s）</li>
            <li>快門越快 → 越清晰，但光線少（較暗）</li>
            <li>快門越慢 → 越亮，但容易模糊（手震 or 運動模糊）</li>
          </ul>
          <div>
            <p>💡小技巧：</p>
            <ul>
              <li>若快門低於 1/60 秒，建議使用腳架。 </li>
              <li>搭配快門線可避免手震。</li>
            </ul>
          </div>
        </div>

        <span
          className={`${
            isToggle.shutter ? "opacity-100" : "opacity-0"
          } m-auto max-w-150 flex transition duration-1000 bg-white border-4 border-white/50 rounded-xl overflow-hidden `}
        >
          <img
            src="/project-photography/theme_I_ii.webp"
            alt="shutter"
            className="w-full object-fit"
          />
        </span>
      </div>
    </section>
  );
};

export default Theme_I_ii;
