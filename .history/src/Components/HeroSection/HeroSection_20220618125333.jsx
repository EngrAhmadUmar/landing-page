import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="w-[50px] h-[50px]">
        <Image src="/logo.svg" layout="fill" width={50} height={50} />
      </div>
    </div>
  );
};

export default HeroSection;
