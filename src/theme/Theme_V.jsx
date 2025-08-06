import React from "react";
import Container_I from "../components/Container_I";
import Container_II from "../components/Container_II";
import Theme_V_i from "../pages/theme_V/Theme_V_i";
import Theme_V_ii from "../pages/theme_V/Theme_V_ii";
import Theme_V_iii from "../pages/theme_V/Theme_V_iii";
import Theme_V_iv from "../pages/theme_V/Theme_V_iv";
import Theme_V_v from "../pages/theme_V/Theme_V_v";
import Theme_V_vi from "../pages/theme_V/Theme_V_vi";
const Theme_V = () => {
  return (
    <article id="theme_V" className="theme themeV">
      <Container_I w="w-[100%]" h="h-screen">
        <Theme_V_i />
      </Container_I>
      <Container_II flex="flex gap-4" w="w-[100%]" h1="h-[50vh]" h2="h-[100%]">
        <Theme_V_ii />
        <Theme_V_iii />
      </Container_II>
      <Container_II flex="flex gap-4" w="w-[100%]" h1="h-[50vh]" h2="h-[100%]">
        <Theme_V_iv />

        <Theme_V_v />
      </Container_II>{" "}
      <Theme_V_vi />
    </article>
  );
};

export default Theme_V;
