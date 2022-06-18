import Image from "next/image";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="">
      <div className="m-5 w-[60px] h-50">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
      <div>
        <h3 className="header">Global Green Visa</h3>
        <p>Your gateway to environmental tourism</p>
      </div>
    </div>
  );
};

export default HeroSection;
