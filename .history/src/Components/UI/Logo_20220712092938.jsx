import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[50px] h-20 ml-6">
      <Image
        src="/logo.svg"
        layout="responsive"
        width={5}
        height={5}
        opacity={100}
      />
    </div>
  );
};

export default Logo;
