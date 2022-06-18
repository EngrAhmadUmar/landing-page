import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="font-syne bg-black text-white">
      <div className="m-5 w-[60px] h-50">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
      <div className="m-5 mt-[8vh]">
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
        <button className="bg-[#418d89]">
          <Link href="#joinUs">
            <a>Join Us</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
