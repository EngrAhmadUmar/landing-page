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
import RightImage from "./FormComponents/RightImage";

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
    <div className="font-Poppins bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">Passport Number</label>
            <input
              {...register("passport_no", {
                required: "Passport number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be 10 digit number"
                }
              })}
              type="text"
              // name="passport_no"

              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.passport_no && (
              <p className="text-red-500 text-xs">
                {errors.passport_no.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">Expiry Date</label>
            <input
              min={minDate}
              max={maxDate}
              {...register("passport_expiry", {
                required: "Passport expiry date is required",
                validate: (value) => {
                  const now = new Date();
                  const val = new Date(value);
                  if (now.getHours() < val.getHours())
                    return "Must be in future";
                  const ft = new Date(now.setFullYear(now.getFullYear() + 10));
                  console.log("FT", ft);
                  if (ft.getFullYear() < val.getFullYear()) return "Expired";
                  return true;
                }
              })}
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
            {errors.passport_expiry && (
              <p className="text-red-500 text-xs ">
                {errors.passport_expiry.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-lg md:text-xl">
              Preferred Areas of Conservation
            </label>
          </div>
          <div className="flex items-center mt-4">
            <Controller
              rules={{ required: "required" }}
              name="conservation_areas"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  inputRef={ref}
                  className=" px-2 py-1"
                  value={options.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.map((c) => c.value))}
                  options={options}
                  theme={customTheme}
                  isSearchable
                  isMulti
                  autoFocus
                />
              )}
            />
            {errors.conservation_areas && (
              <p className="text-red-500 text-xs ">
                {errors.conservation_areas.message}
              </p>
            )}
          </div>

          <div className="mt-5 ml-[8vh]">
            <button className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1">
              {loading ? "Sending..." : "Proceed to payment"}
            </button>
          </div>
        </form>
      </div>

      <RightImage />
    </div>
  );
};

export default Apply;