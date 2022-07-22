import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormButton from "./FormButton";
import { AUTH_TOKEN } from "../constant";
import { USER } from "../constant";
import { LOGIN_MUTATION } from "../../mutations/auth";
import { toast } from "react-toastify";
import  Logo  from "../UI/Logo";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState:{errors}} = useForm()
  const router = useRouter()
  const [login, {loading, }] = useMutation(LOGIN_MUTATION);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault()
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (data) => {
    console.log(data)

    try {
      const {email, password} = data
      const {data: res} = await login({variables:{ email, password}});
      localStorage.setItem(AUTH_TOKEN, res.login.jwt);
      localStorage.setItem(USER, JSON.stringify(res.login.user));
      router.push("/apply")
     toast.success("Logged in successfully")
      
      
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
        <h3 className="text-center text-green text-3xl md:text-3xl mb-5 font-semibold ">
          Login
        </h3>
        <div className="flex justify-center">
        <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full   pt-6 pb-8 mb-4 border-2 rounded-lg shadow-md px-7 border-gray md:w-full lg:w-5/6 xl:w-3/5"
          >
            
            
            <div className="mb-4">
              
              <input
              {...register("email", {required: "email is required"})}
                type="text"
                
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <p className="text-red-500 text-xs ">{errors.email.message}</p>}
            </div>

           
            <div className="mb-4">
              
              <input
              {...register("password", {required: "Password is required"})}
              type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button  onClick={togglePassword}>{passwordShown ? "Hide password" : "Show Password"}</button>
              {errors.password && <p className="text-red-500 text-xs ">{errors.password.message}</p>}
            </div>
            <button className="shadow bg-green focus:shadow-outline focus:outline-none hover:  text-white font-bold px-6 md:text-l bg-[#418d89] rounded-sm w-full mb-3 py-1">
                  {loading ? "Sending" : "Login"} 
                </button>
                <Link href="/login">
               <h3 className="hover:text-green ">
                 Dont have an Account? <span className="text-green font-extrabold cursor-pointer">Register</span> 
               </h3>
             </Link>



          
          
              
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
         <div></div>
       </div>
    </div>
  );
};

export default Login;
