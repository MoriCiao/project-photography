import React, { useState } from "react";
import Container_I from "../components/Container_I";
import Container_II from "../components/Container_II";
import Theme_IV_i from "../pages/theme_IV/theme_IV_i";
import Theme_IV_ii from "../pages/theme_IV/theme_IV_ii";
import Theme_IV_iii from "../pages/theme_IV/theme_IV_iii";
import Theme_IV_iv from "../pages/theme_IV/theme_IV_iv";
import Theme_IV_v from "../pages/theme_IV/theme_IV_v";
import Theme_IV_vi from "../pages/theme_IV/theme_IV_vi";
import Theme_IV_vii from "../pages/theme_IV/theme_IV_vii";
import Theme_IV_viii from "../pages/theme_IV/theme_IV_viii";
const Theme_IV = () => {
  const [isToggle, setIsToggle] = useState({
    name: "",
    theme_IV_ii: false,
    theme_IV_iii: false,
    theme_IV_iv: false,
    theme_IV_v: false,
    theme_IV_vi: false,
    theme_IV_vii: false,
    theme_IV_viii: false,
  });

  const handleToggle = (name) => {
    setIsToggle({ name: name, [name]: !isToggle[name] });
  };

  const list = [
    "theme_IV_ii",
    "theme_IV_iii",
    "theme_IV_iv",
    "theme_IV_v",
    "theme_IV_vi",
    "theme_IV_vii",
    "theme_IV_viii",
  ];

  return (
    <article id="theme_IV" className="theme themeIV bg-black text-white">
      <Container_I w="w-[100%]" h="h-screen">
        <Theme_IV_i isToggle={isToggle} setIsToggle={setIsToggle} />
      </Container_I>

      <Container_II flex="flex gap-4" w="w-[100%]" h1="h-[50vh]" h2="h-[100%]">
        <Theme_IV_iii />
        <Theme_IV_iv />
      </Container_II>

      <Container_II flex="flex gap-4" w="w-[100%]" h1="h-[50vh]" h2="h-[100%]">
        <Theme_IV_v />
        <Theme_IV_vi />
      </Container_II>

      <Container_II flex="flex gap-4" w="w-[100%]" h1="h-[50vh]" h2="h-[100%]">
        <Theme_IV_vii />
        <Theme_IV_viii />
      </Container_II>
    </article>
  );
};

export default Theme_IV;
