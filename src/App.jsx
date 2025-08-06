import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Theme_I from "./theme/Theme_I";
import Theme_II from "./theme/Theme_II";
import Theme_III from "./theme/Theme_III";
import Theme_IV from "./theme/Theme_IV";
import Theme_V from "./theme/Theme_V";
import GoTop from "./components/GoTop";

const App = () => {
  return (
    <div className="App w-full max-w-screen  tracking-widest relative">
      <GoTop />
      <header className="header ">
        <Header />
      </header>
      <main className="main w-[100%]">
        <Theme_I />

        <Theme_II />
        <Theme_III />
        <Theme_IV />
        {/* <Theme_V /> */}
      </main>
    </div>
  );
};

export default App;
