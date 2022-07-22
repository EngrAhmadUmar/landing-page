import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import styles from "../../../styles/Home.module.css";
import { DELETE_USER, SIGNUP_MUTATION } from "../../mutations/auth";
import { CREATE_USER_MUTATION } from "../../mutations/auth";
import { AUTH_TOKEN } from "../constant";
import { USER } from "../constant";
import { useForm } from "react-hook-form";
import Logo from "../UI/Logo";

const JoinUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [userID, setID] = useState(null);

  const [signup] = useMutation(SIGNUP_MUTATION);

  const router = useRouter();

  const [addDetails, { loading }] = useMutation(CREATE_USER_MUTATION);

  const onSubmit = async (data) => {
    try {
      const { email, password, last_name, first_name } = data;
      const { data: res } = await signup({ variables: { email, password } });

      localStorage.setItem(AUTH_TOKEN, res.register.jwt);
      localStorage.setItem(USER, JSON.stringify(res.register.user));
      setID(res.register.user.id);
      try {
        const profile = await addDetails({
          variables: {
            data: {
              first_name,
              last_name,
              user: res.register.user.id
            }
          }
        });
        toast.success("Account created succesfully");
        router.push("/apply");
      } catch (error) {
        toast.error(error.message);
        console.log("error", JSON.stringify(error, null, 2));
      }
    } catch (error) {
      if (error.message.startsWith("Email is taken")) {
        return toast.error("Email is taken");
      } else {
        console.log(JSON.stringify(error, null, 2));
        return toast.error("something went wrong");
      }
    }
  };

  return (
    <div className=" font-Poppinss" id="joinUs">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Join Our Family" />
      </Head>
      <div className="font-Poppins bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">
        <div className="mx-6">
          <div className="w-[50px] h-40 pt-5 ml-6">
            <Link href="/main">
              <Logo />
            </Link>
          </div>
          <h3
            className={`${
              styles.headings
            }  ${"text-center text-3xl md:text-4xl mb-5 font-semibold"}`}
          >
            Sign Up to apply for the Visa
          </h3>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-6 pb-8 mb-4 border-2 rounded-lg shadow-md px-7 border-gray "
            >
              <div className="mb-4">
                <label className="text-lg md:text-xl">
                  First name{" "}
                  <span className="text-sm">(As They appear on passport)</span>
                </label>
                <input
                  {...register("first_name", {
                    required: "First name is required"
                  })}
                  type="text"
                  placeholder=""
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-lg md:text-xl">
                  Last name{" "}
                  <span className="text-sm">(As They appear on passport)</span>
                </label>
                <input
                  {...register("last_name", {
                    required: "Last name is required"
                  })}
                  type="text"
                  placeholder=""
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs ">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              {/* <div className="mb-4">
              <label className="text-lg md:text-xl">username</label>
              <input
              {...register("username", {required: "Username is required"})}
                type="text"
                
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.username && <p className="text-red-500 text-xs ">{errors.username.message}</p>}
            </div> */}

              <div className="mb-6">
                <label className="text-lg md:text-xl">Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs ">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-lg md:text-xl">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required"
                  })}
                  type="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs ">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mt-5 flex justify-center">
                <button className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1">
                  {loading ? "Sending" : "Sign Up"}
                </button>
              </div>
              <div className="text-sm mt-3  cursor-pointer text-center">
                <Link href="/login">
                  <h3 className="hover:text-green mt-3">
                    Already have an Account? Log in
                  </h3>
                </Link>
              </div>
            </form>
          </div>
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
    </div>
  );
};

export default JoinUs;
