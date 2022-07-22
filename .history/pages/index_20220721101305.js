import React from "react";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
  Map,
  Footer
} from "../src/Components/MainPageComponents";

export default function Home() {
  return (
    <React.Fragment>
      <div className="font-syne">
        <HeroSection />
        <About />
        <PlanningVisa />
        <FeaturedDestination />
        <AreasOfConservation />
        <Map />
        <Footer />
      </div>
    </React.Fragment>
  );
}
