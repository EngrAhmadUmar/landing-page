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
      <HeroSection />
      <PlanningVisa />
      <FeaturedDestination />
      <AreasOfConservation />
      <Footer />
    </React.Fragment>
  );
}
