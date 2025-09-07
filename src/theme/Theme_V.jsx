import { useState } from "react";
import Container_I from "../components/Container_I";
import Theme_V_i from "../pages/theme_V/Theme_V_i";
import Theme_V_ii from "../pages/theme_V/Theme_V_ii";
import Theme_V_iii from "../pages/theme_V/Theme_V_iii";
import Theme_V_iv from "../pages/theme_V/Theme_V_iv";
import Theme_V_v from "../pages/theme_V/Theme_V_v";
import Theme_V_vi from "../pages/theme_V/Theme_V_vi";
import Theme_V_vii from "../pages/theme_V/Theme_V_vii";
const Theme_V = () => {
  const [isToggle, setIsToggle] = useState({
    name: "",
    theme_V_ii: false,
    theme_V_iii: false,
    theme_V_iv: false,
    theme_V_v: false,
    theme_V_vi: false,
  });
  const handleToggle = (name) => {
    setIsToggle({ name: name, [name]: !isToggle[name] });
  };

  function openAnimation(name, h) {
    return `${
      isToggle.name === name && isToggle[name] === true
        ? `opacity-100 ${h}`
        : "opacity-0 h-10"
    } transition-all duration-800`;
  }

  const style = {
    table: "bg-gray-800 h-auto overflow-y-auto",
    tr1: "bg-black/25 ",
    tr2: "odd:bg-sky-900/20  even:bg-slate-900/20  hover:odd:bg-sky-500/50  hover:even:bg-slate-500/50",
  };

  return (
    <article id="theme_V" className="theme themeV bg-black text-white pb-12">
      <Container_I w="w-[100%]" h="h-screen">
        <Theme_V_i
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          handleToggle={handleToggle}
        />
      </Container_I>
      <div className="flex flex-col items-center justify-center gap-8 mt-8">
        <Container_I w="w-[90%]" h="h-atuo">
          <Theme_V_ii
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            handleToggle={handleToggle}
            openAnimation={openAnimation}
          />
        </Container_I>
        <Container_I w="w-[90%]" h="h-atuo">
          <Theme_V_iii
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            handleToggle={handleToggle}
            openAnimation={openAnimation}
            style={style}
          />
        </Container_I>

        <Container_I w="w-[90%]" h="h-atuo">
          <Theme_V_iv
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            handleToggle={handleToggle}
            openAnimation={openAnimation}
            style={style}
          />
        </Container_I>

        <Container_I w="w-[90%]" h="h-atuo">
          <Theme_V_v
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            handleToggle={handleToggle}
            openAnimation={openAnimation}
          />
        </Container_I>
        <div className="flex md:flex-row flex-col  gap-8 w-[90%]">
          <Container_I w="w-[100%]" h="h-atuo">
            <Theme_V_vi
              isToggle={isToggle}
              setIsToggle={setIsToggle}
              handleToggle={handleToggle}
              openAnimation={openAnimation}
            />
          </Container_I>
          <Container_I w="w-[100%]" h="h-atuo">
            <Theme_V_vii
              isToggle={isToggle}
              setIsToggle={setIsToggle}
              handleToggle={handleToggle}
              openAnimation={openAnimation}
            />
          </Container_I>
        </div>
      </div>
    </article>
  );
};

export default Theme_V;
