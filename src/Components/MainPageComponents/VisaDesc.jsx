import Image from "next/image";

const VisaDesc = ({ title, description }) => {
  return (
    <section className="bg-white shadow-md rounded-[10px] text-black ">
      <Image
        src="/img2.jpg"
        layout="responsive"
        alt="cl"

        width="300"
        height="250"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />

      <div className="mx-5 my-10">
        <h5 className="mt-5 text-2xl font-semibold">{title}</h5>
        <p className="text-[1.2rem] mt-4 pb-[5rem] md:pb-2 md:text-xl lg:text-[1.3rem]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default VisaDesc;

// this is the component which accepts the icon, title and the desc as props
/* Pay the Visa */
