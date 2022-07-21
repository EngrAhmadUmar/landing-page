import React from "react";

const RightImage = () => {
  return (
    <div className="hidden md:flex bg-[url('/apply_for_visa_bg.png')]  bg-cover bg-no-repeat sm:bg-center md:bg-bottom lg:bg-bottom xl:bg-bottom 2xl:center">
      <div className="mt-[50px] md:mt-[150px] mx-4 md:mx-12">
        <h3
          className=" text-white
           text-4xl md:text-5xl lg:text-6xl font-semibold"
        >
          GGV
        </h3>
        <p className="max-w-md md:max-w-xl text-2xl md:text-4xl mt-5 text-white">
          Your gateway to <br></br>environmental tourism
        </p>
      </div>
    </div>
  );
};

export default RightImage;
