import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../../../styles/Home.module.css";

const reg = gql`
  mutation joinUs($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        email
      }
    }
  }
`;

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

  const [joinUs, { data, loading, error }] = useMutation(reg, {
    variables: {
      username: username,
      email: email,
      password: password
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      return alert("please fill in all fields");
    }
    joinUs(username, password, email);

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
      <div className="w-[50px] h-40 pt-5 ml-6">
        <Image
          src="/logo.svg"
          layout="responsive"
          width={5}
          height={5}
          opacity={100}
        />
      </div>
      <div className="">
        {/* <div className="max-w-[90vw]">
          <h3 className="text-4xl font-semibold text-center ">Join Us</h3>
          <div className={`${styles.header} ${"text-center w-[85vw]"}`}></div>
        </div> */}

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
          If you believe in our mission, you can join us as a tourist and also
          as an Investor{" "}
        </p>
      </div>

      <div className="max-w-md md:max-w-3xl lg:max-w-full ml-[5vh] mt-8 flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-4 lg:mx-12 xl:mx-auto border-gray border-2"
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
            <label className="text-lg md:text-xl">Password</label>
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

          {/* <div>
            <label className="text-lg md:text-xl">Password</label>
            <input
              type="text"
              ref={passwordInputRef}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div> */}
          {/* <div className="flex items-center mt-4">
            <div>
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-lg">Tourist</span>
            </div>
            <div className="ml-5">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-xl">Investor</span>
            </div>
          </div> */}

          <div className="mt-5 ml-[8vh]">
            <button className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold px-6 md:text-xl rounded-sm mt-8 mb-3 py-1">
              {loading ? "Sending" : "Join Us"}
            </button>
          </div>
        </form>

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
      <>
        {data && (
          <div>
            <h1>Token: {data.register?.jwt}</h1>
            <span>UserID: {data.register.user?.id} </span>
            <span>UserEmail: {data.register.user?.email} </span>
          </div>
        )}
      </>
    </div>
  );
};

export default JoinUs;
