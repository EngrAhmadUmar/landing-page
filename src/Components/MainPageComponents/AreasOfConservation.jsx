import React from "react";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

const AreasOfConservation = () => {
  return(
    <div className="font-syne text-white">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="A little bit about Us" />
      </Head>
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className={`${styles.headings}  ${"text-center text-4xl font-semibold"}`}>Areas of Conservation</h3>
          {/* <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div> */}
        </div>

        <p className="text-center mt-8 px-10 leading-loose  tracking-[.01em] text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
        At GGV we aim to conserve the environment via sustainable tourism. With every fee that you pay on the visa,
        it is directed to preserve the following areas.
        </p>
      </div>
      <div className="w-full flex flex-col justify-content items-center">
        <div className="my-10 w-11/12 gap-12 flex-wrap flex justify-center items-center">
          <div className="w-96 md:w-[23rem] lg:w-[25rem]  p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="p-2">
              <Image src="/an1.svg" alt="" width={500} height={300}></Image>
              <h2 className="font-bold my-4 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">MegaFauna</h2>
              <p className=" text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptatibus saepe quaerat autem praesentium rerum expedita in 
                fugit, laboriosam reiciendis voluptas eligendi, repudiandae voluptate nihil qui ab vero et voluptates.             
              </p>
            </div>
          </div>
          <div className="w-96 md:w-[23rem] lg:w-[25rem] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="p-2">
              <Image src="/an2.svg" alt="" width={500} height={300}></Image>
              <h2 className="font-bold my-4 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] ">Bird Conservation</h2>
              <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptatibus saepe quaerat autem praesentium rerum expedita in 
                fugit, laboriosam reiciendis voluptas eligendi, repudiandae voluptate nihil qui ab vero et voluptates.                           </p>
            </div>
          </div>
        

          <div className="w-96  md:w-[23rem] lg:w-[25rem] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="p-2">
              <Image src="/an3.svg" alt="" width={500} height={300}></Image>
              <h2 className="font-bold my-4 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">Watershed protection</h2>
              <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptatibus saepe quaerat autem praesentium rerum expedita in 
                fugit, laboriosam reiciendis voluptas eligendi, repudiandae voluptate nihil qui ab vero et voluptates.                           </p>
            </div>
          </div>

          <div className="w-96 md:w-[23rem] lg:w-[25rem] p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="p-2">
              <Image src="/an4.svg" alt="" width={500} height={300}></Image>
              <h2 className="font-bold my-4 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">Forest Restoration</h2>
              <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptatibus saepe quaerat autem praesentium rerum expedita in 
                fugit, laboriosam reiciendis voluptas eligendi, repudiandae voluptate nihil qui ab vero et voluptates.                           </p>
            </div>
          </div>

        </div>

        <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3 py-1">
          <Link href="#joinUs">
            <a className="px-20 text-lg md:text-2xl lg:text-4xl">Apply for the Visa</a>
          </Link>
        </button>
      </div>
    </div>
  )
};

export default AreasOfConservation;
