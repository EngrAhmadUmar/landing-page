import React from "react";
import Head from "next/head";
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
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Welcome to GGV" />
      </Head>
      <div className=" font-syne">
        <HeroSection />
        <About />
        <PlanningVisa />
        <FeaturedDestination />
        <AreasOfConservation />
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
