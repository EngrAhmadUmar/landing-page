// import styles from "../../../styles/Home.module.css";
import { useState } from "react";
import Head from "next/head";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AREAS_OF_CONSERVATION } from '../../Queries/areaOfConservationQuery';
import GetConservationAreas from "../GetConservationAreas";
import { APPLY_VISA } from "../../mutations/ApplyVisa";
import Select from 'react-select'
import makeAnimated from 'react-select/animated'


const conservationAreas = [
  {
    value: "megaFauna", label: 'mega fauna'
  },
  { value: "birdConservation", label: "bird conservation" }
]
const Apply = () => {
  function customTheme(theme){
    return{
      ...theme,
      colors:{
        ...theme.colors,
        primary25: 'orange',
        primary: 'green',
      }
    }
  }





  const [enteredFirstName, setEnteredFirstName] = useState("");
  const onChangeFirstName = (e) => {
    setEnteredFirstName(e.target.value);
  }
  const [enteredLastName, setEnteredLastName] = useState("");
  const onChangeLastName = (e) => {
    setEnteredLastName(e.target.value);
  }

  const [enteredPassportNo, setEnteredPassportNo] = useState("");
  const onChangePassportNo = (e) => {
    setEnteredPassportNo(e.target.value);
  }
  const [enteredExpiryDate, setEnteredExpiryDate] = useState("");
  const onChangeExpiryDate = (e) => {
    setEnteredExpiryDate(e.target.value);
  }
  const [enteredDestinationCountry, setEnteredDestinationCountry] = useState("");
  const onChangeDestinationCountry = (e) => {
    setEnteredDestinationCountry(e.target.value);
  }
  const [enteredGgvFee, setEnteredGgvFee] = useState("");
  const onChangeGgvFee = (e) => {
    setEnteredGgvFee(e.target.value);
  }
  const [enteredConservationAreas, setEnteredConservationAreas] = useState("");
  const onChangeConservationAreas = (e) => {
    setEnteredConservationAreas(e.target.value);
  }

  const [createVisaHolder] = useMutation(APPLY_VISA, {
    variables: {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      user: 5,

      passport_no: enteredPassportNo,
      passport_expiry: enteredExpiryDate,


    }

  }

  )


  const { loading: areaLoading, error: areaError, data: areas } = useQuery(GET_AREAS_OF_CONSERVATION);
  if (areaError) return <p>Error :{areaError?.message}</p>;
  console.log(areas)




  const onSubmit = (e) => {
    e.preventDefault();
    if (enteredFirstName === "" || enteredLastName === "" || enteredPassportNo === "" || enteredExpiryDate === "" || enteredConservationAreas) {
      return alert("please .... fill all the fields")
    }
    createVisaHolder(enteredFirstName, enteredLastName, enteredPassportNo, enteredExpiryDate, GetConservationAreas);

    // collecting the user Info for the backend

    setEnteredLastName("");
    setEnteredFirstName("");

    setEnteredPassportNo("");
    setEnteredExpiryDate("");
    setEnteredDestinationCountry("");
    setEnteredGgvFee("");
    setEnteredConservationAreas("");
  };




  return (
    <div className="font-syne bg-cover text-red grid grid-col-1 md:grid-cols-2 2xl:h-[100vh]">

      <div className=" my-auto max-w-md md:max-w-3xl  flex justify-center">

        <form
          onSubmit={onSubmit}
          className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
        >
          <div className="mb-4">
            <label className="text-lg md:text-xl">Full Names <span className="text-sm">(As They appear on passport)</span></label>
            <input
              type="text"
              name="first_name"
              value={enteredFirstName}
              onChange={(e) => onChangeFirstName(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="text-lg md:text-xl">Full Names <span className="text-sm">(As They appear on passport)</span></label>
            <input
              type="text"
              name="last_name"
              value={enteredLastName}
              onChange={(e) => onChangeLastName(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg md:text-xl">Passport Number</label>
            <input
              type="text"
              name="passport_no"
              value={enteredPassportNo}
              onChange={(e) => onChangePassportNo(e)}
              placeholder=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="text-lg md:text-xl">Expiry Date</label>
            <input
              type="date"
              name="passport_expiry"
              value={enteredExpiryDate}
              onChange={(e) => onChangeExpiryDate(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              placeholder=""

            />
          </div>


          <div>
            <label className="text-lg md:text-xl">Preferred Areas of Conservation</label>
          </div>
          <div className="flex items-center mt-4">
            <Select className=" px-2 py-1" name="conservation_areas" id="" options={conservationAreas} theme={customTheme}  isSearchable isMulti autoFocus>
              {/* <option value="" hidden>Select conservation area</option>
              {areas?.conservationAreas?.data.map((area) => (<option key={area.id} value={area.id}>{area.attributes.title}</option>))} */}

            </Select>



          </div>

          <div className="mt-5 ml-[8vh]">
            <button
              className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3 py-1"

            >
              Proceed to payment
            </button>
          </div>
        </form>
      </div>

      <div className=" flex-row  bg-[url('/apply_for_visa_bg.png')] bg-cover bg-no-repeat bg-center md:bg-bottom xl:bg-bottom 2xl:bg-center">

      </div>


    </div>

    // <div className="">

    //   <form action="">

    //   </form>
    //   <div className="mt-10">
    //     <h1>hey</h1>
    //     {data.conservationAreas.data.length > 0 ? (
    //       <div>
    //         {data.conservationAreas.data.map((area, index) => (
    //           <div key={index}>

    //             {area.attributes.title}
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <p>No areas</p>
    //     )}
    //   </div>

    // </div>
  );

};

export default Apply;