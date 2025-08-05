import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_iii = ({ isToggle, setIsToggle }) => {
  /* 光圈（Aperture / f 值） */
  console.log(isToggle);
  return (
    <section
      id="aperture"
      className={`${
        isToggle.name === "aperture" && isToggle.aperture === true
          ? "toggle "
          : "not-toggle"
      } aperture h-full p-8 text-start flex flex-col gap-2 overflow-hidden bg-gradient-to-br  from-[#232526] to-[#414345] border-4 border-yellow-500/50 rounded-2xl text-white`}
      onClick={() =>
        setIsToggle({ name: "aperture", aperture: !isToggle.aperture })
      }
    >
      <ContainerBg
        src={"/project-photography/theme_I_iii.webp"}
        alt={"theme_I背景"}
        className={`theme_I-bg ${
          isToggle.aperture
            ? "left-0 top-0 scale-200 -translate-x-100"
            : "left-0 top-0 "
        } object-cover w-full h-full opacity-20`}
      />
      {/* <div
        className={`${
          isToggle.aperture ? "opacity-100" : "opacity-0"
        } absolute right-0 w-200  flex transition duration-1000 border-4 border-white/50 rounded-xl`}
      >
        <img src="/project-photography/apertrue-3.webp" alt="apertrue-2" />
        <img src="/project-photography/apertrue-2.webp" alt="apertrue-2" />
      </div> */}

      <div
        className={`${
          isToggle.aperture ? "theme_I_open" : "theme_I_close"
        } transtion drutiona-1000 flex flex-col gap-4`}
      >
        <h3>光圈（Aperture / f 值）</h3>
        <p>控制鏡頭內的開口大小，影響進光量與景深（模糊背景程度）</p>
        <ul>
          <li>常見標記：f/1.8、f/4、f/11（數字越小，光圈越大）</li>
          <li>光圈大（f 小）→ 背景模糊、進光多</li>
          <li>光圈小（f 大）→ 景深廣、進光少</li>
        </ul>
        <div>
          <p>💡小技巧：</p>
          <ul>
            <li>大光圈讓背景柔化，強調主體。 </li>
            <li>小光圈適合多人合照或景深全清晰的場景。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Theme_I_iii;
