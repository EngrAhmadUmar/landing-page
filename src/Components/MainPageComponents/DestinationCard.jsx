import React from "react";
import Image from 'next/image';
import destinationPic from '../../../public/sample-pic.jpeg';

const DestinationCard = () => {
  return <div className="relative h-[100vh] w-full">
    <Image
      className="rounded"
      layout='fill'
      objectFit='cover'
      src={destinationPic} />
    <div className="text-left absolute top-10 left-5">
      <h3 className="text-2xl font-bold xl:text-4xl">Explore featured destinations</h3>
      <p className="mt-4 leading-loose text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
      </p>
    </div>
  </div>;
};

export default DestinationCard;

// this is the card which accepts the destination title etc as props and will be reused later in FeaturedDestination component
