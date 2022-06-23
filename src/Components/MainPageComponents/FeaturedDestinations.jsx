import React from "react";
import DestinationCard from "./DestinationCard";

const FeaturedDestinations = () => {
  return <div className="bg-[#000107] font-syne text-white">
    <div className="mt-[1rem] text-center">
      <div className="max-w-[90vw]">
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#418D89] font-semibold">Explore featured destinations</h3>
      </div>
      <p className="mt-4 px-4 leading-loose text-[1rem] md:text-[1rem] lg:text-[1.3rem] lg:px-[4rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3">
        <DestinationCard />
      </div>
    </div>
  </div>;
};

export default FeaturedDestinations;
