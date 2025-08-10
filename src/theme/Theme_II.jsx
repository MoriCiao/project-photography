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
    setIsToggle({ name: name, [name]: !isToggle[name] });
  };

  const list = [
    "theme_II_ii",
    "theme_II_iii",
    "theme_II_iv",
    "theme_II_v",
    "theme_II_vi",
    "theme_II_vii",
  ];

  return (
    <article
      id="theme_II"
      className="theme themeII w-full !pb-8 max-w-screen relative h-auto bg-black flex flex-wrap"
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
        list={list}
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
