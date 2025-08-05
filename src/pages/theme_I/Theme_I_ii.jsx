import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_ii = ({ isToggle, setIsToggle }) => {
  return (
    <section
      id="shutter"
      className={`${
        isToggle.name === "shutter" && isToggle.shutter === true
          ? "toggle translate-x-150 from-[#00c9ff]/100  to-[#92fe9d]/100"
          : "not-toggle from-[#00c9ff]/80  to-[#92fe9d]/80"
      } shutter h-full p-8 text-start text-black flex flex-col gap-2 items-center justify-center border overflow-hidden bg-gradient-to-br border-4 border-white/50 rounded-2xl text-white`}
      onClick={() =>
        setIsToggle({ name: "shutter", shutter: !isToggle.shutter })
      }
    >
      <ContainerBg
        src={"/project-photography/theme_I_ii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.shutter
            ? "w-200  translate-y-1/2 right-10 bottom-1/2 opacity-100"
            : "w-120  right-1/2 translate-x-1/2 bottom-10 opacity-75"
        } transition duration-1000 bg-white shadow-xl rounded-xl p-4 `}
      />

      {/* 快門速度（Shutter Speed） */}

      <div
        className={`${
          isToggle.shutter ? "theme_I_open text-black" : "theme_I_close"
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
    </section>
  );
};

export default Theme_I_ii;
