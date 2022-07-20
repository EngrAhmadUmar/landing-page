import React from "react";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  About,
  AreasOfConservation,
<<<<<<< HEAD
  Map,
  Footer
} from "../src/Components/MainPageComponents";

export default function main({ areas }) {
=======
  Footer
} from "../src/Components/MainPageComponents";

export default function main() {
>>>>>>> 126c32a (Fixed styling on the homepage, and /register)
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
<<<<<<< HEAD
        < AreasOfConservation />   
        <Map />     
=======
<<<<<<<< HEAD:pages/main.js
        <AreasOfConservation />        
========
        <AreasOfConservation />
>>>>>>>> 126c32a (Fixed styling on the homepage, and /register):.history/pages/index_20220712090526.js
>>>>>>> 126c32a (Fixed styling on the homepage, and /register)
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
<<<<<<< HEAD
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
=======
>>>>>>> 126c32a (Fixed styling on the homepage, and /register)
//       }
//     `
//   });

//   console.log("data", data);
//   return {
//     props: {
<<<<<<< HEAD
//       areas: data.conservationAreas.data,
//       destinations: data.featuredDestinations.data
=======
//       areas: data.conservationAreas.data
>>>>>>> 126c32a (Fixed styling on the homepage, and /register)
//     }
//   };
// }
