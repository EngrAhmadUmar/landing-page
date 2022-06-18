import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="border-red-500 border-3">
        <Image src="/logo.svg" layout="responsive" width={50} height={50} />
      </div>
    </div>
  );
};

export default HeroSection;
