import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_ii = ({ isToggle, setIsToggle }) => {
  return (
    <section
      className={`${
        isToggle.name === "shutter" && isToggle.shutter === true
          ? "toggle xla:translate-x-150 lg:translate-x-90"
          : "not-toggle"
      } shutter flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-4 border-yellow-500/50 bg-gradient-to-br from-[#232526] to-[#414345] p-8 text-start text-black text-white lg:h-full`}
      onClick={() =>
        setIsToggle({ name: "shutter", shutter: !isToggle.shutter })
      }
    >
      <div className="absolute -top-20 left-0 w-200 border text-white">
        <span id="shutter"></span>
      </div>
      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.shutter
            ? "absolute top-0 left-0 sm:-translate-x-100 sm:scale-200"
            : "absolute top-0 left-0"
        } h-full w-full object-cover opacity-20`}
      />

      {/* 快門速度（Shutter Speed） */}
      <div
        className={`grid h-full ${
          isToggle.shutter
            ? "grid-cols-1 gap-8 overflow-y-auto lg:grid-cols-2 lg:gap-0 xl:overflow-hidden"
            : "grid-cols-1"
        }`}
      >
        <div
          className={`${
            isToggle.shutter ? "lg:theme_I_open" : "lg:theme_I_close"
          } transtion drutiona-1000 flex flex-col gap-4`}
        >
          <h3 className="text-[2rem] lg:text-[4rem]">
            快門速度（Shutter Speed）
          </h3>
          <p>控制快門打開的時間長短，影響照片是否清晰或模糊。</p>
          <ul>
            <li>單位：秒或分數（如 1/1000、1/125、1s）</li>
            <li>快門越快 → 越清晰，但光線少（較暗）</li>
            <li>快門越慢 → 越亮，但容易模糊（手震 or 運動模糊）</li>
          </ul>
          <div
            className={`${
              isToggle.shutter
                ? "opacity-100 sm:opacity-100"
                : "opacity-0 sm:opacity-100"
            } transition duration-800`}
          >
            <p>💡小技巧：</p>
            <ul>
              <li>若快門低於 1/60 秒，建議使用腳架。 </li>
              <li>搭配快門線可避免手震。</li>
            </ul>
          </div>
        </div>

        <div
          className={`${
            isToggle.shutter ? "opacity-100" : "opacity-0"
          } m-auto flex max-w-150 overflow-hidden rounded-xl border-4 border-white/50 bg-white transition duration-1000`}
        >
          <img
            src="/project-photography/theme_I_ii.webp"
            alt="shutter"
            className="object-fit w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Theme_I_ii;
