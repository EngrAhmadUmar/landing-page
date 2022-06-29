import styles from "../../../styles/Home.module.css";
import { useState, useRef } from "react";
import Head from "next/head";

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
    const [enteredDestinationCountry, setEnteredDestinationCountry] = useState("");
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

        // collecting the user Info for the backend

        setEnteredFullNames("");
        setEnteredEmail("");
        setEnteredPassportNo("");
        setEnteredExpiryDate("");
        setEnteredDestinationCountry("");
        setEnteredGgvFee("");
        setEnteredConservationAreas("");
    };
  return (
    <div className="font-syne bg-cover text-white grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">

        <div className=" my-auto max-w-md md:max-w-3xl  flex justify-center">
        
        <form
          onSubmit={submitHandler}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">Full Names <span className="text-sm">(As They appear on passport)</span></label>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Choose a country</option>
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
            <label className="text-lg md:text-xl">Preferred Areas of Conservation</label>
          </div>
          <div className="flex items-center mt-4">
            <div>
              <input type="checkbox" ref={conservationAreasInputRef} value={enteredConservationAreas} onChange={conservationAreasChangeHandler} className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-lg">Mega Fauna</span>
            </div>
            <div className="ml-5">
              <input type="checkbox" ref={conservationAreasInputRef} value={enteredConservationAreas} onChange={conservationAreasChangeHandler} className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-xl">Birds </span>
            </div>
            <div className="ml-5">
              <input type="checkbox" ref={conservationAreasInputRef} value={enteredConservationAreas} onChange={conservationAreasChangeHandler} className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-lg">Mega Fauna</span>
            </div>
            <div className="ml-5">
              <input type="checkbox" ref={conservationAreasInputRef} value={enteredConservationAreas} onChange={conservationAreasChangeHandler} className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-xl">Birds</span>
            </div>
          </div>

          <div className="mt-5 ml-[8vh]">
            <button
              className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1"
              onClick={submitHandler}
            >
              Proceed to payment
            </button>
          </div>
        </form>
      </div>

      <div className=" flex-row  bg-[url('/apply_for_visa_bg.png')] bg-cover bg-no-repeat bg-center md:bg-bottom xl:bg-bottom 2xl:bg-center">
        
      </div>

      
    </div>
  );
};

export default Apply;