import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const HeroSection = () => {
  return (
    <div className="text-white">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Welcome to GGV" />
      </Head>
      <div className="ml-5 w-[60px] h-50 py-5">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
      <div className="ml-5 mt-[8vh]">
        <h3
          className={`${
            styles.header
          } ${"min-w-[300px] max-w-[500px] font-semibold"}`}
        >
          Global Green Visa
        </h3>
        <p className="text-xl md:text-3xl lg:text-4xl">
          Your gateway to environmental tourism
        </p>
        <button className="bg-[#418d89] rounded-sm mt-8 mb-3 py-1">
          <Link href="#joinUs">
            <a className="p-6 text-xl">Join Us</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
