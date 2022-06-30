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
      <Image
        src="/../heroes.jpg"
        layout="fill"
        objectFit="cover"
        quality={80}
        alt="hero"
      />
    </div>
  );
};

export default HeroSection;
