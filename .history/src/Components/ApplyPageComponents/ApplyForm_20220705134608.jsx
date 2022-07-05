import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useState, useRef } from "react";
import Image from "next/image";

const Apply = () => {
  const fullNamesInputRef = useRef();
  const emailInputRef = useRef();
  const passPortNoInputRef = useRef();
  const expiryDateInputRef = useRef();
  const destinationCountryInputRef = useRef();
  const ggvFeeInputRef = useRef();
  const conservationAreasInputRef = useRef();

  const [enteredFullNames, setEnteredFullNames] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassportNo, setEnteredPassportNo] = useState("");
  const [enteredExpiryDate, setEnteredExpiryDate] = useState("");
  const [enteredDestinationCountry, setEnteredDestinationCountry] =
    useState("");
  const [enteredGgvFee, setEnteredGgvFee] = useState("");
  const [enteredConservationAreas, setEnteredConservationAreas] = useState("");

  const fullNamesChangeHandler = (event) => {
    setEnteredFullNames(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passPortNoChangeHandler = (event) => {
    setEnteredPassportNo(event.target.value);
  };

  const expiryDateChangeHandler = (event) => {
    setEnteredExpiryDate(event.target.value);
  };

  const destinationCountryChangeHandler = (event) => {
    setEnteredDestinationCountry(event.target.value);
  };

  const ggvFeeChangeHandler = (event) => {
    setEnteredGgvFee(event.target.value);
  };

  const conservationAreasChangeHandler = (event) => {
    setEnteredConservationAreas(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // collecting the user Info for the backend, like this
    const fullNames = fullNamesInputRef.current.value;
    console.log(fullNames);

    setEnteredFullNames("");
    setEnteredEmail("");
    setEnteredPassportNo("");
    setEnteredExpiryDate("");
    setEnteredDestinationCountry("");
    setEnteredGgvFee("");
    setEnteredConservationAreas("");
  };
  return (
    <div className="font-syne bg-[#faf9f6] bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">
      <Head>
        <title>Apply for Visa</title>
        <meta name="description" content="Apply for Global Green Visa" />
      </Head>
      <div className="grid grid-column-1">
        <div className="w-[60px] h-50 pt-5 ml-4">
          <Image
            src="/logo.svg"
            layout="responsive"
            width={5}
            height={5}
            opacity={100}
          />
        </div>
        <h3
          className={`${
            styles.headings
          }  ${"text-center text-3xl md:text-4xl mb-5 font-semibold"}`}
        >
          Apply for Global Green Visa
        </h3>
        <form
          onSubmit={submitHandler}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-4 lg:mx-12 xl:mx-auto border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">
              Full Names{" "}
              <span className="text-sm">(As They appear on passport)</span>
            </label>
            <input
              type="text"
              ref={fullNamesInputRef}
              value={enteredFullNames}
              onChange={fullNamesChangeHandler}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="text-lg md:text-xl">Email</label>
            <input
              type="email"
              ref={emailInputRef}
              value={enteredEmail}
              onChange={emailChangeHandler}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="text-lg md:text-xl">Passport Number</label>
            <input
              type="text"
              ref={passPortNoInputRef}
              value={enteredPassportNo}
              onChange={passPortNoChangeHandler}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">Expiry Date</label>
            <input
              type="date"
              ref={expiryDateInputRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={expiryDateChangeHandler}
              placeholder=""
              value={enteredExpiryDate}
            />
          </div>

          <div className="mb-6">
            <label className="text-lg md:text-xl">Destination Country</label>
            <select
              ref={destinationCountryInputRef}
              onChange={destinationCountryChangeHandler}
              placeholder=""
              value={enteredDestinationCountry}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option defaultValue>Choose a country</option>
              <option value="Rwanda">Rwanda</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">GGV Fees</label>
            <input
              type="text"
              ref={ggvFeeInputRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={ggvFeeChangeHandler}
              placeholder=""
              value={enteredGgvFee}
            />
          </div>
          <div>
            <label className="text-lg md:text-xl">
              Preferred Areas of Conservation
            </label>
          </div>
          <div className="flex items-center mt-4">
            <div>
              <input
                type="checkbox"
                ref={conservationAreasInputRef}
                value={enteredConservationAreas}
                onChange={conservationAreasChangeHandler}
                className="mr-2 leading-tight"
              />
              <span className="text-sm text-center md:text-lg">Mega Fauna</span>
            </div>
            <div className="ml-5">
              <input
                type="checkbox"
                ref={conservationAreasInputRef}
                value={enteredConservationAreas}
                onChange={conservationAreasChangeHandler}
                className="mr-2 leading-tight"
              />
              <span className="text-sm text-center md:text-xl">Birds </span>
            </div>
            <div className="ml-5">
              <input
                type="checkbox"
                ref={conservationAreasInputRef}
                value={enteredConservationAreas}
                onChange={conservationAreasChangeHandler}
                className="mr-2 leading-tight"
              />
              <span className="text-sm text-center md:text-lg">Mega Fauna</span>
            </div>
            <div className="ml-5">
              <input
                type="checkbox"
                ref={conservationAreasInputRef}
                value={enteredConservationAreas}
                onChange={conservationAreasChangeHandler}
                className="mr-2 leading-tight"
              />
              <span className="text-sm text-center md:text-xl">Birds</span>
            </div>
          </div>

          <div className="mt-5 ml-[8vh]">
            <button
              className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1"
              onClick={submitHandler}
            >
              Proceed to payment
            </button>
          </div>
        </form>
      </div>

      <div className="md:flex hidden text-white bg-[url('/apply_for_visa_bg.png')]  bg-cover bg-no-repeat sm:bg-center md:bg-bottom lg:bg-bottom xl:bg-bottom 2xl:center">
        <div className="mt-[50px] md:mt-[150px] mx-4 md:mx-12">
          <h3 className="  text-4xl md:text-5xl lg:text-6xl font-semibold">
            GGV
          </h3>
          <p className="max-w-md md:max-w-xl text-2xl md:text-4xl mt-5">
            Your gateway to <br></br>environmental tourism
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Apply;
