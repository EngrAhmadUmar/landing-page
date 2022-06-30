import styles from "../../../styles/Home.module.css";
import { useState, useRef } from "react";
import Image from "next/image";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // collecting the user Info for the backend

    setEnteredEmail("");
    setEnteredPassword("");
  };
  return (
    <div className="font-syne bg-cover text-white grid grid-col-1 md:grid-cols-2 md:h-[100vh]">
      <div>
        <div className="lg:w-[120px]  w-[60px] h-50 pt-5 ">
          <Image
            src="/logo.svg"
            layout="responsive"
            width={5}
            height={5}
            opacity={100}
          />
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={submitHandler}
            className=" shadow-md rounded-lg px-7 pt-6   mx-4 my-8  border-gray border-2"
          >
            <div className="mb-6">
              <label className="text-lg md:text-xl">Email</label>
              <input
                type="email"
                ref={emailInputRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={emailChangeHandler}
                placeholder="Enter Your Email"
                value={enteredEmail}
              />
            </div>

            <div>
              <label className="text-lg md:text-xl">Password</label>
              <input
                type="text"
                ref={passwordInputRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />
            </div>
            <div className="flex items-center mt-4">
              <div>
                <input type="checkbox" className="mr-2 leading-tight" />
                <span className="text-sm text-center md:text-lg">Tourist</span>
              </div>
              <div className="ml-5">
                <input type="checkbox" className="mr-2 leading-tight" />
                <span className="text-sm text-center md:text-xl">Investor</span>
              </div>
            </div>

            <div className="mt-5 ml-[8vh]">
              <button
                className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1"
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex bg-[url('/apply_for_visa_bg.png')]  bg-cover bg-no-repeat sm:bg-center md:bg-bottom lg:bg-bottom xl:bg-bottom 2xl:center">
        <div className="mt-[50px] md:mt-[150px] mx-4 md:mx-12">
          <h3 className="  text-4xl md:text-5xl lg:text-6xl font-semibold">
            GGV
          </h3>
          <p className="max-w-md md:max-w-xl text-2xl md:text-4xl mt-5">
            Your gateway to <br></br>environmental tourism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
