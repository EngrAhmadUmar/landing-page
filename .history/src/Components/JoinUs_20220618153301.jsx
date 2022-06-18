import styles from "../../styles/Home.module.css";
import { useState, useRef } from "react";

const JoinUs = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredPassword("");
  };
  return (
    <div className="font-syne text-white">
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className="text-center text-4xl font-semibold">Join Us</h3>
          <div className={`${styles.header} ${"text-center w-[85vw]"}`}></div>
        </div>

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
          If you believe in our mission, you can join us as a tourist and also
          as an Investor{" "}
        </p>
      </div>

      <div className="max-w-xs md:max-w-3xl lg:max-w-full ml-[5vh] mt-8 flex items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 mb-4 border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">First Name</label>
            <input
              type="text"
              ref={firstNameInputRef}
              // value={enteredFirstName}
              // onChange={firstNameChangeHandler}
              placeholder="Enter Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="text-lg md:text-xl">Last Name</label>
            <input
              type="text"
              ref={lastNameInputRef}
              // value={enteredLastName}
              // onChange={lastNameChangeHandler}
              placeholder="Enter Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">Email</label>
            <input
              type="email"
              ref={emailInputRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // onChange={emailChangeHandler}
              placeholder="Enter Your Email"
              // value={enteredEmail}
            />
          </div>

          <div>
            <label className="text-lg md:text-xl">Password</label>
            <input
              type="text"
              ref={passwordInputRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Password"
              // value={enteredPassword}
              // onChange={passwordChangeHandler}
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
              Join Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
