import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="border">
      Layout
      <Outlet />
    </main>
  );
};

export default Main;
