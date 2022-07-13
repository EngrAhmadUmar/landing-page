import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "../../../styles/Home.module.css";
import { SIGNUP_MUTATION } from "../../mutations/auth";
import { AUTH_TOKEN } from "../constant";
import Logo from "../UI/Logo";

const JoinUs = () => {
  const [username, setUsername] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: username,
      email: email,
      password: password
    }
  });

  if (data) {
    localStorage.setItem(AUTH_TOKEN, data.register.jwt);
    console.log(data);
    console.log(data.register.user?.id);
    console.log(data.register.user?.email);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      return alert("please fill in all fields");
    }
    signup(username, password, email);

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className=" font-syne " id="joinUs">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Join Our Family" />
      </Head>
      <div className="font-syne bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">
        <div className="">
          <Logo className="mt-[5rem]" />
          <h3
            className={`${
              styles.headings
            }  ${"text-center text-3xl md:text-4xl mb-5 font-semibold"}`}
          >
            Login or Sign Up to apply the Visa
          </h3>
          <form
            onSubmit={onSubmit}
            className="pt-6 pb-8 mb-4 border-2 rounded-lg shadow-md px-7 border-gray "
          >
            <div className="mb-4">
              <label className="text-lg md:text-xl">username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => onChangeUsername(e)}
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="text-lg md:text-xl">Pass</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="text-lg md:text-xl">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                onChange={onChangeEmail}
                placeholder="Enter Your Email"
                value={email}
              />
            </div>

            <div className="mt-5 ml-[8vh]">
              <button className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1">
                {loading ? "Sending" : "Join Us"}
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
    </div>
  );
};

export default JoinUs;
