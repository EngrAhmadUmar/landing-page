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
      <div className="fixed h-[100vh] w-[100vw] -z-1 overflow-hidden opacity-80">
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={80}
          alt="hero"
        />
      </div>
      <div className="">
        <h3>GGV</h3>
        <h3>Your gateway to environmental tourism</h3>
        <Link href="#">
          <button>Apply for a Visa</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
