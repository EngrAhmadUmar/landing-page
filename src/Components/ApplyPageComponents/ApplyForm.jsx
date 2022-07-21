import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AUTH_TOKEN, USER } from "../constant";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AREAS_OF_CONSERVATION } from "../../Queries/conservationAreas";
import { APPLY_VISA } from "../../mutations/applyVisa.jsx";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import GetConservationAreas from "../GetConservationAreas";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'
import { Controller } from "react-hook-form"
import moment from "moment";
import Link from "next/link";
import  Logo  from "../UI/Logo";



import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

// const fs = require("fs");

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);



const Apply = () => {
  
  const { register, control, handleSubmit, formState: { errors } } = useForm()
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green",
      },
    };
  }
  const [enteredConservationAreas, setEnteredConservationAreas] = useState([]);
  const router = useRouter();
  const { success, canceled } = router.query;
  const [createVisaHolder, { loading }] = useMutation(APPLY_VISA);
  const { data, loading: areaLoading, error } = useQuery(GET_AREAS_OF_CONSERVATION);
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
    router.push("/")
    toast.success("Logged out succesfully")
  }
  const onSubmit = async (data) => {
    console.log(data)
    try {
      await createVisaHolder({ variables: { ...data, user: auth.id, conservation_areas: enteredConservationAreas } });
      toast.success("visa holder created succesfully");
      router.push('/api/checkout_sessions')
    } catch (error) {
      toast(error.message);
    }
  };
  const minDate = moment().format("YYYY-MM-DD");
  const maxDate = moment().add(10, "years").format("YYYY-MM-DD");
  return (
    <div className="font-syne h-screen bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 ">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to GGV" />
      </Head>
      <div className=" mx-6">
        <div className="w-[50px] h-40 pt-5 ml-6">
          <Link href="/">
          <Logo/>
          </Link>
          
        </div>
        <h3 className="text-center text-green text-3xl md:text-3xl mb-5 font-semibold ">
          Apply for visa
        </h3>
        <button onClick={handleLogout} className="mt-4 bg-green shadow-md rounded-md text-xl md:text-2xl font-semibold px-4 py-1 md:py-2">
          Logout
        </button>
      
        <div className="flex justify-center">
       
        <form method="POST"

          onSubmit={handleSubmit(onSubmit)}
          className="w-full sm:w-[80%]   pt-6 pb-8 mb-4 border-2 rounded-lg shadow-md px-7 border-gray  md:w-[80%] lg:w-[100%] xl:w-3/5 "
        >

          <div className="mb-4">
            
            <input
               {...register("passport_no", { required: "Passport number is required", pattern: { value: /^[0-9]{10}$/, message: "Must be 10 digit number" } })}
               type="text"
               placeholder="Passport number"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
            {errors.passport_no && <p className="text-red-500 text-xs">{errors.passport_no.message}</p>}
          </div>
          <div className="mb-6">

            <input min= {minDate} max= {maxDate}
              {...register("passport_expiry", {
                required: "Passport expiry date is required", validate: (value) => {
                  const now = new Date()
                  const val = new Date(value)
                  if (now.getHours() < val.getHours()) return "Must be in future"
                  const ft = new Date(now.setFullYear(now.getFullYear() + 10))
                  console.log("FT", ft)
                  if (ft.getFullYear() < val.getFullYear()) return "Expired"
                  return true
                }
              })}
              type="date"
              placeholder="Passport expiry date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
            />
            {errors.passport_expiry && <p className="text-red-500 text-xs ">{errors.passport_expiry.message}</p>}
          </div>

          <div>
           
          </div>
          <div className="flex items-center w-full ">
            <Controller
            
              rules={{ required: "required" }}
              name="conservation_areas"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <Select
                placeholder="Prefered conservation areas"

                  inputRef={ref}
                  className=" shadow appearance-none  rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={options.find(c => c.value === value)}
                  onChange={val => onChange(val.map(c => c.value))}
                  options={options}
                  theme={customTheme}
                  isSearchable
                  isMulti
                  autoFocus

                />)}
            />
            {errors.conservation_areas && <p className="text-red-500 text-xs ">{errors.conservation_areas.message}</p>}
          </div>

          <button className="shadow mt-3 bg-green focus:shadow-outline focus:outline-none hover:  text-white font-bold px-6 md:text-l bg-[#418d89] rounded-sm w-full mb-3 py-1">
                  {loading ? "Sending" : "Proceed to payment"} 
                </button>
        </form>
      </div>
      </div>
      <div className="md:flex hidden text-white bg-[url('/apply_for_visa_bg.png')]  bg-cover bg-no-repeat sm:bg-center md:bg-bottom lg:bg-bottom xl:bg-bottom 2xl:center">
         <div className="flex flex-col justify-center h-full w-4/5 items-center gap-y-2">
           <h3 className="text-4xl w-2/3 text-green font-extrabold">
             GGV
           </h3>
           <p className="text-xl w-2/3">
             Your gateway to <br></br>environmental tourism
           </p>
         </div>
        </div>
       </div>

  );

};

export default Apply;