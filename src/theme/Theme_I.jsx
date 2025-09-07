import { useState } from "react";
import Container_I from "../components/Container_I";
import Container_III from "../components/Container_III";
import Theme_I_i from "../pages/theme_I/Theme_I_i";
import Theme_I_ii from "../pages/theme_I/Theme_I_ii";
import Theme_I_iii from "../pages/theme_I/Theme_I_iii";
import Theme_I_iv from "../pages/theme_I/Theme_I_iv";

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
      className="theme themeI w-full max-w-screen relative h-auto bg-black flex flex-wrap"
    >
      <Container_I w="w-full" h="h-screen">
        <Theme_I_i isToggle={isToggle} setIsToggle={setIsToggle} />
      </Container_I>
      {/* ------------------------ */}
      <Container_III
        w="w-full "
        h="lg:h-screen h-150 "
        h2="h-screen "
        className="lg:flex-row flex-col"
      >
        <Theme_I_ii isToggle={isToggle} setIsToggle={setIsToggle} />
        <Theme_I_iii isToggle={isToggle} setIsToggle={setIsToggle} />
        <Theme_I_iv isToggle={isToggle} setIsToggle={setIsToggle} />
      </Container_III>
    </article>
  );
};

export default Theme_I;
