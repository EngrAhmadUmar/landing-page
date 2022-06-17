import React from "react";
import { HeroSection, About, JoinUs, Partners } from "../src/Components/Index";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <About />
      <Partners />
      <JoinUs />
    </React.Fragment>
  );
}
