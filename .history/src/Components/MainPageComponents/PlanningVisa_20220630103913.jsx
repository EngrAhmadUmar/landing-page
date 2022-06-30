import React from "react";
import styles from "../../../styles/Home.module.css";
import VisaDesc from "./VisaDesc";
const PlanningVisa = () => {
  return (
    <div className="font-syne flex justify-center bg-[#faf9f6]">
      <div className="mt-[7rem] max-w-[90vw]">
        <div className="">
          <h3
            className={`${
              styles.headings
            }  ${"text-center text-3xl text-[#418D89] md:text-4xl  font-semibold"}`}
          >
            Planning for your Global Green Visa
          </h3>
        </div>
        <div className=" mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
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

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]"></p>
      </div>
    </div>
  );
};

export default PlanningVisa;
