import Image from "next/image";

const VisaDesc = ({ icon, title, description }) => {
  return (
    <section className="bg-[#000107] shadow-md rounded-[10px] text-black">
      <Image
        src="/img2.jpg"
        layout="responsive"
        width="300"
        height="250"
        style={{ borderRadius: "10px", backgroundCOlor: "#000107" }}
      />

      <div className="ml-3">
        <h5 className="mt-5 text-2xl font-semibold">{title}</h5>
        <p className="text-[1.2rem] mt-3 pb-[5rem] md:text-[1rem] lg:text-[1.2rem]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default VisaDesc;

// this is the component which accepts the icon, title and the desc as props
/* Pay the Visa */
