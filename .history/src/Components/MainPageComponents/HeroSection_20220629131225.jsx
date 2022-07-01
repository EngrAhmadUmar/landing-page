import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const HeroSection = () => {
  return (
    <div className="text-white h-[100vh] relative">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Welcome to GGV" />
      </Head>
      <div className="absolute h-[100vh] w-[100vw] -z-1 overflow-hidden">
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={80}
          alt="hero"
          style={{ opacity: 0.7 }}
        />
      </div>
      <div className="absolute ml-[3rem] mt-[30vh] ">
        <h3 className="text-xl">GGV</h3>
        <h3>Your gateway to environmental tourism</h3>
        <Link href="#">
          <button>Apply for a Visa</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
