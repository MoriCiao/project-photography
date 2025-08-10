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
      className={`container_IV relative flex flex-col gap-4  items-center justify-center ${w} md:max-h-screen h-auto`}
    >
      <div className="  flex md:flex-row flex-col gap-4 px-4 w-full md:h-[60vh] h-auto">
        {children[0] && (
          <div
            className={`${
              isToggle.name === list[0] && isToggle[list[0]] === true
                ? "w-[100%]"
                : "md:w-1/3 w-full md:h-auto h-1/3"
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
                : "md:w-1/3 w-full md:h-auto h-1/3"
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
                : "md:w-1/3 w-full md:h-auto h-1/3"
            }  transition-all duration-1000 overflow-hidden border border-white/20`}
            onClick={() => handleToggle("theme_II_iv")}
          >
            {children[2]}
          </div>
        )}
      </div>

      <div className="flex md:flex-row flex-col gap-4 px-4 w-full  md:max-h-[60vh] h-auto">
        {children[3] && (
          <div
            className={`${
              isToggle.name === list[3] && isToggle[list[3]] === true
                ? "w-[100%]"
                : "md:w-1/3 w-full md:h-auto h-1/3"
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
                : "md:w-1/3 w-full md:h-auto h-1/3"
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
                : "md:w-1/3 w-full md:h-auto h-1/3"
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
