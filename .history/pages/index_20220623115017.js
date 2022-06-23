import React from "react";
import {
  HeroSection,
  About,
  JoinUs,
  Partners
} from "../src/Components/HomePageComponents/Index";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-[#000107] font-syne">
        <HeroSection />
        <About />
        <Partners />
        <JoinUs />
      </div>
    </React.Fragment>
  );
}
