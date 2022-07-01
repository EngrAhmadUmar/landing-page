import React from "react";
import Head from "next/head";
import Image from "next/image";
import Instagram from "../../../public/instagram.png";
import Twitter from "../../../public/twitter.png";
import LinkedIn from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#faf9f6] text-center ">
      <div className="pt-[3rem] flex flex-col justify-center items-center">
        <Head>
          <title>Stay In Touch</title>
          <meta
            name="keywords"
            content="social media, stay in touch, reach out, ggv, global green visa"
          />
        </Head>
        <div className="px-8">
          <h1 className="text-3xl lg:text-4xl mt-[7rem] text-[#418D89] font-semibold ">
            Stay in touch
          </h1>
          <p className="text-center px-2 text-xl leading-loose md:text-2xl md:leading-relaxed ">
            Keep in touch with us on our social media pages
          </p>
        </div>

        <div className="flex justify-between gap-6 mt-[2.5rem]">
          <Image src={Instagram} alt="Instagram" width={46} height={46} />
          <Image src={Twitter} alt="Instagram" width={46} height={46} />
          <Image src={LinkedIn} alt="Instagram" width={46} height={46} />
        </div>
        <div className=" font-semibold flex justify-center items-center gap-5 mt-[3rem] mb-6">
          <div className="text-md border-solid border-2 rounded-full w-5 h-5 flex justify-center items-center border-black">
            C
          </div>
          <div className="text-xs md:text-lg">All rights reserved 2022 GGV</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
