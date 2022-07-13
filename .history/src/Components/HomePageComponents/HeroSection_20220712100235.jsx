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
      <div className={styles.heros}>
        <Image
          alt="heros"
          src="/heros.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="lg:w-[120px] lg: ml-[2rem]  w-[60px] h-50 py-5 ">
          <Image
            src="/logo.svg"
            alt=""
            layout="responsive"
            width={5}
            height={5}
            opacity={100}
          />
        </div>
        <div className={styles.headerline}></div>
        <div className="ml-[5rem] mt-[8vh]">
          <h3
            className={`${
              styles.headerprops
            } ${"min-w-[300px] max-w-[500px] font-semibold"}`}
          >
            Global Green Visa
          </h3>
          <p className={styles.innerhero}>
            Your gateway to environmental tourism
          </p>
          <button className={styles.innerhero__one}>
            <Link href="#joinUs">
              <a className={styles.innerhero__one__one}>Join Us</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
