import React from "react";
import Container_I from "../components/Container_I";
import Theme_III_i from "../pages/theme_III/Theme_III_i";
import Theme_III_ii from "../pages/theme_III/Theme_III_ii";
import Theme_III_iii from "../pages/theme_III/Theme_III_iii";
import Theme_III_iv from "../pages/theme_III/Theme_III_iv";
import Theme_III_v from "../pages/theme_III/Theme_III_v";
import Theme_III_vi from "../pages/theme_III/Theme_III_vi";
import Theme_III_vii from "../pages/theme_III/Theme_III_vii";

const items_style = {
  group_style:
    "border-4 rounded-md border-white/70 hover:border-2 hover:border-white/100 ",
  s1: `absolute z-1 bottom-4 right-0 w-120 object-cover transition-all duration-1000 -translate-y-10  opacity-100 -rotate-20 brightness-80 group-hover:-rotate-10 blur-[3px] group-hover:blur-[0px] select-none sm:block hidden`,
  s2: `absolute z-0 top-0 left-0 w-full h-full object-cover transition duration-1500 -translate-y-0 -rotate-0 translate-0 opacity-50 sm:brightness-50 brightness-30 group-hover:brightness-30 group-hover:scale-120 group-hover:blur-[3px] overflow-hidden `,
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

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_ii items_style={items_style} />
      </Container_I>

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_iii items_style={items_style} />
      </Container_I>

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_iv items_style={items_style} />
      </Container_I>

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_v items_style={items_style} />
      </Container_I>

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_vi items_style={items_style} />
      </Container_I>

      <Container_I w="xl:w-[45%] w-[90%]" h="sm:h-[50vh] h-auto">
        <Theme_III_vii items_style={items_style} />
      </Container_I>
    </article>
  );
};

export default Theme_III;
