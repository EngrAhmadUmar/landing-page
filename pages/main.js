import React from "react";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
  Footer
} from "../src/Components/MainPageComponents";

 main-featuredDestinations
export default function main({areas, destinations}) {

export default function main({ areas }) {
main
  return (
    <React.Fragment>
      <div className="font-syne">
        <HeroSection />
        <About />
        <PlanningVisa />
 main-featuredDestinations
        <FeaturedDestination destinations={destinations} />
        <AreasOfConservation areas={areas} />

        <FeaturedDestination />
        {/* <AreasOfConservation areas={areas} /> */}
 main//
        <Footer />
      </div>
    </React.Fragment>
  );
}

// export async function getServerSideProps() {
//   const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache()
//   });

 main-featuredDestinations
export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
       query GetMainPageInfo{
        conservationAreas{
          data{
            id
            attributes{
              title,
              short_description
            }
          }
        }
        futureDestinations {
          data {
            id
            attributes {
              title
              short_description
            }
          }
        }
      } 
    `
  })

  console.log('data',data)
  return{
    props: {
      areas: data.conservationAreas.data,
      destinations: data.futureDestinations.data
    }
  }
}

//   const { data } = await client.query({
//     query: gql`
//       query GetInvestmentAreas {
//         conservationAreas {
//           data {
//             id
//             attributes {
//               title
//               short_description
//             }
//           }
//         }
//       }
//     `
//   });
 main

//   console.log("data", data);
//   return {
//     props: {
//       areas: data.conservationAreas.data
//     }
//   };
// }
