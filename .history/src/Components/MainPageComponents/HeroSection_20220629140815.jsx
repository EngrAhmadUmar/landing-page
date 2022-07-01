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
          style={{ opacity: 0.6 }}
        />
      </div>
      <div className="absolute ml-[3rem] mt-[30vh] ">
        <h3 className="text-5xl">GGV</h3>

        <h3 className="text-3xl mt-3">Your gateway to environmental tourism</h3>
        <Link href="#">
          <button className="mt-4 border-green border-2 rounded-md text-xl font-semibold px-4 py-1">
            Apply for a Visa
          </button>
        </Link>
      </div>

      <div className="absolute bottom-0 inset-x-0 ml-[3rem] flex gap-5 overflow-auto">
        <Image
          src="/visitRwanda.png"
          width={100}
          height={70}
          style={{ marginBottom: "1.5rem" }}
          alt="visitRwanda"
        />

        <Image src="/rdb.png" width={200} height={100} alt="visitRwanda" />
      </div>
    </div>
  );
};

export default HeroSection;
