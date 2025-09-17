import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_iii = ({ isToggle, setIsToggle }) => {
  /* 光圈（Aperture / f 值） */

  return (
    <section
      className={`${
        isToggle.name === "aperture" && isToggle.aperture === true
          ? "toggle"
          : "not-toggle"
      } aperture flex flex-col gap-2 overflow-hidden rounded-2xl border-4 border-yellow-500/50 bg-gradient-to-br from-[#232526] to-[#414345] p-8 text-start text-white lg:h-full`}
      onClick={() =>
        setIsToggle({ name: "aperture", aperture: !isToggle.aperture })
      }
    >
      <div className="absolute -top-20 left-0 w-200 border text-white">
        <span id="aperture"></span>
      </div>
      {/* 背景 */}
      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.aperture
            ? "absolute top-0 left-0 sm:-translate-x-100 sm:scale-200"
            : "absolute top-0 left-0"
        } h-full w-full object-cover opacity-20`}
      />

      <div
        className={`grid h-full ${
          isToggle.aperture
            ? "grid-cols-1 gap-8 overflow-y-auto lg:grid-cols-2 lg:gap-0 xl:overflow-hidden"
            : "grid-cols-1"
        }`}
      >
        <div
          className={`${
            isToggle.aperture ? "lg:theme_I_open" : "lg:theme_I_close"
          } transtion drutiona-1000 flex flex-col gap-4`}
        >
          <h3>光圈（Aperture / f 值）</h3>
          <p>控制鏡頭內的開口大小，影響進光量與景深（模糊背景程度）</p>
          <ul>
            <li>常見標記：f/1.8、f/4、f/11（數字越小，光圈越大）</li>
            <li>光圈大（f 小）→ 背景模糊、進光多</li>
            <li>光圈小（f 大）→ 景深廣、進光少</li>
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
              <li>大光圈讓背景柔化，強調主體。 </li>
              <li>小光圈適合多人合照或景深全清晰的場景。</li>
            </ul>
          </div>
        </div>

        <span
          className={`${
            isToggle.aperture ? "opacity-100" : "opacity-0"
          } m-auto flex overflow-hidden rounded-xl border-4 border-white/50 bg-white transition duration-1000 lg:max-w-150`}
        >
          <img
            src="/project-photography/apertrue-3.webp"
            alt="apertrue-2"
            className="object-fit w-full"
          />
        </span>
      </div>
    </section>
  );
};

export default Theme_I_iii;
