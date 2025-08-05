import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";

const AppRoutes = () => {
  console.log("reder...");
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
