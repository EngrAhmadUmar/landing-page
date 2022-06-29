import React from "react";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  AreasOfConservation,
  Footer
} from "../src/Components/MainPageComponents";

export default function main() {
  return (
    <React.Fragment>
      <div className="bg-[#000107] font-syne">
        <HeroSection />
        <PlanningVisa />
        <FeaturedDestination />
        <AreasOfConservation />
        <Footer />
      </div>
    </React.Fragment>
  );
}
