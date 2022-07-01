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

export default function main({ areas }) {
  return (
    <React.Fragment>
      <div className="bg-[#faf9f6] font-syne">
        <HeroSection />
        <About />
        <PlanningVisa />
        <FeaturedDestination />
        {/* <AreasOfConservation areas={areas} /> */}

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
//       }
//     `
//   });

//   console.log("data", data);
//   return {
//     props: {
//       areas: data.conservationAreas.data
//     }
//   };
// }
