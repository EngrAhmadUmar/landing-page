import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="w-[50px] h-[50px]">
        <Image src="/logo.svg" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
