import React from "react";
import Head from "next/head";
import Image from "next/image";
import Instagram from "../../../public/instagram.png";
import Twitter from "../../../public/twitter.png";
import LinkedIn from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#000107] text-center font-syne mt-[5rem] flex flex-col justify-center items-center">
      <Head>
        <title>Stay In Touch</title>
        <meta
          name="keywords"
          content="social media, stay in touch, reach out, ggv, global green visa"
        />
      </Head>
      <div className="top-[20%] px-8">
        <h1 className="text-[#418D89] font-semibold text-[33px] sm:text-[90px] ">
          Stay in touch
        </h1>
        <p className="text-white leading-[43px] font-normal text-[1.5rem] mt-5  ">
          Keep in touch with us on our social media pages
        </p>
      </div>

      <div className="flex justify-between gap-6 mt-[5rem]">
        <Image src={Instagram} alt="Instagram" width={46} height={46} />
        <Image src={Twitter} alt="Instagram" width={46} height={46} />
        <Image src={LinkedIn} alt="Instagram" width={46} height={46} />
      </div>
      <div className="text-white font-semibold flex justify-center items-center gap-5 mt-[4rem]">
        <div className="text-md border-white border-solid border-2 rounded-full w-5 h-5 flex justify-center items-center">
          C
        </div>
        <div className="text-xs">All rights reserved 2022 GGV</div>
      </div>
    </div>
  );
};

export default Footer;
