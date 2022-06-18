import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="font-syne">
      <div className="m-5 w-[60px] h-50">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
      <div>
        <h3>Global Green Visa</h3>
        <p>Your gateway to environmental tourism</p>
      </div>
    </div>
  );
};

export default HeroSection;
