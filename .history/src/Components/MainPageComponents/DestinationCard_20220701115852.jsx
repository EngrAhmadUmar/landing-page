import React from "react";
import Image from "next/image";
import destinationPic from "../../../public/sample-pic.jpeg";

const DestinationCard = ({ image, title, short_description }) => {
  return (
    <div className="relative h-[50vh] w-full text-white ">
      <Image
        className="rounded opacity-100"
        layout="fill"
        objectFit="cover"
        src={image}
      />
      <div className="text-left absolute top-10 left-5">
        <h3 className="text-2xl font-bold xl:text-4xl ">{title}</h3>
        <p className="mt-4 text-lg leading-5">{short_description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;

// this is the card which accepts the destination title etc as props and will be reused later in FeaturedDestination component
