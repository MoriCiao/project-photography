import React from "react";

const Container_IV = ({
  children,
  w,
  isToggle,
  setIsToggle,
  handleToggle,
  list,
}) => {
  return (
    <div
      className={`container_III relative  gap-8  items-center justify-center ${w} max-h-screen`}
    >
      <div className=" flex gap-4 mb-4 px-4">
        {children[0] && (
          <div
            className={`${
              isToggle.name === list[0] && isToggle[list[0]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_ii")}
          >
            {children[0]}
          </div>
        )}
        {children[1] && (
          <div
            className={`${
              isToggle.name === list[1] && isToggle[list[1]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all  duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_iii")}
          >
            {children[1]}
          </div>
        )}
        {children[2] && (
          <div
            className={`${
              isToggle.name === list[2] && isToggle[list[2]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_iv")}
          >
            {children[2]}
          </div>
        )}
      </div>

      <div className="flex gap-4 px-4">
        {children[3] && (
          <div
            className={`${
              isToggle.name === list[3] && isToggle[list[3]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_v")}
          >
            {children[3]}
          </div>
        )}
        {children[4] && (
          <div
            className={`${
              isToggle.name === list[4] && isToggle[list[4]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_vi")}
          >
            {children[4]}
          </div>
        )}
        {children[5] && (
          <div
            className={`${
              isToggle.name === list[5] && isToggle[list[5]] === true
                ? "w-[100%]"
                : "w-1/3 "
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
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
