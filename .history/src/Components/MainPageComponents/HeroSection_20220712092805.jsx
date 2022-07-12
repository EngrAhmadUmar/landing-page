import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Button from "../UI/Button";

const HeroSection = () => {
  return (
    <div className="text-white h-[100vh] relative bg-[#000107]">
      <div
        className={`${"absolute h-[100vh] w-[100vw] -z-1 overflow-x-hidden bg-[rgba(0,0,0,0.1)] md:overflow-x-hidden"}`}
      >
        <div className="flex pt-5 justify-between">
          <div className="w-[50px] h-20 ml-6">
            <Image
              src="/logo.svg"
              layout="responsive"
              width={5}
              height={5}
              opacity={100}
            />
          </div>
          <div className="flex gap-2 md:gap-5 mr-5 mt-3">
            <Link>
              <h3 className="text-white text-2xl ">Investors</h3>
            </Link>
            <h3 className="text-white text-2xl ">Login</h3>
          </div>
        </div>
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="hero"
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            opacity: 0.6,
            overflow: "hidden"
          }}
        />
      </div>
      <div className={`${"absolute ml-[2rem] mt-[30vh] "} ${styles.heroText}`}>
        <h3 className="text-5xl md:text-[5.5rem]">GGV</h3>

        <h3 className="text-3xl md:text-5xl mt-3">
          Your gateway to environmental tourism
        </h3>

        <Button btnCaption="Apply for a Visa" href="apply" />
      </div>

      <div className="absolute bottom-2 ml-[3rem] flex gap-5 mb-2">
        <Image
          src="/visitRwanda.png"
          width={100}
          height={70}
          // style={{ marginBottom: "1.5rem" }}
          alt="visitRwanda"
        />

        <Image src="/rdb.png" width={200} height={100} alt="visitRwanda" />
      </div>
    </div>
  );
};

export default HeroSection;
