import Container_I from "../components/Container_I";
import Container_II from "../components/Container_II";
import Theme_IV_i from "../pages/theme_IV/Theme_IV_i";
import Theme_IV_iii from "../pages/theme_IV/Theme_IV_iii";
import Theme_IV_iv from "../pages/theme_IV/Theme_IV_iv";
import Theme_IV_v from "../pages/theme_IV/Theme_IV_v";
import Theme_IV_vi from "../pages/theme_IV/Theme_IV_vi";
import Theme_IV_vii from "../pages/theme_IV/Theme_IV_vii";
import Theme_IV_viii from "../pages/theme_IV/Theme_IV_viii";
const Theme_IV = () => {
  const style = {
    section:
      "border-4 border-white/20 rounded-sm hover:border-2 hover:border-white/50 flex items-center justify-center",
    div1: "relative z-2 flex flex-col sm:gap-2 gap-4",
    div2: "description flex flex-col sm:gap-4 gap-2",
  };

  return (
    <article id="theme_IV" className="theme themeIV bg-black text-white pb-12">
      <Container_I w="w-[100%]" h="xl:h-screen">
        <Theme_IV_i />
      </Container_I>
      <div className="flex flex-col gap-8 items-center">
        <Container_II
          flex="flex lg:flex-row flex-col gap-8 "
          w="w-[90%]"
          h1="lg:h-[40vh] h-atuo"
          h2="sm:h-[100%] h-auto"
        >
          <Theme_IV_iii style={style} />
          <Theme_IV_iv style={style} />
        </Container_II>

        <Container_II
          flex="flex lg:flex-row flex-col gap-8 "
          w="w-[90%]"
          h1="lg:h-[40vh] h-atuo"
          h2="sm:h-[100%] h-auto"
        >
          <Theme_IV_v style={style} />
          <Theme_IV_vi style={style} />
        </Container_II>

        <Container_II
          flex="flex lg:flex-row flex-col gap-8 "
          w="w-[90%]"
          h1="lg:h-[40vh] h-atuo"
          h2="sm:h-[100%] h-auto"
        >
          <Theme_IV_vii style={style} />
          <Theme_IV_viii style={style} />
        </Container_II>
      </div>
    </article>
  );
};

export default Theme_IV;
