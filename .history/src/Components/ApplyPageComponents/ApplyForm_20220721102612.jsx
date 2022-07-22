import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { AUTH_TOKEN, USER } from "../constant";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AREAS_OF_CONSERVATION } from "../../Queries/conservationAreas";
import { APPLY_VISA } from "../../mutations/applyVisa.jsx";
import Select from "react-select";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import moment from "moment";

import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

// const fs = require("fs");

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const conservationAreas = [
  {
    value: "megaFauna",
    label: "mega fauna"
  },
  { value: "birdConservation", label: "bird conservation" }
];
const Apply = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
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
  const [enteredConservationAreas, setEnteredConservationAreas] = useState([]);
  // const [options, setoptions] = useState([]);
  // const [user, setUser] = useState(null);
  const router = useRouter();
  const { success, canceled } = router.query;
  const [createVisaHolder, { loading }] = useMutation(APPLY_VISA);

  const {
    data,
    loading: areaLoading,
    error
  } = useQuery(GET_AREAS_OF_CONSERVATION);
  if (areaLoading) return <p>Loading...</p>;
  if (error) return <p>something went wrong ...</p>;

  const options = data?.conservationAreas?.data.map((area) => {
    return { value: area.id, label: area.attributes.title };
  });

  const auth = JSON.parse(localStorage.getItem("user") || "{}");

  const handleSelect = (e) => {
    // console.log(e)
    const choices = e.map((item) => parseInt(item.value));
    setEnteredConservationAreas(choices);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER);
    router.push("/");
    toast.success("Logged out succesfully");
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createVisaHolder({
        variables: {
          ...data,
          user: auth.id,
          conservation_areas: enteredConservationAreas
        }
      });
      toast.success("visa holder created succesfully");
      router.push("/api/checkout_sessions");
    } catch (error) {
      toast(error.message);
    }
  };
  const minDate = moment().format("YYYY-MM-DD");
  const maxDate = moment().add(10, "years").format("YYYY-MM-DD");

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
            alt=""
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
        <button
          onClick={handleLogout}
          className="mt-4 bg-green shadow-md rounded-md text-xl md:text-2xl font-semibold px-4 py-1 md:py-2"
        >
          Logout
        </button>
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
