import React from "react";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { gql, ApolloClient, InMemoryCache } from '@apollo/client'


const AreasOfConservation = ({areas}) => {
  // const { loading, error, data } = useQuery(InvestmentAreas)
  // if (loading) return <p>Loading...</p>
  // if (error) {
  //   console.log(error)
  //   return <p>Couldn't fetch</p>
  // }

  // console.log(data)
  // const areas = data.conservationAreas.data
  console.log(areas)

  return(
    <div className="font-syne text-white">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="A little bit about Us" />
      </Head>
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className={`${styles.headings}  ${"text-center text-4xl font-semibold"}`}>Areas of Conservation</h3>
          {/* <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div> */}
        </div>

        <p className="text-center mt-8 px-10 leading-loose  tracking-[.01em] text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
        At GGV we aim to conserve the environment via sustainable tourism. With every fee that you pay on the visa,
        it is directed to preserve the following areas.
        </p>
      </div>

      <div className="w-full flex flex-col justify-content items-center">
        <div className="my-10 w-11/12 gap-12 flex-wrap flex justify-center items-center">
          {areas.map(area => (
            <div key={area.id} className="w-96 md:w-[23rem] lg:w-[25rem]  p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            
                <div className="p-2">
                  <Image src="/an1.svg" alt="" width={500} height={300}></Image>
                  <h2 className="font-bold my-4 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]">{area['attributes'].title}</h2>
                  <p className=" text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
                    {area['attributes'].short_description.substring(0,200)}
                  </p>
                </div>
              

            </div>
          ))}
        </div>

        <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3 py-1">
          <Link href="#joinUs">
            <a className="px-20 text-lg md:text-xl lg:text-2xl">Apply for the Visa</a>
          </Link>
        </button>
      </div>
    </div>
  )
};

// export async function getServerSideProps() {
//   const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache()
//   })

//   const { data } = await client.query({
//     query: gql`
//        query GetInvestmentAreas{
//         conservationAreas{
//           data{
//             id
//             attributes{
//               title,
//               short_description
//             }
//           }
//         }
//       } 
//     `
//   })

//   console.log('data',data)
//   return{
//     props: {
//       areas: data.conservationAreas.data
//     }
//   }
// }

export default AreasOfConservation;
