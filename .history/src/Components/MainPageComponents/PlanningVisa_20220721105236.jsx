import React from "react";
import styles from "../../../styles/Home.module.css";
import VisaDesc from "./VisaDesc";
const PlanningVisa = () => {
  return (
    <div className="flex justify-center bg-[#faf9f6]">
      <div className=" ">
        <div className="pt-[7rem]">
          <h3 className="text-3xl lg:text-4xl text-[#418D89] text-center font-semibold">
            Planning for your Global Green Visa
          </h3>
        </div>
        <div className=" mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 px-2 text-xl leading-loose mx-2 md:text-2xl md:leading-relaxed lg:px-[10rem]">
          <VisaDesc
            title="Choose your destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon="/icons/location_icon.png"
          />
          <VisaDesc
            title="Pay the Visa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon="/icons/pay_icon.png"
          />
          <VisaDesc
            title="Get a QR code"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon="/icons/bi_qr-code.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PlanningVisa;
