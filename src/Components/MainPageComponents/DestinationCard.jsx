import React from "react";
import Image from "next/image";

const DestinationCard = ({ image, title, short_description }) => {
  return (
    <div className="relative h-[50vh] w-full text-white bg-[#000107] rounded-lg lg:h-[45rem]">
      {image && <Image
        className="rounded opacity-100"
        layout="fill"
        objectFit="cover"
        src={image}
        style={{ opacity: 0.7 }}
      />}
      <div className="text-left absolute top-10 mx-5">
        <h3 className="text-2xl font-bold xl:text-4xl max-w-[18rem]">
          {title}
        </h3>
        <p className="mt-4 text-lg lg:text-xl leading-relaxed">
          {short_description}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;

// this is the card which accepts the destination title etc as props and will be reused later in FeaturedDestination component
