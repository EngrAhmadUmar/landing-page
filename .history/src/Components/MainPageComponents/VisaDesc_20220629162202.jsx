import Image from "next/image";

const VisaDesc = ({ icon, title, description }) => {
  return (
    <section className="bg-white shadow-md rounded-[10px] text-black">
      <Image
        src="/img2.jpg"
        layout="responsive"
        width="200"
        height="100"
        style={{ borderRadius: "10px" }}
      />

      <div className="ml-3">
        <h5 className="mt-5 text-2xl font-semibold">{title}</h5>
        <p className="text-[1.2rem] mt-3 mb-4 md:text-[1rem] lg:text-[1.2rem]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default VisaDesc;

// this is the component which accepts the icon, title and the desc as props
/* Pay the Visa */
