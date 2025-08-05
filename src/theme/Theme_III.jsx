import React from "react";
import Container_I from "../components/Container_I";
import Theme_III_i from "../pages/theme_III/theme_III_i";
import Theme_III_ii from "../pages/theme_III/theme_III_ii";
import Theme_III_iii from "../pages/theme_III/theme_III_iii";
import Theme_III_iv from "../pages/theme_III/theme_III_iv";
import Theme_III_v from "../pages/theme_III/theme_III_v";
import Theme_III_vi from "../pages/theme_III/theme_III_vi";
import Theme_III_vii from "../pages/theme_III/theme_III_vii";
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
const Theme_III = () => {
  return (
    <article
      id="theme_III"
      className="theme themeII relative h-auto flex flex-wrap"
    >
      <Container_I w="w-[100%]" h="h-[30vh]]">
        <Theme_III_i />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_ii />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_iii />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_iv />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_v />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_vi />
      </Container_I>

      <Container_I w="w-[50%]" h="h-[50vh]">
        <Theme_III_vii />
      </Container_I>
    </article>
  );
};

export default Theme_III;
