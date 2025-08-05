import React from "react";

const Container_IV = ({ children, w, isToggle, setIsToggle, handleToggle }) => {
  console.log(isToggle);
  return (
    <div
      className={`container_III relative  gap-8  items-center justify-center ${w} h-auto border border-white`}
    >
      <div className=" flex gap-4 pr-4">
        {children[0] && (
          <div
            className={`${
              isToggle.name === "theme_II_ii" && isToggle.theme_II_ii === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all duration-1000`}
            onClick={() => handleToggle("theme_II_ii")}
          >
            {children[0]}
          </div>
        )}
        {children[1] && (
          <div
            className={`${
              isToggle.name === "theme_II_iii" && isToggle.theme_II_iii === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all  duration-1000`}
            onClick={() => handleToggle("theme_II_iii")}
          >
            {children[1]}
          </div>
        )}
        {children[2] && (
          <div
            className={`${
              isToggle.name === "theme_II_iv" && isToggle.theme_II_iv === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all duration-1000`}
            onClick={() => handleToggle("theme_II_iv")}
          >
            {children[2]}
          </div>
        )}
      </div>

      <div className=" flex gap-4 pr-4">
        {children[3] && (
          <div
            className={`${
              isToggle.name === "theme_II_v" && isToggle.theme_II_v === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all duration-1000`}
            onClick={() => handleToggle("theme_II_v")}
          >
            {children[3]}
          </div>
        )}
        {children[4] && (
          <div
            className={`${
              isToggle.name === "theme_II_vi" && isToggle.theme_II_vi === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all duration-1000`}
            onClick={() => handleToggle("theme_II_vi")}
          >
            {children[4]}
          </div>
        )}
        {children[5] && (
          <div
            className={`${
              isToggle.name === "theme_II_vii" && isToggle.theme_II_vii === true
                ? "w-[100%]"
                : "w-1/3 "
            } border border-white transition-all duration-1000`}
            onClick={() => handleToggle("theme_II_vii")}
          >
            {children[5]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Container_IV;
