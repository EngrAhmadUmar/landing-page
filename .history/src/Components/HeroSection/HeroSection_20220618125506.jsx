import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="w-[20px] h-[20px]">
        <Image src="/logo.svg" layout="responsive" width={50} height={50} />
      </div>
    </div>
  );
};

export default HeroSection;
