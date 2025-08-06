import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_ii = ({ isToggle, setIsToggle }) => {
  return (
    <section
      className={`${
        isToggle.name === "shutter" && isToggle.shutter === true
          ? "toggle translate-x-150 from-[#00c9ff]/100  to-[#92fe9d]/100"
          : "not-toggle from-[#00c9ff]/80  to-[#92fe9d]/80"
      } shutter h-full p-8 text-start text-black flex flex-col gap-2 items-center justify-center border overflow-hidden bg-gradient-to-br border-4 border-white/50 rounded-2xl text-white`}
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
          isToggle.aperture
            ? "left-0 top-0 scale-200 -translate-x-100"
            : "left-0 top-0 "
        } object-cover w-full h-full opacity-20`}
      />
      <blockquote className="absolute z-1 right-40 bottom-20 scale-110">
        <p> “Your first 10,000 photographs are your worst.”</p>
        <p className="text-end">你最初的一萬張照片，都是最糟的。</p>
        <footer className="text-end">
          {" "}
          — <cite>Henri Cartier-Bresson</cite>
        </footer>
      </blockquote>
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

      <span
        className={`${
          isToggle.shutter ? "opacity-100" : "opacity-0"
        } absolute right-20 top-20 w-180 flex transition duration-1000 bg-white border-4 border-white/50 rounded-xl overflow-hidden`}
      >
        <img src="/project-photography/theme_I_ii.webp" alt="shutter" />
      </span>
    </section>
  );
};

export default Theme_I_ii;
