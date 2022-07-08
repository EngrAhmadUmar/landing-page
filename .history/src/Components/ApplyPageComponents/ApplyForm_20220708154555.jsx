import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AUTH_TOKEN } from "../constant";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AREAS_OF_CONSERVATION } from "../../Queries/conservationAreas";
import { APPLY_VISA } from "../../mutations/applyVisa";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import GetConservationAreas from "../GetConservationAreas";

const Apply = () => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green"
      }
    };
  }
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const onChangeFirstName = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const [enteredLastName, setEnteredLastName] = useState("");
  const onChangeLastName = (e) => {
    setEnteredLastName(e.target.value);
  };

  const [enteredPassportNo, setEnteredPassportNo] = useState("");
  const onChangePassportNo = (e) => {
    setEnteredPassportNo(e.target.value);
  };
  const [enteredExpiryDate, setEnteredExpiryDate] = useState("");
  const onChangeExpiryDate = (e) => {
    setEnteredExpiryDate(e.target.value);
  };
  const [enteredDestinationCountry, setEnteredDestinationCountry] =
    useState("");
  const onChangeDestinationCountry = (e) => {
    setEnteredDestinationCountry(e.target.value);
  };
  const [enteredGgvFee, setEnteredGgvFee] = useState("");
  const onChangeGgvFee = (e) => {
    setEnteredGgvFee(e.target.value);
  };
  const [enteredConservationAreas, setEnteredConservationAreas] = useState("");
  const onChangeConservationAreas = (e) => {
    setEnteredConservationAreas(e.value);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(auth);
  }, []);

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const [createVisaHolder] = useMutation(APPLY_VISA, {
    variables: {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      user: parseInt(user?.login?.user.id),
      conservationAreas: enteredConservationAreas,
      passport_no: enteredPassportNo,
      passport_expiry: enteredExpiryDate
    }
  });

  const handleSelect = (e) => {
    // console.log(e)
    const choices = e.map((item) => parseInt(item.value));
    setEnteredConservationAreas(choices);
    console.log(choices);
  };

  const {
    loading: areaLoading,
    error: areaError,
    data
  } = useQuery(GET_AREAS_OF_CONSERVATION);

  if (areaError) return <p>Error :{areaError?.message}</p>;
  const availableOptions = data?.conservationAreas?.data.map((area) => {
    return { value: area.id, label: area.attributes.title };
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      enteredFirstName === "" ||
      enteredLastName === "" ||
      enteredPassportNo === "" ||
      enteredExpiryDate === ""
    ) {
      return alert("please .... fill all the fields");
    }
    createVisaHolder(
      enteredFirstName,
      enteredLastName,
      enteredPassportNo,
      enteredExpiryDate,
      enteredConservationAreas
    );
    console.log(
      "submitted",
      enteredFirstName,
      enteredLastName,
      enteredPassportNo,
      enteredExpiryDate,
      enteredConservationAreas
    );

    // collecting the user Info for the backend

    setEnteredLastName("");
    setEnteredFirstName("");

    setEnteredPassportNo("");
    setEnteredExpiryDate("");
    setEnteredDestinationCountry("");
    setEnteredGgvFee("");
    setEnteredConservationAreas("");
  };

  return (
    <div className="font-syne bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">
      <Head>
        <title>Apply for Visa</title>
        <meta name="description" content="Apply for Global Green Visa" />
      </Head>
      <div className="grid grid-column-1">
        <div className="w-[50px] h-40 pt-5 ml-6">
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
          onSubmit={onSubmit}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">
              First name{" "}
              <span className="text-sm">(As They appear on passport)</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={enteredFirstName}
              onChange={(e) => onChangeFirstName(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="text-lg md:text-xl">
              Last name{" "}
              <span className="text-sm">(As They appear on passport)</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={enteredLastName}
              onChange={(e) => onChangeLastName(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg md:text-xl">Passport Number</label>
            <input
              type="text"
              name="passport_no"
              value={enteredPassportNo}
              onChange={(e) => onChangePassportNo(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">Expiry Date</label>
            <input
              type="date"
              name="passport_expiry"
              value={enteredExpiryDate}
              onChange={(e) => onChangeExpiryDate(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>

          <div>
            <label className="text-lg md:text-xl">
              Preferred Areas of Conservation
            </label>
          </div>
          <div className="flex items-center mt-4">
            <Select
              className=" px-2 py-1"
              name="conservation_areas"
              id=""
              onChange={handleSelect}
              options={availableOptions}
              theme={customTheme}
              isSearchable
              isMulti
              autoFocus
            >
              {/* <option value="" hidden>Select conservation area</option>
              {areas?.conservationAreas?.data.map((area) => (<option key={area.id} value={area.id}>{area.attributes.title}</option>))} */}
            </Select>
          </div>

          <div className="mt-5 ml-[8vh]">
            <button className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1">
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
