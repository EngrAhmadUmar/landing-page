import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const HeroSection = () => {
  return (
    <div className="text-white h-[100vh]">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Welcome to GGV" />
      </Head>
      <div className=" ml-[1.2rem] md:ml-[5rem] lg:ml-[5rem] w-[60px] h-50 py-5">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
      <div className="ml-[1.2rem] md:ml-[5rem] lg:ml-[5rem] mt-[8vh]">
        <h3
          className={`${
            styles.header
          } ${"min-w-[300px] max-w-[500px] font-semibold"}`}
        >
          GGV
        </h3>
        <p className="text-4xl md:text-4xl lg:text-6xl font-semibold">
          Your gateway to <br></br>environmental tourism
        </p>
        <br></br>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus...
        </p>
        <button className="bg-[#000107] md:bg-[#418d89] rounded-md border-2 border-[#418d89] mt-12 mb-3 py-1 ">
          <Link href="#Apply">
            <a className="p-6 text-xl md:text-2xl">Apply for the Visa</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
