import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="">
      <div className="border-4 m-3 w-[50px]">
        <Image src="/logo.svg" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
