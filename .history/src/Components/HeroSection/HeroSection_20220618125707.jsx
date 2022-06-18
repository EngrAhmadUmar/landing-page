import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="border-red-500 border-4">
        <Image src="/logo.svg" layout="responsive" width={50} height={50} />
      </div>
    </div>
  );
};

export default HeroSection;
