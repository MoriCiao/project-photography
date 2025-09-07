import { useEffect } from "react";
import Header from "./components/Header";
import Theme_I from "./theme/Theme_I";
import Theme_II from "./theme/Theme_II";
import Theme_III from "./theme/Theme_III";
import Theme_IV from "./theme/Theme_IV";
import Theme_V from "./theme/Theme_V";
import GoTop from "./components/GoTop";
import FadeContainer from "./components/FadeContainer";

const App = () => {
  // Hero動畫
  useEffect(() => {
    const image = document.querySelectorAll(".hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((enter) => {
          if (enter.isIntersecting) {
            enter.target.classList.add("scale-110");
          } else {
            enter.target.classList.remove("scale-110");
          }
        });
      },
      { threshold: 0.5 }
    );

    image.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // 各theme_ _i的圖片動畫(縮放一次)
  useEffect(() => {
    const imgs = document.querySelectorAll(".theme-bg");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((enter) => {
          if (enter.isIntersecting) {
            enter.target.classList.add("scale-110");
            observer.unobserve(enter.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // 各theme_IV_i的圖片動畫
  useEffect(() => {
    const imgs = document.querySelectorAll(".theme_IV_i-bg");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((enter) => {
          if (enter.isIntersecting) {
            enter.target.classList.add("scale-120");
          } else {
            enter.target.classList.remove("scale-120");
          }
        });
      },
      { threshold: 0.75 }
    );

    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="App w-full max-w-screen  tracking-widest relative ">
      <GoTop />
      <header className="header ">
        <Header />
      </header>
      <main className="main w-[100%] bg-black">
        <FadeContainer>
          <Theme_I />
        </FadeContainer>
        <FadeContainer>
          <Theme_II />
        </FadeContainer>
        {/* Theme III */}
        <FadeContainer>
          <Theme_III />
        </FadeContainer>
        <FadeContainer>
          <Theme_IV />
        </FadeContainer>
        <FadeContainer>
          <Theme_V />
        </FadeContainer>
      </main>
    </div>
  );
};

export default App;
