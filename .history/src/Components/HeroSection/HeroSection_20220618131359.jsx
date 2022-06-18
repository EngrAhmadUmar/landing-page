import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-black">
      <div className="border-red-500 border-4 m-3">
        <Image src="/logo.svg" layout="responsive" width={5} height={5} />
        <h3 className="bg-blue-400">Hello World</h3>
      </div>
    </div>
  );
};

export default HeroSection;
