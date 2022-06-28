import React from "react";
import Head from "next/head";
import Image from "next/image";
import Instagram from "../../../public/instagram.png";
import Twitter from "../../../public/twitter.png";
import LinkedIn from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#000107] h-[100vh] text-center font-syne relative sm:px-10 flex flex-col justify-center items-center w-full">
      <Head>
        <title>Stay In Touch</title>
        <meta
          name="keywords"
          content="social media, stay in touch, reach out, ggv, global green visa"
        />
      </Head>
      <div className="absolute top-[20%] px-8 sm:top-28">
        <h1 className="text-[#418D89] font-semibold text-[33px] sm:text-[90px] sm:leading-[108px]">
          Stay in touch
        </h1>
        <p className="text-white leading-[43px] font-normal text-[1.5rem] sm:font-semibold sm:leading-[80px]">
          Keep in touch with us on our social media pages
        </p>
      </div>

      <div className="absolute bottom-[20%] flex justify-between w-7/12 m-auto sm:w-2/12 sm:bottom-36">
        <Image src={Instagram} alt="Instagram" width={46} height={46} />
        <Image src={Twitter} alt="Instagram" width={46} height={46} />
        <Image src={LinkedIn} alt="Instagram" width={46} height={46} />
      </div>
      <div className="text-white font-semibold absolute bottom-3 sm:bottom-5 sm:text-sm flex justify-center items-center">
        <div className="text-[18px] sm:text-[20px] border-white border-solid border-2 rounded-full w-8 h-8 flex justify-center items-center">
          C
        </div>
        <div className="text-xs sm:text-sm">All rights reserved 2022 GGV</div>
      </div>
    </div>
  );
};

export default Footer;
