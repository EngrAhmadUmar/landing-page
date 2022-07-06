import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";

const reg = gql`
  mutation signIn($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [signIn, { data, loading, error }] = useMutation(reg, {
    variables: {
      email: email,
      password: password
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return alert("please fill in all fields");
    }
    // check if the password and email are matched then proceed with this logiv
    //which is redirect the user to the /apply

    // const router = useRouter();
    Router.push("/apply");
    signIn(password, email);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="font-syne bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 md:h-[100vh]">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to GGV" />
      </Head>
      <div>
        <div className="w-[50px] h-40 pt-5 ml-6">
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
            onSubmit={onSubmit}
            className="shadow-md rounded-lg px-7 pt-6 pb-8 mt-[5rem] lg:mx-12 xl:mx-auto border-gray border-2 font-Syne md:max-w-lg"
          >
            <div className="mb-6">
              <label className="text-lg md:text-xl">Email</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                onChange={onChangeEmail}
                placeholder="Enter Your Email"
                value={email}
              />
            </div>

            <div>
              <label className="text-lg md:text-xl">Password</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
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
              <button className="shadow focus:shadow-outline focus:outline-none text-white font-bold px-6 md:text-xl bg-[#418d89] rounded-md mt-8 mb-3 py-1">
                {loading ? "Sending" : "Login"}
              </button>
            </div>
          </form>
        </div>
        <>
          {data && (
            <div>
              <h1>Token: {data.login?.jwt}</h1>
              <span>UserID: {data.login.user?.id} </span>
              <span>UserEmail: {data.login.user?.email} </span>
            </div>
          )}
        </>
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
