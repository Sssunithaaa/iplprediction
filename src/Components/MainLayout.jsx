import React from "react";
import Headers from "../headers/header";
import Hero from "./Hero";
import CTA from "./CTA";
const MainLayout = () => {
  return (
    <div>
      <Headers />
      <Hero />
      <CTA />
    </div>
  );
};

export default MainLayout;
