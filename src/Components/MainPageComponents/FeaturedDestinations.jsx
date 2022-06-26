import React from "react";
import DestinationCard from "./DestinationCard";

const FeaturedDestinations = () => {
  return <div className="bg-[#000107] font-syne flex justify-center text-center text-white">
    <div className="mt-[1rem] max-w-[90vw]">
      <div className="">
        <h3 className="text-3xl lg:text-4xl xl:text-6xl text-[#418D89] font-semibold">Explore featured destinations</h3>
      </div>
      <p className="mt-2 leading-loose text-[1rem] lg:text-[1.2rem] xl:text-[2rem] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
      </p>

      <div className="grid grid-cols-1 p-2 gap-6 md:grid-cols-2">
      {destinations.map(destination => {
        return <DestinationCard />
      })}
      </div>
    </div>
  </div>;
};

let destinations = [1,2,3,4,5]


export default FeaturedDestinations;