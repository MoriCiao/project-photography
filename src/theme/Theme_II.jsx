import React, { useState } from "react";
import Container_I from "../components/Container_I";
import Container_II from "../components/Container_II";
import Container_III from "../components/Container_III";
import Theme_II_i from "../pages/theme_II/Theme_II_i";
import Theme_II_ii from "../pages/theme_II/Theme_II_ii";
import Theme_II_iii from "../pages/theme_II/Theme_II_iii";
import Theme_II_iv from "../pages/theme_II/Theme_II_iv";
import Theme_II_v from "../pages/theme_II/Theme_II_v";
import Theme_II_vi from "../pages/theme_II/Theme_II_vi";
import Theme_II_vii from "../pages/theme_II/Theme_II_vii";
import Container_IV from "../components/Container_IV";
/* 
🎯 小結與網站呈現建議
你可以設計以下幾種區塊來展示這個主題：

色溫漸層示意圖：從 2500K → 7500K 的漸層條

情境對應圖：日光 vs 陰天 vs 白熾燈的照片比較

互動式白平衡模擬器（進階）：滑動調整色溫，即時變換照片風格

Tips 卡片：整理白平衡的實用小知識與錯誤範例 
*/
const Theme_II = () => {
  const [isToggle, setIsToggle] = useState({
    name: "",
    theme_II_ii: false,
    theme_II_iii: false,
    theme_II_iv: false,
    theme_II_v: false,
    theme_II_vi: false,
    theme_II_vii: false,
  });

  const handleToggle = (name) => {
    console.log(name);
    setIsToggle({ name: name, [name]: !isToggle[name] });
  };

  return (
    <article
      id="theme_II"
      className="theme themeII w-full max-w-screen relative h-auto bg-black flex flex-wrap"
    >
      <Container_I w="w-full" h="h-[100vh]">
        <Theme_II_i />
      </Container_I>
      {/* ------------------------ */}
      <Container_IV
        w="w-full"
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        handleToggle={handleToggle}
      >
        <Theme_II_ii
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
        <Theme_II_iii
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
        <Theme_II_iv
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
        <Theme_II_v
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
        <Theme_II_vi
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
        <Theme_II_vii
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
      </Container_IV>
    </article>
  );
};

export default Theme_II;
