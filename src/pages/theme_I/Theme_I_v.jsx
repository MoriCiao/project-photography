import React from "react";
import ContainerBg from "../../components/containerBg";

const Theme_I_v = () => {
  return (
    <section className="result flex h-full w-full flex-col items-start justify-start gap-2 p-8 text-start">
      <ContainerBg
        src={"/project-photography/theme_I_v.webp"}
        alt={"theme_I背景"}
        className={
          "theme_I-bg opacity-100 brightness-60 transition duration-500 hover:opacity-10"
        }
      />
      <h3>總結</h3>
      <ul className="relative z-1">
        <li>想用更快的快門，就必須提高 ISO 或開大光圈。</li>
        <li>想用低 ISO 拍攝高畫質照片，可能需要慢快門＋大光圈。</li>
      </ul>
    </section>
  );
};

export default Theme_I_v;
