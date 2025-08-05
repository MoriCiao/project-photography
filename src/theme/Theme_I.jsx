import React, { useState } from "react";
import Container_I from "../components/Container_I";
import Container_II from "../components/Container_II";
import Theme_I_i from "../pages/theme_I/Theme_I_i";
import Theme_I_ii from "../pages/theme_I/Theme_I_ii";
import Theme_I_iii from "../pages/theme_I/Theme_I_iii";
import Theme_I_iv from "../pages/theme_I/Theme_I_iv";
import Theme_I_v from "../pages/theme_I/Theme_I_v";
import Theme_I_vi from "../pages/theme_I/Theme_I_vi";
import Container_III from "../components/Container_III";

const Theme_I = () => {
  const [isToggle, setIsToggle] = useState({
    name: "",
    shutter: false,
    aperture: false,
    iso: false,
  });

  return (
    <article
      id="theme_I"
      className="theme themeI w-full max-w-screen relative h-auto bg-black flex flex-wrap "
    >
      <Container_I w="w-full" h="h-[100vh]">
        <Theme_I_i isToggle={isToggle} setIsToggle={setIsToggle} />
      </Container_I>
      {/* ------------------------ */}
      <Container_III w="w-full" h="h-screen">
        <Theme_I_ii isToggle={isToggle} setIsToggle={setIsToggle} />
        <Theme_I_iii isToggle={isToggle} setIsToggle={setIsToggle} />
        <Theme_I_iv isToggle={isToggle} setIsToggle={setIsToggle} />
      </Container_III>
      {/* ===================================== */}
      {/* <Container_I w="w-[60%]" h="h-screen">
        <Theme_I_vi />
      </Container_I> */}
      {/* ------------------------ */}
      {/* <Theme_I_v /> */}
      {/* ===================================== */}
    </article>
  );
};

export default Theme_I;
