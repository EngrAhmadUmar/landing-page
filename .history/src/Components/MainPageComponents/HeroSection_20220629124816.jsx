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
      <div className="fixed h-[100vh] w-[100vw] -z-1 overflow-hidden">
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={80}
          opacity={0.8}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
