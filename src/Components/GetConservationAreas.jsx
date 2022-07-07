// import styles from "../../../styles/Home.module.css";
import { useState } from "react";
import Head from "next/head";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AREAS_OF_CONSERVATION } from "../Queries/conservationAreas";






const GetConservationAreas = () => {



  const { loading, error, data } = useQuery(GET_AREAS_OF_CONSERVATION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>something went wrong ...</p>;
 

  
  return (
    <div className="font-syne bg-cover text-red grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">

      <div className=" my-auto max-w-md md:max-w-3xl  flex justify-center">

        <form
          // onSubmit={onSubmit}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
        >
          <div>
            <label className="text-lg md:text-xl">Preferred Areas of Conservation</label>
          </div>
          <div className="flex items-center mt-4">


          {data.conservationAreas.data.length > 0 ? (
          <div>
            {data.conservationAreas.data.map((area, index) => (
              <div key={index}>
                <div>
                    <select name="" id=""></select>
              <input type="checkbox" name="title"      className="mr-2 leading-tight" />
              <span className="text-sm text-center md:text-lg"> {area.attributes.title}</span>
            </div>
            

               
              </div>
            ))}
          </div>
        ) : (
          <p>No areas</p>
        )}



            
          </div>

          
        </form>
      </div>

      <div className=" flex-row  bg-[url('/apply_for_visa_bg.png')] bg-cover bg-no-repeat bg-center md:bg-bottom xl:bg-bottom 2xl:bg-center">

      </div>


    </div>

 
  );

};

export default GetConservationAreas;