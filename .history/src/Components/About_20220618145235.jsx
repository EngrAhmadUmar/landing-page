import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <div className="font-syne bg-black text-white">
      <div className="mt-8">
        <h3 className="text-center text-4xl font-semibold">About Us</h3>
        <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div>

        <p className="text-center mt-8 px-4 leading-tight">
          Welcome to Global Green Visa, a gateway to environmental tourism.
          Working closely with national and International partners, GGV assists
          governments to deliver the environmental and climate benefits promised
          in the Paris Accords.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
