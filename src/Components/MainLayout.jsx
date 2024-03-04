import React from "react";
import Headers from "../headers/header";
import Hero from "./Hero";
import CTA from "./CTA";
const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Headers />
      {children}
    </div>
  );
};

export default MainLayout;
