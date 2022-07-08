import React from "react";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
  Map,
  Footer
} from "../src/Components/MainPageComponents";

export default function main({ areas }) {
  return (
    <React.Fragment>
      <div className=" font-syne">
        <HeroSection />
        <About />
        <PlanningVisa />
        <FeaturedDestination />
        < AreasOfConservation />   
        <Map />     
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
//         featuredDestinations {
//           data {
//             id
//             attributes {
//               title
//               short_description
//               longitude
//               latitude
//             }
//           }
//         }
//       }
//     `
//   });

//   console.log("data", data);
//   return {
//     props: {
//       areas: data.conservationAreas.data,
//       destinations: data.featuredDestinations.data
//     }
//   };
// }
