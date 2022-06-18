import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="border-red-500 border-4 m-3 bg-black ">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
      </div>
    </div>
  );
};

export default HeroSection;
