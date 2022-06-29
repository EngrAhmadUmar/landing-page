import React from "react";

const VisaDesc = ({ icon, title, description }) => {
  return (
    <section className=" py-4 px-4 bg-[#9c9786] rounded-[10px]  h-[13rem]">
      <div className="rounded-[50%] bg-[#005B47] w-[50px] h-[50px] my-[-45px] absolute z-10 flex justify-center align-center">
        <img src={icon} alt="" width={28} className="my-auto" />
      </div>
      <h5 className="mt-5 text-2xl font-semibold">{title}</h5>
      <p className="text-[1.2rem] mt-3 md:text-[1rem] lg:text-[1.2rem]">
        {description}
      </p>
    </section>
  );
};

export default VisaDesc;

// this is the component which accepts the icon, title and the desc as props
/* Pay the Visa */
