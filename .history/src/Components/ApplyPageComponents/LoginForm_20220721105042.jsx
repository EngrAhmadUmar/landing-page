import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormButton from "./FormButton";
import { AUTH_TOKEN } from "../constant";
import { LOGIN_MUTATION } from "../../mutations/auth";
import { toast } from "react-toastify";
import Logo from "../UI/Logo";
import LoginForm_ from "./FormComponents/LoginForm_";
import RightImage from "./FormComponents/RightImage";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: email,
      password: password
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return alert("please fill in all fields");
    }
    console.log("Logging in");
    try {
      const { data } = await login(email, password);
      toast.success("Login successful");
      if (data) {
        console.log("Completed");
        localStorage.setItem(AUTH_TOKEN, data.login.jwt);
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        console.log("user logged in");
        setEmail("");
        setPassword("");
        router.reload();
        // router.push("/apply");
      }
    } catch (error) {
      toast.error(error.message);
    }

    // here check if the user is logged in and redirect him to the /apply
  };

  return (
    <div className="font-Poppins bg-[#d1be84] bg-cover grid grid-col-1 md:grid-cols-2 md:h-[100vh]">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to GGV" />
      </Head>
      <div className="h-[100vh]  mx-6">
        <div className="w-[50px] h-40 pt-5 ml-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <h3 className="text-center text-xl mt-[3rem]">
          Welcome back, Please Login to apply for a Visa
        </h3>
        <div className="flex justify-center">
          <LoginForm_ />
        </div>
      </div>

      <RightImage />
    </div>
  );
};

export default Login;
