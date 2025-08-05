import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_vi = () => {
  return (
    <section className="theme_I_vi w-full h-full bg-white">
      <ContainerBg
        src={"/project-photography/theme_I_vi.webp"}
        alt={"theme_I背景"}
        className={
          " theme_I-bg transition duration-500 scale-90 -translate-y-20"
        }
      />
    </section>
  );
};

export default Theme_I_vi;
