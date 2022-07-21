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
  const { register, handleSubmit, formState:{errors}} = useForm()
  const [userID, setID] = useState(null)
  const [signup] = useMutation(SIGNUP_MUTATION);
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault()
    setPasswordShown(!passwordShown);
  };
  const [addDetails, {loading}] = useMutation(CREATE_USER_MUTATION);
  const onSubmit = async (data) => {
    
    try {
const {email, password, last_name, first_name} = data
      const {data: res} = await signup({variables:{ email, password}});

      localStorage.setItem(AUTH_TOKEN, res.register.jwt);
      localStorage.setItem(USER, JSON.stringify(res.register.user));
      setID(res.register.user.id)
      try {
        const profile = await addDetails({
          variables: {
            data: {
              first_name,
              last_name,
              user: res.register.user.id
            }
          }
        })
        toast.success("Account created succesfully")
        router.push("/apply")
      } catch (error) {
        
        toast.error(error.message)
        console.log('error', JSON.stringify(error, null, 2))
    }





      
    } catch (error) {
      if(error.message.startsWith("Email is taken")){
        return toast.error("Email is taken")
      
    }
    else{
      console.log(JSON.stringify(error, null, 2))
      return toast.error("something went wrong")
    }
    }
    

  };

  return (
    <div className=" font-syne " id="joinUs" >
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Join Our Family" />
      </Head>
      <div className="font-syne  h-screen bg-[#d1be84] outline md:h-screen bg-cover grid grid-col-1 md:grid-cols-2 2xl:h-screen">
        <div className="mx-6 ">
          <div className="w-[50px] h-30 pt-5 md:ml-6">
          <Link href="/main">
          <Logo/>
          </Link>
          </div>
          <h3
            className={`${
              styles.headings
            }  ${"text-center text-green text-3xl md:text-3xl mb-5 font-semibold "}`}
          >
            Sign up
          </h3>
          <div className="flex w-full justify-center ">
        
              
          <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full   pt-6 pb-8 mb-4 border-2 rounded-lg shadow-md px-7 border-gray md:w-full lg:w-5/6 xl:w-3/5"
          >
            <div className="mb-4">
              
              <input
              {...register("first_name", {required: "First name is required"})}
                type="text"
                
                placeholder="First name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name.message}</p>}
            </div>
            <div className="mb-4">
             
              <input
              {...register("last_name", {required: "Last name is required"})}
                type="text"
                
                placeholder="Last name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.last_name && <p className="text-red-500 text-xs ">{errors.last_name.message}</p>}
            </div>
            {/* <div className="mb-4">
              
              <input
              {...register("username", {required: "Username is required"})}
                type="text"
                
                placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.username && <p className="text-red-500 text-xs ">{errors.username.message}</p>}
            </div>  */}

            <div className="mb-6">
       
              <input
              {...register("email", {required: "Email is required"})}
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
                placeholder=" Email"
                
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
            <button type="submit" className="shadow bg-green focus:shadow-outline focus:outline-none hover:  text-white font-bold px-6 md:text-l bg-[#418d89] rounded-sm w-full mb-3 py-1">
                  {loading ? "Sending" : "Sign Up"} 
                </button>
                <Link href="/login">
               <h3 className="hover:text-green ">
                 Already have an Account? <span className="text-green font-extrabold cursor-pointer">Log in</span> 
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
    </div>
  );
};

export default JoinUs;

