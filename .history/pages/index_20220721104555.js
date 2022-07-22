import React from "react";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
  Map,
  Footer
} from "../src/Components/MainPageComponents";

export default function Home() {
  return (
    <React.Fragment>
      <div className="font-Poppins">
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
