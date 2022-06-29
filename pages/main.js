import React from "react";
import { gql, ApolloClient, InMemoryCache } from '@apollo/client'
import {
  HeroSection,
  PlanningVisa,
  FeaturedDestination,
  AreasOfConservation,
  Footer
} from "../src/Components/MainPageComponents";

export default function main({areas, destinations}) {
  return (
    <React.Fragment>
      <div className="bg-[#000107] font-syne">
        <HeroSection />
        <PlanningVisa />
        <FeaturedDestination destinations={destinations} />
        <AreasOfConservation areas={areas} />
        <Footer />
      </div>
    </React.Fragment>
  );
}


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

