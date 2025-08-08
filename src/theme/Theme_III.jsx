import React from "react";
import Container_I from "../components/Container_I";
import Theme_III_i from "../pages/theme_III/theme_III_i";
import Theme_III_ii from "../pages/theme_III/Theme_III_ii";
import Theme_III_iii from "../pages/theme_III/Theme_III_iii";
import Theme_III_iv from "../pages/theme_III/Theme_III_iv";
import Theme_III_v from "../pages/theme_III/Theme_III_v";
import Theme_III_vi from "../pages/theme_III/Theme_III_vi";
import Theme_III_vii from "../pages/theme_III/Theme_III_vii";
/* 
📌 對焦區域補充：
除了對焦「模式」，你也可以設定對焦「區域」：

單點對焦：精準選定某一點（適合精準構圖）

區域對焦：一塊區域內自動選擇（動態場景好用）

全自動對焦：讓相機決定焦點（新手快速入門）

✅ 建議設計呈現方式：使用圖示示意一張照片的對焦點變化，例如：

左圖：單點對焦（眼睛清楚）

中圖：追焦模式（跑步中的人仍清楚）

右圖：手動對焦錯焦（背景清晰但主體模糊）

 */

const items_style = {
  group_style:
    "border-4 rounded-md border-white/70 hover:border-2  hover:border-white/100 !p-[2rem]",
  s1: `absolute z-1 bottom-4 right-0 w-120 object-cover transition-all duration-1000 -translate-y-10  opacity-100 -rotate-20 brightness-80 group-hover:-rotate-10 blur-[3px] group-hover:blur-[0px] select-none`,
  s2: `absolute z-0 top-0 left-0 w-full h-full object-cover transition duration-1500 -translate-y-0 -rotate-0 translate-0 opacity-50 brightness-50 group-hover:brightness-30 group-hover:scale-120 group-hover:blur-[3px] overflow-hidden `,
};

const Theme_III = () => {
  return (
    <article
      id="theme_III"
      className="theme themeIII relative !pb-8 h-full flex flex-wrap gap-8 items-center justify-center bg-black text-white"
    >
      <Container_I w="w-[100%]" h="h-screen">
        <Theme_III_i />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_ii items_style={items_style} />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_iii items_style={items_style} />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_iv items_style={items_style} />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_v items_style={items_style} />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_vi items_style={items_style} />
      </Container_I>

      <Container_I w="w-[45%]" h="h-[50vh]">
        <Theme_III_vii items_style={items_style} />
      </Container_I>
    </article>
  );
};

export default Theme_III;
