import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const AreasOfConservation = () => {
  // const { loading, error, data } = useQuery(InvestmentAreas)
  // if (loading) return <p>Loading...</p>
  // if (error) {
  //   console.log(error)
  //   return <p>Couldn't fetch</p>
  // }

  // console.log(areas);

  return (
    <div className="bg-[#faf9f6] text-black flex flex-col justify-center items-center ">
      <div className="">
        <div className="pt-[7rem]">
          <div className="max-w-[90vw]">
            <h3 className="text-center text-3xl lg:text-4xl text-[#418D89] font-semibold">
              Areas of Conservation
            </h3>
            {/* <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div> */}
          </div>

          <p className="mt-10 text-center px-2 text-xl leading-loose mx-2 md:text-2xl md:leading-relaxed lg:px-[10rem] ">
            At GGV we aim to conserve the environment via sustainable tourism.
            With every fee that you pay on the visa, it is directed to preserve
            the following areas.
          </p>
        </div>

        <div className="w-full flex flex-col justify-content items-center">
          <div className="grid grid-cols-1 p-2 gap-12 mt-[4rem] md:grid-cols-2 lg:grid-cols-3 ">
            {areas.map((area) => (
              <div
                key={area.id}
                className="w-full h-[35rem] md:w-[23rem] lg:w-[25rem]  p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="p-2">
                  <Image
                    src={area.image}
                    alt=""
                    width={500}
                    // layout="fill"
                    height={300}
                  ></Image>
                  <h2 className="my-4 text-2xl font-bold xl:text-4xl max-w-[18rem]">
                    {area.title}
                  </h2>
                  <p className=" text-lg lg:text-xl leading-relaxed">
                    {area.short_description.substring(0, 200)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3">
            <Link href="/register">
              <a className="px-10 text-lg md:text-xl lg:text-2xl">
                Apply for the Visa
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

let areas = [
  {
    title: "MegaFauna",
    image: "/an1.svg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Water protection",
    image: "/an2.svg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Bird Conservation",
    image: "/an3.svg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Forest Restoration",
    image: "/an4.svg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  }
];

export default AreasOfConservation;
